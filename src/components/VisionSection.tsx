'use client';

import Image from 'next/image';

export function VisionSection() {
  return (
    <section className="w-full relative">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <Image
        src="/vision-bg.jpg"
        alt="Vision background"
        width={1920}
        height={1080}
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="relative z-20 max-w-4xl mx-auto px-6 py-24 space-y-8">
        <div className="text-xl text-white/90 space-y-8 font-medium">
          <p className="leading-relaxed">
            地方企業の"人手不足"が叫ばれる昨今、少子高齢化、都心一極集中により"人手不足"が益々進行するのが現実で、地方企業が生き残る為には従業員一人当たりの"生産性向上"が問われている。
          </p>
          <p className="leading-relaxed">
            また、日本社会がよりよい社会として持続する為には、人口の大部分を占める"地方経済"が豊かでなくてはならない。
          </p>
          <p className="leading-relaxed">
            私たちはこれまでに培ってきた経営の知見、人との繋がり、最新技術を駆使し、業務の無駄・ボトルネックの特定による業務効率化・ビジネスモデルの変革を支援することで、地方企業と地方経済の発展に貢献し、より豊かな日本社会の実現を目指します。
          </p>
        </div>
      </div>
    </section>
  );
}