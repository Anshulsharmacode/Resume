import { FaVolumeUp, FaBatteryFull, FaLungs, FaBrain, FaStethoscope } from 'react-icons/fa';

function Projects() {
  return (
    <div className="min-h-screen w-screen mt-14 bg-gradient-to-b from-gray-100 to-gray-200 text-gray-900 flex flex-col justify-center items-center px-6 md:px-20 lg:px-40 py-16 space-y-16">
      {/* Section Title */}
      <h2 className="text-5xl font-bold mb-8 text-gray-800 animate-fade-in">My Projects</h2>

      {/* Hardware Projects Section */}
      <div className="w-full space-y-16">
        <h3 className="text-4xl font-semibold text-gray-700 text-center">Hardware Projects</h3>

        {/* Electronics Stethoscope */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="flex flex-col items-center space-y-6">
            <FaStethoscope className="text-6xl text-blue-500" />
            <h4 className="text-3xl font-semibold text-gray-800">Electronics Stethoscope</h4>
            <p className="text-xl text-gray-600 text-center max-w-2xl">
              This project involves designing an electronics stethoscope to convert acoustic signals into electrical
              signals for enhanced medical diagnostics. The stethoscope amplifies heart and lung sounds using
              electronic circuits.
            </p>
          </div>
        </div>

        {/* Speaker Amplifier */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="flex flex-col items-center space-y-6">
            <FaVolumeUp className="text-6xl text-green-500" />
            <h4 className="text-3xl font-semibold text-gray-800">Speaker Amplifier</h4>
            <p className="text-xl text-gray-600 text-center max-w-2xl">
              Developed a powerful speaker amplifier capable of delivering clear and strong audio signals for a variety
              of applications. The amplifier was designed to enhance sound quality while minimizing noise.
            </p>
          </div>
        </div>

        {/* Dual Power Supply */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="flex flex-col items-center space-y-6">
            <FaBatteryFull className="text-6xl text-yellow-500" />
            <h4 className="text-3xl font-semibold text-gray-800">Dual Power Supply using One Transformer</h4>
            <p className="text-xl text-gray-600 text-center max-w-2xl">
              Designed a dual power supply capable of delivering both positive and negative voltages using a single
              transformer. This project focused on providing stable power for sensitive electronic devices and circuits.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Projects Section */}
      <div className="w-full space-y-16">
        <h3 className="text-4xl font-semibold text-gray-700 text-center">Technical Projects</h3>

        {/* Lung Cancer Classification */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="flex flex-col items-center space-y-6">
            <FaLungs className="text-6xl text-red-500" />
            <h4 className="text-3xl font-semibold text-gray-800">Machine Learning for Lung Cancer Classification</h4>
            <p className="text-xl text-gray-600 text-center max-w-2xl">
              Applied unsupervised machine learning to classify lung cancer using unlabelled data. The project used
              clustering and anomaly detection to identify potential cancerous areas in medical images.
            </p>
          </div>
        </div>

        {/* Brain Tumor Classification */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="flex flex-col items-center space-y-6">
            <FaBrain className="text-6xl text-purple-500" />
            <h4 className="text-3xl font-semibold text-gray-800">Machine Learning for Brain Tumor Classification</h4>
            <p className="text-xl text-gray-600 text-center max-w-2xl">
              Developed a supervised machine learning model using labeled data to classify brain tumors in MRI images.
              This project involved creating a deep learning model to accurately identify different tumor types.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
