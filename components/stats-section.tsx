import { Clock, TrendingDown, CheckCircle2, Quote } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "10+",
    label: "Hours Saved",
    description: "Per week on average",
  },
  {
    icon: TrendingDown,
    value: "30%",
    label: "Cost Reduction",
    description: "In operational expenses",
  },
  {
    icon: CheckCircle2,
    value: "100%",
    label: "Process Automation",
    description: "End-to-end automation",
  },
];

// Placeholder testimonials for future use
const testimonials = [
  {
    quote: "Your testimonial will appear here once you start using Cesto AI.",
    author: "Business Owner",
    company: "F&B Company",
  },
];

export function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-emerald-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Real Results, <span className="text-[#10b981]">Real Impact</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              See how Cesto AI transforms businesses like yours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-emerald-100 text-center group hover:border-[#10b981]"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#10b981] transition-colors duration-300">
                    <Icon className="h-8 w-8 text-[#10b981] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-[#10b981] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xl font-bold text-gray-900 mb-2">
                    {stat.label}
                  </div>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials Placeholder */}
        <div className="bg-gradient-to-br from-[#10b981] to-emerald-600 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="h-12 w-12 text-white/80 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl text-white font-medium mb-6 leading-relaxed">
              &ldquo;{testimonials[0].quote}&rdquo;
            </blockquote>
            <div className="text-white/90">
              <div className="font-bold text-lg">{testimonials[0].author}</div>
              <div className="text-white/70">{testimonials[0].company}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
