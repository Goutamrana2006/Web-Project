document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("ubTYvW6YToj0gdVPJ"); 
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.send("service_8145e4p", "template_oeo8b8v", {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value
    })
    .then(function (response) {
      alert("✅ Message sent successfully!");
      console.log(response);
    })
    .catch(function (error) {
      alert("❌ Failed to send message!");
      console.log(error);  // 👈 IMPORTANT (see error here)
    });
  });
});