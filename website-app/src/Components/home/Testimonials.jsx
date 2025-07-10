import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'שרה כהן',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'הטיפול מעולה! השירות אישי ומקצועי, התוצאות מדהימות. המלצתי לכל החברות שלי.',
      area: 'רגליים מלאות'
    },
    {
      name: 'דני לוי',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'אחרי מספר טיפולים השיער כמעט נעלם לגמרי. הצוות מקצועי ונעים. מומלץ בחום!',
      area: 'גב וחזה'
    },
    {
      name: 'יעל שדה',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'הגעתי דרך המלצה ואני כל כך שמחה. היחס אישי והתוצאות מהירות. הקליניקה נקייה ומזמינה.',
      area: 'ידיים ובית שחי'
    },
    {
      name: 'יוסי רוזן',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'שירות מהיר ויעיל, הטיפול לא כואב בכלל. הצוות מקצועי ונעים. חוסך לי המון זמן!',
      area: 'פנים ועורף'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">מה הלקוחות שלנו אומרים</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            אלפי לקוחות מרוצים בחרו בנו לטיפולי הסרת שיער בלייזר
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover ml-4" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-blue-400 mb-3" />
                  <p className="text-gray-600 mb-4 leading-relaxed">{testimonial.text}</p>
                  <div className="bg-blue-50 rounded-lg p-2 text-center">
                    <span className="text-sm font-medium text-blue-700">{testimonial.area}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">הצטרפו לאלפי הלקוחות המרוצים שלנו</h3>
          <p className="text-lg mb-6">
            תחלו את המסע שלכם לעור חלק, בטיפול יעיל ובטוח עם TikTak Laser.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://wa.me/972587575145', '_blank')}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition-colors"
            >
              התחילו עכשיו
            </button>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-colors"
            >
              קבלו הצעת מחיר
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}