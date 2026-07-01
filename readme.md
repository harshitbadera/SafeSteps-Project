npm# SafeSteps

**Teach seniors how to use common apps and stay safe online.**  
A simple, accessible PWA with bite‑sized lessons, demos, quizzes, and printable safety checklists.

## Why
Many older adults struggle with new social platforms and online scams. SafeSteps gives step-by-step lessons for apps like WhatsApp and Swiggy and practical tips to spot phishing and protect accounts.

## MVP features
- 5 lessons (phone basics, WhatsApp, food ordering, phishing, passwords, safe downloads)
- Step-by-step guides with slide format 
- Short quiz after each lesson
- Read‑aloud voice option, large fonts, high contrast
- PWA offline support and printable checklists
- Basic analytics for progress and lesson completion

## Tech stack (MVP)
### Frontend

- **React** – build UI using reusable components  
- **Vite** – fast development server and build tool  
- **Tailwind CSS** – utility‑based styling for quick, responsive, accessible UI  
- **React Router** – for navigation between pages (Home, Lessons, Lesson, Quiz)

### PWA Support

- **Vite PWA plugin** (`vite-plugin-pwa`) to:
  - make the app installable on phones  
  - enable offline caching of important pages  

### Backend, Database & Files (Firebase)

- **Firebase Authentication** (optional for MVP)  
  - allows simple login if needed later  
- **Cloud Firestore**  
  - stores lessons, quiz data, and user progress  
- **Firebase Storage**  
  - stores images, audio files, and small demo clips  
- **Firebase Hosting**  
  - deploys the PWA with HTTPS and a public URL

### Dev Tools

- **VS Code** – main code editor  
- **Git + GitHub** – version control and collaboration  
- **GitHub Issues/Projects** – for tracking tasks and bugs  



## Run locally (dev)
1. Clone repo  
   `git clone https://github.com/<your-org>/SeniorSafe.git`
2. Install  
   `cd SeniorSafe`  
   `npm install`
3. Start dev server  
   `npm start`
4. Build for production  
   `npm run build`  
   (Deploy to Firebase Hosting / Vercel)

## Contributing
See `CONTRIBUTING.md` for guidelines. Short version: open an issue to propose features, branch from `dev`, send PRs to `dev`.

## License
This project is MIT licensed — see `LICENSE`.

## Contact
Project leads: Rashi Goyal  & Harshit  Badera
Mentor: <Mentor Name> — for suggestions and testing opportunities.
Temporary changes to readme file 

chnages made by rashi now