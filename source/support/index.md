
---
title: 客户支持
layout: layout-team

---

{% raw %}
<!-- Hero 搜索区 -->
    <div class="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-violet-900 pt-20 pb-28 overflow-hidden">
        <!-- 背景装饰 -->
        <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div class="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div class="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div class="relative max-w-4xl mx-auto px-4 text-center pt-8">
            <h1 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 drop-shadow-sm">
                您好，有什么可以帮您？
            </h1>
            <p class="text-lg text-indigo-100 mb-10 max-w-2xl mx-auto font-light">
                搜索我们的知识库，查找常见问题解答、操作指南或联系技术支持团队。
            </p>
            
            <div class="relative max-w-2xl mx-auto group">
                <div class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <i class="fas fa-search text-slate-400 group-focus-within:text-indigo-500 transition-colors text-lg"></i>
                </div>
                <input type="text" id="global-search" 
                    class="block w-full pl-14 pr-4 py-4 bg-white/95 backdrop-blur border-0 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 shadow-2xl transition-all text-lg" 
                    placeholder="输入关键词，例如：重置密码、发票...">
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <kbd class="hidden sm:inline-block border border-slate-200 rounded px-2 py-0.5 text-xs font-sans font-medium text-slate-400">ESC</kbd>
                </div>
            </div>
            
            <!-- 热门搜索标签 -->
            <div class="mt-8 flex flex-wrap justify-center gap-3 text-sm">
                <span class="text-indigo-200 py-1">热门搜索：</span>
                <button class="search-tag px-4 py-1.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all text-white backdrop-blur-sm" data-query="账号安全">🔒 账号安全</button>
                <button class="search-tag px-4 py-1.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all text-white backdrop-blur-sm" data-query="发票申请">🧾 发票申请</button>
                <button class="search-tag px-4 py-1.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all text-white backdrop-blur-sm" data-query="API文档">📚 API文档</button>
								<button class="search-tag px-4 py-1.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all text-white backdrop-blur-sm" data-query="重置密码">🔑 重置密码</button>
            </div>
        </div>
    </div>
		<!-- 外层包裹器：负责居中 -->
    <div class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 pb-20">
        
        <!-- 统计与过滤栏 -->
        <div class="bg-white rounded-xl shadow-lg p-4 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div class="flex items-center space-x-2 text-sm text-slate-600">
                <span id="result-count">找到 0 个结果</span>
                <span class="text-slate-300">|</span>
                <span id="search-time">耗时 0ms</span>
            </div>
            <div class="flex items-center space-x-3">
                <select id="category-filter" class="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2.5">
                    <option value="all">所有分类</option>
                    <option value="faq">常见问题</option>
                    <option value="guide">操作指南</option>
                    <option value="api">技术文档</option>
                </select>
                <select id="sort-order" class="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2.5">
                    <option value="relevance">相关度排序</option>
                    <option value="date">最新发布</option>
                    <option value="views">最多浏览</option>
                </select>
            </div>
        </div>
				<!-- 搜索结果容器 -->
        <div id="results-container" class="grid grid-cols-1 gap-6 transition-all duration-300">
            <!-- 默认状态 -->
            <div class="text-center py-20 bg-white rounded-xl shadow-sm border border-dashed border-slate-200">
                <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50 mb-4">
                    <i class="fas fa-search text-indigo-500 text-2xl"></i>
                </div>
                <h3 class="text-lg font-medium text-slate-900">开始您的搜索</input></h3>
                <p class="text-slate-500 mt-1">输入关键词以查找相关文章、指南和技术文档</p>
            </div>
        </div>

    </div>
		
    <!-- 主要内容区 -->
    <main class="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        <!-- 自助服务分类 -->
        <section>
            <div class="flex items-center justify-between mb-8">
                <h2 class="text-2xl font-bold text-slate-900 flex items-center gap-3">
                    <span class="w-1 h-8 bg-indigo-600 rounded-full"></span>
                    浏览帮助主题
                </h2>
                <a href="#" class="text-indigo-600 hover:text-indigo-800 font-medium text-sm flex items-center gap-1">
                    查看全部 <i class="fas fa-arrow-right text-xs"></i>
                </a>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- 卡片 1 -->
                <a href="#getting-started" class="group block p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <div class="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 text-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors relative z-10">
                        <i class="fas fa-rocket"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">新手入门</h3>
                    <p class="text-slate-500 leading-relaxed relative z-10">快速了解产品基础功能，完成首次配置与账户设置，助您快速上手。</p>
                </a>
                
                <!-- 卡片 2 -->
                <a href="#billing" class="group block p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <div class="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-600 text-2xl group-hover:bg-green-600 group-hover:text-white transition-colors relative z-10">
                        <i class="fas fa-credit-card"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">账单与订阅</h3>
                    <p class="text-slate-500 leading-relaxed relative z-10">管理您的支付方式，查看历史账单明细及灵活升级或降级订阅计划。</p>
                </a>
                
                <!-- 卡片 3 -->
                <a href="#technical" class="group block p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <div class="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600 text-2xl group-hover:bg-purple-600 group-hover:text-white transition-colors relative z-10">
                        <i class="fas fa-code"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">技术开发</h3>
                    <p class="text-slate-500 leading-relaxed relative z-10">查阅详细的 API 接口文档，下载 SDK 开发包及解决常见集成报错。</p>
                </a>
            </div>
        </section>

        <!-- 常见问题 (FAQ) -->
        <section id="faq-section" class="max-w-4xl mx-auto">
            <div class="text-center pb-12">
                <span class="text-indigo-600 font-semibold tracking-wide uppercase text-sm">FAQ</span>
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mt-2">常见问题解答</h2>
                <p class="mt-4 text-slate-500 text-lg">精选用户最关心的高频问题，点击即可查看详情</p>
            </div>
            
            <div class="space-y-4" id="faq-list">
                <!-- JS 动态渲染 -->
            </div>
        </section>

        <!-- 售后政策与联系 -->
        <section class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-2">
            <!-- 左侧：政策详情 -->
            <div class="lg:col-span-2 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100">
                <div class="flex items-center gap-4 mb-8">
                    <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-xl">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div>
                        <h2 class="text-2xl font-bold text-slate-900">无忧售后保障</h2>
                        <p class="text-slate-500 text-sm">我们承诺提供行业领先的服务标准</p>
                    </div>
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 transition-colors">
                        <div class="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-green-500 shrink-0">
                            <i class="fas fa-check"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-900">7天无理由退换</h4>
                            <p class="text-sm text-slate-500 mt-1">购买后7天内不满意可全额退款</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 transition-colors">
                        <div class="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-500 shrink-0">
                            <i class="fas fa-tools"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-900">1年免费质保</h4>
                            <p class="text-sm text-slate-500 mt-1">非人为损坏享受免费维修服务</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 transition-colors">
                        <div class="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-purple-500 shrink-0">
                            <i class="fas fa-headset"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-900">终身技术支持</h4>
                            <p class="text-sm text-slate-500 mt-1">专业工程师团队随时为您解答</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 transition-colors">
                        <div class="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-orange-500 shrink-0">
                            <i class="fas fa-bolt"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-900">极速响应</h4>
                            <p class="text-sm text-slate-500 mt-1">工单平均响应时间小于2小时</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 右侧：联系卡片 -->
            <div class="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-8 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
                <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                <div class="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-10 -mb-10 blur-xl"></div>
                
                <div class="relative z-10">
                    <h3 class="text-2xl font-bold mb-2">需要即时帮助？</h3>
                    <p class="text-indigo-100 text-sm mb-8 leading-relaxed">
                        如果以上信息未能解决您的问题，欢迎通过以下方式联系我们，我们将尽快为您处理。
                    </p>
                    
                    <div class="space-y-4">
                        <button id="online-service-btn" class="w-full bg-white text-indigo-900 py-3.5 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-lg flex items-center justify-center gap-2">
                            <i class="fas fa-comments"></i> 在线客服
                        </button>
                        <button id="open-ticket-modal-btn" class="w-full bg-indigo-600/80 backdrop-blur text-white border border-indigo-400/30 py-3.5 rounded-xl font-bold hover:bg-indigo-600 hover:shadow-indigo-500/30 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group">
														<i class="fas fa-ticket-alt group-hover:rotate-12 transition-transform"></i> 提交工单
												</button>
                    </div>
                </div>
	
                <div class="mt-8 pt-6 border-t border-white/10 relative z-10">
                    <p class="text-xs text-indigo-200 text-center">工作时间：周一至周五 9:00 - 18:00</p>
                </div>
								
							 <!-- 模态框容器 (默认隐藏) -->
								<div id="ticketModal" class="fixed inset-0 z-50 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
										<!-- 背景遮罩 -->
										<div class="fixed inset-0 bg-gray-900/75 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>

										<!-- 模态框面板 -->
										<div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
												<div class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg modal-animate">
														
														<!-- 头部 -->
														<div class="bg-indigo-600 px-4 py-4 sm:px-6 flex justify-between items-center">
																<h3 class="text-lg font-semibold leading-6 text-white" id="modal-title">
																		<i class="fas fa-edit mr-2"></i> 新建支持工单
																</h3>
																<button type="button" class="text-indigo-100 hover:text-white focus:outline-none" onclick="closeModal()">
																		<i class="fas fa-times text-xl"></i>
																</button>
														</div>

														<!-- 表单内容 -->
														<div class="px-4 py-6 sm:px-6 max-h-[70vh] overflow-y-auto no-scrollbar">
																<form id="ticketForm" class="space-y-5">												
																	<!-- 姓名 -->
																	<div>
																			<label for="name" class="block text-sm font-medium text-gray-700">您的姓名 <span class="text-red-500">*</span></label>
																			<div class="mt-1 relative rounded-md shadow-sm">
																					<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
																							<i class="fas fa-user text-gray-400"></i>
																					</div>
																					<input type="text" name="name" id="name" required class=" text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-2.5 border" placeholder="张三">
																			</div>
																	</div>

																	<!-- 邮箱 -->
																	<div>
																			<label for="email" class="block text-sm font-medium text-gray-700">联系邮箱 <span class="text-red-500">*</span></label>
																			<div class="mt-1 relative rounded-md shadow-sm">
																					<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
																							<i class="fas fa-envelope text-gray-400"></i>
																					</div>
																					<input type="email" name="email" id="email" required class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-2.5 border" placeholder="example@company.com">
																			</div>
																	</div>
																		<!-- 问题类型 -->
																	<div>
																			<label for="category" class="block text-sm font-semibold text-gray-900 mb-2">问题类型 <span class="text-red-500">*</span></label>
																			<div class="relative">
																					<select id="category" name="category" required 
																							class="mt-1 block w-full pl-4 pr-10 py-3 text-base font-medium text-gray-900 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-600 sm:text-sm appearance-none">
																							<option value="" disabled selected class="text-gray-500">请选择...</option>
																							<option value="technical" class="text-gray-900">技术故障</option>
																							<option value="billing" class="text-gray-900">账单与支付</option>
																							<option value="account" class="text-gray-900">账户管理</option>
																							<option value="feature" class="text-gray-900">功能建议</option>
																							<option value="other" class="text-gray-900">其他咨询</option>
																					</select>
																					<!-- 右侧定位的倒三角箭头 -->
																					<div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
																							<i class="fas fa-chevron-down text-gray-600"></i>
																					</div>
																			</div>
																	</div>
																	<!-- 优先级 -->
																	<div>
																			<label class="block text-sm font-medium text-gray-700 mb-2">紧急程度</label>
																			<div class="flex space-x-4">
																					<label class="inline-flex items-center">
																							<input type="radio" class="form-radio text-indigo-600" name="priority" value="low" checked>
																							<span class="ml-2 text-sm text-gray-600">低</span>
																					</label>
																					<label class="inline-flex items-center">
																							<input type="radio" class="form-radio text-indigo-600" name="priority" value="medium">
																							<span class="ml-2 text-sm text-gray-600">中</span>
																					</label>
																					<label class="inline-flex items-center">
																							<input type="radio" class="form-radio text-indigo-600" name="priority" value="high">
																							<span class="ml-2 text-sm text-gray-600">高</span>
																					</label>
																			</div>
																	</div>

																		<!-- 详细描述 -->
																		<div>
																				<label for="message" class="block text-sm font-medium text-gray-700">详细描述 <span class="text-red-500">*</span></label>
																				<div class="mt-1">
																						<textarea id="message" name="message" rows="4" required class=" text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-lg p-3" placeholder="请详细描述您遇到的问题..."></textarea>
																				</div>
																				<p class="mt-1 text-xs text-gray-500 text-right"><span id="charCount">0</span>/500</p>
																		</div>

																		 <!-- 附件上传 (已修改为仅支持文档格式) -->
																		<div>
																				<label class="block text-sm font-medium text-gray-700">添加附件 (可选)</label>
																				<div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors cursor-pointer" id="dropZone">
																						<div class="space-y-1 text-center">
																								<i class="fas fa-file-alt text-3xl text-gray-400"></i>
																								<div class="flex text-sm text-gray-600">
																										<label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">
																												<span>上传文档</span>
																												<!-- 限制 accept 属性为文档格式 -->
																												<input id="file-upload" name="ticket" type="file" class="sr-only" accept=".doc,.docx,.pdf,.txt,.rtf,.odt">
																										</label>
																										<p class="pl-1">或拖拽到此处</p>
																								</div>
																								<p class="text-xs text-gray-500">支持 DOC, PDF, TXT 等文档格式 (Max 5MB)</p>
																						</div>
																				</div>
																				<ul id="fileList" class="mt-2 space-y-1 text-sm text-gray-600 hidden"></ul>
																		</div>
																		
																</form>
														</div>

														<!-- 底部按钮 -->
														<div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse border-t border-gray-100">
																<button type="button" id="submitBtn" class="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm transition-colors">
																		提交工单
																</button>
																<button type="button" class="mt-3 w-full inline-flex justify-center rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors" onclick="closeModal()">
																		取消
																</button>
														</div>
												</div>
										</div>
								</div>

								<!-- 成功提示 Toast (默认隐藏) -->
								<div id="toast" class="fixed bottom-5 right-5 transform translate-y-20 opacity-0 transition-all duration-500 z-50">
										<div class="bg-white border-l-4 border-green-500 shadow-lg rounded-lg p-4 flex items-center gap-3">
												<div class="text-green-500">
														<i class="fas fa-check-circle text-2xl"></i>
												</div>
												<div>
														<h4 class="font-bold text-gray-800">提交成功</h4>
														<p class="text-sm text-gray-600">工单已创建，我们将尽快联系您。</p>
												</div>
										</div>
								</div>	
            </div>
        </section>

    </main>
	{% endraw %}