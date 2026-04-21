# 🧘 Yoga Website (Full Stack Project)

A simple and responsive Yoga Website built using **HTML, CSS, and JavaScript** for the frontend and **Flask (Python)** for the backend. The project focuses on promoting yoga practices, displaying yoga poses, and providing a smooth user experience with a lightweight backend.

---

## 🚀 Features

- 🧘 Home page with yoga introduction and motivation
- 📖 Yoga poses section with images and descriptions
- 🗓️ Contact / enquiry form
- 📱 Fully responsive design (mobile + desktop)
- ⚡ Flask backend for routing and form handling
- 🔗 Smooth integration between frontend and backend

---

## 🛠️ Tech Stack

### Frontend:
- HTML5
- CSS3
- JavaScript (Vanilla JS)

### Backend:
- Python
- Flask

---

## 📁 Project Structure
yoga-website/
│
├── app/                        # Main application package
│   ├── __init__.py             # App initialization
│   ├── routes.py               # All Flask routes
│   └── forms.py (optional)     # Form handling logic
│
├── static/                     # Static assets
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       └── (yoga images)
│
├── templates/                  # HTML templates (Jinja2)
│   ├── base.html               # Common layout (navbar/footer)
│   ├── index.html              # Home page
│   ├── poses.html              # Yoga poses page
│   └── contact.html            # Contact form page
│
├── config.py                   # App configuration (optional)
├── run.py                      # Entry point to run the app
├── requirements.txt            # Dependencies
├── .gitignore
└── README.md


