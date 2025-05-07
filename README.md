# 🚀 ESU Web + CMS Deployment (Docker-based)

This README is intended for DevOps and developers to easily understand and manage the ESU application stack.

---

## 🧱 Tech Stack

* **Next.js Web Application** (Frontend)
* **WordPress CMS with MySQL** (Backend)
* **Nginx Proxy Manager** (Reverse Proxy)
* **Watchtower** (Auto-updater)
* **Docker + Docker Compose**

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

## 📦 Additional Tools

* **Portainer**: Installed for container management GUI → [https://portainer.hostweblankan.in/](https://portainer.hostweblankan.in/)

---

For any changes in infrastructure, update this README and notify the DevOps team.

---

**Maintained by:** Web Lankan DevOps Team
