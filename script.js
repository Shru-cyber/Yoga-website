/* =========================
   SMOOTH SCROLL NAVIGATION
   ========================= */
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});


/* =========================
   PRICING DROPDOWN FILTER
   ========================= */
const pricingSelect = document.getElementById("pricing-select");
const pricingCards = document.querySelectorAll(".pricing-card");

pricingSelect.addEventListener("change", function () {
  const selectedPlan = this.value;

  pricingCards.forEach(card => {
    if (!selectedPlan || card.dataset.plan === selectedPlan) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
    card.classList.remove("active");
  });

  if (selectedPlan) {
    const activeCard = document.querySelector(
      `.pricing-card[data-plan="${selectedPlan}"]`
    );
    if (activeCard) {
      activeCard.classList.add("active");
      activeCard.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
});


/* =========================
   CONTACT FORM (Flask)
   ========================= */
document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = {
    name: this.querySelector('input[type="text"]').value,
    email: this.querySelector('input[type="email"]').value,
    message: this.querySelector('textarea').value
  };

  try {
    const res = await fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      alert("Message sent successfully!");
      this.reset();
    } else {
      alert("Failed to send message.");
    }
  } catch (err) {
    alert("Server error. Please try again later.");
  }
});


/* =========================
   ENROLL FUNCTION (Flask)
   ========================= */
function enroll(course) {
  const name = prompt("Enter your name:");
  const email = prompt("Enter your email:");
  const phone = prompt("Enter your phone number:");

  if (!name || !email) {
    alert("Name and email are required!");
    return;
  }

  fetch("/enroll", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, phone, course })
  })
    .then(res => {
      if (!res.ok) throw new Error("Enrollment failed");
      return res.json();
    })
    .then(() => alert("Enrollment successful!"))
    .catch(() => alert("Server error. Please try again."));
}



