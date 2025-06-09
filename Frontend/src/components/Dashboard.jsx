import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx"; // Make sure to install: npm install clsx

// Optional: You can install and use icon libraries for better visuals
// For example, using Heroicons: npm install @heroicons/react
import { CheckCircleIcon, StarIcon } from '@heroicons/react/24/solid'; // Example icons

const Home = () => {
  // Define animation variants for reusability
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Data for the "Precision for Every Device" section
  const deviceShowcaseItems = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPpHRs0RsSwMRrSyDWIXXHJL4WD6fVi8J4A&s",
      title: "Smartphones & Wearables",
      desc: "Flawless screens, perfect circuits.",
      color: "text-teal-300", // Use full Tailwind class string
      fallback: "Smartphone",
    },
    {
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      title: "Laptops & Computers",
      desc: "Ensuring every component is pixel-perfect.",
      color: "text-blue-300",
      fallback: "Laptop",
    },
    {
      img: "https://asimily.com/wp-content/uploads/2024/11/11-Common-IoT-Devices-That-Are-Vulnerable-to-Hacking.png",
      title: "IoT & Smart Home",
      desc: "Smart devices, smarter quality.",
      color: "text-purple-300",
      fallback: "IoT Gadget",
    },
  ];

  // Data for the "Impact Across Industries" section
  const industryImpactItems = [
    {
      img: "https://images.ctfassets.net/v7wr16nrr0mz/4TDbNAhdMu1Gbl4WBDoHSn/519159862b2319133092f2e833b72aea/automotive-industry-trends-banner-1920x1080.jpg",
      title: "Automotive",
      desc: "Ensuring vehicle component integrity.",
      color: "text-orange-300",
      fallback: "Automotive",
      link: "https://www.oxyzo.in/blogs/artificial-intelligence-in-the-automobile-industry/147592"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661885246527-dc13405d3ec6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWVyb3NwYWNlfGVufDB8fDB8fHww",
      title: "Aerospace",
      desc: "Critical inspections for flight safety.",
      color: "text-cyan-300",
      fallback: "Aerospace",
      link: "https://easyodm.tech/aerospace-manufacturing-with-ai/"
    },
    {
      img: "https://housing.com/news/wp-content/uploads/2023/10/medical-equipment-manufacturers-in-Chennai-f-compressed.jpg",
      title: "Medical Fields",
      desc: "Uncompromising standards for health.",
      color: "text-red-300",
      fallback: "Medical Devices",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7640807/"
    },
    {
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      title: "Consumer Electronics",
      desc: "Delivering premium product experiences.",
      color: "text-indigo-300",
      fallback: "Consumer Electronics",
      link: "https://gembah.com/blog/ais-role-in-electronics-manufacturing/#:~:text=AI%2Ddriven%20image%20analysis%20can,detection%20can%20prevent%20costly%20errors."
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-6 p-4 md:p-8 min-h-screen w-full overflow-x-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to right bottom, #0c0c0f, #181820, #212231, #2b2c43, #363755, #3a3553, #3d3451, #40324e, #362538, #281b25, #191015, #000000)",
        color: "#e0e0e0",
        fontFamily: "'Manrope', sans-serif",
      }}
    >
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center w-full px-2"
      >
        <motion.h1
          className={clsx(
            "text-5xl sm:text-6xl md:text-7xl font-bold mb-1 pt-20 sm:pt-6 pb-3 bg-clip-text text-transparent leading-tight",
            // Adjusted font sizes for better responsiveness on small screens
          )}
          style={{
            backgroundImage:
              "linear-gradient(to right, #93c5fd, #a78bfa, #c4b5fd)",
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            letterSpacing: "1px",
            textShadow: "0 2px 10px rgba(167, 139, 250, 0.3)",
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          NeuroSpec
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-400 px-2 max-w-4xl mx-auto" // Added max-width for better line length
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 300,
            letterSpacing: "0.5px",
            fontStyle: "italic",
          }}
        >
          Top-notch quality — Defect ko bole Bye Bye!
        </motion.p>
      </motion.header>

      {/* Section: Precision for Every Device */}
      <motion.section
        className="p-4 sm:p-6 rounded-xl shadow-2xl border border-gray-800 mt-4 sm:mt-8 mx-auto w-full max-w-7xl"
        style={{
          background:
            "linear-gradient(to br, rgba(52,211,153,0.1), rgba(0,0,0,0.7))",
        }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 text-green-200"
          style={{
            fontFamily: "'Oxanium', sans-serif",
            fontWeight: 600,
            letterSpacing: "0.5px",
            textShadow: "0 2px 8px rgba(52, 211, 153, 0.2)",
          }}
        >
          Precision for Every Device
        </h2>
        <p
          className="text-base sm:text-lg text-center text-gray-300 mb-6 sm:mb-8 px-2 sm:px-0 max-w-3xl mx-auto"
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 400,
            lineHeight: "1.8",
          }}
        >
          NeuroSpec ensures{" "}
          <span className="font-semibold text-green-300">
            top-notch quality
          </span>{" "}
          across a vast spectrum of electronic devices, from the smallest IoT
          gadgets to sophisticated industrial equipment.
        </p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-center"
          variants={sectionVariants} // Apply stagger to children here
        >
          {deviceShowcaseItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-3 sm:p-4 rounded-lg bg-gray-900 bg-opacity-50"
              variants={itemVariants} // Each item animates individually
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-lg mb-3 sm:mb-4 shadow-md"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }} // Adjusted delay slightly
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/200x200/5eead4/0f172a?text=${item.fallback.replace(/\s/g, '+')}`; // Replaced target with currentTarget, encoded text for URL
                  e.currentTarget.alt = `Image not available for ${item.fallback}`; // Improved fallback alt text
                }}
              />
              <h3
                className={clsx(
                  `text-lg sm:text-xl font-semibold mb-1 sm:mb-2`,
                  item.color // Dynamically add color class
                )}
                style={{
                  fontFamily: "'Oxanium', sans-serif",
                  fontWeight: 500,
                }}
              >
                {item.title}
              </h3>
              <p
                className="text-xs sm:text-sm text-gray-400 text-center"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 300,
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Section: Revolutionizing Production Lines */}
      <motion.section
        className="p-4 sm:p-6 rounded-xl shadow-2xl border border-gray-800 mt-6 sm:mt-8 mx-auto w-full max-w-7xl"
        style={{
          background:
            "linear-gradient(to br, rgba(236,72,153,0.1), rgba(0,0,0,0.7))",
        }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 text-pink-300"
          style={{
            fontFamily: "'Oxanium', sans-serif",
            fontWeight: 600,
            letterSpacing: "0.5px",
          }}
        >
          Revolutionizing Production Lines
        </h2>
        <p
          className="text-base sm:text-lg text-center text-gray-300 mb-6 sm:mb-8 px-2 sm:px-0 max-w-3xl mx-auto"
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 400,
            lineHeight: "1.8",
          }}
        >
          NeuroSpec integrates seamlessly into manufacturing processes,
          providing{" "}
          <span className="font-semibold text-pink-200">
            real-time defect detection
          </span>{" "}
          and quality control.
        </p>
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-around gap-6 sm:gap-8"
          variants={sectionVariants} // Apply stagger to children here
        >
          <motion.img
            src="https://media.istockphoto.com/id/1320950393/photo/cars-on-production-line-in-factory.jpg?s=612x612&w=0&k=20&c=WgJLxtOWIGt80cbC0OFc3wQAhraIxlz_H7l-ySDxkOw="
            alt="Automated car production line in a factory" // More descriptive alt text
            className="w-full lg:w-1/2 xl:w-2/5 object-cover rounded-xl shadow-xl border border-purple-500 max-h-64 sm:max-h-80 md:max-h-96"
            variants={itemVariants}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/300x200/d8b4fe/0f172a?text=Factory+Floor";
              e.currentTarget.alt = "Image not available for Factory Floor";
            }}
          />
          <motion.div
            className="w-full lg:w-1/2 xl:w-3/5 p-2 sm:p-4"
            variants={itemVariants}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3
              className="text-xl sm:text-2xl font-bold text-purple-300 mb-2 sm:mb-3"
              style={{
                fontFamily: "'Oxanium', sans-serif",
                fontWeight: 500,
              }}
            >
              AI-Powered Inspection
            </h3>
            <p
              className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"
              style={{
                fontFamily: "'Manrope', sans-serif",
                lineHeight: "1.7",
                fontWeight: 400,
              }}
            >
              Our advanced algorithms identify anomalies at an unprecedented
              speed and accuracy, far surpassing traditional manual inspections.
            </p>
            <ul
              className="list-disc list-inside text-gray-400 space-y-1 sm:space-y-2 pl-4 sm:pl-5 text-sm sm:text-base"
              style={{
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              {[
                "Reduced Rework & Scrap",
                "Increased Throughput",
                "Consistent Product Quality",
                "Predictive Maintenance Insights",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants} // Each list item animates individually
                  whileHover={{ x: 5 }}
                  style={{
                    fontWeight: 400,
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Section: Impact Across Industries */}
      <motion.section
        className="p-4 sm:p-6 rounded-xl shadow-2xl border border-gray-800 mt-6 sm:mt-8 mx-auto w-full max-w-7xl"
        style={{
          background:
            "linear-gradient(to br, rgba(251,191,36,0.1), rgba(0,0,0,0.7))",
        }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 text-yellow-300"
          style={{
            fontFamily: "'Oxanium', sans-serif",
            fontWeight: 600,
            letterSpacing: "0.5px",
          }}
        >
          Impact Across Industries
        </h2>
        <p
          className="text-base sm:text-lg text-center text-gray-300 mb-6 sm:mb-8 px-2 sm:px-0 max-w-3xl mx-auto"
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 400,
            lineHeight: "1.8",
          }}
        >
          NeuroSpec's adaptable AI platform provides{" "}
          <span className="font-semibold text-yellow-200">
            significant value
          </span>{" "}
          across diverse industries.
        </p>
        <motion.div
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          variants={sectionVariants} // Apply stagger to children here
        >
          {industryImpactItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-3 sm:p-4 rounded-lg bg-gray-900 bg-opacity-50 group" // Added group for potential future hover effects
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.link ? ( // Conditionally render an anchor tag if link exists
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    className="w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover rounded-lg mb-3 sm:mb-4 shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/200x200/5eead4/0f172a?text=${item.fallback.replace(/\s/g, '+')}`;
                      e.currentTarget.alt = `Image not available for ${item.fallback}`;
                    }}
                  />
                </a>
              ) : (
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover rounded-lg mb-3 sm:mb-4 shadow-md"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/200x200/5eead4/0f172a?text=${item.fallback.replace(/\s/g, '+')}`;
                    e.currentTarget.alt = `Image not available for ${item.fallback}`;
                  }}
                />
              )}

              <h3
                className={clsx(
                  `text-base sm:text-lg md:text-xl font-semibold mb-1`,
                  item.color,
                  item.link && "group-hover:underline cursor-pointer" // Add underline and cursor if link exists
                )}
                style={{
                  fontFamily: "'Oxanium', sans-serif",
                  fontWeight: 500,
                }}
              >
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h3>
              <p
                className="text-xs text-gray-400 text-center"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 300,
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Quality badge */}
      <motion.div
        className="flex justify-center mt-6 sm:mt-8 pb-6 sm:pb-8 px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div
          className="text-white px-4 sm:px-6 py-2 sm:py-3 md:px-8 md:py-4 rounded-full shadow-lg flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg whitespace-nowrap" // Added whitespace-nowrap to prevent breaking
          style={{
            backgroundImage:
              "linear-gradient(to right, #4c40b8, #6d28d9, #9333ea)",
            fontFamily: "'Oxanium', sans-serif",
            fontWeight: 500,
          }}
        >
          <motion.span
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
          >
            <CheckCircleIcon className="h-5 w-5 sm:h-6 sm:w-6" /> {/* Icon added */}
          </motion.span>
          <span>High Quality Assurance — Your Trust, Our Priority!</span>
          <motion.span
            animate={{ rotate: [0, -15, 15, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatDelay: 3,
              delay: 0.5,
            }}
          >
            <StarIcon className="h-5 w-5 sm:h-6 sm:w-6" /> {/* Icon added */}
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;