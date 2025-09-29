import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
    User,
    Lock,
    CreditCard,
    FileText,
    Image,
    Scissors,
    Zap,
    CheckCircle,
    Shield
} from "lucide-react";

const Docs = () => {
    return (
        <div className="w-full text-gray-700">
            <Navbar />
            <section className="bg-gradient-to-r from-green-100 to-blue-100 py-30 px-6 text-center">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">Quick.ai Documentation</h1>
                <p className="text-lg max-w-3xl mx-auto">
                    Learn how to use Quick.ai to generate articles, blog titles, AI images, remove backgrounds, and more.
                    This documentation is designed to guide you step-by-step.
                </p>
            </section>

            <section className="py-14 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                <div className="space-y-4 ">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Table of Contents</h2>
                    <ul className="space-y-4 text-lg text-gray-700 ">
                        <li className="flex items-center gap-3 hover:text-green-600 cursor-pointer">
                            <User size={20} className="text-blue-500" /> Account & Authentication
                        </li>
                        <li className="flex items-center gap-3 hover:text-green-600 cursor-pointer">
                            <CreditCard size={20} className="text-purple-500" /> Subscription Plans
                        </li>
                        <li className="flex items-center gap-3 hover:text-green-600 cursor-pointer">
                            <FileText size={20} className="text-yellow-500" /> Free Plan Features
                        </li>
                        <li className="flex items-center gap-3 hover:text-green-600 cursor-pointer">
                            <Zap size={20} className="text-pink-500" /> Premium Plan Features
                        </li>
                        <li className="flex items-center gap-3 hover:text-green-600 cursor-pointer">
                            <Image size={20} className="text-indigo-500" /> AI Image Generation
                        </li>
                        <li className="flex items-center gap-3 hover:text-green-600 cursor-pointer">
                            <Scissors size={20} className="text-red-500" /> Background Removal
                        </li>
                        <li className="flex items-center gap-3 hover:text-green-600 cursor-pointer">
                            <CheckCircle size={20} className="text-green-500" /> Resume Review
                        </li>
                        <li className="flex items-center gap-3 hover:text-green-600 cursor-pointer">
                            <Shield size={20} className="text-gray-600" /> Security & Privacy
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center justify-center space-y-8">
                    <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl shadow-lg flex items-center gap-4 w-full justify-center">
                        <User size={36} className="text-blue-500" />
                        <p className="font-medium text-gray-700">Secure Authentication</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl shadow-lg flex items-center gap-4 w-full justify-center">
                        <CreditCard size={36} className="text-purple-500" />
                        <p className="font-medium text-gray-700">Manage Your Plan</p>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-100 to-green-100 p-6 rounded-xl shadow-lg flex items-center gap-4 w-full justify-center">
                        <Zap size={36} className="text-pink-500" />
                        <p className="font-medium text-gray-700">Premium AI Tools</p>
                    </div>
                </div>
            </section>

            <section className="py-14 px-6 max-w-5xl mx-auto space-y-12">

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                        <User size={28} className="text-blue-500" /> Account & Authentication
                    </h3>
                    <p>
                        Users need to <strong>sign up and log in</strong> to access Quick.ai features. Authentication is secure and ensures your data is saved across sessions.
                    </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                        <CreditCard size={28} className="text-purple-500" /> Subscription Plans
                    </h3>
                    <p>
                        Quick.ai offers <strong>Free</strong> and <strong>Premium</strong> plans. Users can perform dummy transactions to upgrade. Free plan gives access to articles and blog title generation. Premium unlocks AI image generation, background removal, and resume review.
                    </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-green-50 p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                        <FileText size={28} className="text-yellow-500" /> Free Plan Features
                    </h3>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Generate AI-powered articles</li>
                        <li>Create blog titles quickly</li>
                        <li>Basic content assistance</li>
                    </ul>
                </div>

                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                        <Zap size={28} className="text-pink-500" /> Premium Plan Features
                    </h3>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Generate AI images</li>
                        <li>Remove image backgrounds</li>
                        <li>Resume review and optimization</li>
                        <li>Access exclusive advanced AI tools</li>
                    </ul>
                </div>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                        <Shield size={28} className="text-gray-600" /> Security & Privacy
                    </h3>
                    <p>
                        All user data is <strong>securely stored</strong> and <strong>cloud-based</strong>. Quick.ai follows best practices to protect sensitive information including login credentials and AI-generated content.
                    </p>
                </div>

            </section>

            <Footer />
        </div>
    );
};

export default Docs;
