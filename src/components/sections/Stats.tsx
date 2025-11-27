import React from "react";
import { Container } from "@/components/layout";

export interface Stat {
  value: string;
  label: string;
}

export interface StatsProps {
  stats: Stat[];
}

export function Stats({ stats }: StatsProps) {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className={`grid grid-cols-2 md:grid-cols-${Math.min(stats.length, 4)} gap-8 text-center`}>
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-osh-primary mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
