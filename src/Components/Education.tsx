import React from 'react';
import { FaSchool, FaUniversity, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  const educationData = [
    {
      icon: <FaSchool className="text-blue-500 w-8 h-8" />,
      school: "Saraswati Vidya Mandir, Shujalpur",
      degree: "10th Class",
      year: "2019",
      result: "70%",
    },
    {
      icon: <FaGraduationCap className="text-blue-500 w-8 h-8" />,
      school: "Saraswati Vidya Mandir, Shujalpur",
      degree: "12th Class",
      year: "2021",
      result: "73%",
    },
    {
      icon: <FaUniversity className="text-blue-500 w-8 h-8" />,
      school: "Shri G.S. Institute of Technology, Indore",
      degree: "B.Tech in Biomedical Engineering",
      year: "2021 - 2025",
      result: "6.0 CGPA",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Educational Journey</h2>
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-white to-gray-100 p-6 md:p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-between"
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                className="mb-6 bg-blue-100 p-4 rounded-full shadow-inner"
                style={{
                  transform: 'translateZ(20px)',
                }}
              >
                {edu.icon}
              </div>
              <h3
                className="text-xl md:text-2xl font-bold text-gray-800 mb-3 text-center"
                style={{
                  transform: 'translateZ(15px)',
                }}
              >
                {edu.degree}
              </h3>
              <p
                className="text-md md:text-lg text-gray-600 mb-2 text-center"
                style={{
                  transform: 'translateZ(10px)',
                }}
              >
                {edu.school}
              </p>
              <p
                className="text-sm md:text-md text-gray-500 mb-2 text-center"
                style={{
                  transform: 'translateZ(5px)',
                }}
              >
                {edu.year}
              </p>
              <p
                className="text-lg font-semibold text-blue-600 text-center"
                style={{
                  transform: 'translateZ(10px)',
                }}
              >
                {edu.result}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
