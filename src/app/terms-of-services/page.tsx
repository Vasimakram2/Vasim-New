import React from 'react';
import { FileText, Shield, Calendar, CreditCard, AlertTriangle, CheckCircle, XCircle, RefreshCw, Users, Car } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function TermsOfService() {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Terms of Service Agreement",
      content: [
        "These Terms of Service govern your use of MP Auto Cares' detailing and automotive care services",
        "By engaging our services, you agree to comply with and be bound by these terms",
        "These terms apply to all customers, whether services are booked online, by phone, or in-person",
        "We reserve the right to update these terms at any time; continued use implies acceptance",
        "If you disagree with any part of these terms, please do not use our services"
      ]
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Service Scope and Description",
      content: [
        "We provide professional car detailing, PPF coating, interior cleaning, and automotive care services",
        "Service descriptions and timelines are estimates and may vary based on vehicle condition",
        "Additional services may be recommended based on vehicle inspection",
        "We reserve the right to decline services if vehicle condition poses safety concerns",
        "Custom requests are subject to feasibility assessment and additional charges",
        "All services are performed by trained professionals using quality products"
      ]
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Booking and Scheduling",
      content: [
        "Appointments can be made via our website, phone, or by visiting our facility",
        "Booking confirmation will be sent via email or SMS",
        "Customers must arrive on time; late arrivals may result in rescheduling",
        "We require minimum 24-hour notice for cancellations or rescheduling",
        "Peak season bookings may have extended wait times",
        "Walk-in services are subject to technician availability"
      ]
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Pricing and Payment",
      content: [
        "All prices are quoted in Indian Rupees (INR) and include applicable GST",
        "Final pricing may vary based on vehicle size, condition, and service requirements",
        "Payment is due upon service completion unless advance payment is arranged",
        "We accept cash, cards (credit/debit), UPI, and digital wallets",
        "Additional charges apply for extra services discovered during inspection",
        "Invoices will be provided for all completed services"
      ]
    }
  ];

  const policies = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Obligations",
      items: [
        "Provide accurate vehicle and contact information",
        "Remove all personal belongings and valuables from vehicle",
        "Disclose any pre-existing damage or mechanical issues",
        "Ensure vehicle has sufficient fuel for movement within facility",
        "Collect vehicle within agreed timeframe after service completion",
        "Report any concerns within 48 hours of service completion"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Warranty and Guarantees",
      items: [
        "We guarantee workmanship quality for specified warranty periods",
        "Warranty applies only to services performed by MP Auto Cares",
        "Warranty void if vehicle is serviced elsewhere during warranty period",
        "Pre-existing damage is documented and excluded from warranty",
        "Natural wear and tear not covered under warranty",
        "Warranty claims must be made in writing with vehicle inspection"
      ]
    },
    {
      icon: <XCircle className="w-6 h-6" />,
      title: "Cancellation Terms",
      items: [
        "24+ hours notice: Full refund of advance payment",
        "12-24 hours notice: 50% refund of advance payment",
        "Less than 12 hours: No refund",
        "No-show appointments: Advance payment forfeited",
        "Rescheduling allowed once without penalty (with proper notice)",
        "Emergency cancellations reviewed case-by-case"
      ]
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Refund Policy",
      items: [
        "Service dissatisfaction must be reported within 48 hours",
        "Refund requests require vehicle inspection by management",
        "Approved refunds processed within 7-10 business days",
        "Refund method matches original payment method",
        "Partial refunds issued for partially completed work",
        "Service charges may apply to refund processing"
      ]
    }
  ];

  const liabilityTerms = [
    {
      title: "Limitation of Liability",
      description: "MP Auto Cares is not liable for pre-existing damage, mechanical failures, or items left in the vehicle. Our maximum liability is limited to the cost of services rendered. We maintain insurance coverage for work performed at our facility."
    },
    {
      title: "Vehicle Custody and Care",
      description: "While in our custody, vehicles are stored in a secure facility. We are not responsible for theft, vandalism, or damage from natural disasters, fires, or acts beyond our control. Customers should maintain comprehensive vehicle insurance."
    },
    {
      title: "Service Results Disclaimer",
      description: "Results vary based on vehicle age, condition, and previous maintenance. Some stains, scratches, odors, or defects may not be fully removable. We do not guarantee specific outcomes but commit to best-effort service delivery."
    },
    {
      title: "Third-Party Products",
      description: "We use reputable third-party products and materials. While we stand behind our workmanship, manufacturer warranties on products are subject to manufacturer terms. Product-related issues will be addressed according to manufacturer policies."
    }
  ];

  const additionalTerms = [
    {
      title: "Photography and Marketing",
      description: "We may photograph vehicles before and after service for quality assurance and marketing purposes. Images may be used on our website, social media, and promotional materials. Customers can opt out by notifying us in writing."
    },
    {
      title: "Intellectual Property",
      description: "All content on our website, promotional materials, and branding is owned by MP Auto Cares. Unauthorized reproduction, distribution, or commercial use is prohibited and may result in legal action."
    },
    {
      title: "Data Protection and Privacy",
      description: "Customer information is collected and used in accordance with our Privacy Policy. We protect personal data and do not share information with third parties except as required for service delivery or legal compliance."
    },
    {
      title: "Force Majeure",
      description: "We are not liable for service delays or cancellations due to events beyond our control, including natural disasters, power outages, government restrictions, pandemics, or other force majeure events."
    },
    {
      title: "Dispute Resolution",
      description: "Disputes will be resolved through good faith negotiation. If unresolved, disputes are subject to binding arbitration under Indian law. Legal proceedings, if necessary, fall under the jurisdiction of Coimbatore courts."
    },
    {
      title: "Governing Law",
      description: "These Terms of Service are governed by the laws of India. By using our services, you consent to the exclusive jurisdiction of courts in Coimbatore, Tamil Nadu for any legal matters arising from these terms."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
        <Navbar/>
      {/* Header Section */}
      <div className="bg-gradient-to-br from-red-500 to-red-600 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <FileText className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-red-100 text-lg">
            Please read these terms carefully before using our services
          </p>
          <p className="text-red-100 mt-2 text-sm">
            Effective Date: October 25, 2025
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-12">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Important Information</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to MP Auto Cares. These Terms of Service outline the rules and regulations for using our car detailing and automotive care services. By booking or using our services, you acknowledge that you have read, understood, and agree to be legally bound by these terms.
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
                    <span className="text-red-500 mt-1 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Policy Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Policies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {policies.map((policy, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-100 text-red-500 p-2 rounded-lg">
                    {policy.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{policy.title}</h3>
                </div>
                <ul className="space-y-2">
                  {policy.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Liability Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Liability and Disclaimers</h2>
          <div className="space-y-4">
            {liabilityTerms.map((term, index) => (
              <div key={index} className="bg-gray-50 border-l-4 border-red-500 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{term.title}</h3>
                <p className="text-gray-700 leading-relaxed">{term.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Terms */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Terms</h2>
          <div className="space-y-4">
            {additionalTerms.map((term, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{term.title}</h3>
                <p className="text-gray-700 leading-relaxed">{term.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Commitment */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Commitment to You</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">Quality Service</h3>
              <p className="text-gray-300 text-sm">Professional workmanship guaranteed</p>
            </div>
            <div className="text-center">
              <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">Transparency</h3>
              <p className="text-gray-300 text-sm">Clear pricing and honest service</p>
            </div>
            <div className="text-center">
              <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">Customer Care</h3>
              <p className="text-gray-300 text-sm">Your satisfaction is our priority</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white border-2 border-red-500 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Our Terms?</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            If you have any questions regarding these Terms of Service or need clarification on any point, please don't hesitate to contact us. We're here to ensure you have a clear understanding before using our services.
          </p>
          <div className="space-y-2 text-gray-700">
            <p><strong className="text-gray-900">Email:</strong> mpautocarecbe@gmail.com</p>
            <p><strong className="text-gray-900">Phone:</strong> +91 90037 43474</p>
            <p><strong className="text-gray-900">Address:</strong> No: 15/55, Anbu nagar 2nd street, Vadavalli – Edayarpalayam Rd,
                  near Keerthi maligai,Edayarpalayam, Coimbatore, Tamil Nadu 641025</p>
            <p><strong className="text-gray-900">Business Hours:</strong> Monday - Sunday, 9:00 AM - 8:00 PM</p>
          </div>
        </div>

        {/* Agreement Notice */}
        <div className="mt-12 text-center">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 inline-block max-w-2xl">
            <CheckCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <p className="text-gray-900 font-semibold mb-2 text-lg">
              Agreement to Terms
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              By booking or using MP Auto Cares services, you acknowledge that you have read these Terms of Service, understand them, and agree to be bound by them. These terms constitute a legally binding agreement between you and MP Auto Cares.
            </p>
          </div>
        </div>
      </div>

      {/* Footer  */}
      <Footer/>
    </div>
  );
}