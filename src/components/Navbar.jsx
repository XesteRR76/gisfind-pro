import React from 'react';
import { Search, Database, Sparkles, MapPin, Download, CheckCircle2, DollarSign } from 'lucide-react';

export default function Navbar({ onStartSearch, activeTab, setActiveTab }) {
  return (
    <header className="sticky top-0 z-50 bg-[#090d16]/90 backdrop-blur-xl border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#top" className="flex items-center space-x-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-0.5 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all">
            <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center text-emerald-400">
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                GISFind <span className="text-emerald-400">PRO</span>
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-500/40">
                100% FREE
              </span>
            </div>
            <div className="text-[10px] text-slate-400 font-mono tracking-wider -mt-0.5">
              СБОР КЛИЕНТОВ 2GIS // OPEN SOURCE
            </div>
          </div>
        </a>

        {/* Links */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-wider text-slate-300">
          <a
            href="#parser"
            className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5"
          >
            <Database className="w-3.5 h-3.5 text-emerald-400" />
            <span>Парсер и Карта</span>
          </a>
          <a
            href="#pricing"
            className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5"
          >
            <DollarSign className="w-3.5 h-3.5 text-cyan-400" />
            <span>Сравнение тарифов</span>
          </a>
          <a
            href="#calculator"
            className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Калькулятор окупаемости</span>
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>2GIS API: ОНЛАЙН</span>
          </div>

          <a
            href="#parser"
            onClick={onStartSearch}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-emerald-500/25 flex items-center space-x-1.5 cursor-pointer"
          >
            <Search className="w-4 h-4" />
            <span>Искать лиды</span>
          </a>
        </div>
      </div>
    </header>
  );
}
