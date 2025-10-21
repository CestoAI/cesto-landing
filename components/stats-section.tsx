"use client";
import { Clock, TrendingDown, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function StatsSection() {
  const { t } = useI18n();

  const stats = [
    {
      icon: Clock,
      valueKey: "stats_1_value",
      labelKey: "stats_1_label",
      descKey: "stats_1_desc",
    },
    {
      icon: TrendingDown,
      valueKey: "stats_2_value",
      labelKey: "stats_2_label",
      descKey: "stats_2_desc",
    },
    {
      icon: CheckCircle2,
      valueKey: "stats_3_value",
      labelKey: "stats_3_label",
      descKey: "stats_3_desc",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-emerald-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("stats_title")}{" "}
            <span className="text-[#10b981]">{t("stats_title_highlight")}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t("stats_subtitle")}
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
                  {t(stat.valueKey)}
                </div>
                <div className="text-xl font-bold text-gray-900 mb-2">
                  {t(stat.labelKey)}
                </div>
                <p className="text-gray-600">{t(stat.descKey)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
