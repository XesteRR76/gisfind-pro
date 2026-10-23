import React from 'react';
import { Search, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Zap, MessageSquare } from 'lucide-react';

export default function Hero({ onStartSearch }) {
  return (
    <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background glow patches */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 font-mono text-xs tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
          <span>ПОЛНЫЙ БЕСПЛАТНЫЙ АНАЛОГ GISFIND БЕЗ ПОДПИСОК</span>
        </div>

        <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05]">
          Сбор клиентов из 2GIS с телефонами, WhatsApp и <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Gemini 4 AI</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Зачем платить от 1 490 до 8 990 ₽ в месяц за ограниченный парсер? Находите платежеспособные компании без сайта, собирайте прямые контакты лиц принимающих решения и отправляйте персональные продающие офферы в WhatsApp за 1 клик.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#parser"
            onClick={onStartSearch}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-sm tracking-wider uppercase transition-all shadow-xl shadow-emerald-500/30 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Search className="w-4 h-4" />
            <span>ОТКРЫТЬ ПАРСЕР И КАРТУ (БЕСПЛАТНО)</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#pricing"
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card hover:border-slate-600 text-slate-200 font-semibold text-sm tracking-wide transition-all text-center cursor-pointer"
          >
            Сравнение с GisFind (Экономия 100 000 ₽/год)
          </a>
        </div>

        {/* Features badges */}
        <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          <div className="glass-card p-4 rounded-xl border border-slate-800">
            <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs mb-1">
              <Zap className="w-4 h-4" />
              <span>0 ₽ В МЕСЯЦ</span>
            </div>
            <div className="text-white font-bold text-lg">Без лимитов</div>
            <div className="text-xs text-slate-400 mt-0.5">Вместо 2 бесплатных поисков</div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-slate-800">
            <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs mb-1">
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP & ТГ</span>
            </div>
            <div className="text-white font-bold text-lg">В 1 клик</div>
            <div className="text-xs text-slate-400 mt-0.5">Прямые ссылки на диалоги</div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-slate-800">
            <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs mb-1">
              <Sparkles className="w-4 h-4" />
              <span>GEMINI 4 AI</span>
            </div>
            <div className="text-white font-bold text-lg">Умные офферы</div>
            <div className="text-xs text-slate-400 mt-0.5">Скрипт под боли компании</div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-slate-800">
            <div className="flex items-center space-x-2 text-purple-400 font-mono text-xs mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>EXCEL / CSV</span>
            </div>
            <div className="text-white font-bold text-lg">Мгновенный экспорт</div>
            <div className="text-xs text-slate-400 mt-0.5">Готовая база для CRM</div>
          </div>
        </div>
      </div>
    </section>
  );
}
