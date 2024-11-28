import { Card, CardContent } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { PACKAGES } from '@/lib/constants';

export function PackagesSection() {
  return (
    <Section id="packages" background="gray">
      <Container>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">提案パッケージ</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            提供サービスを2種類のパッケージでご提供させて頂きます
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PACKAGES.map((pkg) => (
            <Card key={pkg.title} className="bg-white shadow-lg package-card">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-xl font-bold text-center">
                  {pkg.title}
                  <br />
                  <span className="text-[#7C3AED]">
                    {pkg.subtitle}
                  </span>
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {pkg.features.map((feature, index) => (
                    <li key={index}>✅️{feature}</li>
                  ))}
                </ul>
                <div className="pt-4">
                  <p className="text-center mt-4 font-semibold">価格：{pkg.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}