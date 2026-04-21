import Card from "../components/Card";
import { useRef } from "react";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import OpenResumeButton from "../components/OpenResumeButton";
import { useMediaQuery } from "react-responsive";

const About = () => {
    const grid2Container = useRef();
    const isMobile = useMediaQuery({maxWidth: 853});
    return (
    <section className="c-space section-spacing" id="about">
        <h2 className="text-heading">About Me</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
                <div className="flex items-end grid-default-color grid-1">
                    <img src="assets/coding-pov.png" className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"></img>
                    <div className="z-10">
                        <p className="headtext">Hi, I'm Anish Naik</p>
                        {isMobile ?
                        <>
                        
                        <p className="subtext">I’m a full-stack developer.
                        Currently, I’m expanding my skill set into machine learning, combining development with data-driven intelligence.
                        </p></>
                        :
                        
                        <p className="subtext">I enjoy building things that people actually use, from interactive Discord bots to full-stack applications. I’m especially drawn to systems that combine logic, creativity, and real-world impact.
                        Currently, I’m expanding my skill set into machine learning, combining development with data-driven intelligence.
                        </p>}
                    </div>
                    <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"/>
                </div>

                <div className="flex items-end grid-black-color grid-2">
                    <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                        <p className="flex items-end text-5xl text-gray-500">SKILLS</p>
                        {/*<Card style={{rotate: "75deg", top:"30%", left:"20%"}} image="assets/logos/csharp-pink.png" containerRef={grid2Container}/>*/}
                        <Card style={{rotate: "-160deg", top:"70%", left:"30%"}} text="Teamwork" containerRef={grid2Container}/>
                        <Card style={{rotate: "600deg", top:"55%", left:"0%"}} text="Problem Solving" containerRef={grid2Container}/>
                        <Card style={{rotate: "-20deg", top:"60%", left:"60%"}} text="Analysis" containerRef={grid2Container}/>
                        <Card style={{rotate: "-20deg", top:"0%", left:"30%"}} text="Pattern Recognition" containerRef={grid2Container}/>
                        <Card style={{rotate: "20deg", top:"30%", left:"10%"}} text="Composure" containerRef={grid2Container}/>
                        <Card style={{rotate: "-10deg", top:"10%", left:"0%"}} text="Perfectionist" containerRef={grid2Container}/>
                        <Card style={{rotate: "30deg", top:"10%", left:"65%"}} text="Interpersonal Insight" containerRef={grid2Container}/>
                        <Card style={{rotate: "70deg", top:"50%", left:"10%"}} text="Speaking" containerRef={grid2Container}/>
                        <Card style={{rotate: "-80deg", top:"40%", left:"55%"}} text="Listening" containerRef={grid2Container}/>
                    </div>
                </div>

                <div className="grid-default-color grid-3">
                    <div className="grid-overlay"></div>
                    <div className="z-10 w-[50%] pt-[20%]">
                        {/*<p className="headtext pl-2 pb-3">Resume</p>*/}
                        <OpenResumeButton />
                    </div>
                    <img src="./assets/pic.png" className="absolute left-[35%] md:left-[25%] top-[5%] bg-purple-radial hover:scale-102 pointer-events-none" />
                </div>

                <div className="flex items-end grid-special-color grid-4">
                    <div className="flex flex-col items-center justify-center gap-4 size-full">
                        <p className="text-center headtext">Let's collaborate?</p>
                        <CopyEmailButton />
                    </div>
                </div>

                <div className="flex items-end grid-default-color grid-5">
                    <div className="z-10 w-[50%]">
                        <p className="headText">Tech Stack</p>
                        <p className="subtext">I specialize in a variety of languages, frameworks and tools that allow me to build robust and scalable application</p>
                    </div>
                    <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                        <Frameworks />
                    </div>
                </div>
            </div>
        
    </section>
    );
};
 
export default About;