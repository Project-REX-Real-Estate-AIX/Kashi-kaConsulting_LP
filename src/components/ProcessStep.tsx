'use client';

import { ChevronDown } from 'lucide-react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  showArrow?: boolean;
}

export function ProcessStep({ number, title, description, showArrow = false }: ProcessStepProps) {
  return (
    <div className="space-y-2">
      <div className="flex gap-8 p-6 bg-white/95 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="text-4xl font-bold text-[#7C3AED]">{number}</div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      {showArrow && (
        <div className="flex justify-center">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      )}
    </div>
  );
}