import React from 'react';
import { Shield, Lock, Eye, Mail, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">מדיניות פרטיות</h1>
          <p className="text-xl text-gray-600">אנחנו מתחייבים להגן על הפרטיות שלכם</p>
        </div>

        <Card className="shadow-xl">
          <CardContent className="p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="w-6 h-6 ml-2 text-blue-500" />
                כללי
              </h2>
              <p className="text-gray-700 leading-relaxed">
                מדיניות פרטיות זו מסבירה כיצד TikTak Laser (להלן: "אנחנו", "שלנו") אוספת, משתמשת ומגינה על המידע האישי שלכם 
                כאשר אתם משתמשים באתר שלנו או מקבלים שירותים מאיתנו. אנחנו מתחייבים להגן על פרטיותכם ולפעול בהתאם לחוק הגנת הפרטיות, התשמ"א-1981.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="w-6 h-6 ml-2 text-blue-500" />
                איזה מידע אנחנו אוספים
              </h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold mb-2">מידע שאתם מספקים לנו:</h3>
                  <ul className="list-disc list-inside space-y-2 pr-4">
                    <li>פרטים אישיים: שם מלא, מספר טלפון, כתובת אימייל</li>
                    <li>מידע רפואי: שאלון בריאות שמילאתם לפני הטיפול</li>
                    <li>פרטי הטיפול: אזורי הגוף לטיפול, העדפות והערות אישיות</li>
                    <li>תמונות: תמונות לפני ואחרי הטיפול (רק באישורכם המפורש)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">מידע שנאסף אוטומטית:</h3>
                  <ul className="list-disc list-inside space-y-2 pr-4">
                    <li>מידע טכני: כתובת IP, סוג דפדפן, מערכת הפעלה</li>
                    <li>עוגיות (Cookies): לשיפור חווית הגלישה באתר</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">למה אנחנו משתמשים במידע</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 pr-4">
                <li>מתן שירותי הסרת שיער בלייזר בצורה בטוחה ומקצועית</li>
                <li>תיאום פגישות וזימון לטיפולים</li>
                <li>מעקב אחר התקדמות הטיפול ומתן המלצות מותאמות</li>
                <li>שליחת תזכורות לטיפולים או הנחיות לאחר הטיפול</li>
                <li>שיפור השירות שלנו על בסיס המשוב שלכם</li>
                <li>שליחת עדכונים שיווקיים (רק אם הסכמתם לכך)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">עם מי אנחנו משתפים מידע</h2>
              <p className="text-gray-700 mb-4">
                אנחנו לא מוכרים, משכירים או מעבירים את המידע האישי שלכם לצדדים שלישיים, למעט במקרים הבאים:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 pr-4">
                <li>כאשר נדרש על פי חוק או פסיקת בית משפט</li>
                <li>למטרות רפואיות דחופות (במקרה חירום בלבד)</li>
                <li>לספקי שירות טכניים שעוזרים לנו להפעיל את האתר (מחויבים בסודיות)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">כיצד אנחנו שומרים על המידע</h2>
              <p className="text-gray-700">
                אנחנו נוקטים באמצעי אבטחה פיזיים, טכניים וארגוניים מתקדמים כדי להגן על המידע שלכם מפני גישה לא מורשית, 
                אובדן או חשיפה. המידע הרפואי שלכם נשמר בהתאם לתקנות משרד הבריאות לשמירת חסיון רפואי.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">הזכויות שלכם</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 pr-4">
                <li>זכות עיון: תוכלו לבקש לראות איזה מידע יש לנו עליכם</li>
                <li>זכות תיקון: תוכלו לבקש לתקן מידע שגוי או לא מעודכן</li>
                <li>זכות מחיקה: תוכלו לבקש למחוק את המידע שלכם (כפוף לחובות חוקיות)</li>
                <li>זכות הגבלה: תוכלו לבקש להגביל את השימוש במידע שלכם</li>
                <li>זכות ביטול הסכמה: תוכלו לבטל הסכמה לקבלת דיוור בכל עת</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">שמירת מידע</h2>
              <p className="text-gray-700">
                אנחנו שומרים את המידע שלכם כל עוד אתם לקוחות שלנו, ובנוסף למשך 7 שנים לאחר הטיפול האחרון 
                (בהתאם לחובות החוקיות שלנו). מידע רפואי נשמר בהתאם להנחיות משרד הבריאות.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">עדכון המדיניות</h2>
              <p className="text-gray-700">
                אנחנו עשויים לעדכן מדיניות זו מעת לעת. עדכונים יפורסמו באתר שלנו ויכנסו לתוקף מיד עם פרסומם.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 shadow-xl bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-700">
              <Mail className="w-6 h-6 ml-2" />
              יצירת קשר בנושאי פרטיות
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              לשאלות, בקשות או תלונות בנושא פרטיות, ניתן לפנות אלינו:
            </p>
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center"><Phone className="w-4 h-4 ml-2 text-blue-500" />טלפון: 058-757-5145</p>
              <p className="flex items-center"><Mail className="w-4 h-4 ml-2 text-blue-500" />וואטסאפ: 058-757-5145</p>
              <p>כתובת: החרושת 18, קומה 2, רמת השרון</p>
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