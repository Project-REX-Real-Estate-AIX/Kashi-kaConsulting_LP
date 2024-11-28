'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  const handleConsultationClick = () => {
    window.open('https://www.jicoo.com/t/Kashika_Consulting/e/hearing', '_blank');
  };

  return (
    <section className="w-full bg-[#7C3AED]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            人手不足に打ち勝つ業務改革へ
          </h2>
          <p className="text-2xl font-medium text-white/90">
            無料相談の予約はこちらから
          </p>
        </div>
        <Button
          size="lg"
          className="rounded-full bg-white text-[#7C3AED] hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg px-12 py-6 h-auto font-bold transform hover:-translate-y-1"
          onClick={handleConsultationClick}
        >
          無料相談を予約する
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}