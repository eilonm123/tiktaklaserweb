import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Users, Zap, Target, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const features = [
    {
      icon: Zap,
      title: 'טכנולוגיה מתקדמת',
      description: 'מכשיר Elysion Pro עם 4 אורכי גל שונים המתאימים לכל סוג עור ושיער'
    },
    {
      icon: Shield,
      title: 'בטיחות וסטריליות',
      description: 'עבודה לפי פרוטוקולים מחמירים של משרד הבריאות לבטיחות מירבית'
    },
    {
      icon: Users,
      title: 'שירות אישי',
      description: 'כל לקוח מקבל תוכנית טיפול מותאמת אישית לפי סוג העור והשיער'
    },
    {
      icon: Award,
      title: 'תוצאות מוכחות',
      description: 'אלפי לקוחות מרוצים עם תוצאות מעולות ושירות ברמה הגבוהה ביותר'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">על TikTak Laser</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            אנחנו מובילים בתחום הסרת השיער בלייזר עם שנות ניסיון, טכנולוגיה מתקדמת ומחויבות לשירות מעולה.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">הקליניקה שלנו</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  בקליניקת TikTak Laser אנחנו מתמחים בהסרת שיער בלייזר מתקדמת לגברים ולנשים. 
                  הקליניקה שלנו ממוקמת ברמת השרון ומציעה ציוד מתקדם ומטפלים מיומנים.
                </p>
                <p>
                  אנחנו משתמשים במכשיר Elysion Pro החדשני שכולל 4 אורכי גל שונים, 
                  מה שמאפשר לנו לטפל בכל סוגי העור והשיער בצורה יעילה ובטוחה.
                </p>
                <p>
                  אנו מאמינים בשירות אישי, יחס חם ותוצאות שנראות לעין כבר מהטיפול הראשון.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white shadow-xl">
              <Heart className="w-12 h-12 text-blue-200 mb-6" />
              <h3 className="text-2xl font-bold mb-4">למה לבחור דווקא בנו?</h3>
              <ul className="space-y-3">
                <li className="flex items-start"><Target className="w-5 h-5 ml-3 mt-1 text-blue-200" /><span>שירות אישי ומקצועי המותאם לכל לקוח.ה</span></li>
                <li className="flex items-start"><Target className="w-5 h-5 ml-3 mt-1 text-blue-200" /><span>תוצאות מוכחות עם מאות לקוחות מרוצים.</span></li>
                <li className="flex items-start"><Target className="w-5 h-5 ml-3 mt-1 text-blue-200" /><span>טכנולוגיה מתקדמת וציוד איכותי.</span></li>
                <li className="flex items-start"><Target className="w-5 h-5 ml-3 mt-1 text-blue-200" /><span>מחירים הוגנים ואפשרות לתשלום פר טיפול.</span></li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <feature.icon className="w-12 h-12 mx-auto text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}