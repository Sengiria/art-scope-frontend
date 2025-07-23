import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "./Button";
const base = import.meta.env.BASE_URL

const sampleImage = `${base}starry.jpg`;
const samplePainter = `${base}van_gogh.jpg`;

const AnimationIntro = ({ onStart }: { onStart: () => void }) => {
    const [phase, setPhase] = useState<"blurred" | "reveal">("blurred");

    useEffect(() => {
        const sequence = async () => {
            await new Promise((res) => setTimeout(res, 2700));
            setPhase("reveal");
        };

        sequence();
    }, []);

    return (
        <div className="flex flex-col gap-4 sm:text-center sm:items-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 sm:gap-y-4 sm:gap-x-12 max-w-5xl mx-auto mt-4 sm:mt-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="hidden sm:flex justify-center items-center w-64"
                >
                    <span>Upload a famous painting</span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: phase === "reveal" ? 1 : 0, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-rose-700 text-lg sm:text-xl text-center font-semibold flex justify-center w-64"
                >
                    {phase === "reveal" ? <span>95% match!</span> : <span className="opacity-0">95% match!</span>}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.8 }}
                    className="hidden sm:flex justify-center items-center w-64"
                >
                    <span>Let the model guess</span>
                </motion.div>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 sm:gap-x-12 items-center justify-items-center max-w-5xl mx-auto mt-4">
                <motion.div
                    key="painting-block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center justify-center h-full"
                >
                    <motion.img
                        src={sampleImage}
                        alt="Sample painting used in the demo"
                        className="w-32 h-32 sm:w-64 border-2 border-rose-700 sm:h-64 object-cover rounded-xl shadow-xl transition-all duration-1000"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    />
                </motion.div>
                <motion.div
                    key="arrow"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                    className="text-5xl text-rose-700 w-48 sm:w-64 flex justify-center"
                >
                    <span className="block sm:hidden animate-bounce" aria-hidden="true">↓</span>
                    <span className="hidden sm:block animate-bounce-x">→</span>
                </motion.div>

                <motion.div
                    key="painter-block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 1 }}
                    className="flex flex-col items-center justify-center h-full"
                >
                    <motion.img
                        src={samplePainter}
                        alt="Vincent van Gogh, the predicted painter"
                        className={`w-32 h-32 sm:w-64 sm:h-64 border-2 border-rose-700 rounded-full object-cover shadow-lg transition-all duration-1000 ${phase === "blurred" ? "blur-md" : ""}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2, duration: 0.8 }}
                    />
                </motion.div>
            </div>
            <div className="flex justify-center">

                <div className="mt-6 h-20">
                    {phase === "reveal" && (
                        <Button
                            onClick={onStart}
                            text="Try it"
                            highlight="out"
                            icon="🎨"
                            backgroundUrl="https://png.pngtree.com/thumb_back/fh260/background/20240103/pngtree-vivid-watercolor-textured-art-an-artistic-background-bursting-with-color-image_13896463.png"
                            gradientFrom="rgba(180, 81, 23, 0.6)"
                            gradientTo="rgba(238, 223, 141, 0.7)"
                            highlightColor="text-rose-700"
                            shadowColor="#663b1bff"
                        />
                    )}
                </div>


            </div>
        </div>
    );
};

export default AnimationIntro;
