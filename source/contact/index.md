
---
title: 联系我们
layout: layout-team
---

{% raw %}
<main ">
	<div class="relative bg-indigo-800 overflow-hidden">
        <div class="absolute inset-0">
            <img class="w-full h-full object-cover opacity-20" src="https://picsum.photos/1920/600?grayscale" alt="办公环境背景图">
        </div>
        <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl fade-in">
                开启我们的合作之旅
            </h1>
            <p class="mt-6 max-w-2xl mx-auto text-xl text-indigo-100 fade-in">
                无论是业务咨询、技术支持还是战略投资，我们期待听到您的声音。
            </p>
        </div>
    </div>

    <!-- 联系方式卡片区域 -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- 商务咨询 -->
            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-slate-100">
                <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                    <i class="fas fa-briefcase text-indigo-600 text-xl"></i>
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-2">商务合作</h3>
                <p class="text-slate-500 mb-4">寻求项目合作或渠道拓展。</p>
                <a href="mailto:biz@team.com" class="text-indigo-600 font-medium hover:underline">biz@team.com</a>
            </div>

            <!-- 技术支持 -->
            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-slate-100">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <i class="fas fa-headset text-blue-600 text-xl"></i>
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-2">技术支持</h3>
                <p class="text-slate-500 mb-4">产品使用问题或技术对接。</p>
                <a href="mailto:support@team.com" class="text-blue-600 font-medium hover:underline">support@team.com</a>
            </div>

            <!-- 媒体公关 -->
            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-slate-100">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <i class="fas fa-newspaper text-purple-600 text-xl"></i>
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-2">媒体采访</h3>
                <p class="text-slate-500 mb-4">新闻发布或品牌采访需求。</p>
                <a href="mailto:pr@team.com" class="text-purple-600 font-medium hover:underline">pr@team.com</a>
            </div>
        </div>
    </div>

    <!-- 联系表单区域 -->
    <div id="contact-form-section" class="bg-white py-16">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-extrabold text-slate-900">发送消息</h2>
                <p class="mt-4 text-lg text-slate-500">填写下方表格，我们将在 24 小时内回复您。</p>
            </div>

            <form id="contactForm" class="space-y-6 bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label for="name" class="block text-sm font-medium text-slate-700">姓名</label>
                        <input type="text" name="name" id="name" required class="mt-1 block w-full px-4 py-3 rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border bg-white">
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-slate-700">邮箱</label>
                        <input type="email" name="email" id="email" required class="mt-1 block w-full px-4 py-3 rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border bg-white">
                    </div>
                </div>

                <div>
                    <label for="subject" class="block text-sm font-medium text-slate-700">主题</label>
                    <select id="subject" name="subject" class="mt-1 block w-full px-4 py-3 rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border bg-white">
                        <option>业务合作</option>
                        <option>技术咨询</option>
                        <option>其他事项</option>
                    </select>
                </div>

                <div>
                    <label for="message" class="block text-sm font-medium text-slate-700">留言内容</label>
                    <textarea id="message" name="message" rows="4" required class="mt-1 block w-full px-4 py-3 rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border bg-white"></textarea>
                </div>

                <div class="flex items-center justify-end">
                    <button type="submit" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all">
                        发送消息
                        <i class="fas fa-paper-plane ml-2"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>
		 <script>
        // 平滑滚动到表单区域
        function scrollToContact() {
            document.getElementById('contact-form-section').scrollIntoView({ behavior: 'smooth' });
        }

        // 表单提交处理
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            // 模拟发送状态
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 发送中...';
            
            setTimeout(() => {
                alert('消息已发送！我们会尽快与您联系。');
                this.reset();
                btn.disabled = false;
                btn.innerHTML = originalText;
            }, 1500);
        });
    </script>
</main>

{% endraw %}
