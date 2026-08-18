
// DOM 元素
const faqList = document.getElementById('faq-list');

// 初始化渲染
document.addEventListener('DOMContentLoaded', () => {
	
		const faqData = loadData();
    renderFAQ(faqData);
});

function loadData() {
	 fetch('/config/FAq.json')
  .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json(); // 关键：将 Response 流解析为 JS 数组
    })
  .then(data => {
      renderFAQ(data);
    })
  .catch(error => {
			return [];
    });
}

// 渲染 FAQ 列表
function renderFAQ(data) {
    if (!faqList) return;
    faqList.innerHTML = '';
		
		 if (!Array.isArray(data)) {
    return;
  }

    if (data.length === 0) {
        faqList.innerHTML = `
            <div class="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300 shadow-sm">
                <div class="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="far fa-folder-open text-3xl text-slate-300"></i>
                </div>
                <p class="text-slate-500 mt-1">请尝试直接联系人工客服</p>
            </div>
        `;
        return;
    }
    data.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `faq-item bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-indigo-300 hover:shadow-md ${index === 0 ? 'active' : ''}`;
        div.innerHTML = `
            <button class="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none group" onclick="toggleFAQ(this)">
                <div class="flex items-center gap-4">
                    <span class="w-8 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-sm font-bold group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">${item.id}</span>
                    <span class="font-semibold text-slate-800 group-hover:text-indigo-700 transition-colors text-lg">${item.question}</span>
                </div>
                <i class="fas fa-chevron-down text-slate-400 rotate-icon transition-transform duration-300"></i>
            </button>
            <div class="faq-answer px-6 pb-4 bg-slate-50/50">
                <div class="text-slate-600 leading-relaxed text-base border-t border-slate-100 pt-3 pl-12">
                    ${item.answer}
                </div>
            </div>
        `;
        faqList.appendChild(div);
    });
}

// 切换 FAQ 展开/收起 (手风琴效果)
window.toggleFAQ = function(btn) {
    const item = btn.parentElement;
    const isActive = item.classList.contains('active');
    
    // 关闭其他所有项
    document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
    
    if (!isActive) {
        item.classList.add('active');
    }
};

function loadMeiQiaScript() {
    // 检查是否已加载，避免重复加载
    if (window._MEIQIA && window._MEIQIA.loaded) {
        window._MEIQIA('show');
        return;
    }
    
    (function(a, b, c, d, e, j, s) {
        // 创建全局函数
        a[d] = a[d] || function() {
            (a[d].a = a[d].a || []).push(arguments);
        };
        
        // 创建script元素
        j = b.createElement(c);
        
        // 获取第一个script标签 - 添加安全检查
        var scripts = b.getElementsByTagName(c);
        s = scripts.length > 0 ? scripts : null;
        
        // 如果找不到script标签，则插入到head或body
        if (!s) {
            s = b.head || b.getElementsByTagName('head') || b.body;
        }
        
        j.async = true;
        j.charset = 'UTF-8';
        j.src = 'https://visitor-static.meiqia.com/fe-widget-visitor/loader.js';
        
        // 添加错误处理
        j.onerror = function() {
            console.error('美洽脚本加载失败');
            // 可以在这里添加重试逻辑或备用方案
        };
        
        // 确保s有parentNode
        if (s && s.parentNode) {
            s.parentNode.insertBefore(j, s);
        } else if (b.body) {
            // 如果无法插入到script前，则插入到body末尾
            b.body.appendChild(j);
        } else {
            // 最后尝试插入到head
            (b.head || b.getElementsByTagName('head')).appendChild(j);
        }
    })(window, document, 'script', '_MEIQIA');
    
    // 设置企业ID
    _MEIQIA('entId', '9a3c1b506ebe0fe83514e8137e8c73ad');
}


// 绑定到按钮点击事件
document.addEventListener('DOMContentLoaded', function() {
    const serviceBtn = document.getElementById('online-service-btn');
    if (serviceBtn) {
        serviceBtn.addEventListener('click', loadMeiQiaScript);
    }
});


//------------------工单提交----------------------------

/**
 * 工单提交系统前端逻辑
 * 负责模态框开关、表单验证、文件上传预览及模拟提交
 */

