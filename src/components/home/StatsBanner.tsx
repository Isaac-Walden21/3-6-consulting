import { CountUpNumber } from "../animation";
import Container from "../layout/Container";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 150, suffix: "+", label: "Churches Served" },
  { value: 3000, suffix: "+", label: "People Trained" },
  { value: 6, suffix: "", label: "Training Courses" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

export default function StatsBanner() {
  return (
    <section className="bg-slate-blue py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <CountUpNumber
                end={stat.value}
                suffix={stat.suffix}
                className="text-4xl md:text-5xl font-heading text-gold"
              />
              <p className="text-sm text-off-white/80 uppercase tracking-wider mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
