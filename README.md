<div align="center">

# 🎨 Developer Portfolio

### A Modern, Responsive Portfolio to Showcase Your Work

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Framework-06B6D4?style=for-the-badge&logo=tailwindcss)

**A clean, fast, and highly customizable developer portfolio built to highlight your coding skills, experience, and projects with a modern UI and smooth animations.**

[🌐 Live Demo](#) | [📖 Documentation](#features) | [🐛 Report Bug](https://github.com/TanayV24/Portflio-copy/issues) | [💡 Request Feature](https://github.com/TanayV24/Portflio-copy/issues)

</div>

---

## ✨ Features

### 🧑‍💻 **For Developers**
- 🎨 **Modern UI/UX** – Clean, minimalistic layout with subtle animations  
- 📱 **Fully Responsive** – Works perfectly on desktop, tablet, and mobile  
- 🧩 **Reusable Components** – Built using TypeScript + React best practices  
- ⚡ **Fast & Lightweight** – Powered by Vite for instant builds  
- 🖼 **Custom Projects Section** – Highlight your best work visually  
- 🎭 **Smooth Animations** – Elegant transitions and scroll effects  

### 🔧 **Technical Features**
- 📦 **Modular Codebase** – Components, pages, hooks, and assets are cleanly separated  
- 🎯 **Tailwind Utility Classes** – Rapid styling with clean and scalable code  
- 🔍 **SEO Optimized** – Metadata, title tags, and structure ready for visibility  
- 🌙 **Easily Stylable** – Colors, fonts, and theme changes take minutes  
- 🚀 **Deploy Anywhere** – Vercel, Netlify, GitHub Pages, Cloudflare Pages  

---

## 🛠 Tech Stack

<table>
<tr>
<td width="50%" valign="top">

### Frontend
- **Framework:** React (TypeScript)
- **Styling:** TailwindCSS
- **Build Tool:** Vite
- **Animation:** Custom Hooks / CSS Transitions
- **Routing:** Optional React Router

</td>
<td width="50%" valign="top">

### Tools
- **Package Manager:** npm  
- **Bundler Optimization:** Vite  
- **Assets:** Local static files  
- **Deployment:** Vercel / Netlify / GitHub Pages  
- **Linting:** ESLint (optional)

</td>
</tr>
</table>

---

## 📋 Prerequisites

Ensure the following tools are installed:

| Tool | Version | Download Link |
|------|---------|---------------|
| 🐍 Node.js | 16.x or higher | https://nodejs.org |
| 📦 npm | 7.x or higher | Comes with Node |
| 💻 Git | Latest | https://git-scm.com |

**Verify installation:**

```

node --version
npm --version
git --version

```

---

## ⚙️ Installation & Setup

### 🚀 Quick Start (2 Minutes)

1. **Clone the repository**
```

git clone [https://github.com/TanayV24/Portflio-copy.git](https://github.com/TanayV24/Portflio-copy.git)
cd Portflio-copy

```

2. **Install dependencies**
```

npm install

```

3. **Run the development server**
```

npm run dev

```

4. **Build for production**
```

npm run build

```

---

## 🎮 How to Use

1. Run the dev server  
2. Open the URL (usually `http://localhost:5173`)  
3. Edit your personal info in these components:  
   - `Hero.tsx`  
   - `About.tsx`  
   - `Skills.tsx`  
   - `Work.tsx`  
4. Add/remove skills inside `public/assets/Skills/`  
5. Add project thumbnails inside `public/assets/projects/`  
6. Customize theme colors in `tailwind.config.js`

---

## 📁 Project Structure

```

Portflio-copy/
│
├── public/
│   └── assets/
│       ├── Skills/            # Skill icons
│       ├── app/               # Logos and misc assets
│       └── projects/          # Project images
│
└── src/
├── components/            # UI Components
│   ├── Hero.tsx
│   ├── NavBar.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Work.tsx
│   └── Footer.tsx
│
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
│
├── hooks/
├── lib/
│
├── App.tsx
├── main.tsx
├── index.css
└── App.css

```

---

## 🎨 Customization

### 🔧 Update Personal Details
- Edit name, role, about section  
- Replace placeholder images  
- Update social links (GitHub, LinkedIn, etc.)  

### 🖼 Update Projects
- Add images in `public/assets/projects/`  
- Update project details inside `Work.tsx`

### 🎭 Customize Theme  
Modify:  
```

tailwind.config.js

```

---

## 🐛 Troubleshooting

<details>
<summary>App does not start</summary>

Run:
```

npm install
npm run dev

```
Ensure Node version is ≥ 16.
</details>

<details>
<summary>Styling not working</summary>

Check:
```

index.css
tailwind.config.js

```
Ensure Tailwind directives exist.
</details>

<details>
<summary>Images not showing</summary>

Place images in:
```

public/assets/projects/

```
and restart dev server.
</details>


