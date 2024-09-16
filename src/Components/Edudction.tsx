
import React from 'react';
import { FaSchool, FaUniversity, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  const educationData = [
    {
      icon: <FaSchool className="text-blue-500 w-10 h-10" />,
      school: "Saraswati Vidya Mandir, Shujalpur",
      degree: "10th Class",
      year: "2019",
      result: "70%",
      description: "Completed secondary education with a focus on science and mathematics."
    },
    {
      icon: <FaGraduationCap className="text-blue-500 w-10 h-10" />,
      school: "Saraswati Vidya Mandir, Shujalpur",
      degree: "12th Class",
      year: "2021",
      result: "73%",
      description: "Completed higher secondary education with specialization in science stream."
    },
    {
      icon: <FaUniversity className="text-blue-500 w-10 h-10" />,
      school: "Shri G.S. Institute of Technology, Indore",
      degree: "B.Tech in Biomedical Engineering",
      year: "2021 - 2025",
      result: "6.0 CGPA",
      description: "Currently pursuing a bachelor's degree in Biomedical Engineering, focusing on the intersection of engineering principles and medical sciences."
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Educational Journey</h2>
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg flex items-start"
            >
              <div className="mr-6 bg-blue-100 p-4 rounded-full">{edu.icon}</div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{edu.degree}</h3>
                <p className="text-xl text-gray-700 mb-1">{edu.school}</p>
                <p className="text-lg text-gray-600 mb-1">{edu.year}</p>
                <p className="text-lg font-medium text-blue-600 mb-2">{edu.result}</p>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
