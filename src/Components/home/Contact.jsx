import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, MessageSquare, Mail, Send, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    message: '',
    agreeToMarketing: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `שלום! אני מעוניין/ת בייעוץ להסרת שיער בלייזר.
    
פרטים:
שם: ${formData.name}
טלפון: ${formData.phone}
אזור בגוף: ${formData.area}
הודעה: ${formData.message}
${formData.agreeToMarketing ? 'מעוניין/ת לקבל עדכונים ומבצעים' : ''}`;

    window.open(`https://wa.me/972587575145?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">צרו קשר</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מוכנים להתחיל? פנו אלינו לייעוץ ללא עלות וללא התחייבות!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">קבלו ייעוץ אישי</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">שם מלא *</label>
                    <Input type="text" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} placeholder="הכנס את שמך המלא" required className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">טלפון *</label>
                    <Input type="tel" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} placeholder="050-1234567" required className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">אזור בגוף לטיפול</label>
                    <Select value={formData.area} onValueChange={(value) => handleChange('area', value)}>
                      <SelectTrigger><SelectValue placeholder="בחר אזור" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="פנים">פנים</SelectItem><SelectItem value="רגליים">רגליים</SelectItem><SelectItem value="בית שחי">בית שחי</SelectItem><SelectItem value="גב">גב</SelectItem><SelectItem value="חזה">חזה</SelectItem><SelectItem value="ביקיני">ביקיני</SelectItem><SelectItem value="מפשעות">מפשעות</SelectItem><SelectItem value="גוף מלא">גוף מלא</SelectItem><SelectItem value="אחר">אחר</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">הודעה נוספת</label>
                    <Textarea value={formData.message} onChange={(e) => handleChange('message', e.target.value)} placeholder="שתפו אותנו בפרטים נוספים..." rows={4} className="w-full" />
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Checkbox 
                      id="marketing" 
                      checked={formData.agreeToMarketing}
                      onCheckedChange={(checked) => handleChange('agreeToMarketing', checked)}
                    />
                    <label htmlFor="marketing" className="text-sm text-gray-700 cursor-pointer">
                      אני מעוניין/ת לקבל עדכונים, הטבות וחומרים שיווקיים (לא חובה)
                    </label>
                  </div>
                  <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-lg"><Send className="w-5 h-5 ml-2" /> שלחו בוואטסאפ</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-6">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">פרטי התקשרות</h3>
                <div className="space-y-4">
                  <div className="flex items-center"><Phone className="w-6 h-6 text-blue-500 ml-4" /><div><p className="font-semibold text-gray-900">טלפון</p><p className="text-gray-600">058-757-5145</p></div></div>
                  <div className="flex items-center"><MessageSquare className="w-6 h-6 text-green-500 ml-4" /><div><p className="font-semibold text-gray-900">WhatsApp</p><p className="text-gray-600">058-757-5145</p></div></div>
                  <div className="flex items-center"><MapPin className="w-6 h-6 text-purple-500 ml-4" /><div><p className="font-semibold text-gray-900">מיקום</p><p className="text-gray-600">החרושת 18, קומה 2, רמת השרון</p></div></div>
                  <div className="flex items-center"><Clock className="w-6 h-6 text-orange-500 ml-4" /><div><p className="font-semibold text-gray-900">שעות פעילות</p><p className="text-gray-600">א׳-ה׳: 9:00-21:00, ו׳: 9:00-14:00</p><p className="text-gray-600 font-bold">בתיאום מראש בלבד</p></div></div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-xl bg-blue-50">
              <CardContent className="p-8 text-center">
                <FileText className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">חובה לפני הטיפול הראשון</h3>
                <p className="text-gray-600 mb-6">לפני הגעתך לטיפול הראשון, יש למלא את שאלון הבריאות שלנו.</p>
                <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
                  <a href="https://forms.gle/H1MKbFZGsd8RbYqB6" target="_blank" rel="noopener noreferrer">למילוי שאלון רפואי</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}