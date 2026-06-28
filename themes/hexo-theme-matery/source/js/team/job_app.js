


let allJobs = [];
let filteredJobs = [];

// DOM 元素缓存
const elements = {
    container: document.getElementById('jobs-container'),
    countLabel: document.getElementById('job-count'),
    noResults: document.getElementById('no-results'),
    searchInput: document.getElementById('search-input'),
    filterDept: document.getElementById('filter-dept'),
    filterLoc: document.getElementById('filter-loc'),
    
    // Detail Modal Elements
    detailModal: document.getElementById('detail-modal'),
    detailPanel: document.getElementById('detail-panel'),
    modalTitle: document.getElementById('modal-title'),
    modalMeta: document.getElementById('modal-meta'),
    modalSalary: document.getElementById('modal-salary'),
    modalExp: document.getElementById('modal-exp'),
    modalResp: document.getElementById('modal-responsibilities'),
    modalReq: document.getElementById('modal-requirements'),
    modalCareer: document.getElementById('modal-career'),

    // Apply Modal Elements
    applyModal: document.getElementById('apply-modal'),
    applyPanel: document.getElementById('apply-panel'),
    applyJobTitleDisplay: document.getElementById('apply-job-title-display'),
    applyJobIdInput: document.getElementById('apply-job-id'),
    applyForm: document.getElementById('apply-form'),
    fileNameDisplay: document.getElementById('file-name'),

    // Success Modal Elements
    successModal: document.getElementById('success-modal'),
    successContent: document.getElementById('success-content')
};

document.addEventListener('DOMContentLoaded', () => {
    loadJobs();
    setupEventListeners();
});

async function loadJobs() {
    try {
        const response = await fetch('/jobs/jobs.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
         // 只加载状态为 active 的岗位
        allJobs = data.jobs.filter(job => job.status === 'active');
        renderJobs(allJobs);
        filteredJobs = [...allJobs];
        renderJobs(filteredJobs);
    } catch (error) {
        console.error('Failed to load jobs:', error);
        elements.container.innerHTML = `<div class="col-span-full text-center text-red-500">数据加载失败，使用模拟数据</div>`;
				 useMockData();
    }
}

function setupEventListeners() {
    elements.searchInput.addEventListener('input', applyFilters);
    elements.filterDept.addEventListener('change', applyFilters);
    elements.filterLoc.addEventListener('change', applyFilters);

    // 文件上传显示文件名
    const fileInput = elements.applyForm.querySelector('input[type="file"]');
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            elements.fileNameDisplay.textContent = `已选择: ${e.target.files[0].name}`;
            elements.fileNameDisplay.classList.remove('hidden');
        } else {
            elements.fileNameDisplay.classList.add('hidden');
        }
    });
}

function applyFilters() {
    const dept = elements.filterDept.value;
    const loc = elements.filterLoc.value;
    const keyword = elements.searchInput.value.toLowerCase();

    const filtered = allJobs.filter(job => {
        const matchDept = !dept || job.department === dept;
        const matchLoc = !loc || job.location.includes(loc);
        const matchKey = !keyword || 
            job.title.toLowerCase().includes(keyword) || 
            job.tags.some(tag => tag.toLowerCase().includes(keyword));
        
        return matchDept && matchLoc && matchKey;
    });

    renderJobs(filtered);
}

// 模拟数据（当JSON文件不存在时使用）
function useMockData() {
    allJobs = [
        {
      "id": "job-001",
      "title": "高级前端工程师",
      "department": "技术研发部",
      "location": "北京",
      "salary": "25K-40K",
      "experience": "3-5年",
      "type": "urgent",
      "status": "active",
      "publishDate": "2026-06-18",
      "tags": ["React", "TypeScript", "架构"],
      "responsibilities": [
        "负责核心SaaS产品的前端架构设计与性能优化",
        "主导内部组件库的建设与维护，提升研发效率"
      ],
      "requirements": [
        "精通 React/Vue 主流框架，具备3年以上大型项目实战经验",
        "深入理解浏览器原理，熟悉 Webpack/Vite 等工程化工具"
      ],
      "career": "高级工程师 -> 技术专家 -> 前端架构师"
    },
    {
      "id": "job-002",
      "title": "AI 产品经理",
      "department": "产品部",
      "location": "上海",
      "salary": "30K-50K",
      "experience": "3-5年",
      "type": "new",
      "status": "active",
      "publishDate": "2026-06-20",
      "tags": ["AIGC", "大模型", "B端"],
      "responsibilities": [
        "负责大模型应用场景的产品规划、需求分析与落地",
        "调研行业竞品与用户需求，输出高质量PRD文档"
      ],
      "requirements": [
        "2年以上AI相关产品经验，深刻理解LLM技术边界与特性",
        "具备优秀的逻辑思维与跨团队沟通协调能力"
      ],
      "career": "产品经理 -> 高级产品经理 -> 产品总监"
    }
    ];
    renderJobs(allJobs);
}


