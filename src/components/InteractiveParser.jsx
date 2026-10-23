import React, { useState, useMemo } from 'react';
import { Search, Filter, Download, MessageSquare, Phone, Globe, Star, Check, Copy, ExternalLink, RefreshCw, Send, MapPin } from 'lucide-react';
import LeadMap from './LeadMap';
import { CITIES, NICHES, INITIAL_LEADS } from '../data/mockOrganizations';

export default function InteractiveParser() {
  const [selectedCity, setSelectedCity] = useState('moscow');
  const [selectedNiche, setSelectedNiche] = useState('Все ниши');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyNoWebsite, setOnlyNoWebsite] = useState(false);
  const [onlyWhatsapp, setOnlyWhatsapp] = useState(false);
  const [isParsing, setIsParsing] = useState(false);
  const [parseProgress, setParseProgress] = useState(0);
  const [selectedLead, setSelectedLead] = useState(null);
  const [copiedPhones, setCopiedPhones] = useState(false);
  const [copiedSinglePhone, setCopiedSinglePhone] = useState(null);

  const currentCityObj = CITIES.find((c) => c.id === selectedCity) || CITIES[0];

  // Filtering leads
  const filteredLeads = useMemo(() => {
    return INITIAL_LEADS.filter((lead) => {
      // Filter by niche
      if (selectedNiche !== 'Все ниши' && lead.category !== selectedNiche) {
        return false;
      }
      // Filter only without website
      if (onlyNoWebsite && lead.hasWebsite) {
        return false;
      }
      // Filter only with WhatsApp
      if (onlyWhatsapp && !lead.hasWhatsapp) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = lead.name.toLowerCase().includes(q);
        const matchesAddress = lead.address.toLowerCase().includes(q);
        const matchesCategory = lead.category.toLowerCase().includes(q);
        if (!matchesName && !matchesAddress && !matchesCategory) return false;
      }
      return true;
    });
  }, [selectedCity, selectedNiche, onlyNoWebsite, onlyWhatsapp, searchQuery, currentCityObj]);

  const handleStartParse = () => {
    setIsParsing(true);
    setParseProgress(10);
    const interval = setInterval(() => {
      setParseProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsParsing(false);
          return 100;
        }
        return prev + 30;
      });
    }, 200);
  };

  const handleExportCSV = () => {
    const headers = ['Название', 'Категория', 'Город', 'Адрес', 'Телефон', 'WhatsApp', 'Сайт', 'Рейтинг'];
    const rows = filteredLeads.map((l) => [
      `"${l.name}"`,
      `"${l.category}"`,
      `"${l.city}"`,
      `"${l.address}"`,
      `"${l.phone}"`,
      `"${l.hasWhatsapp ? 'Да' : 'Нет'}"`,
      `"${l.hasWebsite ? l.websiteUrl : 'НЕТ САЙТА'}"`,
      `"${l.rating}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `leads_2gis_${currentCityObj.id}_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyAllPhones = () => {
    const phones = filteredLeads.map((l) => l.phone).join('\n');
    navigator.clipboard.writeText(phones);
    setCopiedPhones(true);
    setTimeout(() => setCopiedPhones(false), 2500);
  };

  const handleCopyOne = (phone, id) => {
    navigator.clipboard.writeText(phone);
    setCopiedSinglePhone(id);
    setTimeout(() => setCopiedSinglePhone(null), 2000);
  };

  return (
    <section id="parser" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>ПУЛЬТ СБОРА ЛИДОВ ИЗ 2GIS // ОНЛАЙН СКАНИРОВАНИЕ</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
            Интерактивный парсер организаций
          </h2>
          <p className="text-sm text-slate-400 mt-1 font-light">
            Настройте город, нишу и параметры поиска. Все контакты собираются с прямыми ссылками на WhatsApp, телефонами и адресами.
          </p>
        </div>

        {/* Global Export Actions */}
        <div className="flex items-center space-x-3">
          <button
            onClick={handleCopyAllPhones}
            className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-xs font-mono text-slate-200 transition-colors flex items-center space-x-2 cursor-pointer"
          >
            {copiedPhones ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Телефоны скопированы!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>Скопировать все телефоны</span>
              </>
            )}
          </button>

          <button
            onClick={handleExportCSV}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs tracking-wider uppercase transition-colors flex items-center space-x-2 cursor-pointer shadow-lg shadow-emerald-950/40"
          >
            <Download className="w-4 h-4" />
            <span>Экспорт в Excel (.CSV)</span>
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="glass-card p-6 rounded-2xl mb-8 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* City */}
          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
              Город СНГ
            </label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 font-medium cursor-pointer"
            >
              {CITIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Niche */}
          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
              Сфера бизнеса / Ниша
            </label>
            <select
              value={selectedNiche}
              onChange={(e) => setSelectedNiche(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 font-medium cursor-pointer"
            >
              {NICHES.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>

          {/* Keyword Search */}
          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
              Ключевое слово / Услуга
            </label>
            <input
              type="text"
              placeholder="напр. виниры, оклейка, банкет..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-medium"
            />
          </div>

          {/* Trigger Scan Button */}
          <div className="flex items-end">
            <button
              onClick={handleStartParse}
              disabled={isParsing}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-emerald-500/20"
            >
              {isParsing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Сканирование ({parseProgress}%)...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>СКАНИРОВАТЬ 2GIS</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Toggles */}
        <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono text-slate-400 flex items-center space-x-1">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <span>Быстрые фильтры:</span>
            </span>

            <button
              onClick={() => setOnlyNoWebsite(!onlyNoWebsite)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer border ${
                onlyNoWebsite
                  ? 'bg-amber-950/80 border-amber-500 text-amber-300'
                  : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              🎯 Только БЕЗ САЙТА ({INITIAL_LEADS.filter((l) => !l.hasWebsite).length})
            </button>

            <button
              onClick={() => setOnlyWhatsapp(!onlyWhatsapp)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer border ${
                onlyWhatsapp
                  ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                  : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              💬 Только с WhatsApp ({INITIAL_LEADS.filter((l) => l.hasWhatsapp).length})
            </button>
          </div>

          <div className="text-xs font-mono text-emerald-400">
            Найдено лидов: <strong className="text-white">{filteredLeads.length}</strong> (Лимит: ∞ безлимитно)
          </div>
        </div>
      </div>

      {/* Main Grid: Leads List + Live Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Leads List */}
        <div className="lg:col-span-7 space-y-4 max-h-[640px] overflow-y-auto pr-2 pt-1 scroll-smooth">
          {filteredLeads.length === 0 ? (
            <div className="glass-card p-12 text-center rounded-2xl text-slate-400 space-y-3">
              <Search className="w-10 h-10 text-slate-600 mx-auto" />
              <div className="text-base font-semibold text-white">Организации по заданным фильтрам не найдены</div>
              <p className="text-xs max-w-sm mx-auto">Попробуйте отключить строгие фильтры или выбрать другой город СНГ.</p>
            </div>
          ) : (
            filteredLeads.map((lead) => {
              const isSelected = selectedLead?.id === lead.id;
              return (
                <div
                  key={lead.id}
                  onClick={() => setSelectedLead(lead)}
                  className={`glass-card p-5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-emerald-500/80 bg-slate-900/90 shadow-lg shadow-emerald-950/30 ring-1 ring-emerald-500/30'
                      : 'border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-heading font-bold text-lg text-white group-hover:text-emerald-400">
                          {lead.name}
                        </span>
                        <span className="flex items-center space-x-1 text-xs font-mono font-bold text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/30">
                          <Star className="w-3 h-3 fill-amber-400" />
                          <span>{lead.rating}</span>
                          <span className="text-slate-500 text-[10px]">({lead.reviewsCount})</span>
                        </span>
                      </div>

                      <div className="text-xs text-slate-400 mt-1 flex items-center space-x-2">
                        <span>{lead.category}</span>
                        <span>•</span>
                        <span>{lead.address}</span>
                      </div>
                    </div>

                    {/* Website Badge */}
                    <div>
                      {lead.hasWebsite ? (
                        <span className="px-2.5 py-1 rounded text-[11px] font-mono text-slate-400 bg-slate-800/80 border border-slate-700 inline-flex items-center space-x-1">
                          <Globe className="w-3 h-3 text-cyan-400" />
                          <span>Есть сайт</span>
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded text-[11px] font-mono font-bold text-amber-300 bg-amber-950/80 border border-amber-500/50 inline-flex items-center space-x-1 animate-pulse">
                          <span>⚠️ САЙТА НЕТ (ЛИД)</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions & Contacts Row */}
                  <div className="mt-4 pt-3 border-t border-slate-800/70 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center space-x-3">
                      <a
                        href={`tel:${lead.phone}`}
                        className="text-xs font-mono font-semibold text-slate-200 hover:text-emerald-400 flex items-center space-x-1.5 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{lead.phone}</span>
                      </a>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyOne(lead.phone, lead.id);
                        }}
                        className="p-1 text-slate-400 hover:text-white transition-colors"
                        title="Скопировать номер"
                      >
                        {copiedSinglePhone === lead.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      {lead.hasTelegram && (
                        <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                          {lead.telegram}
                        </span>
                      )}
                    </div>

                    {/* WhatsApp Action Button */}
                    {lead.hasWhatsapp && (
                      <a
                        href={`https://wa.me/${lead.rawPhone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs font-mono flex items-center space-x-1.5 transition-colors cursor-pointer shadow-md shadow-emerald-950/30"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Написать в WhatsApp</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right: Live Interactive Map */}
        <div className="lg:col-span-5 sticky top-24">
          <LeadMap
            leads={filteredLeads}
            selectedLead={selectedLead}
            onSelectLead={setSelectedLead}
            center={currentCityObj.coords}
          />
        </div>
      </div>
    </section>
  );
}
