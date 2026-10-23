import React from 'react';
import { Search, Shield, Terminal, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/90 border-t border-slate-800 py-16 px-4 sm:px-6 lg:px-8 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <span className="font-heading font-extrabold text-xl text-white">
              GISFind <span className="text-emerald-400">PRO</span>
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] bg-slate-900 border border-slate-700 text-slate-400">
              v2.4 Local Edition
            </span>
          </div>
          <p className="text-slate-400 max-w-md font-sans text-xs">
            Бесплатный инструмент поиска B2B-клиентов и лидогенерации из открытых данных 2GIS и OpenStreetMap.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 text-xs">
          <a href="#parser" className="hover:text-emerald-400 transition-colors">
            Парсер и Карта
          </a>
          <a href="#pricing" className="hover:text-emerald-400 transition-colors">
            Сравнение тарифов
          </a>
          <a href="#calculator" className="hover:text-emerald-400 transition-colors">
            Калькулятор окупаемости
          </a>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
            title="Наверх"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-600 gap-4">
        <div>
          © 2026 GISFind PRO. СВОБОДНО ДЛЯ ИСПОЛЬЗОВАНИЯ.
        </div>
        <div>
          ЛОКАЛЬНЫЙ СЕРВЕР ЗАПУЩЕН НА ВАШЕМ ПК
        </div>
      </div>
    </footer>
  );
}
