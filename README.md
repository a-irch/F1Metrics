<p align="center">
  <img src="./frontend//public/logo.png" alt="F1Metrics Logo" width="80" />
</p>

<h1 align="center">F1Metrics</h1>

<p align="center">
  <img src="https://img.shields.io/badge/backend-FastAPI-009688?style=flat&logo=fastapi&logoColor=white" />
  <img src="https://img.shields.io/badge/frontend-Next.js-000000?style=flat&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/python-3.12-blue?style=flat&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/nodejs-22.11-green?style=flat&logo=node.js&logoColor=white" />
</p>


## 📊 Overview

**F1Metrics** is a telemetry client for Formula 1, built to analyze driver performance and session data in real-time. Powered with the python library [FastF1](https://github.com/theOehrly/Fast-F1) to expose a modern API and a responsive frontend interface for a complete analytical experience.


## 🚀 Features

- Session overview (meetings, driver and constructor standings)

## ⚙️ Requirements

- **Node.js** `v22.11`
- **npm** `v11.4.1`
- **Python** `v3.12.3`
- **Poetry** `v2.1.3`
- **Docker** & **Docker Compose** (optional, for containerized setup)


## 🧪 Local Development

### 🔧 Frontend

#### ▶️ Run on Host

``` bash
git clone https://github.com/a-irch/F1Metrics
cd f1metrics/frontend
cp .env.example .env
npm install
npm run dev
```

#### 🐳 Run with Docker

``` bash
cd frontend
sudo docker build -t f1-metrics-client .
sudo docker run -it -p 8014:8014 f1-metrics-client
```

### 🛠️ Backend
#### ▶️ Run on Host

``` bash
cd backend
poetry install
poetry run uvicorn api.main:app --reload --port 8013
```

#### 🐳 Run with Docker

``` bash
cd backend
sudo docker build -t f1-metrics-api .
sudo docker run -it -p 8013:8013 f1-metrics-api
```

### 📦 Run Entire Stack with Docker Compose

``` bash
sudo docker compose up --build -d
```

*Make sure your .env files are correctly configured before starting.*


## 🏎️ Telemetry Source

Powered by FastF1 – a community-driven library for F1 telemetry and timing data.