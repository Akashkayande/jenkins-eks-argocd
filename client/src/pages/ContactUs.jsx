
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Send, Zap, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full text-gray-700">
      <Navbar />
      <section className="bg-gradient-to-r from-green-100 to-blue-100 py-30 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Quick.ai</h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Have questions, suggestions, or need support? Our team is here to help you make the most of Quick.ai.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-green-500 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
            Get Support
          </button>
          <button className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
            Feedback
          </button>
        </div>
      </section>
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
            <MapPin size={40} className="text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p>123 AI Street, Silicon Valley, CA</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
            <Phone size={40} className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
            <Mail size={40} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p>support@quick.ai</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-10">
          <h2 className="text-3xl font-semibold mb-6 text-center">Send a Message</h2>
          <form className="grid gap-6">
            <div className="relative">
              <input
                type="text"
                required
                className="peer w-full border-b-2 border-gray-300 focus:border-green-500 outline-none px-2 py-2 text-gray-700"
                placeholder=" "
              />
              <label className="absolute left-2 -top-3 text-gray-500 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                required
                className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none px-2 py-2 text-gray-700"
                placeholder=" "
              />
              <label className="absolute left-2 -top-3 text-gray-500 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
                Your Email
              </label>
            </div>

            <div className="relative">
              <textarea
                required
                rows={6}
                className="peer w-full border-b-2 border-gray-300 focus:border-purple-500 outline-none px-2 py-2 text-gray-700 resize-none"
                placeholder=" "
              />
              <label className="absolute left-2 -top-3 text-gray-500 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg flex justify-center items-center gap-2"
            >
              <Send size={20} /> Send Message
            </button>
          </form>
        </div>
      </section>
      <section className="py-20 px-6 bg-gradient-to-r from-green-100 to-blue-100 text-center">
        <h3 className="text-3xl font-semibold mb-4">Want to explore more features?</h3>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Upgrade to a premium plan and unlock AI Image Generation, Background Removal, Resume Review, and much more!
        </p>
        <button  onClick={()=>navigate("/")} className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold">
          Upgrade Now
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
