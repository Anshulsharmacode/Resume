

function Projects() {
    return (
      <div className="min-h-screen w-screen bg-gray-100 text-gray-900 flex flex-col justify-center items-center px-6 md:px-20 lg:px-40 py-16 space-y-12">
        {/* Section Title */}
        <h2 className="text-5xl font-bold mb-8 text-gray-800 animate-fade-in">My Projects</h2>
  
        {/* Hardware Projects Section */}
        <div className="w-full space-y-12">
          <h3 className="text-3xl font-semibold text-gray-700">Hardware Projects</h3>
  
          {/* Electronics Stethoscope */}
          <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-6 space-y-4 md:space-y-0 md:space-x-8 hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="https://source.unsplash.com/600x400/?stethoscope,electronics"
              alt="Electronics Stethoscope"
              className="w-full md:w-1/2 rounded-lg shadow-md"
            />
            <div className="text-left space-y-4 md:w-1/2">
              <h4 className="text-2xl font-semibold text-gray-800">Electronics Stethoscope</h4>
              <p className="text-gray-600">
                This project involves designing an electronics stethoscope to convert acoustic signals into electrical
                signals for enhanced medical diagnostics. The stethoscope amplifies heart and lung sounds using
                electronic circuits.
              </p>
            </div>
          </div>
  
          {/* Speaker Amplifier */}
          <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-6 space-y-4 md:space-y-0 md:space-x-8 hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="https://source.unsplash.com/600x400/?speaker,amplifier"
              alt="Speaker Amplifier"
              className="w-full md:w-1/2 rounded-lg shadow-md"
            />
            <div className="text-left space-y-4 md:w-1/2">
              <h4 className="text-2xl font-semibold text-gray-800">Speaker Amplifier</h4>
              <p className="text-gray-600">
                Developed a powerful speaker amplifier capable of delivering clear and strong audio signals for a variety
                of applications. The amplifier was designed to enhance sound quality while minimizing noise.
              </p>
            </div>
          </div>
  
          {/* Dual Power Supply */}
          <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-6 space-y-4 md:space-y-0 md:space-x-8 hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="https://source.unsplash.com/600x400/?electronics,power-supply"
              alt="Dual Power Supply"
              className="w-full md:w-1/2 rounded-lg shadow-md"
            />
            <div className="text-left space-y-4 md:w-1/2">
              <h4 className="text-2xl font-semibold text-gray-800">Dual Power Supply using One Transformer</h4>
              <p className="text-gray-600">
                Designed a dual power supply capable of delivering both positive and negative voltages using a single
                transformer. This project focused on providing stable power for sensitive electronic devices and circuits.
              </p>
            </div>
          </div>
        </div>
  
        {/* Technical Projects Section */}
        <div className="w-full space-y-12">
          <h3 className="text-3xl font-semibold text-gray-700">Technical Projects</h3>
  
          {/* Lung Cancer Classification */}
          <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-6 space-y-4 md:space-y-0 md:space-x-8 hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="https://source.unsplash.com/600x400/?lung-cancer,ai"
              alt="Lung Cancer Classification"
              className="w-full md:w-1/2 rounded-lg shadow-md"
            />
            <div className="text-left space-y-4 md:w-1/2">
              <h4 className="text-2xl font-semibold text-gray-800">Machine Learning for Lung Cancer Classification</h4>
              <p className="text-gray-600">
                Applied unsupervised machine learning to classify lung cancer using unlabelled data. The project used 
                clustering and anomaly detection to identify potential cancerous areas in medical images.
              </p>
            </div>
          </div>
  
          {/* Brain Tumor Classification */}
          <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-6 space-y-4 md:space-y-0 md:space-x-8 hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="https://source.unsplash.com/600x400/?brain-tumor,ai"
              alt="Brain Tumor Classification"
              className="w-full md:w-1/2 rounded-lg shadow-md"
            />
            <div className="text-left space-y-4 md:w-1/2">
              <h4 className="text-2xl font-semibold text-gray-800">Machine Learning for Brain Tumor Classification</h4>
              <p className="text-gray-600">
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