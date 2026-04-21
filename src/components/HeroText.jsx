import { FlipWords } from "./FlipWords";
import {motion} from "motion/react"

const HeroText = () => {
    const words=["Problem Solver", "CS Student", "Patient", "Perfectionist", "Curious", "Developer", "Autodidactic", "Nineteen", "Focused", "Self-Driven", "Thinker", "Listener"]
    const variants={
        hidden: { opacity:0, x: -50 },
        visible: { opacity:1, x:0 },
    };
    return (<div className="z-10 mt-20  md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/*pc*/}
        <div className="flex-col mt-20 hidden md:flex c-space">   
            <motion.h1 className="text-4xl text-neutral-300 font-medium" variants={variants} initial="hidden" animate="visible" transition={{delay:1}}>Hi,</motion.h1>
            <div className="flex flex-col items-craft">
                        <motion.p className="text-5xl font-medium" variants={variants} initial="hidden" animate="visible" transition={{delay:1.2}}>I am Anish</motion.p>
                <motion.div variants={variants} initial="hidden" animate="visible" transition={{delay:1.2}}><FlipWords words={words} className="font-black text-white text-8xl"/></motion.div>
                {/*<motion.p className="text-4xl font-medium text-neutral-300" variants={variants} initial="hidden" animate="visible" transition={{delay:1.8}}>Projects</motion.p>*/}
            </div>
        </div>
        {/*mobile*/}
        <div className="flex-col">
            <div className="flex text-center flex-col space-y-4 md:hidden">
                <motion.p className="text-3xl font-medium" variants={variants} initial="hidden" animate="visible" transition={{delay:1}}>Hi, I'm Anish</motion.p>
                <div className="">
                    {/*<motion.p className="text-5xl font-black text-neutral-300" variants={variants} initial="hidden" animate="visible" transition={{delay:1.2}}>Building</motion.p>*/}
                    <motion.div className="min-h-[160px]" variants={variants} initial="hidden" animate="visible" transition={{delay:1.2}}><FlipWords words={words} className= "font-bold text-white text-5xl"/></motion.div>
                    {/*<motion.p className="text-4xl font-black text-neutral-400" variants={variants} initial="hidden" animate="visible" transition={{delay:1.8}}></motion.p>*/}
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default HeroText;