// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', function() {
    // 現在の日付を表示
    const dateElement = document.getElementById('date');
    if (dateElement) {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = now.toLocaleDateString('ja-JP', options);
    }

    // 訪問回数をカウント
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem('visitCount', visitCount);
    
    // 訪問回数を表示
    const visitElement = document.createElement('p');
    visitElement.textContent = `あなたの訪問回数: ${visitCount}回`;
    visitElement.style.textAlign = 'center';
    visitElement.style.color = '#667eea';
    visitElement.style.marginTop = '20px';
    
    const container = document.querySelector('.container');
    if (container) {
        container.appendChild(visitElement);
    }

    // ランダムメッセージ
    const messages = [
        "今日もいい一日を！ 😊",
        "プログラミングは楽しい！ 💻",
        "GitHubマスターへの道！ 🚀",
        "コードを書こう！ ⌨️",
        "創造力は無限大！ ✨"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const messageElement = document.createElement('div');
    messageElement.textContent = randomMessage;
    messageElement.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #667eea;
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        animation: slideIn 0.5s ease-out;
    `;
    
    // アニメーションを追加
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(messageElement);
    
    // 5秒後にメッセージを消す
    setTimeout(() => {
        messageElement.style.opacity = '0';
        messageElement.style.transform = 'translateX(100%)';
        messageElement.style.transition = 'all 0.5s ease-in';
        setTimeout(() => messageElement.remove(), 500);
    }, 5000);
});

// コンソールにメッセージ
console.log('🎉 Welcome to My First Website! 🎉');
console.log('このサイトはGitHubで作られています。');
console.log('開発者ツールを開いてくれてありがとう！');
