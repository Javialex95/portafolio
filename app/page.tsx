import InfoBanner from "./components/info-banner";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
  return (
    <div className="font-sans  ">
      <main className="container pt-14">
        <div className="flex flex-col gap-6">
          <InfoBanner />
          <Skills />
        </div>
        <Projects />
      </main>
    </div>
  );
}
