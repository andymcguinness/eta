import About from "./components/about";
import Hero from "./components/hero";
import NavBar from "./components/navbar";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
