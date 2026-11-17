import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200/60 uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-700" />
            Tanya Jawab
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Informasi penting dan jawaban ringkas seputar sekolah, kurikulum, serta pendaftaran siswa baru.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {schoolData.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-subtle overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : 'text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
