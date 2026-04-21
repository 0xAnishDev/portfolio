import { useState } from "react";
import { AnimatePresence, motion } from "motion/react"
const OpenResumeButton = () => {
    return (
        <motion.button
            onClick={() => window.open("assets/resume.pdf", "_blank")}
            whileHover={{y: -5}}
            whileTap={{scale: 1.05}}
            className="relative px-1 py-4 text-sm text-center rounded-full font-extralight btn-gradient w-[12rem] cursor-pointer">
            <motion.p className="flex items-center justify-center gap-2" initial={{opacity:0, y: -10}} animate={{opacity:1, y:0}} transition={{duration: 0.1, ease: "easeInOut"}}>
                <img src="assets/copy.svg" className="w-5" alt="copy-icon" />
                Open Resume
            </motion.p>
        </motion.button>
    );
}
 
export default OpenResumeButton;

