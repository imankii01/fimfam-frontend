import React from 'react';
import { Link } from 'react-router-dom';
import { PiggyBank, Target, TrendingUp, Users, Shield, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: <PiggyBank className="h-6 w-6" />,
    title: 'Expense Tracking',
    description: 'Track your family expenses and stay on top of your budget with our intuitive tools.'
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Financial Goals',
    description: 'Set and achieve family financial goals with our goal tracking and reminder system.'
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Investment Advice',
    description: 'Receive personalized investment suggestions based on your family\'s financial profile.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Family Management',
    description: 'Manage your family\'s finances together with role-based access and permissions.'
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: 'Smart Analytics',
    description: 'Get insights into your spending patterns and make informed financial decisions.'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Bank-Grade Security',
    description: 'Your financial data is protected with state-of-the-art encryption and security measures.'
  }
];

const testimonials = [
  {
    name: 'John & Sarah Thompson',
    role: 'Family of Four',
    content: 'FinFam has transformed how we manage our finances. The kids are learning about money management too!',
    image: 'https://images.unsplash.com/photo-1509924603848-e25e4102bd22?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Michael Chen',
    role: 'Small Business Owner',
    content: 'Finally, a platform that helps me manage both business and family finances in one place.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Single Parent',
    content: 'The budgeting tools and savings goals have helped me secure my children\'s future.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }
];

const pricingPlans = [
  {
    name: 'Basic',
    price: 'Free',
    features: ['Expense tracking', 'Basic budgeting', 'Up to 3 family members', 'Email support'],
    cta: 'Start Free'
  },
  {
    name: 'Premium',
    price: '$9.99/mo',
    features: ['Everything in Basic', 'Unlimited family members', 'Investment tracking', 'Priority support'],
    cta: 'Try Premium'
  },
  {
    name: 'Business',
    price: '$19.99/mo',
    features: ['Everything in Premium', 'Tax planning', 'Business integration', '24/7 support'],
    cta: 'Get Business'
  }
];

const LandingPage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true });
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true });

  return (
    <div className="relative">
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="relative bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={heroInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="sm:text-center lg:text-left"
              >
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Take control of your</span>
                  <span className="block text-indigo-600">family finances</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Empower your family's financial future with our comprehensive tracking and advisory platform. Make informed decisions together.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-md shadow"
                  >
                    <Link to="/signup" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Get started
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="mt-3 sm:mt-0 sm:ml-3"
                  >
                    <Link to="/learn-more" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                      Learn more
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Family planning finances"
          />
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        ref={featuresRef}
        initial={{ opacity: 0, y: 50 }}
        animate={featuresInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-12 bg-gray-50"
        id="features"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Everything you need to manage family finances
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Our platform provides all the tools your family needs to track expenses, set goals, and grow wealth together.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-indigo-600">{feature.icon}</div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        ref={testimonialsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-16 bg-white"
        id="testimonials"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
            Trusted by families worldwide
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Pricing Section */}
      <motion.div
        ref={pricingRef}
        initial={{ opacity: 0, y: 50 }}
        animate={pricingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gray-50"
        id="pricing"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
            Simple, transparent pricing
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold text-indigo-600 mb-6">{plan.price}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200">
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to take control?</span>
            <span className="block">Start managing your family finances today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Join thousands of families who are already benefiting from our platform.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mt-8"
          >
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
            >
              Sign up for free
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;