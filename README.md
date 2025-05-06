Here’s a clean and professional `README.md` file for your project, including **npm installation**, **development mode**, and **Docker commands**:

---

````markdown
# 🚀 Project Name

A brief description of your project goes here. This project uses Node.js, React (or Next.js), and supports Docker deployment.

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
````

### 2. Install dependencies (forcefully to resolve conflicts)

```bash
npm install --force
```

---

## 🧪 Run in Development Mode

```bash
npm run dev
```

> Starts the development server. Usually runs on [http://localhost:3000](http://localhost:3000).

---

## 🐳 Docker Support

### 1. Build Docker Image

```bash
docker build -t esu-web .
```

### 2. Run Docker Container

```bash
docker run -p 3000:3000 esu-web
```

> This maps port 3000 of the container to your local port 3000.

---

## 📁 Project Structure

```
/lib              # Utility libraries and contexts (e.g. ThemeContext)
/components       # Reusable UI components
/app              # App Router directory (Next.js)
public            # Static assets
```

---

## 🛠️ Notes

* Make sure to add environment variables in a `.env.local` file if needed.
* For theme color or global state, check `lib/ThemeContext.tsx`.

## 🛠️ Project Specific Notes

Faculty of Computing - #00AECD - Space Grotesk
Faculty of life sciences - #BFD730 - Nunito
Faculty of management & law - #FFCB05 - Merriweather
Faculty of art & design - #F5833C - Lobster
Faculty of engineering - #BFD730 - Orbitron
Faculty of languages, sociology and education - #5B5B5B - Felipa

---
