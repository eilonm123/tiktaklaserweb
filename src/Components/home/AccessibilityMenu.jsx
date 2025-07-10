import React, { useState, useEffect } from 'react';
import { PersonStanding, X, ZoomIn, ZoomOut, Sun, Moon, Link, Type, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const defaultSettings = {
  textSize: 0, // -1, 0, 1
  contrast: 'default', // default, high, dark
  highlightLinks: false,
  readableFont: false,
};

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState(defaultSettings);

  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  useEffect(() => {
    applySettings(settings);
    localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
  }, [settings]);

  const applySettings = (currentSettings) => {
    const root = document.documentElement;

    // Text Size
    root.classList.remove('text-size-increase', 'text-size-decrease');
    if (currentSettings.textSize === 1) root.classList.add('text-size-increase');
    if (currentSettings.textSize === -1) root.classList.add('text-size-decrease');

    // Contrast
    root.classList.remove('contrast-high', 'contrast-dark');
    if (currentSettings.contrast === 'high') root.classList.add('contrast-high');
    if (currentSettings.contrast === 'dark') root.classList.add('contrast-dark');
    
    // Highlight Links
    root.classList.toggle('highlight-links', currentSettings.highlightLinks);

    // Readable Font
    root.classList.toggle('readable-font', currentSettings.readableFont);
  };
  
  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };
  
  const handleTextSizeChange = (amount) => {
    let newSize = settings.textSize + amount;
    if (newSize > 1) newSize = 1;
    if (newSize < -1) newSize = -1;
    updateSetting('textSize', newSize);
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return (
    <>
      <div className="fixed bottom-20 left-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 shadow-lg"
          aria-label="פתח תפריט נגישות"
        >
          <PersonStanding className="w-6 h-6" />
        </Button>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setIsOpen(false)}
        >
          <Card 
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-60"
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
          >
            <CardHeader className="flex flex-row items-center justify-between border-b">
              <CardTitle>תפריט נגישות</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="סגור תפריט נגישות">
                <X className="w-5 h-5" />
              </Button>
            </CardHeader>
            <CardContent className="p-4 space-y-6">
              <div className="space-y-2">
                <h4 className="font-semibold">גודל טקסט</h4>
                <div className="flex gap-2">
                  <Button onClick={() => handleTextSizeChange(1)} className="flex-1" aria-label="הגדל טקסט">
                    <ZoomIn className="w-4 h-4 ml-2" /> הגדל
                  </Button>
                  <Button onClick={() => handleTextSizeChange(-1)} className="flex-1" aria-label="הקטן טקסט">
                    <ZoomOut className="w-4 h-4 ml-2" /> הקטן
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold">ניגודיות</h4>
                <div className="flex gap-2">
                  <Button onClick={() => updateSetting('contrast', 'high')} variant={settings.contrast === 'high' ? 'default' : 'outline'} className="flex-1" aria-label="ניגודיות גבוהה">
                    <Sun className="w-4 h-4 ml-2" /> גבוהה
                  </Button>
                  <Button onClick={() => updateSetting('contrast', 'dark')} variant={settings.contrast === 'dark' ? 'default' : 'outline'} className="flex-1" aria-label="ניגודיות הפוכה">
                    <Moon className="w-4 h-4 ml-2" /> הפוכה
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold">התאמות נוספות</h4>
                 <Button onClick={() => updateSetting('highlightLinks', !settings.highlightLinks)} variant={settings.highlightLinks ? 'default' : 'outline'} className="w-full justify-start" aria-pressed={settings.highlightLinks}>
                    <Link className="w-4 h-4 ml-2" /> הדגשת קישורים
                  </Button>
                  <Button onClick={() => updateSetting('readableFont', !settings.readableFont)} variant={settings.readableFont ? 'default' : 'outline'} className="w-full justify-start" aria-pressed={settings.readableFont}>
                    <Type className="w-4 h-4 ml-2" /> פונט קריא
                  </Button>
              </div>

              <Button onClick={resetSettings} variant="destructive" className="w-full">
                <RefreshCw className="w-4 h-4 ml-2" /> איפוס הגדרות
              </Button>

            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}