import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiTypescript, SiJupyter, SiGooglecolab, SiKaggle, SiVisualstudio } from 'react-icons/si';

function Skills() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 py-12">
      <div className="container mx-auto px-6 lg:px-12">
      
        <h2 className="text-4xl font-bold text-center mb-12">Skills & Tools</h2>
        
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
         
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <FaPython className="text-6xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Python</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <SiTypescript className="text-6xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">TypeScript</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <FaJs className="text-6xl text-yellow-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">JavaScript</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <FaHtml5 className="text-6xl text-orange-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">HTML</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <FaCss3Alt className="text-6xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">CSS</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <FaReact className="text-6xl text-blue-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">React.js</h3>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <SiVisualstudio className="text-6xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">VS Code</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <SiKaggle className="text-6xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Kaggle</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <SiJupyter className="text-6xl text-yellow-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Jupyter Notebook</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <SiGooglecolab className="text-6xl text-blue-700 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Google Colab</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
