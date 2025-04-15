import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExpandableCard({ image, title } : { image: string, title: String }) {

    const [hovered, setHovered] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <>
            <motion.div layoutId={`card-${title}`} className="relative w-full min-w-84 max-w-84 h-90 bg-black rounded-xl px-6 py-8 text-left cursor-pointer" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => setOpen(true)}>
                {hovered && (
                    <div className="absolute inset-4 rounded-xl bg-neutral-800/30 backdrop-blur-md transition-all duration-300" />
                )}
                <div className="relative z-10 flex flex-col items-center justify-between h-full">
                    <img src={image} className={`h-56 transition-opacity duration-200 ${hovered ? "opacity-60" : "opacity-50"}`} />
                    <div className="flex flex-row justify-between items-end gap-x-8 w-full">
                        <motion.div layoutId={`title-${title}`} className="text-xl font-medium">{title}</motion.div>
                        <div className="shrink-none rounded-full">
                            {hovered ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#8a8f98" viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"></path></svg>
                                ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#8a8f98" viewBox="0 0 256 256"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm46-90a6,6,0,0,1-6,6H134v34a6,6,0,0,1-12,0V134H88a6,6,0,0,1,0-12h34V88a6,6,0,0,1,12,0v34h34A6,6,0,0,1,174,128Z"></path></svg>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
            <AnimatePresence>
                {open && (
                    <motion.div key="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setOpen(false)}>
                        <motion.div layoutId={`card-${title}`} className="bg-black text-white w-full max-w-3xl h-[75vh] rounded-2xl p-10 relative" onClick={(e) => e.stopPropagation()}>
                            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-3xl">
                                &times;
                            </button>
                            {/* <motion.img layoutId={`image-${title}`} src={image} className="w-full max-h-72 object-cover rounded-xl mb-6" /> */}
                            <motion.div layoutId={`title-${title}`} className="text-3xl font-semibold mb-4">{title}</motion.div>
                            <p className="text-neutral-300 mb-2">
                                This is expanded content. You can add images, text, and whatever
                                else you want here.
                            </p>
                            <p className="text-neutral-400">
                                You can make this section scrollable, add rich visuals, or animate individual parts using Framer Motion too.
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}