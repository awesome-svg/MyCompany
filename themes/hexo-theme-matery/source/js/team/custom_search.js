
 // API Configuration
const API_URL = 'https://dataupload.personyzh.cn/api/support/qAqSearch'; 
let abortController = null;

// 应用状态管理
const state = {
    query: '',
    results: [],
    viewMode: 'list', // 'list' or 'grid'
    filterCategory: 'all',
    sortOrder: 'relevance',
    searchHistory: JSON.parse(localStorage.getItem('searchHistory')) || []
};

// DOM 元素引用
const elements = {
    globalSearch: document.getElementById('global-search'),
    resultsContainer: document.getElementById('results-container'),
    resultCount: document.getElementById('result-count'),
    searchTime: document.getElementById('search-time'),
    categoryFilter: document.getElementById('category-filter'),
    sortOrder: document.getElementById('sort-order'),
    searchTags: document.querySelectorAll('.search-tag'),
    btnListView: document.getElementById('btn-list-view'),
    btnGridView: document.getElementById('btn-grid-view')
};

// 初始化
function init() {
    bindEvents();
    renderInitialView();
}

// 绑定事件监听器
function bindEvents() {
    // 搜索输入防抖
    let debounceTimer = null;
    elements.globalSearch.addEventListener('input', (e) => {
        if (debounceTimer) clearTimeout(debounceTimer);
        /*debounceTimer = setTimeout(() => {
            handleSearch(e.target.value);
        }, 300);*/
    });

    // 键盘快捷键
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            elements.globalSearch.value = '';
            handleSearch('');
            elements.globalSearch.blur();
        }
				if (e.key === 'Enter') {
						if (debounceTimer) clearTimeout(debounceTimer);
						handleSearch(e.target.value);
				}
        if (e.key === '/' && document.activeElement !== elements.globalSearch) {
            e.preventDefault();
            elements.globalSearch.focus();
        }
    });

    // 热门标签点击
    elements.searchTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const query = tag.getAttribute('data-query');
            elements.globalSearch.value = query;
            handleSearch(query);
        });
    });

    // 过滤器变化
    elements.categoryFilter.addEventListener('change', (e) => {
        state.filterCategory = e.target.value;
        performFilterAndSort();
    });

    elements.sortOrder.addEventListener('change', (e) => {
        state.sortOrder = e.target.value;
        performFilterAndSort();
    });

    // 视图切换
    window.toggleView = (mode) => {
        state.viewMode = mode;
        updateViewButtons();
        renderResults();
    };
}

// 处理搜索逻辑
async function handleSearch(query) {
    state.query = query.trim();
    const startTime = performance.now();

    if (!state.query) {
        state.results = [];
        renderInitialView();
        return;
    }
		elements.globalSearch.value = query;
		// 1. 检查 URL 是否在缓存中？
        // 2. 如果在，且未过期（根据 Cache-Control max-age） -> 直接返回缓存数据，不发起网络请求。
        // 3. 如果不在或已过期 -> 发起网络请求。
		// Abort previous request if exists
		if (abortController) {
				abortController.abort();
		}
		abortController = new AbortController();
		showLoading();		
		try {
				const params = new URLSearchParams({ q: query });
				//当获取到查询的关键字的所有数据后在进行分类
				/*if (category !== 'all') {
						params.append('category', category);
				}*/

				const response = await fetch(`${API_URL}?${params.toString()}`, {
						signal: abortController.signal
				});

				if (!response.ok) throw new Error('Network response was not ok');
				
				const result = await response.json();
				const data = result.data;
				
				// 2. 根据后端返回的 code 进行业务逻辑判断
				if (result.code === 200) {
						// 成功：处理数据
						console.log('搜索成功:', result.data);
						
						state.results = result.data;
						 // 保存搜索历史
						saveSearchHistory(state.query);

						const endTime = performance.now();
						const duration = (endTime - startTime).toFixed(2);

						// 更新UI
						elements.resultCount.textContent = `找到 ${state.results.length} 个结果`;
						elements.searchTime.textContent = `耗时 ${duration}ms`;
						
						performFilterAndSort();
						return result.data; 
				} else if (result.code === 202) {
						// 未找到：提示用户
						console.warn('未找到匹配的问答信息');
						showError("未找到匹配的问答信息");
						return []; 
				} else {
						// 其他错误：如 400, 500 等
						throw new Error(result.msg || '请求失败');
				}
		} catch (error) {
				if (error.name === 'AbortError') {
						console.log('Request aborted');
						return;
				}
				console.error('Search error:', error);
				showError("无法连接到搜索服务，请检查网络状态。");
		}
}

function showLoading() {
		elements.resultsContainer.innerHTML = `
				<div class="flex justify-center py-12 fade-in">
						<div class="animate-spin rounded-full h-10 w-10 border-4 border-indigo-100 border-t-indigo-600"></div>
				</div>
		`;
}

function showError(msg) {
		elements.resultsContainer.innerHTML = `
				<div class="text-center py-12 text-red-500 fade-in">
						<i class="fas fa-exclamation-triangle text-3xl mb-3"></i>
						<p>${msg}</p>
				</div>
		`;
}

