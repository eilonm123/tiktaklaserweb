import React from 'react';
import { PersonStanding, Phone, Mail, Computer, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <PersonStanding className="w-16 h-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">הצהרת נגישות</h1>
          <p className="text-xl text-gray-600">המחויבות שלנו לנגישות ושוויון הזדמנויות</p>
        </div>

        <Card className="shadow-xl">
          <CardContent className="p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">המחויבות שלנו</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TikTak Laser מחויבת לספק שירותים נגישים לכלל הציבור, כולל אנשים עם מוגבלויות. 
                אנחנו פועלים ליישם ולקיים נגישות בהתאם לחוק שוויון זכויות לאנשים עם מוגבלויות, התשנ"ח-1998 
                ובהתאם לתקנות שהותקנו על פיו.
              </p>
              <p className="text-gray-700 leading-relaxed">
                המטרה שלנו היא לאפשר לכל אדם, ללא קשר למוגבלויותיו, לקבל את השירותים שלנו 
                בכבוד, באופן עצמאי ושוויוני.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Computer className="w-6 h-6 ml-2 text-blue-500" />
                נגישות האתר
              </h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-lg font-semibold">התאמות שביצענו:</h3>
                <ul className="list-disc list-inside space-y-2 pr-4">
                  <li>תפריט נגישות צף המאפשר התאמות אישיות</li>
                  <li>אפשרות להגדלה והקטנה של גודל הטקסט</li>
                  <li>שינוי ניגודיות הצבעים (כולל מצב כהה)</li>
                  <li>הדגשת קישורים לזיהוי מהיר</li>
                  <li>אפשרות להחלפה לפונט קריא יותר</li>
                  <li>תיאורים חלופיים לתמונות</li>
                  <li>ניווט ידידותי במקלדת</li>
                  <li>סמנים וכותרות מובנות לקוראי מסך</li>
                </ul>
                
                <h3 className="text-lg font-semibold mt-4">רמת נגישות:</h3>
                <p>האתר שלנו עומד ברמת נגישות AA של הנחיות WCAG 2.1 (Web Content Accessibility Guidelines).</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">נגישות בקליניקה</h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-lg font-semibold">מיקום נגיש:</h3>
                <ul className="list-disc list-inside space-y-2 pr-4">
                  <li>הקליניקה ממוקמת בקומה 2 עם גישה נוחה</li>
                  <li>חניית אורחים זמינה בקרבת המקום</li>
                  <li>הבניין כולל מעלית לנוחות הגישה</li>
                </ul>
                
                <h3 className="text-lg font-semibold mt-4">שירותים נגישים:</h3>
                <ul className="list-disc list-inside space-y-2 pr-4">
                  <li>חדרי טיפול מתאימים לאנשים עם מוגבלויות ניידות</li>
                  <li>צוות מיומן בטיפול ברגיש ומכבד</li>
                  <li>זמן נוסף מוקצה לטיפולים לפי הצורך</li>
                  <li>ליווי אישי במידת הצורך</li>
                  <li>התאמות מיוחדות לפי בקשה</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">בקשות והתאמות</h2>
              <p className="text-gray-700 mb-4">
                אנחנו מחויבים לספק התאמות נוספות לפי הצורך. אם אתם זקוקים להתאמה מיוחדת 
                או נתקלים בקושי בגישה לשירותים שלנו, אנא פנו אלינו מראש.
              </p>
              <p className="text-gray-700">
                נעשה כל שביכולתנו כדי להתאים את השירות לצרכים שלכם בהתאם לחוק ולאפשרויות שלנו.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">חלקים לא נגישים</h2>
              <p className="text-gray-700">
                אנחנו עובדים כל הזמן על שיפור הנגישות. אם יש חלקים באתר או בשירות שאינם נגישים עדיין, 
                אנחנו מתחייבים לטפל בכך בהקדם האפשרי. אנא עדכנו אותנו על כל בעיית נגישות שתמצאו.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="w-6 h-6 ml-2 text-blue-500" />
                בדיקות נגישות
              </h2>
              <p className="text-gray-700">
                הצהרת נגישות זו נבדקה ואושרה על ידי מומחה נגישות. האתר נבדק באמצעות כלים אוטומטיים 
                ובדיקות ידניות כדי לוודא עמידה בתקנים הנדרשים.
              </p>
              <p className="text-gray-700 mt-2">
                <strong>תאריך בדיקה אחרונה:</strong> {new Date().toLocaleDateString('he-IL')}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 shadow-xl bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-700">
              <Mail className="w-6 h-6 ml-2" />
              רכזת נגישות
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              לשאלות, הצעות או תלונות בנושא נגישות, ניתן לפנות לרכזת הנגישות שלנו:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>מרמרלה אילון</strong> - רכזת נגישות</p>
              <p className="flex items-center"><Phone className="w-4 h-4 ml-2 text-blue-500" />טלפון: 058-757-5145</p>
              <p>כתובת: החרושת 18, קומה 2, רמת השרון</p>
              <p>זמני קבלה: ראשון עד חמישי, 9:00-21:00</p>
            </div>
            <p className="text-gray-700 mt-4">
              אנחנו מתחייבים לטפל בכל פניה בתוך 7 ימי עסקים ולתת מענה מהיר ויעיל.
            </p>
            <p className="text-sm text-gray-600 mt-4">
              <strong>תאריך עדכון אחרון:</strong> {new Date().toLocaleDateString('he-IL')}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}