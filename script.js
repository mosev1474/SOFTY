const PASSWORD = "1234"; // غير الباسورد هنا

// 🔐 تسجيل الدخول
function login() {
  let pass = document.getElementById("pass").value;

  if (pass === PASSWORD) {
    document.getElementById("login").style.display = "none";
    document.getElementById("app").style.display = "block";

    let role = localStorage.getItem("role");

    if (!role) {
      role = prompt("انت مين؟ اكتب me أو her");
      localStorage.setItem("role", role);
    }

    if (role === "me") {
      document.getElementById("welcome").innerText = "أهلاً يا ملك 😎";
    } else {
      document.getElementById("welcome").innerText = "أهلاً يا روحي ❤️";
    }

    loadMemories();
    startCounter();
  } else {
    alert("❌ باسورد غلط");
  }
}

// 💾 حفظ الذكريات
function saveMemory() {
  let text = document.getElementById("memory").value;

  if (!text) return;

  let memories = JSON.parse(localStorage.getItem("memories") || "[]");

  memories.push(text);

  localStorage.setItem("memories", JSON.stringify(memories));

  document.getElementById("memory").value = "";

  loadMemories();
}

// 📂 تحميل الذكريات
function loadMemories() {
  let memories = JSON.parse(localStorage.getItem("memories") || "[]");

  let container = document.getElementById("memories");
  container.innerHTML = "";

  memories.forEach(m => {
    container.innerHTML += `<p>❤️ ${m}</p>`;
  });
}

// ❤️ زرار وحشتيني
function miss() {
  let heart = document.getElementById("heart");

  heart.style.transform = "scale(1.5)";
  setTimeout(() => {
    heart.style.transform = "scale(1)";
  }, 300);

  alert("وحشتيني ❤️");
}

// 💔 زرار الانفصال (تقيل شوية)
function breakup() {
  let a = confirm("متأكد؟");
  if (!a) return;

  let b = confirm("متأكد بجد؟");
  if (!b) return;

  let c = prompt("اكتب (انتهينا) للتأكيد");

  if (c === "انتهينا") {
    document.body.innerHTML = "<h1>💔 انتهت العلاقة</h1>";
    localStorage.clear();
  }
}

// ⏱️ العداد
const startDate = new Date("2025-01-01");

function startCounter() {
  setInterval(() => {
    let now = new Date();
    let diff = now - startDate;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("counter").innerText =
      "بقالنا " + days + " يوم مع بعض ❤️";
  }, 1000);
}
