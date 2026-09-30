document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navbar nav");
menu.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".navbar nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

function resourceNotice(name){
  event.preventDefault();
  showToast(name + " will be added here. Replace the link with your resource.");
}

const form = document.getElementById("enrolForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const subject = encodeURIComponent("Tutoring enrolment request — " + data.student);
  const body = encodeURIComponent(
    `Student: ${data.student}\nEmail: ${data.email}\nYear/Grade: ${data.grade}\nSubject: ${data.subject}\n\nGoals / message:\n${data.message}`
  );
  const email = "your@email.com";
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  document.getElementById("formMessage").textContent = "Your email app should open with the enrolment request prepared.";
});

function showToast(message){
  const t=document.getElementById("toast");
  t.textContent=message;t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"),3200);
}
