# ArtScope

**Identify the artist behind a famous painting using AI.**  
ArtScope uses machine learning to recognize the painter of a given artwork based on visual analysis.

**Live Demo:** [GitHub Pages Deployment](https://sengiria.github.io/art-scope-frontend/)  
**Backend Repo:** [ArtScope Backend on GitHub](https://github.com/Sengiria/art-scope-backend)  
**Hosted API (Hugging Face):** [https://sengiria-art-scope.hf.space/ping](https://sengiria-art-scope.hf.space/ping)

---

## Features

- Upload a painting image and get instant prediction of the artist
- Clean, responsive UI with a soft artistic theme
- Fun and immersive interface, optimized for both desktop and mobile
- Real-time backend predictions via Hugging Face-hosted API

---

##  Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Sengiria/art-scope-frontend.git
cd art-scope-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

The app will be available at http://localhost:5173

### 4. Build for production

```bash
npm run build
```

You can preview the production build using:

```bash
npm run preview
```

##  Backend

This project connects to a custom image classification model hosted on Hugging Face Spaces.
Backend Source Code: [Sengiria/art-scope-backend](https://github.com/Sengiria/art-scope-backend)
Hosted Endpoint: https://sengiria-art-scope.hf.space/ping

## Tech Stack

- Frontend: React + TypeScript + Vite
- Styling: Tailwind CSS + custom themes
- Animations: Framer Motion
- Deployment: GitHub Pages
- Backend API: Python FastAPI hosted via Hugging Face Spaces

## License
This project is licensed under the MIT License.