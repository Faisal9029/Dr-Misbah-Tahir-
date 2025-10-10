"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl p-[3px] bg-gradient-to-r from-blue-400 to-purple-500 shadow-xl">
            <Image
              src="/about.jpg"
              alt="Dr. Muhammad Misbah Tahir"
              width={500}
              height={500}
              className="rounded-2xl object-cover w-full"
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300 leading-tight">
            About Dr. Muhammad Misbah Tahir
          </h2>
          
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-gray-200">
              <b>Dr. Muhammad Misbah Tahir</b> is an accomplished <b>Associate Professor of Radiology & Imaging </b> 
              at <b>Liaquat National Hospital & Medical College</b>, bringing over <b>15 years of specialized expertise </b> 
              in Interventional Radiology.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-200">
              His academic journey includes <b>MBBS from Dow Medical College</b>, followed by <b>FCPS from Aga Khan University Hospital</b>, 
              and advanced <b>Fellowship in Vascular & Interventional Radiology from Aga Khan University Hospital</b> - representing the highest 
              standards of medical education in Pakistan.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-200">
              Dr. Muhammad Misbah Tahir has been serving as the <b>Section Incharge of Interventional Radiology at Liaquat National Hospital </b> 
              for more than 15 years, leading one of the most advanced IR departments in the country and 
              training the next generation of interventional radiologists.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg hover:scale-105 transition inline-block font-semibold text-lg"
            >
              Book an Appointment
            </a>
          </div>
        </motion.div>
      </div>

      {/* Professional Leadership Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 mt-24">
        <h3 className="text-2xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
          Professional Leadership & National Contributions
        </h3>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <h4 className="text-2xl font-semibold text-blue-100 mb-6 text-center">Leadership in Professional Societies</h4>
            <div className="space-y-6 text-gray-200">
              <div>
                <h5 className="font-semibold text-blue-200 text-lg mb-3">Interventional Radiology Society of Pakistan (IRSP)</h5>
                <ul className="ml-4 space-y-3">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 text-lg">•</span>
                    <div>
                      <span className="font-medium">Currently serving as <b>Councilor South</b></span>
                      <p className="text-sm text-gray-300 mt-1">- Representing southern region of Pakistan</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 text-lg">•</span>
                    <div>
                      <span className="font-medium">Active <b>Executive Committee Member</b></span>
                      <p className="text-sm text-gray-300 mt-1">- Involved in strategic decision making</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 text-lg">•</span>
                    <div>
                      <span className="font-medium">Former <b>General Secretary</b></span>
                      <p className="text-sm text-gray-300 mt-1">- Managed society operations and member services</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 text-lg">•</span>
                    <div>
                      <span className="font-medium">Former <b>Chairman of Scientific Committee</b></span>
                      <p className="text-sm text-gray-300 mt-1">- Organized academic programs and conferences</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-blue-200 text-lg mb-3">Academic Contributions</h5>
                <ul className="ml-4">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 text-lg">•</span>
                    <div>
                      <span className="font-medium"><b>Editorial Board Member</b> of Liaquat National Journal of Cancer Care (LNJCC)</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <h4 className="text-2xl font-semibold text-blue-100 mb-6 text-center">Academic Leadership & Global Exposure</h4>
            <div className="space-y-6 text-gray-200">
              <div>
                <h5 className="font-semibold text-blue-200 text-lg mb-3">Training & Education</h5>
                <ul className="ml-4 space-y-3">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 text-lg">•</span>
                    <div>
                      <span className="font-medium"><b>Director of Fellowship Programme</b> in Vascular & Interventional Radiology at Liaquat National Hospital</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 text-lg">•</span>
                    <div>
                      <span className="font-medium">Mentored and trained numerous fellows in advanced Interventional Radiology techniques</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 text-lg">•</span>
                    <div>
                      <span className="font-medium">Many trainees now successfully working in prestigious positions internationally</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-blue-200 text-lg mb-3">International Collaborations</h5>
                <ul className="ml-4">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 text-lg">•</span>
                    <div>
                      <span className="font-medium">Extensive international exposure through visits to world-leading Interventional Radiology centers in:</span>
                      <div className="ml-6 mt-3 grid grid-cols-2 gap-3">
                        <div className="flex items-center">
                          <span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>
                          <span>United States</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>
                          <span>Germany</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>
                          <span>Australia</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>
                          <span>Turkey</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>
                          <span>Egypt</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>
                          <span>Italy</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Clinical Expertise Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 border border-white/20"
        >
          <h3 className="text-2xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            Comprehensive Interventional Radiology Expertise
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-blue-100 text-center">Vascular Interventions</h4>
              <ul className="space-y-4 text-gray-200">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 text-lg mt-1">•</span>
                  <span>Peripheral Vascular Disease treatments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 text-lg mt-1">•</span>
                  <span>Vascular Malformation embolization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 text-lg mt-1">•</span>
                  <span>Deep Vein Thrombosis (DVT) interventions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 text-lg mt-1">•</span>
                  <span>Dialysis access management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 text-lg mt-1">•</span>
                  <span>Endovascular trauma management</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-blue-100 text-center">Oncological & Non-Vascular Interventions</h4>
              <ul className="space-y-4 text-gray-200">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 text-lg mt-1">•</span>
                  <span>Tumor embolization and chemoembolization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 text-lg mt-1">•</span>
                  <span>Radiofrequency and microwave ablation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 text-lg mt-1">•</span>
                  <span>Biopsy procedures under imaging guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 text-lg mt-1">•</span>
                  <span>Drainage procedures and stent placements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 text-lg mt-1">•</span>
                  <span>Pain management interventions</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
              Dr. Muhammad Misbah Tahir utilizes state-of-the-art imaging guidance for precise, minimally invasive procedures 
              that offer faster recovery, reduced pain, and superior outcomes compared to traditional surgery.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Research & Publications */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl p-10 border border-white/20"
        >
          <h4 className="text-2xl md:text-3xl font-semibold text-blue-100 mb-8 text-center">
            Academic Research & Presentations
          </h4>
          <p className="text-xl text-white mb-8 text-center">
            Active contributor to interventional radiology literature and education
          </p>
          <div className="grid md:grid-cols-2 gap-10 text-gray-200 max-w-5xl mx-auto">
            <div className="space-y-4">
              <h5 className="font-semibold text-blue-200 text-lg text-center">Research Focus Areas</h5>
              <ul className="space-y-3 text-center">
                <li className="flex justify-center items-center">
                  <span className="text-purple-400 mr-3">•</span>
                  Vascular malformation treatments
                </li>
                <li className="flex justify-center items-center">
                  <span className="text-purple-400 mr-3">•</span>
                  Dialysis access outcomes
                </li>
                <li className="flex justify-center items-center">
                  <span className="text-purple-400 mr-3">•</span>
                  Endovascular trauma management
                </li>
                <li className="flex justify-center items-center">
                  <span className="text-purple-400 mr-3">•</span>
                  Minimally invasive oncology procedures
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-semibold text-blue-200 text-lg text-center">Conference Participation</h5>
              <ul className="space-y-3 text-center">
                <li className="flex justify-center items-center">
                  <span className="text-purple-400 mr-3">•</span>
                  Multiple national conference presentations
                </li>
                <li className="flex justify-center items-center">
                  <span className="text-purple-400 mr-3">•</span>
                  International IR conference contributions
                </li>
                <li className="flex justify-center items-center">
                  <span className="text-purple-400 mr-3">•</span>
                  Scientific paper presentations
                </li>
                <li className="flex justify-center items-center">
                  <span className="text-purple-400 mr-3">•</span>
                  Continuing medical education sessions
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}