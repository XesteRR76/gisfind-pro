import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, CheckCircle2 } from 'lucide-react';

export default function RoiCalculator() {
  const [avgCheck, setAvgCheck] = useState(60000);
  const [contactsPerMonth, setContactsPerMonth] = useState(400);
  const [conversionRate, setConversionRate] = useState(4); // 4%

  const deals = Math.max(1, Math.round((contactsPerMonth * (conversionRate / 100))));
  const revenue = deals * avgCheck;
  const annualSavings = 8990 * 12; // 107 880 ₽ saved on GisFind Pro subscription

  const presetChecks = [30000, 60000, 100000, 200000];

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
          // КАЛЬКУЛЯТОР ОКУПАЕМОСТИ
        </span>
        <h2 className="font-heading font-black text-3xl sm:text-5xl text-white mt-2 tracking-tight">
          Сколько вы заработаете с холодной базы
        </h2>
        <div className="w-16 h-1 bg-amber-500 mx-auto mt-3" />
        <p className="text-sm text-slate-400 mt-4 font-light">
          Рассчитайте потенциальный доход от предложения сайтов, рекламы или услуг бизнесам из 2GIS без сайта.
        </p>
      </div>

      <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Controls */}
          <div className="lg:col-span-6 space-y-6">
            {/* Avg Check */}
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                Средний чек вашей услуги (разработка сайта / реклама)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                {presetChecks.map((val) => (
                  <button
                    key={val}
                    onClick={() => setAvgCheck(val)}
                    className={`py-2 px-3 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer border ${
                      avgCheck === val
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                        : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    {(val / 1000).toFixed(0)}k ₽
                  </button>
                ))}
              </div>
              <input
                type="range"
                min="10000"
                max="300000"
                step="5000"
                value={avgCheck}
                onChange={(e) => setAvgCheck(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="text-right text-xs font-mono text-amber-400 font-bold mt-1">
                {avgCheck.toLocaleString('ru-RU')} ₽
              </div>
            </div>

            {/* Contacts Count */}
            <div>
              <div className="flex justify-between text-xs font-mono text-slate-400 uppercase mb-2">
                <span>Контактов обработано в месяц</span>
                <span className="text-white font-bold">{contactsPerMonth} компаний</span>
              </div>
              <input
                type="range"
                min="100"
                max="2000"
                step="50"
                value={contactsPerMonth}
                onChange={(e) => setContactsPerMonth(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            {/* Conversion Rate */}
            <div>
              <div className="flex justify-between text-xs font-mono text-slate-400 uppercase mb-2">
                <span>Конверсия в оплату (заказ)</span>
                <span className="text-emerald-400 font-bold">{conversionRate}%</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="0.5"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 to-black p-8 rounded-2xl border border-slate-700 space-y-6 shadow-2xl">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
                ПРОГНОЗ ДОХОДА В МЕСЯЦ
              </span>
              <div className="font-heading font-black text-4xl sm:text-5xl text-white mt-1">
                {revenue.toLocaleString('ru-RU')} ₽
              </div>
              <div className="text-xs text-slate-400 mt-1 font-mono">
                Приблизительно <strong className="text-emerald-400 font-bold">{deals} закрытых сделок</strong>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-2 text-xs font-mono">
              <div className="flex justify-between text-slate-300">
                <span>Стоимость подписки GisFind:</span>
                <span className="line-through text-rose-400 font-bold">8 990 ₽/мес</span>
              </div>
              <div className="flex justify-between text-emerald-400 font-bold">
                <span>Стоимость GISFind PRO:</span>
                <span>0 ₽ (Бесплатно)</span>
              </div>
              <div className="flex justify-between text-slate-400 pt-2 border-t border-slate-800/80">
                <span>Экономия за 12 месяцев:</span>
                <span className="text-white font-bold">{annualSavings.toLocaleString('ru-RU')} ₽</span>
              </div>
            </div>

            <a
              href="#parser"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-emerald-500/20"
            >
              <Calculator className="w-4 h-4" />
              <span>СОБРАТЬ ПЕРВЫХ ЛИДОВ СЕЙЧАС</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
