import React from 'react';
import { Check, X, Zap, Shield, Sparkles, ArrowRight } from 'lucide-react';

export default function ComparisonPricing() {
  const comparisonItems = [
    {
      feature: 'Стоимость подписки в месяц',
      gisfind: 'От 1 490 ₽ до 8 990 ₽/мес',
      ourPro: '0 ₽ (Навсегда бесплатно)',
      highlight: true,
    },
    {
      feature: 'Лимит собранных контактов в месяц',
      gisfind: 'От 500 до 6 000 контактов',
      ourPro: 'Безлимитно (∞ контактов)',
      highlight: true,
    },
    {
      feature: 'Пробный период',
      gisfind: 'Всего 2 поиска по 10 бизнесов',
      ourPro: 'Полный доступ сразу без регистрации',
      highlight: false,
    },
    {
      feature: 'Интерактивная карта с метками',
      gisfind: '❌ Только списком',
      ourPro: '✅ Тёмная карта OpenStreetMap с кластерами',
      highlight: true,
    },
    {
      feature: 'Фильтр компаний «БЕЗ САЙТА»',
      gisfind: '❌ Нет отдельного фильтра',
      ourPro: '✅ В 1 клик для веб-разработчиков',
      highlight: true,
    },
    {
      feature: 'Прямой переход в WhatsApp',
      gisfind: '✅ Есть',
      ourPro: '✅ Есть (в 1 клик)',
      highlight: false,
    },
    {
      feature: 'Экспорт в Excel (.CSV) без доплат',
      gisfind: 'Ограничен тарифом',
      ourPro: '✅ Неограниченно в 1 клик',
      highlight: false,
    },
    {
      feature: 'Локальный запуск на вашем компьютере',
      gisfind: '❌ Только облако с подпиской',
      ourPro: '✅ Локальный автономный запуск',
      highlight: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
          // ЧЕСТНОЕ СРАВНЕНИЕ ТАРИФОВ
        </span>
        <h2 className="font-heading font-black text-3xl sm:text-5xl text-white mt-2 tracking-tight">
          Зачем платить 8 990 ₽ в месяц?
        </h2>
        <div className="w-16 h-1 bg-emerald-500 mx-auto mt-3" />
        <p className="text-sm text-slate-400 mt-4 font-light leading-relaxed">
          GisFind берет деньги за каждый шаг и ограничивает базу. Мы создали инструмент с аналогичным сбором из 2GIS, но полностью открытый, удобный и бесплатный.
        </p>
      </div>

      {/* Pricing Cards Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* GisFind Original Card */}
        <div className="glass-card p-8 rounded-2xl border border-slate-800 relative opacity-85">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase">Тарифы GisFind.online</span>
              <h3 className="font-heading font-bold text-2xl text-white mt-1">
                GisFind Платный
              </h3>
            </div>
            <div className="text-right">
              <span className="text-sm font-mono line-through text-slate-500 block">8 990 ₽</span>
              <span className="font-heading font-bold text-2xl text-rose-400">от 1 490 ₽<span className="text-xs text-slate-400 font-normal">/мес</span></span>
            </div>
          </div>

          <p className="text-xs text-slate-400 mb-6 font-light">
            Обычный платный сервис с ежемесячным списанием и жесткими лимитами на количество телефонов.
          </p>

          <ul className="space-y-3 text-xs text-slate-300 font-mono border-t border-slate-800 pt-6">
            <li className="flex items-center space-x-2 text-rose-300">
              <X className="w-4 h-4 text-rose-400 shrink-0" />
              <span>Лимит 500 – 6 000 контактов в месяц</span>
            </li>
            <li className="flex items-center space-x-2 text-rose-300">
              <X className="w-4 h-4 text-rose-400 shrink-0" />
              <span>Платная подписка каждый месяц (до 107 880 ₽ в год)</span>
            </li>
            <li className="flex items-center space-x-2 text-slate-400">
              <X className="w-4 h-4 text-slate-500 shrink-0" />
              <span>Нет интерактивной карты локаций</span>
            </li>
            <li className="flex items-center space-x-2 text-slate-400">
              <X className="w-4 h-4 text-slate-500 shrink-0" />
              <span>Нет быстрого фильтра компаний «без сайта»</span>
            </li>
          </ul>
        </div>

        {/* Our GISFind PRO Card */}
        <div className="glass-card p-8 rounded-2xl border-2 border-emerald-500/80 relative shadow-2xl bg-gradient-to-b from-slate-900/90 to-slate-950">
          <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-bold text-[11px] uppercase tracking-wider shadow-md">
            НАШЕ РЕШЕНИЕ
          </div>

          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase">Локальный Open-Source инструмент</span>
              <h3 className="font-heading font-black text-2xl text-white mt-1">
                GISFind PRO (Local)
              </h3>
            </div>
            <div className="text-right">
              <span className="font-heading font-black text-3xl text-emerald-400">0 ₽<span className="text-xs text-slate-400 font-normal">/навсегда</span></span>
            </div>
          </div>

          <p className="text-xs text-slate-300 mb-6 font-light">
            Полный функционал без ограничений. Запущен локально на вашем ПК, работает быстро и без передачи ваших баз на чужие сервера.
          </p>

          <ul className="space-y-3 text-xs text-slate-200 font-mono border-t border-slate-800 pt-6">
            <li className="flex items-center space-x-2 text-emerald-300 font-bold">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>БЕЗЛИМИТНЫЙ сбор контактов (∞)</span>
            </li>
            <li className="flex items-center space-x-2 text-emerald-300 font-bold">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Экономия до 100 000+ ₽ в год</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Тёмная интерактивная карта с геометками 2GIS</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Фильтр «САЙТА НЕТ» — сразу находите горячих клиентов</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Экспорт всей базы в Excel (.CSV) в 1 клик</span>
            </li>
          </ul>

          <div className="mt-8">
            <a
              href="#parser"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-emerald-500/20"
            >
              <span>НАЧАТЬ ПОИСК БЕСПЛАТНО</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div className="glass-card rounded-2xl overflow-hidden border border-slate-800">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="font-heading font-bold text-xl text-white">
            Детальная таблица сравнения возможностей
          </h3>
          <span className="text-xs font-mono text-emerald-400">Обновлено: 2026</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/60 font-mono text-slate-400">
                <th className="p-4">Возможность / Функция</th>
                <th className="p-4">Оригинальный GisFind</th>
                <th className="p-4 text-emerald-400">GISFind PRO (Наш сервис)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono">
              {comparisonItems.map((item, idx) => (
                <tr
                  key={item.feature}
                  className={`hover:bg-slate-900/40 transition-colors ${
                    item.highlight ? 'bg-emerald-950/10' : ''
                  }`}
                >
                  <td className="p-4 text-slate-200 font-sans font-medium">
                    {item.feature}
                  </td>
                  <td className="p-4 text-slate-400">
                    {item.gisfind}
                  </td>
                  <td className="p-4 text-emerald-300 font-bold">
                    {item.ourPro}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
