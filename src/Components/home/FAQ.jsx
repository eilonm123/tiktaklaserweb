import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'האם הטיפול כואב?',
      answer: 'הטיפול עלול לגרום לאי נוחות קלה, אבל אינו כואב. המכשיר שלנו כולל מערכת קירור מתקדמת שמפחיתה את האי נוחות למינימום. רוב הלקוחות מתארים את התחושה כמו "צביטה קלה".'
    },
    {
      question: 'כל כמה זמן צריך לבוא לטיפול?',
      answer: 'מומלץ לבוא לטיפול כל 4-6 שבועות. זה הזמן הנדרש לשיער להיכנס לשלב הצמיחה שבו הוא הכי רגיש ללייזר. הטיפול יהיה יעיל ביותר בתכיפות זו.'
    },
    {
      question: 'האם יש תופעות לוואי?',
      answer: 'תופעות הלוואי מינימליות ועוברות מהר. עלולות להיות: אדמומיות קלה, נפיחות זמנית או רגישות באזור הטיפול. אלו עוברות תוך מספר שעות עד יום.'
    },
    {
      question: 'כמה טיפולים נדרשים?',
      answer: 'בדרך כלל נדרשים 6-8 טיפולים לתוצאה מלאה. המספר המדויק תלוי בסוג השיער, צבע העור, האזור המטופל וגורמים אישיים נוספים.'
    },
    {
      question: 'האם יש אפשרות לשלם פר טיפול?',
      answer: 'בהחלט! אנחנו מציעים גמישות מלאה ומאפשרים תשלום עבור כל טיפול בנפרד, ללא צורך להתחייב לחבילה מראש. אתם בוחרים מה שהכי נוח לכם.'
    },
    {
      question: 'איך להתכונן לטיפול?',
      answer: 'יש לגלח את האזור כשני ימים לפני הטיפול, להימנע מחשיפה לשמש, ולא להשתמש בתכשירים מבוססי אלכוהול. הנחיות מלאות ומפורטות נמצאות בעמוד "הנחיות" באתר.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">שאלות נפוצות</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            כל מה שרציתם לדעת על הסרת שיער בלייזר במקום אחד.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full text-right p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-500" />
                    )}
                  </button>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
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
          className="mt-12 text-center bg-blue-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">יש לכם עוד שאלות?</h3>
          <p className="text-gray-600 mb-6">
            אנחנו כאן לענות על כל שאלה! פנו אלינו לייעוץ אישי וללא התחייבות.
          </p>
          <button
            onClick={() => window.open('https://wa.me/972587575145', '_blank')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            שאלו אותנו בוואטסאפ
          </button>
        </motion.div>
      </div>
    </section>
  );
}