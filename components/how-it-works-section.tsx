import { Link2, Zap, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Connect",
    description:
      "Bring all your suppliers and buyers together on one unified platform. No more scattered communications or lost orders.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Automate",
    description:
      "Let AI handle orders, inventory tracking, purchase order creation, and documentation. Focus on growing your business, not paperwork.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Optimize",
    description:
      "Save time and money with intelligent insights. Reduce costs by up to 30% and reclaim 10+ hours per week.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            How It <span className="text-[#10b981]">Works</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to transform your business operations
          </p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-[#10b981] to-emerald-200 -translate-y-1/2 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#10b981]"
                >
                  {/* Step number badge */}
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 bg-[#10b981] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-6">
                    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center">
                      <Icon className="h-8 w-8 text-[#10b981]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
