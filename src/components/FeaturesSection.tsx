import { ServiceCard } from '@/components/ServiceCard';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { FEATURES } from '@/lib/constants';

export function FeaturesSection() {
  return (
    <Section id="services" background="gray">
      <Container>
        <div className="text-center space-y-4 mb-16">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">提供サービス</h2>
            <p className="text-2xl font-semibold text-[#7C3AED]">Kashi-ka</p>
          </div>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            業務の「可視化」と「無駄の特定」を素早く・お値打ちで実現可能にする
            <br />
            オペレーション・デューデリジェンス効率化/代行サービス
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {FEATURES.map((feature) => (
            <ServiceCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}