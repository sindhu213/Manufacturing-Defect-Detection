// import React from "react";
// import { motion } from "framer-motion";

// // ChartJS and DashboardCard imports removed as they are no longer used.

// const Home = () => {
//   // Chart data and DashboardCard component are removed as they are no longer used.

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//         when: "beforeChildren",
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="flex flex-col gap-8 p-4 md:p-8 min-h-screen font-inter"
//       style={{
//         backgroundImage:
//           "linear-gradient(to right bottom, #0c0c0f, #181820, #212231, #2b2c43, #363755, #3a3553, #3d3451, #40324e, #362538, #281b25, #191015, #000000)",
//         color: "#e0e0e0",
//       }}
//     >
//       {/* Header with animated name and slogan */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3, duration: 0.8 }}
//         className="text-center"
//       >
//         <motion.h1
//           className="text-4xl md:text-5xl font-extrabold mb-2 py-12 bg-clip-text text-transparent leading-tight"
//           style={{
//             backgroundImage:
//               "linear-gradient(to right, #93c5fd, #a78bfa, #c4b5fd)",
//           }}
//           whileHover={{ scale: 1.02 }}
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           NeuroSpec
//         </motion.h1>
//         <motion.p
//           className="text-xl md:text-2xl font-semibold text-gray-400"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//         >
//           Top-Notch Quality - Defect ko bole Bye Bye!
//         </motion.p>
//       </motion.div>

//       {/* Dashboard cards section removed */}
//       {/* Animated chart section removed */}

