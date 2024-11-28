'use client';

import { Card, CardContent } from "@/components/ui/card";

export function ConcernsSection() {
  const concerns = [
    '運用状況を可視化するために、膨大な手間と時間がかかっている...',
    '業務や時間の分析を社内で行うにはリソースが足りず、もっと効率的に外注したい...',
    '複雑な業務フローを瞬時に把握し、迅速に改善案を提案したい...',
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            こんなお悩みはありませんか？
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {concerns.map((concern, index) => (
              <Card key={index} className="relative bg-white shadow-lg">
                <CardContent className="p-6">
                  <span className="quote-mark" />
                  <p className="text-lg">{concern}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}