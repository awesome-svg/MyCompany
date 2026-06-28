
---
title: 产品展示
layout: layout-team
---

{% raw %}
<main class="flex-grow pt-16 bg-slate-50">

	<div class="relative bg-white overflow-hidden">
			<div class="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white opacity-50"></div>
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
					<div class="text-center max-w-3xl mx-auto">
							<span class="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold tracking-wide uppercase mb-4">赋能新一代创业者</span>
							<h1 class="text-4xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
									从校园创新到<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">商业领袖的蜕变</span>
							</h1>
							<p class="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed">
									专为大学生、初创者及企业家打造的全周期成长生态。通过大赛实训、高端沙龙与私董会，链接资源，加速梦想落地。
							</p>
							<div class="flex flex-col sm:flex-row justify-center gap-4">
									<button onclick="openModal()" class="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg shadow-lg hover:bg-indigo-700 hover:shadow-xl transition transform hover:-translate-y-1">
											开启成长之旅
									</button>
									<button class="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition flex items-center justify-center gap-2">
											<i class="fas fa-play-circle text-indigo-600"></i> 观看介绍视频
									</button>
							</div>
					</div>
			</div>
			<!-- 装饰性背景元素 -->
			<div class="absolute top-0 left-0 -ml-20 -mt-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
			<div class="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
	</div>
    <!-- 核心培训服务标题 -->
	<div id="training" class="py-16 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase">核心培训服务</h2>
            <p class="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                全层级创业成长赋能体系
            </p>
            <p class="mt-4 text-xl text-slate-500">
                覆盖从校园创新萌芽到企业规模化发展的全周期，为不同阶段的参与者匹配精准的成长路径。
            </p>
        </div>

        <!-- 培训服务卡片网格 -->
        <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            
            <!-- 服务1：创新创业大赛实训营 -->
            <div class="group flex flex-col rounded-2xl shadow-sm hover:shadow-xl card-hover-effect bg-white border border-slate-100 overflow-hidden">
                <div class="flex-shrink-0 relative h-48 overflow-hidden">
                    <img class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                         src="https://picsum.photos/400/300?competition,award,students" 
                         alt="创新创业大赛现场，大学生团队展示项目，评委认真评审">
                </div>
                <div class="flex-1 p-6 flex flex-col justify-between">
                    <div class="flex-1">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md uppercase tracking-wide">面向大学生</span>
                            <i class="fas fa-trophy text-slate-300"></i>
                        </div>
                        <a href="#" class="block mt-2 group-hover:text-indigo-600 transition-colors">
                            <h3 class="text-xl font-bold text-slate-900">创新创业大赛实训营</h3>
                            <p class="mt-3 text-base text-slate-500 leading-relaxed">
                                从项目选题打磨、商业计划书撰写到路演答辩全流程辅导，配备往届获奖选手一对一陪练，助力团队冲击赛事奖项。
                            </p>
                        </a>
                    </div>
                    <div class="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                        <a href="#" class="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                            查看赛事日程 <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </a>
                        <span class="text-xs text-slate-400">线下集中授课</span>
                    </div>
                </div>
            </div>

            <!-- 服务2：知名企业家座谈会 -->
            <div class="group flex flex-col rounded-2xl shadow-sm hover:shadow-xl card-hover-effect bg-white border border-slate-100 overflow-hidden">
                <div class="flex-shrink-0 relative h-48 overflow-hidden">
                    <img class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                         src="https://picsum.photos/400/300?forum,business,ceo" 
                         alt="企业家座谈会现场，行业领袖与参会者围坐交流分享">
                </div>
                <div class="flex-1 p-6 flex flex-col justify-between">
                    <div class="flex-1">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-md uppercase tracking-wide">面向企业家</span>
                            <i class="fas fa-user-tie text-slate-300"></i>
                        </div>
                        <a href="#" class="block mt-2 group-hover:text-purple-600 transition-colors">
                            <h3 class="text-xl font-bold text-slate-900">知名企业家座谈会</h3>
                            <p class="mt-3 text-base text-slate-500 leading-relaxed">
                                邀请各行业头部企业创始人闭门分享实战经验，聚焦企业战略决策、组织管理与数字化转型等核心议题，实现深度思想碰撞。
                            </p>
                        </a>
                    </div>
                    <div class="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                        <a href="#" class="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors">
                            预约嘉宾席位 <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </a>
                        <span class="text-xs text-slate-400">闭门邀请制</span>
                    </div>
                </div>
            </div>

            <!-- 服务3：创业沙龙主题交流 -->
            <div class="group flex flex-col rounded-2xl shadow-sm hover:shadow-xl card-hover-effect bg-white border border-slate-100 overflow-hidden">
                <div class="flex-shrink-0 relative h-48 overflow-hidden">
                    <img class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                         src="https://picsum.photos/400/300?networking,startup,coffee" 
                         alt="轻松的创业沙龙现场，创业者们自由交流互换资源">
                </div>
                <div class="flex-1 p-6 flex flex-col justify-between">
                    <div class="flex-1">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md uppercase tracking-wide">面向全群体</span>
                            <i class="fas fa-comments text-slate-300"></i>
                        </div>
                        <a href="#" class="block mt-2 group-hover:text-blue-600 transition-colors">
                            <h3 class="text-xl font-bold text-slate-900">创业沙龙主题交流</h3>
                            <p class="mt-3 text-base text-slate-500 leading-relaxed">
                                每周围绕融资对接、产品迭代、团队搭建等热门主题开展轻量交流，打破圈层壁垒，快速链接投资人、技术伙伴与上下游资源。
                            </p>
                        </a>
                    </div>
                    <div class="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                        <a href="#" class="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                            报名本周活动 <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </a>
                        <span class="text-xs text-slate-400">每周线下举办</span>
                    </div>
                </div>
            </div>

            <!-- 服务4：初创企业加速营 -->
            <div class="group flex flex-col rounded-2xl shadow-sm hover:shadow-xl card-hover-effect bg-white border border-slate-100 overflow-hidden">
                <div class="flex-shrink-0 relative h-48 overflow-hidden">
                    <img class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                         src="https://picsum.photos/400/300?mentor,coaching,team" 
                         alt="创业导师带领初创团队开展头脑风暴，梳理业务方向">
                </div>
                <div class="flex-1 p-6 flex flex-col justify-between">
                    <div class="flex-1">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md uppercase tracking-wide">面向创业者</span>
                            <i class="fas fa-rocket text-slate-300"></i>
                        </div>
                        <a href="#" class="block mt-2 group-hover:text-green-600 transition-colors">
                            <h3 class="text-xl font-bold text-slate-900">初创企业加速营</h3>
                            <p class="mt-3 text-base text-slate-500 leading-relaxed">
                                3个月沉浸式陪跑，从MVP验证到种子轮融资全链路指导，对接专属投资机构绿色通道，帮助项目快速实现从0到1的突破。
                            </p>
                        </a>
                    </div>
                    <div class="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                        <a href="#" class="inline-flex items-center text-green-600 font-medium hover:text-green-800 transition-colors">
                            提交项目申请 <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </a>
                        <span class="text-xs text-slate-400">季度封闭营</span>
                    </div>
                </div>
            </div>

            <!-- 服务5：青年创业孵化基地 -->
            <div class="group flex flex-col rounded-2xl shadow-sm hover:shadow-xl card-hover-effect bg-white border border-slate-100 overflow-hidden">
                <div class="flex-shrink-0 relative h-48 overflow-hidden">
                    <img class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                         src="https://picsum.photos/400/300?office,incubator,workspace" 
                         alt="开放共享的创业孵化空间，年轻团队在工位上协作办公">
                </div>
                <div class="flex-1 p-6 flex flex-col justify-between">
                    <div class="flex-1">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-md uppercase tracking-wide">面向全群体</span>
                            <i class="fas fa-building text-slate-300"></i>
                        </div>
                        <a href="#" class="block mt-2 group-hover:text-orange-600 transition-colors">
                            <h3 class="text-xl font-bold text-slate-900">青年创业孵化基地</h3>
                            <p class="mt-3 text-base text-slate-500 leading-relaxed">
                                提供免租办公场地、工商财税一站式服务与政策申报指导，降低创业启动成本，打造一站式创业生态闭环。
                            </p>
                        </a>
                    </div>
                    <div class="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                        <a href="#" class="inline-flex items-center text-orange-600 font-medium hover:text-orange-800 transition-colors">
                            申请入驻资格 <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </a>
                        <span class="text-xs text-slate-400">长期开放</span>
                    </div>
                </div>
            </div>

            <!-- 服务6：企业传承研修班 -->
            <div class="group flex flex-col rounded-2xl shadow-sm hover:shadow-xl card-hover-effect bg-white border border-slate-100 overflow-hidden">
                <div class="flex-shrink-0 relative h-48 overflow-hidden">
                    <img class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                         src="https://picsum.photos/400/300?executive,training,businessman" 
                         alt="企业家研修课堂，学员们认真聆听行业专家授课">
                </div>
                <div class="flex-1 p-6 flex flex-col justify-between">
                    <div class="flex-1">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-xs font-bold text-pink-600 bg-pink-50 px-2 py-1 rounded-md uppercase tracking-wide">面向企业家</span>
                            <i class="fas fa-user-graduate text-slate-300"></i>
                        </div>
                        <a href="#" class="block mt-2 group-hover:text-pink-600 transition-colors">
                            <h3 class="text-xl font-bold text-slate-900">企业传承研修班</h3>
                            <p class="mt-3 text-base text-slate-500 leading-relaxed">
                                聚焦家族企业二代接班与基业长青课题，结合国内外经典案例深度研讨，帮助企业实现平稳过渡与二次增长。
                            </p>
                        </a>
                    </div>
                    <div class="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                        <a href="#" class="inline-flex items-center text-pink-600 font-medium hover:text-pink-800 transition-colors">
                            获取课程大纲 <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </a>
                        <span class="text-xs text-slate-400">月度开课</span>
                    </div>
                </div>
            </div>

        </div>
        
        <!-- 底部 CTA -->
        <div class="mt-20 text-center">
            <h3 class="text-2xl font-bold text-slate-900 mb-4">找到属于你的成长路径</h3>
            <p class="text-slate-500 max-w-2xl mx-auto">根据你的身份和阶段，匹配最适合的培训服务，开启创业成长之旅。</p>
        </div>
    </div>
