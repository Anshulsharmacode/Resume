import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-2">
              <FaEnvelope className="inline-block mr-2 text-lg" />
              <a href="mailto:anshulsharma8386@gmail.com" className="hover:underline">anshulsharma8386@gmail.com</a>
            </p>
            <p className="mb-2">
              <FaPhone className="inline-block mr-2 text-lg" />
              <a href="tel:+917489989634" className="hover:underline">+91 74899 89634</a>
            </p>
            <p className="text-gray-400">Feel free to reach out for collaborations or inquiries.</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 justify-center">
            <a href="https://www.linkedin.com/in/anshul-sharma-8386ansh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600 transition-colors duration-300">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Anshulsharmacode" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400 transition-colors duration-300">
              <FaGithub />
            </a>
            <a href="https://x.com/Anshulsh8386?t=vK2hIRW47_MsNN5ncsHDLQ&s=09" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-colors duration-300">
              <FaTwitter />
            </a>
            <a href="mailto:anshulsharma8386@gmail.com" className="text-2xl hover:text-gray-400 transition-colors duration-300">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Anshul Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
