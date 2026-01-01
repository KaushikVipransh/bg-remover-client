import toast from "react-hot-toast";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Header = () =>{
    return(
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                {/* left side */}
                <div className="order-1 md:order-1 flex justify-center">

                    <div className="shadow[0_50px_50px_-12px_rgba(0,0,0,0.15)] rounded-4xl overflow-hidden">
                        
                        <video src={assets.video_banner} autoPlay loop muted className="w-full max-w-[400] h-auto object-cover" />

                    </div>

                </div>
                

                {/* right side */}
                <div className="order-1 md:order-2">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        <span className="text-gray-900">
                            {"Background.".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.05, delay: index * 0.05 }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                        <span className="text-indigo-700">
                            {"Removed.".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.05, delay: 0.55 + index * 0.05 }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </span><br />
                        <span className="text-gray-900">
                            {"Beautifully.".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.05, delay: 1.1 + index * 0.05 }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                    </h1>
                

                <motion.p className="text-gray-600 mb-8 text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 1 }}
                >
                    Remove image backgrounds effortlessly in seconds.
                    Powered by smart AI to deliver clean, precise cutouts every time.
                    Fast, reliable, and designed to make your visuals stand out.
                </motion.p>

                
                
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2, duration: 1 }}
                >
                    <input type="file" accept="image/*" id="upload1" hidden />
                    <label htmlFor="upload1" className="bg-black text-white font-medium px-8 py-4 rounded-full hover:opacity-90 transition-transform hover:scale-105 text-lg">
                        Upload Image
                    </label>
                    
                </motion.div>

                </div>

            </div>
        </div>
    )
}
export default Header;