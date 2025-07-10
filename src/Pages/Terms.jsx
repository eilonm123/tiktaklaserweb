import React from 'react';
import { FileText, Scale, AlertTriangle, Gavel } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FileText className="w-16 h-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">תקנון שימוש</h1>
          <p className="text-xl text-gray-600">התנאים וההגבלות לשימוש באתר ובשירותים שלנו</p>
        </div>

        <Card className="shadow-xl">
          <CardContent className="p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Scale className="w-6 h-6 ml-2 text-blue-500" />
                כללי
              </h2>
              <p className="text-gray-700 leading-relaxed">
                ברוכים הבאים לאתר TikTak Laser. השימוש באתר זה ובשירותים שלנו כפוף לתנאים המפורטים להלן. 
                על ידי גישה לאתר או שימוש בשירותים שלנו, אתם מסכימים לכל התנאים הללו. 
                אם אינכם מסכימים לתנאים, אנא הימנעו משימוש באתר ובשירותים.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">הגדרות</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 pr-4">
                <li><strong>"החברה"</strong> - TikTak Laser, עוסק מורשה מס' 322951302</li>
                <li><strong>"השירותים"</strong> - שירותי הסרת שיער בלייזר ושירותים נלווים</li>
                <li><strong>"האתר"</strong> - האתר האינטרנטי של TikTak Laser</li>
                <li><strong>"המשתמש"/"הלקוח"</strong> - כל מי שגולש באתר או מקבל שירותים</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">שימוש באתר</h2>
              <div className="space-y-4 text-gray-700">
                <p>המשתמשים באתר מתחייבים:</p>
                <ul className="list-disc list-inside space-y-2 pr-4">
                  <li>להשתמש באתר למטרות חוקיות בלבד</li>
                  <li>לא לפגוע בתפעול האתר או בחוויית משתמשים אחרים</li>
                  <li>לא להעביר תוכן פוגעני, לא חוקי או מזיק</li>
                  <li>לכבד את זכויות הקניין הרוחני שלנו</li>
                  <li>לספק מידע נכון ומדויק בטפסים</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">השירותים הרפואיים</h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-lg font-semibold">תנאים לקבלת שירות:</h3>
                <ul className="list-disc list-inside space-y-2 pr-4">
                  <li>מילוי שאלון רפואי מלא ומדויק לפני הטיפול הראשון</li>
                  <li>הגעה לייעוץ אישי לפני תחילת הטיפולים</li>
                  <li>ביצוע הוראות ההכנה לטיפול וההנחיות לאחריו</li>
                  <li>גיל מינימלי של 16 שנים (מתחת לגיל 18 נדרש אישור הורה)</li>
                </ul>
                
                <h3 className="text-lg font-semibold mt-4">מגבלות טיפול:</h3>
                <ul className="list-disc list-inside space-y-2 pr-4">
                  <li>לא מתאים לנשים בהריון או בהנקה</li>
                  <li>לא מתאים לאנשים עם מחלות עור פעילות באזור הטיפול</li>
                  <li>דרושה בדיקה מיוחדת עבור אנשים הנוטלים תרופות פוטוסנסיטיביות</li>
                  <li>טיפול בחולי סוכרת רק באישור רופא מטפל</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">תשלומים וביטולים</h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-lg font-semibold">מדיניות תשלום:</h3>
                <ul className="list-disc list-inside space-y-2 pr-4">
                  <li>התשלום מתבצע לפני או במהלך הטיפול</li>
                  <li>מקבלים מזומן, אשראי ו-PayPal</li>
                  <li>ניתן לשלם עבור כל טיפול בנפרד או לרכוש חבילה</li>
                  <li>החזר כספי זמין תוך 14 יום מרכישת חבילה (לפני תחילת הטיפולים)</li>
                </ul>
                
                <h3 className="text-lg font-semibold mt-4">מדיניות ביטול:</h3>
                <ul className="list-disc list-inside space-y-2 pr-4">
                  <li>ביטול עד 24 שעות לפני הטיפול - ללא חיוב</li>
                  <li>ביטול באותו יום או אי הגעה - חיוב של 50% ממחיר הטיפול</li>
                  <li>במקרה חירום רפואי - גמישות מלאה בביטול</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 ml-2 text-yellow-500" />
                הגבלת אחריות
              </h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>חשוב לדעת:</strong></p>
                <ul className="list-disc list-inside space-y-2 pr-4">
                  <li>המידע באתר מיועד למטרות מידע כללי בלבד ואינו מהווה ייעוץ רפואי</li>
                  <li>תוצאות הטיפול משתנות בין אנשים ותלויות בגורמים שונים</li>
                  <li>אנחנו לא אחראים לנזקים עקיפים או תוצאתיים</li>
                  <li>אחריותנו מוגבלת לעלות הטיפול שקיבלתם</li>
                  <li>תמונות לפני ואחרי מייצגות תוצאות של לקוחות ספציפיים</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">קניין רוחני</h2>
              <p className="text-gray-700">
                כל התכנים באתר, כולל טקסטים, תמונות, לוגו ועיצוב, הם רכושה הבלעדי של TikTak Laser 
                ומוגנים בזכויות יוצרים. אסור להעתיק, להפיץ או להשתמש בתכנים ללא אישור בכתב.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">פרטיות</h2>
              <p className="text-gray-700">
                השימוש באתר ובשירותים כפוף למדיניות הפרטיות שלנו. אנחנו מתחייבים לשמור על פרטיותכם 
                ולהשתמש במידע שלכם רק למטרות מתן השירות ושיפורו.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Gavel className="w-6 h-6 ml-2 text-blue-500" />
                דין החל וסמכות שיפוט
              </h2>
              <p className="text-gray-700">
                תקנון זה כפוף לדיני מדינת ישראל. בכל מחלוקת, סמכות השיפוט הבלעדית תהיה 
                לבתי המשפט המוסמכים במחוז תל אביב.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">שינויים בתקנון</h2>
              <p className="text-gray-700">
                אנחנו רשאים לעדכן תקנון זה מעת לעת. שינויים יפורסמו באתר ויכנסו לתוקף מיד עם פרסומם. 
                המשך השימוש באתר לאחר השינויים מהווה הסכמה לתנאים החדשים.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 shadow-xl bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-700">יצירת קשר</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              לשאלות לגבי תקנון זה או השירותים שלנו, ניתן לפנות אלינו:
            </p>
            <div className="space-y-2 text-gray-700">
              <p>TikTak Laser - עוסק מורשה מס' 322951302</p>
              <p>כתובת: החרושת 18, קומה 2, רמת השרון</p>
              <p>טלפון: 058-757-5145</p>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              <strong>תאריך עדכון אחרון:</strong> {new Date().toLocaleDateString('he-IL')}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}