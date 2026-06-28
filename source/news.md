
---
title: 新闻动态
layout: layout-team
tags: layout-team

---

{% raw %}
<!-- Hero 区域 -->
    <div class="relative bg-indigo-900 overflow-hidden w-full">
        <div class="absolute inset-0">
            <img class="w-full h-full object-cover opacity-20" src="https://picsum.photos/1920/600?grayscale&blur=2" alt="新闻背景图">
        </div>
        <div class="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl fade-in">
                洞察行业前沿
            </h1>
            <p class="mt-4 max-w-2xl mx-auto text-xl text-indigo-100 fade-in">
                获取最新的企业资讯、技术突破与行业动态，见证我们的每一步成长。
            </p>
        </div>
    </div>

    <!-- 主要内容区 -->
    <main class="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <!-- 分类筛选与搜索 -->
        <div class="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <div class="flex space-x-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto" id="category-filters">
                <button class="filter-btn active px-4 py-2 rounded-full text-sm font-medium bg-indigo-600 text-white transition-colors" data-category="all">全部</button>
                <button class="filter-btn px-4 py-2 rounded-full text-sm font-medium bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 transition-colors" data-category="company">企业新闻</button>
                <button class="filter-btn px-4 py-2 rounded-full text-sm font-medium bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 transition-colors" data-category="industry">行业动态</button>
                <button class="filter-btn px-4 py-2 rounded-full text-sm font-medium bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 transition-colors" data-category="activity">活动公告</button>
            </div>
            <div class="relative w-full md:w-64">
                <input type="text" id="search-input" placeholder="搜索新闻..." class="w-full pl-10 pr-4 py-2 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm">
                <i class="fas fa-search absolute left-3 top-2.5 text-slate-400"></i>
            </div>
        </div>

        <!-- 新闻列表网格 -->
        <div id="news-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- 新闻卡片将通过 JS 动态生成 -->
        </div>

        <!-- 加载更多 / 分页 -->
        <div class="mt-12 text-center">
            <button id="load-more-btn" class="px-6 py-3 border border-slate-300 rounded-full text-slate-600 font-medium hover:bg-slate-50 hover:text-indigo-600 transition-colors">
                加载更多资讯
            </button>
        </div>
    </main>

    <!-- 订阅区域 -->
    <section class="bg-indigo-50 py-16">
        <div class="max-w-4xl mx-auto px-4 text-center">
            <h2 class="text-2xl font-bold text-slate-900 mb-4">订阅我们的周刊</h2>
            <p class="text-slate-600 mb-8">第一时间获取行业深度解析与企业最新动态，直接发送至您的邮箱。</p>
            <form class="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto" onsubmit="event.preventDefault(); alert('感谢订阅！');">
                <input type="email" placeholder="您的邮箱地址" required class="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <button type="submit" class="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition shadow-md">
                    立即订阅
                </button>
            </form>
        </div>
    </section>
	{% endraw %}