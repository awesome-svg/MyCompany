
// 模拟 FAQ 数据
const faqData = [
    {
        id: 1,
        category: "account",
        question: "如何修改我的账户密码？",
        answer: "您可以登录账户后，点击右上角头像进入‘个人设置’，在‘安全中心’栏目下点击‘修改密码’。系统会向您的注册邮箱发送验证码，验证通过后即可设置新密码。为了账户安全，建议定期更换密码并开启双重认证。"
    },
    {
        id: 2,
        category: "billing",
        question: "支持哪些支付方式？",
        answer: "目前我们支持支付宝、微信支付、银联信用卡以及企业对公转账。对于年度订阅用户，我们还支持开具增值税专用发票，请在支付前填写完整的开票信息。"
    },
    {
        id: 3,
        category: "product",
        question: "产品是否提供试用期？",
        answer: "是的，所有新用户注册后即可享受 14 天的全功能免费试用。试用期间无需绑定信用卡，您可以体验所有高级功能。试用期结束后，您可以选择适合的订阅方案继续使用。"
    },
    {
        id: 4,
        category: "technical",
        question: "API 调用频率限制是多少？",
        answer: "基础版用户每分钟可调用 60 次 API，专业版用户为 300 次/分钟，企业版用户可根据需求定制。如需更高并发支持，请联系我们的商务团队定制企业级方案，我们将为您提供专属的技术支持通道。"
    },
    {
        id: 5,
        category: "service",
        question: "如何申请售后服务？",
        answer: "您可以在‘支持中心’点击‘提交工单’，详细描述您遇到的问题并上传相关截图或日志文件。我们的技术工程师会在 24 小时内通过邮件与您联系。紧急问题建议直接拨打我们的400客服热线。"
    }
];

// DOM 元素
const faqList = document.getElementById('faq-list');
const searchInput = document.getElementById('global-search');
const searchTags = document.querySelectorAll('.search-tag');

// 初始化渲染
document.addEventListener('DOMContentLoaded', () => {
    renderFAQ(faqData);
    
    // 键盘快捷键 ESC 清空搜索
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchInput) {
            searchInput.value = '';
            handleSearch('');
            searchInput.blur();
        }
    });
});

// 渲染 FAQ 列表
function renderFAQ(data) {
    if (!faqList) return;
    faqList.innerHTML = '';

    if (data.length === 0) {
        faqList.innerHTML = `
            <div class="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300 shadow-sm">
                <div class="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="far fa-folder-open text-3xl text-slate-300"></i>
                </div>
                <h3 class="text-lg font-medium text-slate-900">未找到匹配的问题</h3>
                <p class="text-slate-500 mt-1">请尝试更换关键词，或直接联系人工客服</p>
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

// 搜索功能实现
function handleSearch(query) {
    const lowerQuery = query.toLowerCase().trim();
    const filtered = faqData.filter(item => 
        item.question.toLowerCase().includes(lowerQuery) || 
        item.answer.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery)
    );
    renderFAQ(filtered);
    
    // 如果有搜索结果，平滑滚动到 FAQ 区域
    if (query && filtered.length > 0) {
        const faqSection = document.getElementById('faq-section');
        if (faqSection) {
            const offset = 100; // 导航栏高度补偿
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = faqSection.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }
}

// 监听搜索输入
if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            handleSearch(e.target.value);
        }, 300); // 防抖处理
    });
}

// 监听热门标签点击
if (searchTags.length > 0) {
    searchTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const query = tag.getAttribute('data-query');
            if (searchInput) {
                searchInput.value = query;
                handleSearch(query);
                searchInput.focus();
            }
        });
    });
}
