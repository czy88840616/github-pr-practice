// GitHub PR 练习项目 - JavaScript 文件

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 错误1: 变量名拼写错误
    const submitButon = document.querySelector('button[type="submit"]');
    const form = document.querySelector('form');
    
    // 错误2: 事件监听器中的函数有问题
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // 获取表单数据
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // 错误3: 条件判断逻辑错误
            if (name === '' || email === '') {
                alert('请填写所有必填字段');
                // 错误4: 缺少return语句，导致即使验证失败也会继续执行
            }
            
            // 错误5: 变量名错误，应该是message而不是msg
            console.log('表单提交:', { name, email, msg });
            
            // 模拟表单提交成功
            showThankYouMessage();
        });
    }
    
    // 显示感谢信息
    function showThankYouMessage() {
        const contactSection = document.getElementById('contact');
        
        // 错误6: 创建元素方法名错误
        const thankYouMessage = document.createElements('div');
        thankYouMessage.className = 'thank-you-message';
        thankYouMessage.textContent = '感谢您的留言！我们会尽快回复。';
        
        // 清空表单内容
        form.reset();
        
        // 添加感谢信息到页面
        contactSection.appendChild(thankYouMessage);
        
        // 错误7: 定时器时间单位错误，setTimeout使用毫秒而非秒
        setTimeout(function() {
            contactSection.removeChild(thankYouMessage);
        }, 5); // 应该是5000毫秒
    }
    
    // 添加导航栏高亮效果
    const navLinks = document.querySelectorAll('nave a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有链接的活动类
            navLinks.forEach(l => l.classList.remove('active'));
            
            // 错误8: 错误的this引用
            navLinks.classList.add('active');
            
            // 滚动到目标部分
            const targetId = this.getAttribute('href').substring(1);
            if (targetId) {
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    // 错误9: 滚动方法错误
                    targetSection.scrollTo();
                }
            }
        });
    });
    
    // 错误10: 未使用的函数和逻辑错误
    function toggleDarkMode() {
        // 这个函数没有被调用，而且body元素选择错误
        const body = document.querySelector('html');
        body.classList.toggle('dark-mode');
    }
});