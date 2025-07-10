
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, DollarSign, Stethoscope, Clock, Check, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const servicesData = {
  women: [
    { name: 'פנים', icon: '🙂' }, { name: 'בית שחי', icon: '🙋‍♀️' }, { name: 'ידיים', icon: '💪' },
    { name: 'רגליים', icon: '🦵' }, { name: 'מפשעות', icon: '👙' }, { name: 'גוף מלא', icon: '✨' }
  ],
  men: [
    { name: 'פנים ועורף', icon: '🧔' }, { name: 'גב', icon: '💪' }, { name: 'כתפיים', icon: '🏋️‍♂️' },
    { name: 'חזה ובטן', icon: '👕' }, { name: 'רגליים', icon: '🦵' }, { name: 'ידיים', icon: '💪' }
  ]
};

export default function Services() {
  const [activeTab, setActiveTab] = useState('women');

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">אזורי טיפול</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            אנו מציעים מגוון רחב של טיפולי הסרת שיער בלייזר לנשים וגברים כאחד.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-gray-50 to-white shadow-xl overflow-hidden">
            <CardContent className="p-2 sm:p-4">
              <div className="flex justify-center bg-blue-50 rounded-full p-1 mb-6">
                <Button
                  onClick={() => setActiveTab('women')}
                  className={`flex-1 rounded-full text-lg transition-all duration-300 ${activeTab === 'women' ? 'bg-blue-500 text-white shadow-md' : 'bg-transparent text-gray-600'}`}
                >
                  <Heart className="ml-2 h-5 w-5" /> נשים
                </Button>
                <Button
                  onClick={() => setActiveTab('men')}
                  className={`flex-1 rounded-full text-lg transition-all duration-300 ${activeTab === 'men' ? 'bg-blue-500 text-white shadow-md' : 'bg-transparent text-gray-600'}`}
                >
                  <User className="ml-2 h-5 w-5" /> גברים
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                {servicesData[activeTab].map((service) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="group"
                  >
                    <div className="bg-white rounded-xl p-4 shadow-md group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                      <div className="text-4xl mb-2">{service.icon}</div>
                      <p className="font-semibold text-gray-800">{service.name}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 text-white text-center shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">יעוץ אישי ותוכנית תשלומים גמישה</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            ב-TikTak Laser כל לקוח.ה מקבל.ת ייעוץ ללא עלות והתאמה אישית של תוכנית הטיפולים.
            אנו מציעים אפשרות לתשלום עבור כל טיפול בנפרד, ללא התחייבות לחבילה.
          </p>
          <Button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition-colors"
          >
            אני רוצה לשמוע עוד
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
