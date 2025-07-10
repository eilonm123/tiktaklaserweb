import React, { useEffect } from 'react';
import { Phone, MapPin, Instagram, Facebook, MessageSquare, FileText, Shield, PersonStanding } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import AccessibilityMenu from '../components/home/AccessibilityMenu';

export default function Layout({ children }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    document.documentElement.lang = 'he';
  }, []);

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <style>
        {`
          :root {
            --brand-color: #3498db; /* Light Blue */
            --brand-color-dark: #2980b9; /* Darker Blue */
          }
          html.text-size-increase body { font-size: 115%; }
          html.text-size-decrease body { font-size: 90%; }
          html.contrast-high { filter: contrast(1.5); }
          html.contrast-dark { background: #1a1a1a !important; color: white !important; }
          html.contrast-dark .bg-white, html.contrast-dark .bg-gray-50, html.contrast-dark .from-blue-50, html.contrast-dark .from-white { background-color: #1a1a1a !important; }
          html.contrast-dark img, html.contrast-dark video, html.contrast-dark .bg-gradient-to-r, html.contrast-dark .bg-gradient-to-b, html.contrast-dark .bg-gradient-to-bl, html.contrast-dark [class*="bg-"] { filter: invert(1) hue-rotate(180deg); }
          html.highlight-links a, html.highlight-links button { background: yellow !important; color: black !important; border: 2px solid black !important; padding: 2px; }
          html.readable-font body, html.readable-font button, html.readable-font input, html.readable-font h1, html.readable-font h2, html.readable-font h3, html.readable-font p { font-family: "Arial", sans-serif !important; }
        `}
      </style>
      
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to={createPageUrl("Home")} className="flex items-center">
                <div className="flex items-center">
                  <span className="font-bold">TikTak</span>
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/07297a1c4_-_.png" alt="Laser Logo" className="h-10 -ml-1" />
                </div>
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-8 space-x-reverse">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">בית</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">אודות</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">שירותים</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-blue-600 transition-colors">גלריה</button>
              <button onClick={() => scrollToSection('instructions')} className="text-gray-700 hover:text-blue-600 transition-colors">הנחיות</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-blue-600 transition-colors">שאלות נפוצות</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">יצירת קשר</button>
            </nav>

            <div className="flex items-center space-x-4 space-x-reverse">
              <a href="tel:0587575145" className="text-gray-700 hover:text-blue-600" aria-label="חייג אלינו">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-white">TikTak</span>
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/07297a1c4_-_.png" alt="Laser Logo" className="h-8 -ml-1" />
              </div>
              <p className="text-gray-400 mb-4">
                הסרת שיער בלייזר מתקדמת עם טכנולוגיה חדשנית ושירות אישי.
              </p>
              <p className="text-sm text-gray-400">
                עוסק מורשה מס' 322951302
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">יצירת קשר</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 ml-3 text-blue-400" />
                  החרושת 18, קומה 2, רמת השרון
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 ml-3 text-blue-400" />
                  <a href="tel:0587575145" className="hover:text-white">058-7575145</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">קישורים שימושיים</h4>
              <ul className="space-y-3">
                <li><Link to={createPageUrl("Privacy")} className="text-gray-400 hover:text-white">מדיניות פרטיות</Link></li>
                <li><Link to={createPageUrl("Terms")} className="text-gray-400 hover:text-white">תקנון שימוש</Link></li>
                <li><Link to={createPageUrl("Accessibility")} className="text-gray-400 hover:text-white">הצהרת נגישות</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">עקבו אחרינו</h4>
              <div className="flex space-x-4 space-x-reverse">
                <a href="https://www.instagram.com/tiktak_laser/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label="Instagram">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label="Facebook">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>

          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} TikTak Laser. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button onClick={() => window.open('https://wa.me/972587575145', '_blank')} className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg" aria-label="צור קשר בוואטסאפ">
          <MessageSquare className="w-6 h-6" />
        </Button>
      </div>
      <AccessibilityMenu />
    </div>
  );
}