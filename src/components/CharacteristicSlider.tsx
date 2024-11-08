import React from 'react';
import type { Characteristic } from '../types';

interface Props {
  characteristic: Characteristic;
  onChange: (value: number) => void;
}

export function CharacteristicSlider({ characteristic, onChange }: Props) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-medium text-gray-300">
          {characteristic.name}
        </label>
        <span className="text-sm text-cyan-400">{characteristic.value}/100</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={characteristic.value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
      />
      <p className="mt-1 text-sm text-gray-400">{characteristic.description}</p>
    </div>
  );
}