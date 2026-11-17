import React from 'react';
import { Link } from 'react-router-dom';
import { House, CaretRight } from '@phosphor-icons/react';

export default function Breadcrumbs({ items = [] }) {
  return (
    <div className="w-full bg-slate-100/90 border-b border-slate-200 py-2.5">
      <div className="w-[85%] max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-600 font-medium">
        <Link to="/" className="flex items-center gap-1.5 text-slate-500 hover:text-blue-700 transition-colors">
          <House size={14} weight="bold" />
          <span>Beranda</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <CaretRight size={12} weight="bold" className="text-slate-400" />
              {isLast || !item.href ? (
                <span className="text-blue-900 font-bold">{item.label}</span>
              ) : (
                <Link to={item.href} className="text-slate-500 hover:text-blue-700 transition-colors">
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
