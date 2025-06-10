import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const HowItWorks = () => {
    const controls = useAnimation();
    const sectionRefs = {
        introduction: useRef(null),
        flowchart: useRef(null),
        visuals: useRef(null),
        demoVideo: useRef(null),
        contact: useRef(null),
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    useEffect(() => {
        const observers = Object.entries(sectionRefs).map(([key, ref]) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        controls.start("visible");
                    }
                },
                { threshold: 0.2 }
            );
            if (ref.current) {
                observer.observe(ref.current);
            }
            return observer;
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, [controls]);

    return (
        <div
            className="min-h-screen text-gray-200 font-sans p-5 overflow-x-hidden"
            style={{
                backgroundImage: 'linear-gradient(to right bottom, #0c0c0f, #181820, #212231, #2b2c43, #363755, #3a3553, #3d3451, #40324e, #362538, #281b25, #191015, #000000)'
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center pt-18 pb-2"
            >
                <h1
                    className="text-4xl  text-purple-300 md:text-5xl font-bold bg-clip-text  mb-4 tracking-tight"
                    style={{
                        
                        backgroundImage: 'linear-gradient(to right, #e2e8f0, #f8fafc, #e2e8f0)' 
                    }}
                >
                    How Our Quality Detection Works
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Advanced AI-powered defect detection for manufacturing excellence
                </p>
            </motion.div>

            {/* Flowchart Section */}
            <motion.section
                ref={sectionRefs.flowchart}
                initial="hidden"
                animate={controls}
                variants={sectionVariants}
                className="max-w-4xl mx-auto my-16 p-8 rounded-xl shadow-lg border border-gray-700"
                style={{
                    background: 'linear-gradient(135deg, rgba(24,24,32,0.7) 0%, rgba(0,0,0,0.9) 100%)'
                }}
            >
                <motion.div variants={itemVariants}>
                    <h2
                        className="text-3xl font-bold mb-6"
                        style={{ color: '#a78bfa' }}
                    >
                        The Detection Process
                    </h2>
                </motion.div>

                <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-8">
                    Our intelligent system follows a streamlined workflow for maximum efficiency
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="w-full h-64 md:h-80 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 border border-gray-600"
                    whileHover={{ scale: 1.01 }}
                >
                    [Process Flowchart Visualization]
                </motion.div>
            </motion.section>

            <motion.section
                ref={sectionRefs.visuals}
                initial="hidden"
                animate={controls}
                variants={sectionVariants}
                className="max-w-4xl mx-auto my-16 p-8 rounded-xl shadow-lg border border-gray-700"
                style={{
                    background: 'linear-gradient(135deg, rgba(24,24,32,0.7) 0%, rgba(0,0,0,0.9) 100%)'
                }}
            >
                <motion.div variants={itemVariants}>
                    <h2
                        className="text-3xl font-bold mb-6"
                        style={{ color: '#a78bfa' }} 
                    >
                        Defect Visualization
                    </h2>
                </motion.div>

                <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-8">
                    See how our system identifies and highlights defects in real-time.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="grid md:grid-cols-2 gap-6"
                >
                    <motion.div
                        className="bg-gray-700 p-6 rounded-lg border border-gray-600"
                        whileHover={{ y: -5 }}
                    >
                        <div className="h-48 bg-gray-600 rounded mb-4 flex items-center justify-center">
                            [Before Detection]
                        </div>
                        <h3
                            className="text-xl font-semibold mb-2"
                            style={{ color: '#f3f4f6' }}
                        >Raw Input</h3>
                        <p className="text-gray-400">Product image before analysis</p>
                    </motion.div>

                    <motion.div
                        className="bg-gray-700 p-6 rounded-lg border border-gray-600"
                        whileHover={{ y: -5 }}
                    >
                        <div className="h-48 bg-gray-600 rounded mb-4 flex items-center justify-center">
                            [After Detection]
                        </div>
                        <h3
                            className="text-xl font-semibold mb-2"
                            style={{ color: '#f3f4f6' }} 
                        >Defects Highlighted</h3>
                        <p className="text-gray-400">AI-identified anomalies marked</p>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* Demo Video Section */}
            <motion.section
                ref={sectionRefs.demoVideo}
                initial="hidden"
                animate={controls}
                variants={sectionVariants}
                className="max-w-4xl mx-auto my-16 p-8 rounded-xl shadow-lg border border-gray-700"
                style={{
                    background: 'linear-gradient(135deg, rgba(24,24,32,0.7) 0%, rgba(0,0,0,0.9) 100%)'
                }}
            >
                <motion.div variants={itemVariants}>
                    <h2
                        className="text-3xl font-bold mb-6"
                        style={{ color: '#a78bfa' }} // Purple-300 for emphasis
                    >
                        See It In Action
                    </h2>
                </motion.div>

                <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-8">
                    Watch our system detect defects in real production scenarios.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg bg-black"
                >
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/EXAMPLE"
                        title="Quality Detection Demo"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </motion.div>
            </motion.section>
            
        </div>
    );
};

export default HowItWorks;



