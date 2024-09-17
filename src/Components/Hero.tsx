import Typewriter from 'react-typewriter-effect';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram} from 'react-icons/fa';
import { SiGmail} from 'react-icons/si';

function PortfolioIntro() { 
  return (
    <div className="h-screen fix-middle w-screen px-4 md:px-8 text-gray-900 flex flex-col justify-center items-center text-center bg-gray-100 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-cover bg-center opacity-10" />

      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-75" />
      <div className="relative z-10 flex flex-col justify-center items-center space-y-8 h-full w-full">
       
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in transition-transform duration-1000 ease-in-out transform hover:scale-105 tracking-tight">
          Anshul Sharma
        </h1>

        <Typewriter
          textStyle={{
            fontFamily: 'Roboto, sans-serif',
            color: '#333333', 
            fontWeight: 500,
            fontSize: '1.6em',
          }}
          startDelay={1000}
          cursorColor="#333333"
          multiText={[
            'Biomedical Engineer',
            'AI & Machine Learning in Healthcare',
            'Innovating Medical Imaging with AI',
          ]}
          multiTextDelay={2000}  
          typeSpeed={100}         
          deleteSpeed={30}  // Adjusted delete speed for smoother delete
          multiTextLoop={true}   
        />

        <div className="flex space-x-6 md:space-x-8 mt-8">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl md:text-4xl text-gray-500 hover:text-blue-600 hover:scale-110 transition-all duration-300 ease-in-out shadow-lg hover:shadow-blue-500/50" />
          </a>
          <a href="https://github/Anshulsharma8386.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl md:text-4xl text-gray-500 hover:text-gray-400 hover:scale-110 transition-all duration-300 ease-in-out shadow-lg hover:shadow-gray-500/50" />
          </a>
          <a href="https://twitter.com/@Anshulsh8386" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-3xl md:text-4xl text-gray-500 hover:text-blue-500 hover:scale-110 transition-all duration-300 ease-in-out shadow-lg hover:shadow-blue-500/50" />
          </a>
          <a href="https://instagram.com/anshulsharma5353" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl md:text-4xl text-gray-500 hover:text-pink-500 hover:scale-110 transition-all duration-300 ease-in-out shadow-lg hover:shadow-pink-500/50" />
          </a>
          <a href="mailto:anshulsharma8386@gmail.com" target="_blank" rel="noopener noreferrer">
            <SiGmail className="text-3xl md:text-4xl text-gray-500 hover:text-blue-500 hover:scale-110 transition-all duration-300 ease-in-out shadow-lg hover:shadow-blue-500/50" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioIntro;
