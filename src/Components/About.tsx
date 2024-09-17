import { FaUserGraduate, FaBrain, FaCogs, FaLaptopMedical } from 'react-icons/fa';
import { MdScience, MdEngineering } from 'react-icons/md';

function AboutMe() {
  return (
    <div className="min-h-screen mt-14 bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900 py-16 flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12 md:mb-16 animate-fade-in">
          About Me
        </h2>

        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-lg md:text-xl font-light leading-relaxed text-gray-700">
            Hello! I'm <span className="font-bold text-gray-900">Anshul Sharma</span>, a 
            <span className="text-blue-500 font-semibold"> Biomedical Engineer</span> with a passion for advancing 
            healthcare through innovative technologies. My focus lies in 
            <span className="font-semibold text-blue-500"> AI</span> and 
            <span className="font-semibold text-blue-500"> Medical Imaging</span>, specifically in optimizing MRI and CT scan 
            diagnostics. Let's make healthcare smarter and more accessible together.
          </p>
        </div>

        {/* Icon-Based Information Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 animate-slide-up">
          {/* Education */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center">
            <FaUserGraduate className="text-5xl md:text-6xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Education</h3>
            <p className="text-gray-600">
              A strong foundation in Biomedical Engineering, enabling me to apply engineering principles to solve medical challenges, particularly in diagnostics and imaging.
            </p>
          </div>

          {/* AI & Machine Learning */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center">
            <FaBrain className="text-5xl md:text-6xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl md:text-2xl font-semibold mb-2">AI & Machine Learning</h3>
            <p className="text-gray-600">
              Harnessing AI and ML to revolutionize medical imaging through more accurate diagnostics and real-time insights into complex medical data.
            </p>
          </div>

          {/* Medical Imaging */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center">
            <FaLaptopMedical className="text-5xl md:text-6xl text-green-500 mb-4 mx-auto" />
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Medical Imaging</h3>
            <p className="text-gray-600">
              Expert in MRI and CT scan technologies, dedicated to enhancing the quality and precision of medical imaging through cutting-edge innovation.
            </p>
          </div>

          {/* Engineering Solutions */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center">
            <MdEngineering className="text-5xl md:text-6xl text-red-500 mb-4 mx-auto" />
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Engineering Solutions</h3>
            <p className="text-gray-600">
              Using my engineering expertise to develop healthcare devices and technologies that are both efficient and patient-centric.
            </p>
          </div>

          {/* Research & Innovation */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center">
            <MdScience className="text-5xl md:text-6xl text-purple-500 mb-4 mx-auto" />
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Research & Innovation</h3>
            <p className="text-gray-600">
              Constantly exploring new ways to integrate AI into healthcare systems, with a focus on predictive diagnostics and personalized treatment approaches.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center">
            <FaCogs className="text-5xl md:text-6xl text-gray-500 mb-4 mx-auto" />
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Vision</h3>
            <p className="text-gray-600">
              My vision is to reshape healthcare by developing intelligent tools that enhance patient care, speed up diagnosis, and support tailored treatments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
