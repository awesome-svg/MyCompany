
// 模拟新闻数据
const newsData = [
    {
        id: 1,
        title: "Team 完成 B 轮融资，估值突破 10 亿美元",
        summary: "本轮融资由顶级风投机构领投，资金将主要用于核心技术研发与全球市场拓展。",
        category: "company",
        date: "2026-06-15",
        image: "https://picsum.photos/400/250?random=10",
        tags: ["融资", "里程碑"]
    },
    {
        id: 2,
        title: "2026 全球人工智能峰会：CEO 发表主题演讲",
        summary: "探讨 AI 伦理与未来发展趋势，发布全新开源框架 TeamAI-Core。",
        category: "activity",
        date: "2026-06-10",
        image: "https://picsum.photos/400/250?random=11",
        tags: ["峰会", "AI"]
    },
    {
        id: 3,
        title: "行业报告：云计算市场下半年增长预测",
        summary: "根据最新数据分析，混合云架构将成为企业数字化转型的首选方案。",
        category: "industry",
        date: "2026-06-05",
        image: "https://picsum.photos/400/250?random=12",
        tags: ["报告", "云计算"]
    },
    {
        id: 4,
        title: "新产品发布：Team Cloud 3.0 正式上线",
        summary: "性能提升 50%，新增智能运维模块，为用户带来更极致的云端体验。",
        category: "company",
        date: "2026-05-28",
        image: "https://picsum.photos/400/250?random=13",
        tags: ["产品", "更新"]
    },
    {
        id: 5,
        title: "社区开发者大会即将开幕",
        summary: "汇聚全球顶尖开发者，为期三天的技术盛宴，期待您的参与。",
        category: "activity",
        date: "2026-05-20",
        image: "https://picsum.photos/400/250?random=14",
        tags: ["社区", "活动"]
    },
    {
        id: 6,
        title: "网络安全新规解读：企业如何应对？",
        summary: "深度解析最新数据安全法规，提供合规性建设最佳实践指南。",
        category: "industry",
        date: "2026-05-15",
        image: "https://picsum.photos/400/250?random=15",
        tags: ["安全", "合规"]
    }
];

// DOM 元素
const newsGrid = document.getElementById('news-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search-input');
const loadMoreBtn = document.getElementById('load-more-btn');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

let currentCategory = 'all';
let searchQuery = '';

// 初始化渲染
document.addEventListener('DOMContentLoaded', () => {
    renderNews(newsData);
});

// 渲染新闻卡片函数
function renderNews(data) {
    if (!newsGrid) return;
    newsGrid.innerHTML = '';
    
    if (data.length === 0) {
        newsGrid.innerHTML = `
            <div class="col-span-full text-center py-12">
                <i class="far fa-folder-open text-4xl text-slate-300 mb-4"></i>
                <p class="text-slate-500">暂无相关新闻</p>
            </div>
        `;
        return;
    }

    data.forEach((news, index) => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-slate-100 flex flex-col fade-in';
        card.style.animationDelay = `${index * 0.1}s`;
        
        // 分类标签颜色映射
        const tagColors = {
            company: 'bg-blue-100 text-blue-700',
            industry: 'bg-green-100 text-green-700',
            activity: 'bg-purple-100 text-purple-700'
        };
        const categoryNames = {
            company: '企业新闻',
            industry: '行业动态',
            activity: '活动公告'
        };

        card.innerHTML = `
            <div class="h-48 overflow-hidden relative group">
                <img src="${news.image}" alt="${news.title}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500">
                <span class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${tagColors[news.category]}">
                    ${categoryNames[news.category]}
                </span>
            </div>
            <div class="p-6 flex-1 flex flex-col">
                <div class="flex items-center text-xs text-slate-400 mb-3 space-x-2">
                    <i class="far fa-calendar-alt"></i>
                    <span>${news.date}</span>
                </div>
                <h3 class="text-lg font-bold text-slate-900 mb-2 line-clamp-2 hover:text-indigo-600 transition-colors cursor-pointer">
                    ${news.title}
                </h3>
                <p class="text-slate-500 text-sm line-clamp-3 mb-4 flex-1">
                    ${news.summary}
                </p>
                <div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <div class="flex space-x-2">
                        ${news.tags.map(tag => `<span class="text-xs text-slate-400 bg-slate-50 px-2 py-1 rounded">#${tag}</span>`).join('')}
                    </div>
                    <a href="#" class="text-indigo-600 text-sm font-medium hover:underline">阅读更多</a>
                </div>
            </div>
        `;
        newsGrid.appendChild(card);
    });
}

// 筛选逻辑
function filterNews() {
    let filtered = newsData;
    
    // 分类筛选
    if (currentCategory !== 'all') {
        filtered = filtered.filter(item => item.category === currentCategory);
    }
    
    // 搜索筛选
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.summary.toLowerCase().includes(query)
        );
    }
    
    renderNews(filtered);
}

// 事件监听：分类按钮
if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除所有激活状态
            filterBtns.forEach(b => {
                b.classList.remove('bg-indigo-600', 'text-white');
                b.classList.add('bg-white', 'text-slate-600');
            });
            // 添加当前激活状态
            btn.classList.remove('bg-white', 'text-slate-600');
            btn.classList.add('bg-indigo-600', 'text-white');
            
            currentCategory = btn.dataset.category;
            filterNews();
        });
    });
}

// 事件监听：搜索输入
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        filterNews();
    });
}

// 事件监听：加载更多（模拟）
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> 加载中...';
        setTimeout(() => {
            loadMoreBtn.innerHTML = '没有更多了';
            loadMoreBtn.disabled = true;
            loadMoreBtn.classList.add('opacity-50', 'cursor-not-allowed');
        }, 1000);
    });
}

// 移动端菜单切换
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}
