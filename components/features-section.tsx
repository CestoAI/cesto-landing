import {
  Sparkles,
  Users,
  Package,
  FileText,
  TrendingDown,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Automation",
    description:
      "Leverage artificial intelligence to automate order fulfillment, purchase orders, and documentation. Eliminate manual processes and reduce human error.",
  },
  {
    icon: Users,
    title: "Centralized Platform",
    description:
      "Connect all your suppliers and buyers in one unified hub. Streamline communication and build stronger business relationships.",
  },
  {
    icon: Package,
    title: "Smart Inventory Management",
    description:
      "Real-time inventory tracking with AI-driven insights. Optimize stock levels and prevent shortages or overstock situations.",
  },
  {
    icon: FileText,
    title: "Automated P.O. Creation",
    description:
      "Generate purchase orders automatically based on inventory levels, demand forecasts, and supplier availability. Save hours every week.",
  },
  {
    icon: TrendingDown,
    title: "Cost Optimization",
    description:
      "Intelligent pricing analysis and cost-saving recommendations. Identify opportunities to reduce expenses and improve margins.",
  },
  {
    icon: Globe,
    title: "Cross-Border Exchange",
    description:
      "Seamlessly manage international suppliers and handle multi-currency transactions with built-in compliance support.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to{" "}
            <span className="text-[#10b981]">Succeed</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to transform your food & beverage
            operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#10b981]/30 group"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#10b981] transition-colors duration-300">
                  <Icon className="h-7 w-7 text-[#10b981] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