document.addEventListener('DOMContentLoaded', () => {
    // DOM 元素
    const openBtn = document.getElementById('open-ticket-modal-btn');
    const modal = document.getElementById('ticketModal');
    const closeBtns = document.querySelectorAll('[onclick="closeModal()"]');
    const form = document.getElementById('ticketForm');
    const submitBtn = document.getElementById('submitBtn');
    const fileInput = document.getElementById('file-upload');
    const fileList = document.getElementById('fileList');
    const dropZone = document.getElementById('dropZone');
    const messageInput = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    const toast = document.getElementById('toast');

    let uploadedFiles = [];
    // 允许的文档扩展名
    const allowedExtensions = ['doc', 'docx', 'pdf', 'txt', 'rtf', 'odt'];

    // 1. 模态框控制
    openBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // 防止背景滚动
    });

    window.closeModal = function() {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
         //可选：重置表单
         form.reset();
         uploadedFiles = [];
         renderFileList();
    };

    // ESC 键关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // 2. 字符计数
    messageInput.addEventListener('input', function() {
        const len = this.value.length;
        charCount.textContent = len;
        if (len > 500) {
            charCount.classList.add('text-red-500');
            this.value = this.value.substring(0, 500);
        } else {
            charCount.classList.remove('text-red-500');
        }
    });

    // 3. 文件上传处理
    fileInput.addEventListener('change', handleFiles);
    
    // 拖拽事件
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('border-indigo-500', 'bg-indigo-50');
    });
    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('border-indigo-500', 'bg-indigo-50');
    });
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('border-indigo-500', 'bg-indigo-50');
        processFiles(e.dataTransfer.files);
    });

    function handleFiles(e) {
        processFiles(e.target.files);
    }

    function processFiles(files) {
			 for (const file of files) {
					// 1. 大小验证 (5MB)
					if (file.size > 5 * 1024 * 1024) {
							alert(`文件 ${file.name} 超过 5MB 限制`);
							continue;
					}
					console.log('file.size:', file.size);
					console.log('file.size:', file.name);

					// 2. 格式验证
					const fileName = file.name;
					const fileExt = fileName.split('.').pop().toLowerCase();
					
					if (!allowedExtensions.includes(fileExt)) {
							alert(`不支持的文件格式: ${file.name}。请上传 DOC, PDF, TXT 等文档格式。`);
							continue;
							 }
					console.log('文件格式正常');
					// 3. 重复检查
					if (!uploadedFiles.some(f => f.name === file.name && f.size === file.size)) {
							uploadedFiles.push(file);
					}
			};
		renderFileList();
    }

    function renderFileList() {
        fileList.innerHTML = '';
        if (uploadedFiles.length > 0) {
            fileList.classList.remove('hidden');
            uploadedFiles.forEach((file, index) => {
                const li = document.createElement('li');
                li.className = 'flex items-center justify-between bg-gray-50 p-2 rounded border border-gray-200';
                li.innerHTML = `
                    <span class="truncate max-w-[200px]">${file.name}</span>
                    <button type="button" onclick="removeFile(${index})" class="text-red-400 hover:text-red-600">
                        <i class="fas fa-times"></i>
                    </button>
                `;
                fileList.appendChild(li);
            });
        } else {
            fileList.classList.add('hidden');
        }
    }

    window.removeFile = function(index) {
        uploadedFiles.splice(index, 1);
        renderFileList();
    };

    // 4. 表单提交
    submitBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        
        // 简单验证
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
				
			const formData = new FormData(form);
			
			  // 假设后端只接收单文件，取第一个；如果是多文件，需改用 upload.array()
		

        // 加载状态
        const originalText = submitBtn.innerText;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> 提交中...';
			try {
						const res = await fetch('https://dataupload.personyzh.cn/api/support/submitTicket', {
								method: 'POST',
								body: formData // 浏览器自动设置 multipart/form-data
						});
						
						if (!res.ok) throw new Error('Submit failed');
						 // 关闭模态框并显示 Toast
            closeModal();
						alert('工单提交成功');
						uploadedFiles = [];
            fileInput.value = '';
						form.reset();
            showToast();
							
					} catch (err) {
							console.error(err);
							alert('提交出错');
					} finally {
							submitBtn.disabled = false;
							submitBtn.innerText = originalText;
					}
			});

    function showToast() {
        toast.classList.remove('translate-y-20', 'opacity-0');
        setTimeout(() => {
            toast.classList.add('translate-y-20', 'opacity-0');
        }, 3000);
    }
});
