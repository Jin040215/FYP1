# UTS Course Recommendation System (UTSCRS)

A web-based application designed to assist school leavers in selecting suitable university programmes at UTS based on their inherent personality. By utilizing the Big Five Personality Traits model, the system analyzes user responses to a 50-question assessment to generate data-driven course recommendations.

## Features

- **Personality Assessment:** A comprehensive 50-question survey based on the Big Five Personality Traits (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism).
- **Personalized Recommendations:** Algorithmic matching of personality profiles to 18 UTS academic programmes across various categories.
- **Internationalization (i18n):** Full multi-language support including English (ENG), Bahasa Melayu (BM), and Simplified Chinese (CN).
- **Interactive Visualizations:** Radar charts to visualize personality trait scores.
- **Responsive Design:** Fully optimized for both desktop and mobile devices.

## Tech Stack

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Motion (Framer Motion)
- **Charts:** Recharts
- **Icons:** Lucide React

## Local Development Setup

Follow these instructions to run the project locally using an IDE like **Visual Studio Code** or **Cursor**.

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (v18 or higher is recommended). You can download it from [nodejs.org](https://nodejs.org/).
- **Git** (optional, for cloning the repository).

### Getting Started

1. **Open the Project in your IDE:**
   - Open **Visual Studio Code** or **Cursor**.
   - Go to `File > Open Folder...` and select the directory containing this project.

2. **Open the Terminal:**
   - In VS Code or Cursor, open the integrated terminal by navigating to `Terminal > New Terminal` (or pressing `` Ctrl + ` `` / `` Cmd + ` ``).

3. **Install Dependencies:**
   Run the following command in the terminal to install all required packages:
   ```bash
   npm install
   ```

4. **Start the Development Server:**
   Once the installation is complete, start the local development server:
   ```bash
   npm run dev
   ```

5. **View the Application:**
   The terminal will output a local URL (typically `http://localhost:5173` or `http://localhost:3000`). 
   - `Ctrl + Click` (or `Cmd + Click` on Mac) the link in the terminal to open it in your default web browser.

### Building for Production

To create a production-ready build of the application, run:
```bash
npm run build
```
This will generate optimized static files in the `dist` directory. You can preview the production build locally by running:
```bash
npm run preview
```

## Project Structure

- `src/components/`: Reusable UI components (Navbar, Footer, CourseCard, LikertScale, etc.).
- `src/contexts/`: React contexts (e.g., `LanguageContext` for i18n).
- `src/data/`: Static data including the assessment questions and UTS courses.
- `src/i18n/`: Translation files for English, Malay, and Chinese.
- `src/lib/`: Utility functions and scoring algorithms.
- `src/pages/`: Main application views (Home, Assessment, PersonalInfo, Results).