//       {/* Section: Precision for Every Device */}
//       <motion.div
//         className="p-6 rounded-xl shadow-2xl border border-gray-800 mt-8"
//         style={{
//           background:
//             "linear-gradient(to br, rgba(52,211,153,0.1), rgba(0,0,0,0.7))",
//         }}
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-green-300">
//           Precision for Every Device
//         </h2>
//         <p className="text-lg text-center text-gray-300 mb-8 max-w-3xl mx-auto">
//           NeuroSpec ensures top-notch quality across a vast spectrum of
//           electronic devices, from the smallest IoT gadgets to sophisticated
//           industrial equipment. Our AI-driven inspection systems catch
//           microscopic defects, guaranteeing flawless performance.
//         </p>
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
//           variants={sectionVariants}
//         >
//           <motion.div
//             className="flex flex-col items-center p-4 rounded-lg bg-gray-900 bg-opacity-50"
//             variants={itemVariants}
//             whileHover={{ y: -5, scale: 1.03 }}
//             transition={{ type: "spring", stiffness: 400 }}
//           >
//             <motion.img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPpHRs0RsSwMRrSyDWIXXHJL4WD6fVi8J4A&s"
//               alt="Smartphone"
//               className="w-48 h-48 object-cover rounded-lg mb-4 shadow-md" // object-cover for better image fit
//               initial={{ rotateY: 90, opacity: 0 }}
//               animate={{ rotateY: 0, opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//               onError={(e) => {
//                 e.target.src =
//                   "https://placehold.co/200x200/5eead4/0f172a?text=Smartphone";
//               }} // Fallback
//             />
//             <h3 className="text-xl font-semibold text-teal-300">
//               Smartphones & Wearables
//             </h3>
//             <p className="text-sm text-gray-400 mt-2 text-center">
//               Flawless screens, perfect circuits.
//             </p>
//           </motion.div>
//           <motion.div
//             className="flex flex-col items-center p-4 rounded-lg bg-gray-900 bg-opacity-50"
//             variants={itemVariants}
//             whileHover={{ y: -5, scale: 1.03 }}
//             transition={{ type: "spring", stiffness: 400 }}
//           >
//             <motion.img
//               src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
//               alt="Laptop"
//               className="w-48 h-48 object-cover rounded-lg mb-4 shadow-md"
//               initial={{ rotateY: 90, opacity: 0 }}
//               animate={{ rotateY: 0, opacity: 1 }}
//               transition={{ delay: 0.4, duration: 0.6 }}
//               onError={(e) => {
//                 e.target.src =
//                   "https://placehold.co/200x200/93c5fd/0f172a?text=Laptop";
//               }} // Fallback
//             />
//             <h3 className="text-xl font-semibold text-blue-300">
//               Laptops & Computers
//             </h3>
//             <p className="text-sm text-gray-400 mt-2 text-center">
//               Ensuring every component is pixel-perfect.
//             </p>
//           </motion.div>
//           <motion.div
//             className="flex flex-col items-center p-4 rounded-lg bg-gray-900 bg-opacity-50"
//             variants={itemVariants}
//             whileHover={{ y: -5, scale: 1.03 }}
//             transition={{ type: "spring", stiffness: 400 }}
//           >
//             <motion.img
//               src="https://asimily.com/wp-content/uploads/2024/11/11-Common-IoT-Devices-That-Are-Vulnerable-to-Hacking.png"
//               alt="IoT Gadget"
//               className="w-48 h-48 object-cover rounded-lg mb-4 shadow-md"
//               initial={{ rotateY: 90, opacity: 0 }}
//               animate={{ rotateY: 0, opacity: 1 }}
//               transition={{ delay: 0.6, duration: 0.6 }}
//               onError={(e) => {
//                 e.target.src =
//                   "https://placehold.co/200x200/c4b5fd/0f172a?text=IoT+Gadget";
//               }} // Fallback
//             />
//             <h3 className="text-xl font-semibold text-purple-300">
//               IoT & Smart Home
//             </h3>
//             <p className="text-sm text-gray-400 mt-2 text-center">
//               Smart devices, smarter quality.
//             </p>
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       {/* Section: Revolutionizing Manufacturing */}
//       <motion.div
//         className="p-6 rounded-xl shadow-2xl border border-gray-800 mt-8"
//         style={{
//           background:
//             "linear-gradient(to br, rgba(236,72,153,0.1), rgba(0,0,0,0.7))",
//         }}
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-pink-300">
//           Revolutionizing Production Lines
//         </h2>
//         <p className="text-lg text-center text-gray-300 mb-8 max-w-3xl mx-auto">
//           NeuroSpec integrates seamlessly into manufacturing processes,
//           providing real-time defect detection and quality control. This leads
//           to reduced waste, higher yields, and faster production cycles.
//         </p>
//         <motion.div
//           className="flex flex-col md:flex-row items-center justify-around gap-8"
//           variants={sectionVariants}
//         >
//           <motion.img
//             src="https://media.istockphoto.com/id/1320950393/photo/cars-on-production-line-in-factory.jpg?s=612x612&w=0&k=20&c=WgJLxtOWIGt80cbC0OFc3wQAhraIxlz_H7l-ySDxkOw="
//             alt="Factory Floor"
//             className="w-full md:w-1/2 lg:w-2/5 object-cover rounded-xl shadow-xl border border-purple-500"
//             variants={itemVariants}
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             onError={(e) => {
//               e.target.src =
//                 "https://placehold.co/300x200/d8b4fe/0f172a?text=Factory+Floor";
//             }} // Fallback
//           />
//           <motion.div
//             className="md:w-1/2 lg:w-3/5 p-4"
//             variants={itemVariants}
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <h3 className="text-2xl font-bold text-purple-300 mb-3">
//               AI-Powered Inspection
//             </h3>
//             <p className="text-gray-300 mb-4">
//               Our advanced algorithms identify anomalies at an unprecedented
//               speed and accuracy, far surpassing traditional manual inspections.
//               This intelligent approach minimizes human error and maximizes
//               efficiency.
//             </p>
//             <ul className="list-disc list-inside text-gray-400 space-y-2">
//               <motion.li variants={itemVariants} whileHover={{ x: 5 }}>
//                 Reduced Rework & Scrap
//               </motion.li>
//               <motion.li variants={itemVariants} whileHover={{ x: 5 }}>
//                 Increased Throughput
//               </motion.li>
//               <motion.li variants={itemVariants} whileHover={{ x: 5 }}>
//                 Consistent Product Quality
//               </motion.li>
//               <motion.li variants={itemVariants} whileHover={{ x: 5 }}>
//                 Predictive Maintenance Insights
//               </motion.li>
//             </ul>
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       {/* Section: Impact Across Industries */}
//       <motion.div
//         className="p-6 rounded-xl shadow-2xl border border-gray-800 mt-8"
//         style={{
//           background:
//             "linear-gradient(to br, rgba(251,191,36,0.1), rgba(0,0,0,0.7))",
//         }}
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-yellow-300">
//           Impact Across Industries
//         </h2>
//         <p className="text-lg text-center text-gray-300 mb-8 max-w-3xl mx-auto">
//           NeuroSpec's adaptable AI platform provides significant value across
//           diverse industries, ensuring uncompromised quality and operational
//           excellence.
//         </p>
//         <motion.div
//           className="grid grid-cols-2 md:grid-cols-4 gap-6"
//           variants={sectionVariants}
//         >
//           <motion.div
//             className="flex flex-col items-center p-4 rounded-lg bg-gray-900 bg-opacity-50"
//             variants={itemVariants}
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <motion.img
//               src="https://images.ctfassets.net/v7wr16nrr0mz/4TDbNAhdMu1Gbl4WBDoHSn/519159862b2319133092f2e833b72aea/automotive-industry-trends-banner-1920x1080.jpg"
//               alt="Automotive"
//               className="w-48 h-48 object-cover rounded-lg mb-4 shadow-md"
//               onError={(e) => {
//                 e.target.src =
//                   "https://placehold.co/200x200/ff7e00/0f172a?text=Automotive";
//               }} // Fallback
//             />
//             <h3 className="text-xl font-semibold text-orange-300">
//               Automotive
//             </h3>
//             <p className="text-sm text-gray-400 mt-2 text-center">
//               Ensuring vehicle component integrity.
//             </p>
//           </motion.div>
//           <motion.div
//             className="flex flex-col items-center p-4 rounded-lg bg-gray-900 bg-opacity-50"
//             variants={itemVariants}
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <motion.img
//               src="https://plus.unsplash.com/premium_photo-1661885246527-dc13405d3ec6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWVyb3NwYWNlfGVufDB8fDB8fHww"
//               alt="Aerospace"
//               className="w-48 h-48 object-cover rounded-lg mb-4 shadow-md"
//               onError={(e) => {
//                 e.target.src =
//                   "https://placehold.co/200x200/00bcd4/0f172a?text=Aerospace";
//               }} // Fallback
//             />
//             <h3 className="text-xl font-semibold text-cyan-300">Aerospace</h3>
//             <p className="text-sm text-gray-400 mt-2 text-center">
//               Critical inspections for flight safety.
//             </p>
//           </motion.div>
//           <motion.div
//             className="flex flex-col items-center p-4 rounded-lg bg-gray-900 bg-opacity-50"
//             variants={itemVariants}
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <motion.img
//               src="https://housing.com/news/wp-content/uploads/2023/10/medical-equipment-manufacturers-in-Chennai-f-compressed.jpg"
//               alt="Medical Fields"
//               className="w-48 h-48 object-cover rounded-lg mb-4 shadow-md"
//               onError={(e) => {
//                 e.target.src =
//                   "https://placehold.co/200x200/ef4444/0f172a?text=Medical+Devices";
//               }} // Fallback
//             />
//             <h3 className="text-xl font-semibold text-red-300">
//               Medical Fields
//             </h3>
//             <p className="text-sm text-gray-400 mt-2 text-center">
//               Uncompromising standards for health.
//             </p>
//           </motion.div>
//           <motion.div
//             className="flex flex-col items-center p-4 rounded-lg bg-gray-900 bg-opacity-50"
//             variants={itemVariants}
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <motion.img
//               src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
//               alt="Consumer Electronics"
//               className="w-48 h-48 object-cover rounded-lg mb-4 shadow-md"
//               onError={(e) => {
//                 e.target.src =
//                   "https://placehold.co/200x200/818cf8/0f172a?text=Consumer+Electronics";
//               }}
//             />
//             <h3 className="text-xl font-semibold text-indigo-300">
//               Consumer Electronics
//             </h3>
//             <p className="text-sm text-gray-400 mt-2 text-center">
//               Delivering premium product experiences.
//             </p>
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       {/* Quality badge */}
//       <motion.div
//         className="flex justify-center mt-8 pb-8"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.2, duration: 0.8 }}
//       >
//         <div
//           className="text-white px-8 py-4 rounded-full shadow-lg flex items-center gap-3 text-lg font-bold"
//           style={{
//             backgroundImage:
//               "linear-gradient(to right, #4c40b8, #6d28d9, #9333ea)",
//           }}
//         >
//           <motion.span
//             animate={{ rotate: [0, 15, -15, 0] }}
//             transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
//           >
//             ✨
//           </motion.span>
//           <span>High Quality Assurance - Your Trust, Our Priority!</span>
//           <motion.span
//             animate={{ rotate: [0, -15, 15, 0] }}
//             transition={{
//               repeat: Infinity,
//               duration: 2,
//               repeatDelay: 3,
//               delay: 0.5,
//             }}
//           >
//             ✨
//           </motion.span>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Home;
















import React from "react";
import { motion } from "framer-motion";

const Home = () => {
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center w-full px-2"
      >
        <motion.h1
          className="text-6xl sm:text-2xl md:text-4xl font-bold mb-1 pt-20 sm:pt-6 pb-3 bg-clip-text text-transparent leading-tight"
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
          className="text-lg sm:text-xl md:text-2xl text-gray-400 px-2"
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
          Top-Notch Quality — Defect ko bole Bye Bye!
        </motion.p>
      </motion.div>

      {/* Section: Precision for Every Device */}
      <motion.div
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
          variants={sectionVariants}
        >
          {[
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPpHRs0RsSwMRrSyDWIXXHJL4WD6fVi8J4A&s",
              title: "Smartphones & Wearables",
              desc: "Flawless screens, perfect circuits.",
              color: "teal-300",
              fallback: "Smartphone",
            },
            {
              img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
              title: "Laptops & Computers",
              desc: "Ensuring every component is pixel-perfect.",
              color: "blue-300",
              fallback: "Laptop",
            },
            {
              img: "https://asimily.com/wp-content/uploads/2024/11/11-Common-IoT-Devices-That-Are-Vulnerable-to-Hacking.png",
              title: "IoT & Smart Home",
              desc: "Smart devices, smarter quality.",
              color: "purple-300",
              fallback: "IoT Gadget",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-3 sm:p-4 rounded-lg bg-gray-900 bg-opacity-50"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-lg mb-3 sm:mb-4 shadow-md"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                onError={(e) => {
                  e.target.src = `https://placehold.co/200x200/5eead4/0f172a?text=${item.fallback}`;
                }}
              />
              <h3
                className={`text-lg sm:text-xl font-semibold text-${item.color} mb-1 sm:mb-2`}
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
      </motion.div>

      {/* Section: Revolutionizing Manufacturing */}
      <motion.div
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
          variants={sectionVariants}
        >
          <motion.img
            src="https://media.istockphoto.com/id/1320950393/photo/cars-on-production-line-in-factory.jpg?s=612x612&w=0&k=20&c=WgJLxtOWIGt80cbC0OFc3wQAhraIxlz_H7l-ySDxkOw="
            alt="Factory Floor"
            className="w-full lg:w-1/2 xl:w-2/5 object-cover rounded-xl shadow-xl border border-purple-500 max-h-64 sm:max-h-80 md:max-h-96"
            variants={itemVariants}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            onError={(e) => {
              e.target.src =
                "https://placehold.co/300x200/d8b4fe/0f172a?text=Factory+Floor";
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
                  variants={itemVariants}
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
      </motion.div>

      {/* Section: Impact Across Industries */}
      <motion.div
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
          variants={sectionVariants}
        >
          {[
            {
              img: "https://images.ctfassets.net/v7wr16nrr0mz/4TDbNAhdMu1Gbl4WBDoHSn/519159862b2319133092f2e833b72aea/automotive-industry-trends-banner-1920x1080.jpg",
              title: "Automotive",
              desc: "Ensuring vehicle component integrity.",
              color: "orange-300",
              fallback: "Automotive",
            },
            {
              img: "https://plus.unsplash.com/premium_photo-1661885246527-dc13405d3ec6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWVyb3NwYWNlfGVufDB8fDB8fHww",
              title: "Aerospace",
              desc: "Critical inspections for flight safety.",
              color: "cyan-300",
              fallback: "Aerospace",
            },
            {
              img: "https://housing.com/news/wp-content/uploads/2023/10/medical-equipment-manufacturers-in-Chennai-f-compressed.jpg",
              title: "Medical Fields",
              desc: "Uncompromising standards for health.",
              color: "red-300",
              fallback: "Medical Devices",
            },
            {
              img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
              title: "Consumer Electronics",
              desc: "Delivering premium product experiences.",
              color: "indigo-300",
              fallback: "Consumer Electronics",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-3 sm:p-4 rounded-lg bg-gray-900 bg-opacity-50"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                className="w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover rounded-lg mb-3 sm:mb-4 shadow-md"
                onError={(e) => {
                  e.target.src = `https://placehold.co/200x200/5eead4/0f172a?text=${item.fallback}`;
                }}
              />
              <h3
                className={`text-base sm:text-lg md:text-xl font-semibold text-${item.color} mb-1`}
                style={{
                  fontFamily: "'Oxanium', sans-serif",
                  fontWeight: 500,
                }}
              >
                {item.title}
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
      </motion.div>

      {/* Quality badge */}
      <motion.div
        className="flex justify-center mt-6 sm:mt-8 pb-6 sm:pb-8 px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div
          className="text-white px-4 sm:px-6 py-2 sm:py-3 md:px-8 md:py-4 rounded-full shadow-lg flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg"
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
            
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;