// 执行前端过滤和排序（在搜索结果基础上）
function performFilterAndSort() {
    let filtered = [...state.results];

    // 分类过滤
    if (state.filterCategory !== 'all') {
        filtered = filtered.filter(item => item.category === state.filterCategory);
    }

    // 排序
    if (state.sortOrder === 'date') {
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (state.sortOrder === 'views') {
        filtered.sort((a, b) => b.views - a.views);
    }
    // relevance 已经在 handleSearch 中排好序

    state.results = filtered;
    renderResults();
}

// 渲染结果列表
function renderResults() {
    elements.resultsContainer.innerHTML = '';
    
    if (state.results.length === 0) {
        elements.resultsContainer.innerHTML = `
            <div class="text-center py-12 bg-white rounded-xl shadow-sm border border-dashed border-slate-200 col-span-full">
                <i class="fas fa-inbox text-slate-300 text-5xl mb-4"></i>
                <p class="text-slate-500">未找到匹配 "${escapeHtml(state.query)}" 的结果</p>
                <button onclick="handleSearch('')" class="mt-4 text-indigo-600 hover:text-indigo-800 text-sm font-medium">清除搜索结果</button>
            </div>
        `;
        return;
    }

    // 根据视图模式应用不同的CSS类
    if (state.viewMode === 'grid') {
        elements.resultsContainer.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300';
    } else {
        elements.resultsContainer.className = 'grid grid-cols-1 gap-6 transition-all duration-300';
    }

    state.results.forEach(item => {
        const card = createResultCard(item);
        elements.resultsContainer.appendChild(card);
    });
		elements.resultsContainer.innerHTML+= `<button onclick="handleSearch('')" class="mt-4 text-indigo-600 hover:text-indigo-800 text-sm font-medium">清除搜索</button>`;
}

// 创建结果卡片 DOM
function createResultCard(item) {
    const div = document.createElement('div');
    div.className = 'bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-slate-100 flex flex-col h-full animate-fade-in';
    
    // 高亮关键词
    const highlightedTitle = highlightText(item.title, state.query);
    const highlightedContent = highlightText(item.content.substring(0, 150) + '...', state.query);

    // 类别颜色映射
    const categoryColors = {
        faq: 'bg-blue-100 text-blue-800',
        guide: 'bg-green-100 text-green-800',
        api: 'bg-purple-100 text-purple-800'
    };
    const categoryLabels = {
        faq: '常见问题',
        guide: '操作指南',
        api: '技术文档'
    };

    div.innerHTML = `
        <div class="p-6 flex-1">
            <div class="flex justify-between items-start mb-2">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[item.category]}">
                    ${categoryLabels[item.category]}
                </span>
                <span class="text-xs text-slate-400 flex items-center">
                    <i class="far fa-eye mr-1"></i> ${item.views}
                </span>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2 line-clamp-2 hover:text-indigo-600 cursor-pointer transition-colors">
                ${highlightedTitle}
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
                ${highlightedContent}
            </p>
            <div class="flex flex-wrap gap-2 mt-auto">
                ${item.tags.map(tag => `<span class="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">#${tag}</span>`).join('')}
            </div>
        </div>
        <div class="px-6 py-3 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
            <span class="text-xs text-slate-500">更新于 ${item.date}</span>
            <button class="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center group">
                查看详情 <i class="fas fa-arrow-right ml-1 transform group-hover:translate-x-1 transition-transform"></i>
            </button>
        </div>
    `;
    return div;
}

// 渲染初始视图
function renderInitialView() {
    elements.resultCount.textContent = '找到 0 个结果';
    elements.searchTime.textContent = '耗时 0ms';
    elements.resultsContainer.className = 'grid grid-cols-1 gap-6 transition-all duration-300';
    elements.resultsContainer.innerHTML = `
        <div class="text-center py-20 bg-white rounded-xl shadow-sm border border-dashed border-slate-200 col-span-full">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50 mb-4">
                <i class="fas fa-search text-indigo-500 text-2xl"></i>
            </div>
            <h3 class="text-lg font-medium text-slate-900">开始您的搜索</h3>
            <p class="text-slate-500 mt-1">输入关键词以查找相关文章、指南和技术文档</p>
            ${state.searchHistory.length > 0 ? `
                <div class="mt-6">
                    <p class="text-sm text-slate-400 mb-2">最近搜索:</p>
                    <div class="flex flex-wrap justify-center gap-2">
                        ${state.searchHistory.slice(0, 5).map(q => `
                            <button onclick="handleSearch('${escapeHtml(q)}')" class="text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1 rounded-full transition-colors">
                                ${escapeHtml(q)}
                            </button>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}

// 辅助函数：高亮文本
function highlightText(text, query) {
    if (!query) return text;
    const keywords = query.split(/\s+/).filter(k => k.length > 0);
    let highlighted = text;
    keywords.forEach(keyword => {
        const regex = new RegExp(`(${escapeRegExp(keyword)})`, 'gi');
        highlighted = highlighted.replace(regex, '<span class="search-highlight">$1</span>');
    });
    return highlighted;
}

// 辅助函数：转义HTML
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

// 辅助函数：转义正则表达式特殊字符
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 辅助函数：保存搜索历史
function saveSearchHistory(query) {
    // 移除重复项
    state.searchHistory = state.searchHistory.filter(q => q !== query); 
    // 添加到开头
    state.searchHistory.unshift(query);
    // 限制长度
    if (state.searchHistory.length > 10) {
        state.searchHistory.pop();
    }
    localStorage.setItem('searchHistory', JSON.stringify(state.searchHistory));
}

// 辅助函数：更新视图按钮状态
function updateViewButtons() {
    if (state.viewMode === 'list') {
        elements.btnListView.classList.add('bg-indigo-50', 'text-indigo-600');
        elements.btnListView.classList.remove('text-slate-600');
        elements.btnGridView.classList.remove('bg-indigo-50', 'text-indigo-600');
        elements.btnGridView.classList.add('text-slate-600');
    } else {
        elements.btnGridView.classList.add('bg-indigo-50', 'text-indigo-600');
        elements.btnGridView.classList.remove('text-slate-600');
        elements.btnListView.classList.remove('bg-indigo-50', 'text-indigo-600');
        elements.btnListView.classList.add('text-slate-600');
    }
}

// 启动应用
document.addEventListener('DOMContentLoaded', init);
