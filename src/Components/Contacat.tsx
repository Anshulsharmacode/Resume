import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaMailBulk, FaPhone } from 'react-icons/fa';

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12 animate-fade-in">
          Get in Touch
        </h2>

        {/* Contact Form and Social Icons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-3xl font-bold text-gray-700 mb-6">Contact Me</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500 outline-none transition duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500 outline-none transition duration-300"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">Message</label>
                <textarea
                  id="message"
                  
                  className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500 outline-none transition duration-300"
                  placeholder="Your Message"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Media and Contact Info */}
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-8">
            <h3 className="text-3xl font-bold text-gray-700">Connect With Me</h3>

            <div className="flex space-x-6 text-3xl">
              <a href="https://www.linkedin.com/in/anshul-sharma-8386ansh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-gray-500 hover:text-blue-600 transition duration-300" />
              </a>
              <a href="https://github.com/Anshulsharmacode" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-500 hover:text-gray-600 transition duration-300" />
              </a>
              <a href="https://x.com/Anshulsh8386?t=vK2hIRW47_MsNN5ncsHDLQ&s=09" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-gray-500 hover:text-blue-500 transition duration-300" />
              </a>
              <a href="https://instagram.com/anshulsharma5353" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-500 hover:text-pink-500 transition duration-300" />
              </a>
              <a href="mailto:anshulsharma8386@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaMailBulk className="text-gray-500 hover:text-blue-500 transition duration-300" />
              </a>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <FaMailBulk className="text-2xl text-blue-500" />
                <span className="text-lg text-gray-700">anshulsharma8386@gmail.com</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <FaPhone className="text-2xl text-blue-500" />
                <span className="text-lg text-gray-700">+91 7489989634</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
