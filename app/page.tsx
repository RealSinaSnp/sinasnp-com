// @/app/page.tsx

import Projects from "@/components/Projects";
import PortfolioHeader from "@/components/HeaderPortfolio";
import InfoCard2 from "@/components/InfoCard2";
import InfoCard1 from "@/components/InfoCard1";
import StackedCardsClient from "@/components/StackedCards";
import Footer from "@/components/FooterMain";
import { webSkills, dataSkills, interests, characteristics, webLogos, dataLogos } from "./data";

export default function CVPage() {
  return (
    <div className="z-10 bg-[#f8fffb] text-black dark:bg-[#030504] dark:text-white bg-gradient-noise">
      
      <div className="relative">
        <div className="grid-lines opacity-15 dark:opacity-100"></div>

        <PortfolioHeader />
      </div>
      

      <div className="pt-15 md:pt-20 max-w-7xl mx-auto">

      <section className="p-6" id="about">
        <div className="flex flex-col pb-7 gap-6 lg:flex-row lg:items-start lg:justify-between max-w-xl space-y-12">
          <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl tracking-tight">
            <span>[</span>
            <span>About Me</span>
            <span>]</span>
          </h2>
      </div>
        <p className="text-base">
        Web developer with a passion for creating user-friendly designs and experience in both frontend and backend development.
        Having graduated with a degree in Computer Programming, I possess a solid foundation in programming and problem-solving skills.
        </p>
      </section>


      <section className="p-6 flex flex-col lg:flex-row gap-6 max-w-7xl w-full mx-auto" id="skills-tools">
        <div className="flex-[3.5] min-w-0">
          <InfoCard1 
            title="Web Development" 
            color="text-sky-700 dark:text-sky-500" 
            items={webSkills} 
            isTrans={true} 
            logos={webLogos} 
            description={`Web developer with a 3-year background in web design and familiar with backend technologies. I can structure responsive layouts, style them cleanly, and inject interactivity without overcomplicating things. I’m comfortable setting up servers and managing deployment pipelines with Docker.`}
          />
        </div>
        <div className="flex-[3.5]">
          <InfoCard1 
            title="Network Engineering" 
            color="text-sky-700 dark:text-sky-500" 
            items={dataSkills} 
            isTrans={true} 
            logos={dataLogos} 
            description={`I have a strong technical background in network management, system administration, and practical problem-solving, with an interest in network and web technologies. I’m experienced in managing computer networks and using them effectively in web applications.`}
          />
        </div>
      </section>

      <section className="p-6 flex flex-col lg:flex-row gap-6 max-w-7xl w-full mx-auto" id="skills-tools">
        <div className="flex-[3]">
          <StackedCardsClient/>
        </div>
        
        <div className="flex-[1.5]">
          <InfoCard2 title="Programming Languages" color="text-sky-700 dark:text-sky-500" items={interests} showCheckmarks isTrans={false} customTilt={5} />
        </div>
        <div className="flex-[1.4]">
          <InfoCard2 title="Interests" color="text-sky-700 dark:text-sky-500" items={characteristics} showCheckmarks isTrans={false} customTilt={5} />
        </div>
        
      </section>

      <Projects />
      

      </div>
      
      <Footer />

    </div>
    
  );
}
