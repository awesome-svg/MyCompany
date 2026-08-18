const modal = document.getElementById('video-modal');
const container = document.getElementById('video-container');
const iframe = document.getElementById('promo-video');
// 替换为你的视频链接，注意添加 ?autoplay=1 参数
const videoSrc = "/medias/产品介绍.mp4?autoplay=1&rel=0"; 

function openVideoModal() {
		modal.classList.remove('hidden');
		// 强制重绘以触发过渡动画
		setTimeout(() => {
				modal.classList.remove('opacity-0');
				container.classList.remove('scale-95');
				container.classList.add('scale-100');
		}, 10);
		iframe.src = videoSrc; // 设置 src 以开始加载/播放
}

function closeVideoModal() {
		modal.classList.add('opacity-0');
		container.classList.remove('scale-100');
		container.classList.add('scale-95');
		setTimeout(() => {
				modal.classList.add('hidden');
				iframe.src = ""; // 清空 src 以停止播放
		}, 300);
}

// 点击遮罩层关闭
modal.addEventListener('click', (e) => {
		if (e.target === modal) closeVideoModal();
});

// 在外部main.js文件中统一绑定事件
document.addEventListener('DOMContentLoaded', function() {
    // 绑定视频弹窗打开事件
    document.getElementById('open-video-btn').addEventListener('click', openVideoModal);
    // 绑定滚动跳转事件
    document.getElementById('bottom-cta').addEventListener('click', function() {
        document.getElementById('bottom-cta').scrollIntoView({ behavior: 'smooth' });
    });

		const form = document.getElementById('lead-form');
    const submitBtn = document.getElementById('submit-btn');
    const messageBox = document.getElementById('form-message');

    form.addEventListener('submit', async function(e) {
        e.preventDefault(); // 阻止默认表单提交

        // 1. 获取表单数据
        const formData = {
            name: document.getElementById('name').value,
            role: document.getElementById('role').value,
            phone: document.getElementById('phone').value,
            need_services: document.getElementById('need_services').value
        };

        // 2. 简单的前端验证
        if (!formData.phone || !formData.phone.match(/^1[3-9]\d{9}$/)) {
            showMessage('请输入有效的手机号码', 'error');
            return;
        }

        // 3. 设置加载状态
        setLoading(true);

        try {
            // 4. 发送 POST 请求到后端接口
            const response = await fetch('https://dataupload.personyzh.cn/api/products/submitLead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok && result.success) {
                showMessage('提交成功！规划师将在24小时内联系您。', 'success');
                form.reset(); // 清空表单
            } else {
                showMessage(result.message || '提交失败，请稍后重试', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            showMessage('网络错误，请检查连接', 'error');
        } finally {
            setLoading(false);
        }
    });
		
		 // 辅助函数：显示消息
    function showMessage(msg, type) {
        messageBox.textContent = msg;
        messageBox.className = `mt-4 p-3 rounded-lg text-center text-sm ${
            type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`;
        messageBox.classList.remove('hidden');
        
        // 3秒后自动隐藏
        setTimeout(() => messageBox.classList.add('hidden'), 3000);
    }

    // 辅助函数：按钮加载状态
    function setLoading(isLoading) {
        if (isLoading) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 提交中...';
            submitBtn.classList.add('opacity-75', 'cursor-not-allowed');
        } else {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '立即免费预约';
            submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
        }
    }
		
});
