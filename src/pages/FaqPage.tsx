import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusCircle, MinusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <motion.button
        className="flex w-full justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
        initial={false}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <MinusCircle className="h-5 w-5 text-indigo-600" />
        ) : (
          <PlusCircle className="h-5 w-5 text-indigo-600" />
        )}
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqPage = () => {
  const faqs = [
    {
      question: "What is FinFam?",
      answer: "FinFam is a comprehensive family finance management platform designed to help families track expenses, set financial goals, and make informed investment decisions. Our tools are specifically designed for middle-class families who want to optimize their finances and secure their financial future."
    },
    {
      question: "How does FinFam protect my financial data?",
      answer: "We employ bank-grade security measures, including 256-bit encryption, secure socket layer technology, and regular security audits. Your data is stored in secure, encrypted databases with strict access controls. We never share your personal financial information with third parties without your explicit permission."
    },
    {
      question: "Can multiple family members use the same account?",
      answer: "Yes! FinFam is designed for family collaboration. You can create a family account and add multiple family members with customized access levels. Each member can track their individual expenses while contributing to shared family financial goals."
    },
    {
      question: "What financial institutions does FinFam integrate with?",
      answer: "FinFam integrates with over 10,000 financial institutions worldwide, including most major banks, credit unions, and investment platforms. Our secure API connections ensure your account information is always up-to-date without compromising security."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 30-day free trial with full access to all premium features. No credit card is required to start your trial. After the trial period, you can choose to continue with a paid subscription or downgrade to our Basic plan which is free forever."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription at any time from your account settings page. If you cancel, you'll still have access to your premium features until the end of your current billing period. After that, your account will automatically switch to our Basic plan without losing any of your data."
    },
    {
      question: "Do you provide financial advice?",
      answer: "FinFam provides general financial guidance and investment suggestions based on your financial profile and goals. However, these suggestions should not be considered as professional financial advice. For personalized financial advice, we recommend consulting with a certified financial advisor."
    },
    {
      question: "Can I export my financial data?",
      answer: "Absolutely! You can export your financial data in various formats including CSV, PDF, and Excel. This feature is useful for tax preparation, working with financial advisors, or creating your own custom analyses."
    },
    {
      question: "How often is my financial information updated?",
      answer: "FinFam updates your connected accounts automatically several times a day. You can also manually refresh your accounts at any time for real-time updates. Transaction data typically appears within 24-48 hours of being processed by your financial institution."
    },
    {
      question: "What if I need help using FinFam?",
      answer: "We offer multiple support channels including an extensive knowledge base, video tutorials, email support, and live chat assistance. Premium subscribers also get access to priority customer service with faster response times."
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Frequently Asked Questions</h1>
          <p className="mt-4 text-xl text-gray-600">Everything you need to know about the FinFam platform.</p>
        </motion.div>
        
        <motion.div 
          className="mt-12 space-y-0"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <FaqItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900">Still have questions?</h2>
          <p className="mt-4 text-gray-600">We're here to help. Contact our support team for assistance.</p>
          <div className="mt-6">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Contact Support
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FaqPage;
