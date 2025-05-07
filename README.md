# 🚀 ESU Web + CMS Deployment (Docker-based)

This README is intended for DevOps and developers to easily understand and manage the ESU application stack.

---

## 🧱 Tech Stack

* **Next.js Web Application** (Frontend)
* **WordPress CMS with MySQL** (Backend)
* **Nginx Proxy Manager** (Reverse Proxy)
* **Watchtower** (Auto-updater)
* **Docker + Docker Compose**
* **SonarQube** (Code Quality Analysis)

---

## 📁 Project Structure

```
├── docker/
│   ├── live/
│   │   ├── web/
│   │   │   └── Dockerfile         # Next.js Dockerfile
│   │   └── live.env              # Environment variables for build
│   └── compose.yml               # Compose stack definition
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions CI/CD workflow
```

---

## 🐳 Docker Compose Services

### 1. **WordPress CMS** \[`wordpress`]

* **Image:** `wordpress:php8.3`
* **Mounted Volumes:**

  * `/opt/esu-cms/www/wordpress` → `/var/www/html`
  * `/opt/esu-cms/www/conf/custom.ini` → PHP config override
* **Database Service:** `db`

### 2. **MySQL DB** \[`db`]

* **Image:** `mysql:8.0`
* **Mounted Volume:** `/opt/www/mysql` → `/var/lib/mysql`

### 3. **Next.js Web App** \[`web`]

* **Image Source:** Built and published to GitHub Container Registry (`ghcr.io/.../esu-web:main`)
* **Environment:** `live.env` is copied during Docker build
* **Ports:** 3000 (local container)

### 4. **Nginx Proxy Manager** \[`app`]

* **Image:** `jc21/nginx-proxy-manager`
* **Ports:** 80 (HTTP), 443 (HTTPS), 81 (Admin Panel)

### 5. **Watchtower** \[`watchtower`]

* **Image:** `containrrr/watchtower`
* **Auto-updates container** `esu-web`
* **Webhook Enabled:** Port `8090` with `wt_secret_4aP9tKx7rQm2`

---

## 🔄 CI/CD with GitHub Actions

### `.github/workflows/deploy.yml`

This workflow automates:

1. **Build** Docker image from `docker/live/web/Dockerfile`
2. **Push** to GitHub Container Registry (`ghcr.io/.../esu-web:main`)
3. **Trigger Watchtower** to auto-pull and restart updated container

### Manual Trigger: ✅

You can also run this workflow manually via **`workflow_dispatch`**.

---

## 🌐 Environment Variables

Located at:

```
docker/live/web/live.env
```

Used during `docker build`:

```
NEXT_PUBLIC_API_KEY=...
NEXT_PUBLIC_GRAPHQL_ENDPOINT=...
```

---

## 🧠 How Developers Can Use This

* **Update Frontend Code:**
  Push to `main` branch → CI/CD auto-triggers build + deploy.
* **Backend Access:**
  CMS: [https://cms.esu.lk/](https://cms.esu.lk/)
* **Frontend URL:**
  [https://esu.lk/](https://esu.lk/)
* **Portainer Dashboard:**
  [https://portainer.hostweblankan.in/](https://portainer.hostweblankan.in/)
* **SonarQube Dashboard:**
  View code analysis at [https://sonarqube.hostweblankan.in/dashboard?id=esu-web](https://sonarqube.hostweblankan.in/dashboard?id=esu-web)
* **Domain Mapping:**
  Managed through Nginx Proxy Manager (port 81).

---

## 🔐 Security Notes

* **Secrets like DB credentials** are in `docker-compose.yml` (secure server access required).
* **Watchtower webhook** should remain protected with the Bearer token.

---

## ✅ To Get Started (Fresh Setup)

```bash
cd docker
docker compose -f compose.yml up -d
```

Ensure the `esu-network` is already created:

```bash
docker network create esu-network
```

---

Here’s the updated section to add to your README under a new heading **“🧑‍💻 Frontend Development Setup (Local Dev)”**:

---

## 🧑‍💻 Frontend Development Setup (Local Dev)

For developers working on the **Next.js frontend** locally, follow these steps:

### 📁 Path to Dev Environment

Navigate to the development Docker setup:

```bash
cd docker/dev
```

### ▶️ Run the Dev Environment

Build and start the containers:

```bash
docker-compose up --build
```

This will:

* Build the Next.js frontend using the local development config
* Start the application in development mode
* Expose it on **`localhost:3000`**

### 🌍 Access Frontend Locally

Once running, you can visit:

```
http://localhost:3000
```

### 🛠 Notes

* Any changes to frontend code will auto-reload if hot reloading is enabled.
* Ensure your `.env` file is correctly configured for local development (you can use `docker\dev\dev.env` in the root of your frontend project).

---



## 📦 Additional Tools

* **Portainer**: Installed for container management GUI → [https://portainer.hostweblankan.in/](https://portainer.hostweblankan.in/)
* **SonarQube**: Available at → [https://sonarqube.hostweblankan.in/dashboard?id=esu-web](https://sonarqube.hostweblankan.in/dashboard?id=esu-web)

---

For any changes in infrastructure, update this README and notify the DevOps team.

---

**Maintained by:** Web Lankan DevOps Team
