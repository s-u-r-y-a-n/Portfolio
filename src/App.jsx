import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { Navbar } from "./components";
import {
  About,
  Architecture,
  Certifications,
  Contact,
  Experience,
  Hero,
  Process,
  Projects,
  Skills,
} from "./pages";

const getInitialTheme = () => {
  const savedTheme = window.localStorage.getItem("surya-theme");
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const App = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("surya-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));

  return (
    <BrowserRouter>
      <div className="app-shell">
        <div className="hero-shell">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Hero />
        </div>
        <About />
        <Skills />
        <Projects />
        <Architecture />
        <Experience />
        <Process />
        <Certifications />
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
