import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

export default function LeadMap({ leads, selectedLead, onSelectLead, center = [55.7558, 37.6173] }) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center,
        zoom: 12,
        zoomControl: true,
      });

      // CartoDB Dark Matter tiles (sleek dark aesthetic)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a> | 2GIS / OSM',
        maxZoom: 19,
        subdomains: 'abcd',
      }).addTo(map);

      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;
    if (center && map) {
      map.setView(center, 12);
    }
  }, [center]);

  // Update markers when leads change
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear old markers
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    leads.forEach((lead) => {
      const isSelected = selectedLead?.id === lead.id;

      const markerHtml = `
        <div style="
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: ${lead.hasWebsite ? '#0f172a' : '#10b981'};
          border: 2px solid ${isSelected ? '#38bdf8' : '#ffffff'};
          box-shadow: 0 0 15px ${lead.hasWebsite ? 'rgba(15,23,42,0.6)' : 'rgba(16,185,129,0.8)'};
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
        ">
          ${lead.hasWebsite ? '🏢' : '🎯'}
        </div>
      `;

      const customIcon = L.divIcon({
        className: 'custom-lead-pin',
        html: markerHtml,
        iconSize: [34, 34],
        iconAnchor: [17, 17],
      });

      const marker = L.marker(lead.coords, { icon: customIcon }).addTo(map);

      marker.bindPopup(`
        <div style="font-family: inherit; font-size: 13px; line-height: 1.4; min-width: 180px;">
          <div style="font-weight: 800; color: #f8fafc; font-size: 14px;">${lead.name}</div>
          <div style="color: #94a3b8; font-size: 11px; margin-top: 2px;">${lead.address}</div>
          <div style="margin-top: 6px; display: flex; align-items: center; justify-content: space-between;">
            <span style="color: #fbbf24; font-weight: bold;">★ ${lead.rating}</span>
            <span style="color: ${lead.hasWebsite ? '#94a3b8' : '#34d399'}; font-weight: 600; font-size: 11px;">
              ${lead.hasWebsite ? 'Есть сайт' : 'САЙТА НЕТ ⚠️'}
            </span>
          </div>
        </div>
      `);

      marker.on('click', () => {
        onSelectLead(lead);
      });

      markersRef.current.push(marker);
    });
  }, [leads, selectedLead, onSelectLead]);

  return (
    <div className="relative w-full h-[450px] lg:h-[580px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
      <div ref={mapContainerRef} className="w-full h-full z-0" />
      {/* Legend Badge */}
      <div className="absolute bottom-4 left-4 z-10 glass-card px-3.5 py-2 rounded-xl border border-slate-700 text-xs font-mono space-y-1 shadow-lg pointer-events-none">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
          <span className="text-emerald-300 font-bold">🎯 Сайта нет (Горячий лид)</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-slate-800 border border-slate-500" />
          <span className="text-slate-400">🏢 Есть сайт (Аудит / Редизайн)</span>
        </div>
      </div>
    </div>
  );
}
