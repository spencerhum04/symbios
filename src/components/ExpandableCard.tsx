import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExpandableCard({ image, title } : { image: string, title: String }) {

    const [hovered, setHovered] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <>
            <motion.div layoutId={`card-${title}`} className="relative w-full min-w-84 max-w-84 h-90 bg-black rounded-xl px-6 py-8 text-left" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => setOpen(true)}>
                {hovered && (
                    <div className="absolute inset-4 rounded-xl bg-neutral-800/30 backdrop-blur-md transition-all duration-300" />
                )}
                <div className="relative z-10 flex flex-col items-center justify-between h-full">
                    <img src={image} className={`h-56 transition-opacity duration-200 ${hovered ? "opacity-60" : "opacity-50"}`} />
                    <div className="flex flex-row justify-between items-end gap-x-8 w-full">
                        <motion.div layoutId={`title-${title}`} className="text-xl font-medium">{title}</motion.div>
                        <div className="shrink-none rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#8a8f98" viewBox="0 0 256 256"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm44-92a4,4,0,0,1-4,4H132v36a4,4,0,0,1-8,0V132H88a4,4,0,0,1,0-8h36V88a4,4,0,0,1,8,0v36h36A4,4,0,0,1,172,128Z"></path></svg>
                        </div>
                    </div>
                </div>
            </motion.div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                        onClick={() => setOpen(false)}
                        >
                        <motion.div
                        layoutId={`card-${title}`}
                        className="bg-black text-white w-full max-w-3xl h-[75vh] rounded-2xl p-10 relative"
                        onClick={(e) => e.stopPropagation()}
                        >
                        {/* Close Button */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-4 right-4 text-3xl"
                        >
                            &times;
                        </button>

                        {/* Content */}
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