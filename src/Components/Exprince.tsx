import { FaHospitalAlt, FaCalendarAlt, FaStethoscope } from 'react-icons/fa';

function Experience() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 py-12">
      <div className="container mx-auto px-6 lg:px-12">
       
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

        
        <div className="space-y-12">
          
         
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <FaHospitalAlt className="text-4xl text-blue-500" />
              <div>
                <h3 className="text-2xl font-semibold">Annapurna Hospital</h3>
                <div className="flex items-center text-gray-600">
                  <FaCalendarAlt className="mr-2" /> <span>20 Days</span>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-700">
              Worked in the Radiology Department, focusing on the operation and maintenance of 
              <strong> CT-Scan</strong> and <strong>MRI machines</strong>. Gained hands-on experience with advanced 
              medical imaging technologies, learning the fundamentals of image processing and the role 
              of artificial intelligence in enhancing diagnostic capabilities.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Special attention was given to the application of <strong>AI in medical imaging</strong>, 
              understanding its significance in providing faster and more accurate diagnoses for patients. 
              The role of AI in <strong>automated image analysis</strong> was explored extensively.
            </p>
          </div>

         
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <FaHospitalAlt className="text-4xl text-blue-500" />
              <div>
                <h3 className="text-2xl font-semibold">V-ONE Hospital</h3>
                <div className="flex items-center text-gray-600">
                  <FaCalendarAlt className="mr-2" /> <span>45 Days</span>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-700">
              Worked intensively on advanced medical imaging techniques including <strong>CT-Scan</strong> 
              and <strong>MRI</strong>, gaining deep insights into the day-to-day operation of imaging equipment 
              and the interpretation of results. Collaborated with radiologists to optimize the use of AI tools 
              for faster diagnosis and better patient outcomes.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Focused on exploring the <strong>AI-driven advancements in MRI imaging</strong>, 
              particularly in terms of automating image recognition and reducing human error in diagnostics. 
              The experience at V-ONE Hospital also involved analyzing case studies on how 
              <strong> machine learning</strong> models are trained to detect anomalies in scans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
