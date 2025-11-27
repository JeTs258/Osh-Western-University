import React from "react";
import { Button } from "@/components/ui";
import { Container } from "@/components/layout";

export interface HeroProps {
  title: string;
  subtitle?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="bg-gradient-to-r from-osh-primary to-osh-tertiary text-white">
      <Container>
        <div className="py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl lg:text-2xl mb-8 text-gray-100 leading-relaxed">
                {subtitle}
              </p>
            )}
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-col sm:flex-row gap-4">
                {primaryCta && (
                  <a href={primaryCta.href}>
                    <Button size="lg" variant="secondary">
                      {primaryCta.label}
                    </Button>
                  </a>
                )}
                {secondaryCta && (
                  <a href={secondaryCta.href}>
                    <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                      {secondaryCta.label}
                    </Button>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
