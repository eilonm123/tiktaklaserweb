import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const galleryItems = [
  { before: 'https://images.unsplash.com/photo-1529336162873-65d8de06a1c5?w=400&q=80', after: 'https://images.unsplash.com/photo-1542318309-b1480543597d?w=400&q=80', area: 'רגליים' },
  { before: 'https://images.unsplash.com/photo-1581005959345-b4859a85434e?w=400&q=80', after: 'https://images.unsplash.com/photo-1599049080709-b4b7b05b6a7e?w=400&q=80', area: 'גב גברי' },
  { before: 'https://images.unsplash.com/photo-1570215779429-59dfe495914a?w=400&q=80', after: 'https://images.unsplash.com/photo-1587024628830-9b48b94f09b5?w=400&q=80', area: 'בית שחי' },
  { before: 'https://images.unsplash.com/photo-1621992263403-88ce833a6521?w=400&q=80', after: 'https://images.unsplash.com/photo-1621992263229-37e909564f3d?w=400&q=80', area: 'ידיים' }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">תוצאות שמדברות בעד עצמן</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            גלריית לפני ואחרי של לקוחות TikTak Laser.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative">
                    <img src={item.after} alt={`אחרי - ${item.area}`} className="w-full h-64 object-cover" />
                    <img 
                      src={item.before} 
                      alt={`לפני - ${item.area}`} 
                      className="w-full h-64 object-cover absolute top-0 left-0 transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <Badge className="absolute top-2 right-2 bg-black/50 text-white">
                      {item.area}
                    </Badge>
                     <div className="absolute bottom-2 left-2 flex gap-2">
                      <Badge variant="secondary" className="bg-red-500 text-white transition-opacity duration-500 group-hover:opacity-0">לפני</Badge>
                      <Badge variant="secondary" className="bg-green-500 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">אחרי</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}