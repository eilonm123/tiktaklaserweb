import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sun, Footprints, Droplet, Ban, Thermometer, Waves, Shirt, Scissors, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const beforeInstructions = [
  { icon: Scissors, text: "יש לגלח את האזור המטופל כשני ימים לפני הטיפול." },
  { icon: Droplet, text: "מומלץ למרוח קרם גוף על האזור המטופל פעמיים ביום בשבוע שלפני הטיפול." },
  { icon: Waves, text: "מומלץ לבצע פילינג עדין באזור הטיפול 3 ימים לפני." },
  { icon: Shirt, text: "להגיע לטיפול בלבוש רחב ונעים." },
  { icon: Ban, text: "אין למרוח תכשירים, בושם, קרמים, או איפור לפני הטיפול." },
  { icon: Ban, text: "לא להסיר שיער מהשורש (שעווה, פינצטה, וכו') 6 שבועות לפני." }
];

const afterInstructions = [
  { icon: Sun, text: "להימנע מחשיפה לשמש לפחות 3 ימים. חובה להשתמש במסנן קרינה גבוה!" },
  { icon: Footprints, text: "לא לבצע פעילות נמרצת הגורמת להזעה למשך 24 שעות." },
  { icon: Ban, text: "אין להשתמש בתכשירים פעילים (כמו חומצות) למשך 48 שעות." },
  { icon: Ban, text: "לא לגרד או לשפשף את האזור המטופל למשך 48 שעות." },
  { icon: Thermometer, text: "אין לעשות מקלחת חמה, אמבט או סאונה למשך 24 שעות." },
  { icon: Waves, text: "אין להיכנס לבריכה עם כלור למשך 24 שעות." },
  { icon: Shirt, text: "יש ללבוש בגדים רפויים ונוחים למשך 24 שעות." },
  { icon: Droplet, text: "אין לשטוף את האזור המטופל במים במשך 8 שעות." }
];

export default function Instructions() {
  return (
    <section id="instructions" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">הנחיות חשובות לטיפול</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            שמירה על ההנחיות תבטיח תוצאות מושלמות ובטיחות מירבית.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <Card className="h-full shadow-xl">
              <CardHeader><CardTitle className="text-blue-600">📝 הנחיות לקראת הטיפול</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {beforeInstructions.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <item.icon className="w-5 h-5 text-blue-500 ml-3 mt-1 flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
            <Card className="h-full shadow-xl">
              <CardHeader><CardTitle className="text-green-600">🌟 הנחיות לאחר הטיפול</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {afterInstructions.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <item.icon className="w-5 h-5 text-green-500 ml-3 mt-1 flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center bg-blue-50 rounded-2xl p-8">
            <FileText className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">אל תשכחו למלא שאלון רפואי!</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">לפני ההגעה לטיפול הראשון, חובה למלא את שאלון הבריאות הדיגיטלי שלנו. זה לוקח רק כמה דקות ויבטיח שהטיפול יהיה בטוח עבורכם.</p>
            <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                <a href="https://forms.gle/H1MKbFZGsd8RbYqB6" target="_blank" rel="noopener noreferrer">למילוי שאלון רפואי</a>
            </Button>
        </motion.div>

      </div>
    </section>
  );
}