</div>

 <!-- 4. CTA 转化区域 (用户提供的优化内容) -->
    <section id="contact" class="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 py-6 overflow-hidden">
        <!-- 动态背景装饰 -->
        <div class="absolute inset-0 opacity-15">
            <div class="absolute top-0 left-1/4 w-72 h-72 bg-white rounded-full blur-3xl transform -translate-y-1/2"></div>
            <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400 rounded-full blur-3xl transform translate-y-1/2"></div>
        </div>
        
        <!-- 网格纹理叠加 -->
        <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="lg:grid lg:grid-cols-5 lg:gap-12 items-center">
                <!-- 左侧文案区 占3列 -->
                <div class="lg:col-span-3 mb-12 lg:mb-0">
                    <span class="inline-block py-1 px-4 rounded-full bg-white/10 text-indigo-200 text-sm font-medium backdrop-blur-sm border border-white/10 mb-6">
                        限时开放 · 0元免费咨询
                    </span>
                    <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                        找到专属于你的<br>
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-200">创业成长路径</span>
                    </h2>
                    <p class="text-lg md:text-xl text-indigo-100 mb-10 leading-relaxed max-w-xl">
                        从校园创新创业大赛备赛，到企业家战略升级，我们为不同阶段的你匹配专属导师与资源，5000+创业者已在这里完成突破。
                    </p>
                    
                    <!-- 升级信任指标 横向卡片布局 -->
                    <div class="grid grid-cols-3 gap-4">
                        <div class="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                            <p class="text-3xl font-bold text-white mb-1">50+</p>
                            <p class="text-indigo-200 text-sm">行业头部导师</p>
                        </div>
                        <div class="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                            <p class="text-3xl font-bold text-white mb-1">300+</p>
                            <p class="text-indigo-200 text-sm">成功孵化项目</p>
                        </div>
                        <div class="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                            <p class="text-3xl font-bold text-white mb-1">98%</p>
                            <p class="text-indigo-200 text-sm">学员满意度</p>
                        </div>
                    </div>

                    <!-- 底部补充信任提示 -->
                    <div class="mt-8 flex items-center gap-4 text-indigo-200 text-sm">
                        <div class="flex -space-x-2">
                            <img src="https://picsum.photos/id/1005/40/40" class="w-10 h-10 rounded-full border-2 border-indigo-900" alt="学员头像">
                            <img src="https://picsum.photos/id/1012/40/40" class="w-10 h-10 rounded-full border-2 border-indigo-900" alt="学员头像">
                            <img src="https://picsum.photos/id/1027/40/40" class="w-10 h-10 rounded-full border-2 border-indigo-900" alt="学员头像">
                            <div class="w-10 h-10 rounded-full bg-white/10 border-2 border-indigo-900 flex items-center justify-center text-xs font-bold text-white">+99</div>
                        </div>
                        <span>已有数千名创业者加入我们的社区</span>
                    </div>
                </div>

                <!-- 右侧表单区 占2列 -->
                <div class="lg:col-span-2">
                    <div class="bg-white rounded-2xl shadow-2xl p-8 transform hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                        <!-- 表单顶部装饰条 -->
                        <div class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
                        
                        <div class="text-center mb-6">
                            <h3 class="text-2xl font-bold text-slate-900 mb-2">免费领取专属规划</h3>
                            <p class="text-slate-500 text-sm">填写信息，24小时内专属规划师将与你联系</p>
                        </div>

                        <form onsubmit="event.preventDefault(); alert('提交成功！我们的规划师将在24小时内联系您。');" class="space-y-5">
                            <div>
                                <label for="name" class="block text-sm font-medium text-slate-700 mb-1.5">姓名</label>
                                <div class="relative">
                                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><i class="fas fa-user"></i></span>
                                    <input type="text" id="name" class="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition bg-slate-50" placeholder="请输入您的姓名" required>
                                </div>
                            </div>
                            <div>
                                <label for="role" class="block text-sm font-medium text-slate-700 mb-1.5">您的身份</label>
                                <div class="relative">
                                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><i class="fas fa-briefcase"></i></span>
                                    <select id="role" class="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition bg-slate-50 appearance-none">
                                        <option>在校大学生（备赛/创业）</option>
                                        <option>初创企业创始人</option>
                                        <option>成熟期企业家</option>
                                        <option>投资人/行业从业者</option>
                                    </select>
                                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"><i class="fas fa-chevron-down"></i></span>
                                </div>
                            </div>
                            <div>
                                <label for="phone" class="block text-sm font-medium text-slate-700 mb-1.5">联系电话</label>
                                <div class="relative">
                                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><i class="fas fa-phone"></i></span>
                                    <input type="tel" id="phone" class="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition bg-slate-50" placeholder="请输入手机号码" required>
                                </div>
                            </div>
                            <div>
                                <label for="need" class="block text-sm font-medium text-slate-700 mb-1.5">您最感兴趣的服务</label>
                                <div class="relative">
                                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><i class="fas fa-star"></i></span>
                                    <select id="need" class="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition bg-slate-50 appearance-none">
                                        <option>创新创业大赛实训营</option>
                                        <option>知名企业家座谈会</option>
                                        <option>创业沙龙主题交流</option>
                                        <option>初创企业加速营</option>
                                        <option>其他服务咨询</option>
                                    </select>
                                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"><i class="fas fa-chevron-down"></i></span>
                                </div>
                            </div>
                            
                            <button type="submit" class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5 text-lg">
                                立即免费预约
                            </button>
                            
                            <p class="text-xs text-slate-400 text-center mt-2">
                                提交即表示您同意我们的<a href="#" class="underline hover:text-indigo-600">服务条款</a>和<a href="#" class="underline hover:text-indigo-600">隐私政策</a>，我们承诺不会泄露您的个人信息
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>


{% endraw %}
