import React, { useState, useEffect } from 'react';
import { FileText, X, ExternalLink, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Document {
  title: string;
  description: string;
  url: string;
  previewUrl: string;
}

const DocumentsSection = () => {
  const [selectedPdf, setSelectedPdf] = useState<Document | null>(null);

  const documents: Document[] = [
    {
      title: 'Applicant Notice',
      description: 'Important guidelines and requirements for new residents',
      url: '/assets/documents/Notice.pdf',
      previewUrl: '/assets/images/events/req.png'
    },
    {
      title: 'Everyday Schedule',
      description: 'Daily activities and timings for residents',
      url: '/assets/documents/Schedule.pdf',
      previewUrl: '/assets/images/events/sc.jpg'
    },
    {
      title: 'Daily Menu',
      description: 'Nutritious and balanced meal plans',
      url: '/assets/documents/Menu.pdf',
      previewUrl: '/assets/images/events/menu.jpg'
    }
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedPdf(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Essential Documents</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedPdf(doc)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={doc.previewUrl}
                  alt={doc.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <FileText className="h-6 w-6 text-[#682814]" />
                  <h3 className="text-xl font-semibold text-gray-900">{doc.title}</h3>
                </div>
                <p className="text-gray-600">{doc.description}</p>
                <div className="mt-4 flex items-center text-[#682814] font-medium">
                  <span>View Document</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 z-50 p-4 md:p-8 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedPdf(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl w-full h-full max-w-6xl mx-auto overflow-hidden relative"
            >
              <div className="absolute top-4 right-4 flex space-x-2 z-10">
                <a
                  href={selectedPdf.url}
                  download
                  className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download className="h-6 w-6 text-[#682814]" />
                </a>
                <button
                  onClick={() => setSelectedPdf(null)}
                  className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="h-6 w-6 text-[#682814]" />
                </button>
              </div>
              <iframe
                src={selectedPdf.url}
                className="w-full h-full"
                title={selectedPdf.title}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DocumentsSection;