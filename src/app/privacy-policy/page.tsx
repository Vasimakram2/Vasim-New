import React from 'react';
import { Shield, Lock, Eye, UserCheck, Mail, FileText, AlertCircle } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Information We Collect",
      content: [
        "Personal identification information (Name, email address, phone number)",
        "Vehicle information (Make, model, year, registration details)",
        "Service history and preferences",
        "Payment and billing information",
        "Location data when using our services",
        "Communication records and feedback"
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our detailing services",
        "To process bookings and manage appointments",
        "To send service reminders and promotional offers",
        "To improve our services and customer experience",
        "To process payments and prevent fraud",
        "To comply with legal obligations"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your data",
        "Encrypted transmission of sensitive information",
        "Secure storage with restricted access",
        "Regular security audits and updates",
        "Employee training on data protection",
        "Secure payment processing through trusted partners"
      ]
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Your Rights",
      content: [
        "Access your personal data we hold",
        "Request correction of inaccurate information",
        "Request deletion of your data",
        "Opt-out of marketing communications",
        "Data portability to another service provider",
        "Lodge a complaint with relevant authorities"
      ]
    }
  ];

  const additionalPolicies = [
    {
      title: "Cookies and Tracking",
      description: "We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings."
    },
    {
      title: "Third-Party Services",
      description: "We may share information with trusted third-party service providers who assist in our operations, such as payment processors and booking systems. These parties are bound by confidentiality agreements."
    },
    {
      title: "Data Retention",
      description: "We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, and resolve disputes."
    },
    {
      title: "Children's Privacy",
      description: "Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children."
    }
  ];

  return (
    <div className="min-h-screen bg-white">

    <Navbar/>
      {/* Header Section */}
      <div className="bg-gradient-to-br from-red-500 to-red-600 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-red-100 text-lg">
            Your privacy is important to us at MP Auto Cares
          </p>
          <p className="text-red-100 mt-2 text-sm">
            Last Updated: October 25, 2025
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-12">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Our Commitment to Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                At MP Auto Cares, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our car detailing services in Coimbatore.
              </p>
            </div>
          </div>
        </div>

        {/* Main Sections */}
        <div className="space-y-8 mb-12">
          {sections.map((section, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-100 text-red-500 p-3 rounded-lg">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-red-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Policies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalPolicies.map((policy, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{policy.title}</h3>
                <p className="text-gray-700 leading-relaxed">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-8 h-8 text-red-500" />
            <h2 className="text-2xl font-bold">Questions About Privacy?</h2>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please don't hesitate to contact us.
          </p>
          <div className="space-y-2 text-gray-300">
            <p><strong className="text-white">Email:</strong> mpautocarecbe@gmail.com</p>
            <p><strong className="text-white">Phone:</strong> +91 90037 43474</p>
            <p><strong className="text-white">Address:</strong> No: 15/55, Anbu nagar 2nd street, Vadavalli – Edayarpalayam Rd,
                  near Keerthi maligai,Edayarpalayam, Coimbatore, Tamil Nadu 641025</p>
          </div>
        </div>

        {/* Updates Notice */}
        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
          <p className="text-sm mt-4">
            By continuing to use our services after changes are posted, you accept the updated Privacy Policy.
          </p>
        </div>
      </div>

      {/* Footer  */}
      <Footer/>
    </div>
  );
}