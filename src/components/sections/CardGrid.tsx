import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui";
import { Container } from "@/components/layout";

export interface CardItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  link?: {
    label: string;
    href: string;
  };
}

export interface CardGridProps {
  title?: string;
  subtitle?: string;
  cards: CardItem[];
  columns?: 2 | 3 | 4;
}

export function CardGrid({ title, subtitle, cards, columns = 3 }: CardGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="bg-gray-50 py-16">
      <Container>
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h2>}
            {subtitle && <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
          </div>
        )}

        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8`}>
          {cards.map((card, index) => (
            <Card key={index} hover>
              {card.icon && (
                <div className="text-osh-primary mb-4">
                  {card.icon}
                </div>
              )}
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mb-4">{card.description}</CardDescription>
              {card.link && (
                <a
                  href={card.link.href}
                  className="text-osh-primary font-medium hover:text-osh-primary/80 inline-flex items-center transition-colors"
                >
                  {card.link.label}
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