function renderJobs(jobs) {
    elements.container.innerHTML = '';
    elements.countLabel.textContent = jobs.length;

    if (jobs.length === 0) {
        elements.noResults.classList.remove('hidden');
        return;
    } else {
        elements.noResults.classList.add('hidden');
    }

    jobs.forEach((job, index) => {
        const card = document.createElement('div');
        card.className = 'bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group fade-in';
        card.style.animationDelay = `${index * 0.05}s`;
        card.onclick = () => openDetailModal(job);

        let badgeHtml = '';
        // 根据 type 字段显示急招或新发布标签
        if (job.type === 'urgent') {
            badgeHtml = `<span class="absolute top-4 right-4 bg-red-50 text-red-600 text-xs font-bold px-2 py-1 rounded border border-red-100">急招</span>`;
        } else if (job.type === 'new') {
            badgeHtml = `<span class="absolute top-4 right-4 bg-green-50 text-green-600 text-xs font-bold px-2 py-1 rounded border border-green-100">新发布</span>`;
        }

        // 格式化发布日期
        const publishDate = new Date(job.publishDate).toLocaleDateString('zh-CN');

        card.innerHTML = `
            <div class="relative mb-4">
                ${badgeHtml}
                <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">${job.title}</h3>
                <div class="flex flex-wrap gap-2">
                    ${job.tags.map(tag => `<span class="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-200">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="space-y-2 text-sm text-slate-500 mb-6">
                <p class="flex items-center"><i class="fas fa-building w-5 text-slate-400"></i> ${job.department}</p>
                <p class="flex items-center"><i class="fas fa-map-marker-alt w-5 text-slate-400"></i> ${job.location}</p>
                <p class="flex items-center"><i class="fas fa-yen-sign w-5 text-slate-400"></i> ${job.salary}</p>
                <p class="flex items-center"><i class="far fa-calendar-alt w-5 text-slate-400"></i> 发布于: ${publishDate}</p>
            </div>
            <div class="pt-4 border-t border-slate-50 flex justify-between items-center">
                <span class="text-xs text-slate-400">${job.experience}</span>
                <span class="text-indigo-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    查看详情 <i class="fas fa-chevron-right text-xs"></i>
                </span>
            </div>
        `;
        elements.container.appendChild(card);
    });
}

window.resetFilters = function() {
    elements.searchInput.value = '';
    elements.filterDept.value = '';
    elements.filterLoc.value = '';
    applyFilters();
}

// --- 详情模态框逻辑 ---

window.openDetailModal = function(job) {
    currentJobId = job.id;
    elements.modalTitle.textContent = job.title;
    elements.modalMeta.textContent = `${job.department} | ${job.location}`;
    elements.modalSalary.textContent = job.salary;
    elements.modalExp.textContent = job.experience;
    elements.modalCareer.textContent = job.career;
    
    elements.modalResp.innerHTML = job.responsibilities.map(r => `<li>${r}</li>`).join('');
    elements.modalReq.innerHTML = job.requirements.map(r => `<li>${r}</li>`).join('');

    elements.detailModal.classList.remove('hidden');
    setTimeout(() => {
        elements.detailPanel.classList.remove('translate-x-full');
    }, 10);
};

window.closeDetailModal = function() {
    elements.detailPanel.classList.add('translate-x-full');
    setTimeout(() => {
        elements.detailModal.classList.add('hidden');
    }, 300);
};

// --- 投递模态框逻辑 ---

window.openApplyModalFromDetail = function() {
    if (!currentJobId) return;
    
    // 查找当前职位信息以填充标题
    const job = allJobs.find(j => j.id === currentJobId);
    if (job) {
        elements.applyJobTitleDisplay.textContent = `正在申请：${job.title}`;
        elements.applyJobIdInput.value = job.id;
    }

    // 关闭详情模态框（可选，这里选择保留背景以便用户参考，或者先关闭详情再打开投递）
    closeDetailModal();

    // 打开投递模态框
    elements.applyModal.classList.remove('hidden');
    setTimeout(() => {
        elements.applyPanel.classList.remove('scale-95', 'opacity-0');
        elements.applyPanel.classList.add('scale-100', 'opacity-100');
    }, 10);
};

window.closeApplyModal = function() {
    elements.applyPanel.classList.remove('scale-100', 'opacity-100');
    elements.applyPanel.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        elements.applyModal.classList.add('hidden');
        elements.applyForm.reset();
        elements.fileNameDisplay.classList.add('hidden');
    }, 300);
};


window.submitApplication = function() {
    const form = elements.applyForm;
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // 模拟提交
    const submitBtn = document.querySelector('#apply-modal button[onclick="submitApplication()"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 提交中...';

    /*setTimeout(() => {
        closeApplyModal();
        showSuccessModal();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    }, 1500);
		*/
		
		// 收集表单数据，支持简历附件上传
    const formData = new FormData(form);

    //本地测试时使用的网址和端口
    /*fetch('http://localhost:4001/api/recruitment/apply', {
        method: 'POST',
        body: formData,
        // 如果不需要携带cookie可以删除credentials配置
        credentials: 'same-origin'
    })*/
		//线上部署访问
		fetch('https://resumeupload.personyzh.cn/api/recruitment/apply', {
        method: 'POST',
        body: formData,
        // 如果不需要携带cookie可以删除credentials配置
        credentials: 'same-origin'
    })
    .then(async res => {
        const result = await res.json();
        if (result.code === 200 || result.code === 0) {
            // 提交成功：关闭模态框、显示成功提示
            closeApplyModal();
            form.reset(); // 清空表单，下次打开无残留数据
            showSuccessModal();
        } else {
            // 提交失败：显示后端返回的错误信息
            alert(result.msg || '投递失败，请稍后重试');
        }
    })
    .catch(err => {
        // 网络异常处理
        alert('网络异常，请检查网络后重新尝试');
        console.error('投递错误:', err);
    })
    .finally(() => {
        // 无论成功失败，都恢复按钮初始状态
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    });
		
};

// --- 成功反馈逻辑 ---

function showSuccessModal() {
    elements.successModal.classList.remove('hidden');
    setTimeout(() => {
        elements.successContent.classList.remove('scale-95', 'opacity-0');
        elements.successContent.classList.add('scale-100', 'opacity-100');
    }, 10);
}

window.closeSuccessModal = function() {
    elements.successContent.classList.remove('scale-100', 'opacity-100');
    elements.successContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        elements.successModal.classList.add('hidden');
    }, 300);
};


