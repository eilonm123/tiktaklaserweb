import React from 'react';
import { motion } from 'framer-motion';
import { Star, Phone, MapPin, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-bl from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right"
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-blue-600">TikTak Laser</span>
              <br />
              <span className="text-3xl lg:text-4xl text-gray-700">הסרת שיער בלייזר מתקדמת</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              טכנולוגיית לייזר חדשנית, שירות אישי ומקצועי ותוצאות מוכחות לגברים ולנשים.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                onClick={() => window.open('https://wa.me/972587575145', '_blank')}
                className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageSquare className="w-6 h-6 ml-2" />
                ייעוץ בוואטסאפ
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="text-blue-600 border-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-full"
              >
                קבלו ייעוץ ללא עלות
              </Button>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-sm text-gray-600"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center">
                <MapPin className="w-5 h-5 ml-2 text-blue-500" />
                החרושת 18, רמת השרון
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 ml-2 text-yellow-500" />
                תוצאות מהטיפול הראשון
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 ml-2 text-blue-500" />
                058-757-5145
              </div>
            </motion.div>
          </motion.div>

          {/* Benefits Cards */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">למה לבחור בנו?</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 ml-3 text-green-500" />
                  מכשיר Elysion Pro עם 4 אורכי גל
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 ml-3 text-green-500" />
                  מתאים לכל גוני העור
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 ml-3 text-green-500" />
                  אפשרות לתשלום פר טיפול
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 ml-3 text-green-500" />
                  שירות אישי ומקצועי
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-6 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-2">ייעוץ ללא עלות וללא התחייבות!</h3>
              <p className="text-blue-100 mb-4">בואו להבין איך תוכלו להגיע לעור חלק מתמיד.</p>
              <Button
                onClick={scrollToContact}
                className="bg-white text-blue-600 hover:bg-blue-50 w-full"
              >
                אני רוצה ייעוץ
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}