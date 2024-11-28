import Image from 'next/image';
import { ProcessStep } from '@/components/ProcessStep';
import { Container } from '@/components/ui/container';
import { PROCESS_STEPS } from '@/lib/constants';

export function ProcessSection() {
  return (
    <section id="process" className="w-full relative">
      <div className="absolute inset-0">
        <Image
          src="/process-bg.jpg"
          alt="Process background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <Container className="relative z-10 py-24">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            サービス提供プロセス
          </h2>
          <p className="text-xl text-white/80 max-w-[600px] mx-auto">
            効率的な業務改善を実現するための4ステップ
          </p>
        </div>
        <div className="space-y-4 max-w-3xl mx-auto">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              showArrow={index < PROCESS_STEPS.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}