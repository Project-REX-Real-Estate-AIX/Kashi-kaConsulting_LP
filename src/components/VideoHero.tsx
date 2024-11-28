import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { useConsultation } from '@/lib/hooks/useConsultation';

export function VideoHero() {
  const { handleConsultationClick } = useConsultation();

  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Image
          src="/hero-keyvisual.png"
          alt="Hero background"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover"
        />
        <Image
          src="/hero-poster.jpg"
          alt="Hero overlay"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <Container className="relative z-10 py-24 md:py-32 space-y-12 text-center">
        <div className="inline-block mb-4 px-8 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
          <p className="text-white font-bold text-lg tracking-wide">
            経営・業務改善のコンサルタント特化
          </p>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            <span className="text-[#7C3AED]">面倒な業務分析</span>
            <span className="text-white">を</span>
            <span className="text-[#7C3AED]">素早く・お値打ち</span>
            <span className="text-white">に</span>
          </h1>
          <p className="text-2xl font-semibold text-[#7C3AED] bg-white/90 backdrop-blur-md py-3 px-6 rounded-lg inline-block">
            オペレーション・デューデリジェンス効率化サービス
          </p>
        </div>
        <Button
          size="lg"
          className="rounded-full bg-[#7C3AED] text-white hover:bg-[#6D28D9] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg px-12 py-6 h-auto font-bold"
          onClick={handleConsultationClick}
        >
          無料相談を予約する
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Container>
    </section>
  );
}