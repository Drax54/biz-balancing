import React from 'react';

const AccountingIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => {
  return (
    <svg
      viewBox="0 0 800 600"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Elements */}
      <circle cx="400" cy="300" r="250" fill="#E2E8F0" opacity="0.3" />
      <circle cx="400" cy="300" r="200" fill="#CBD5E1" opacity="0.2" />
      
      {/* Calculator */}
      <rect x="300" y="200" width="200" height="300" rx="20" fill="#1E293B" />
      <rect x="320" y="220" width="160" height="60" rx="8" fill="#E2E8F0" />
      
      {/* Calculator Buttons */}
      <g>
        {/* Numbers */}
        {[
          [0, 0], [1, 0], [2, 0],
          [0, 1], [1, 1], [2, 1],
          [0, 2], [1, 2], [2, 2],
          [1, 3]
        ].map(([x, y], i) => (
          <rect
            key={i}
            x={320 + x * 55}
            y={300 + y * 55}
            width="45"
            height="45"
            rx="8"
            fill="#64748B"
          />
        ))}
        
        {/* Operation Buttons */}
        <rect x="485" y="300" width="45" height="45" rx="8" fill="#10B981" />
        <rect x="485" y="365" width="45" height="45" rx="8" fill="#10B981" />
        <rect x="485" y="430" width="45" height="110" rx="8" fill="#10B981" />
      </g>

      {/* Documents */}
      <g transform="rotate(-15 200 200)">
        <rect x="100" y="150" width="180" height="240" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
        <line x1="120" y1="190" x2="260" y2="190" stroke="#94A3B8" strokeWidth="2" />
        <line x1="120" y1="220" x2="260" y2="220" stroke="#94A3B8" strokeWidth="2" />
        <line x1="120" y1="250" x2="260" y2="250" stroke="#94A3B8" strokeWidth="2" />
        <line x1="120" y1="280" x2="200" y2="280" stroke="#94A3B8" strokeWidth="2" />
      </g>

      {/* Coins Stack */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle
            cx="600"
            cy={450 - i * 15}
            r="40"
            fill="#FCD34D"
            stroke="#F59E0B"
            strokeWidth="2"
          />
          <text
            x="600"
            y={450 - i * 15}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#92400E"
            fontSize="24"
            fontWeight="bold"
          >
            $
          </text>
        </g>
      ))}

      {/* Pen */}
      <g transform="rotate(45 650 150)">
        <rect x="620" y="100" width="60" height="8" rx="4" fill="#3B82F6" />
        <path d="M670 100 L690 104 L670 108 Z" fill="#3B82F6" />
      </g>

      {/* Graph */}
      <g transform="translate(500 50)">
        <path
          d="M0 150 L50 120 L100 140 L150 80 L200 60"
          stroke="#10B981"
          strokeWidth="3"
          fill="none"
        />
        <circle cx="50" cy="120" r="4" fill="#10B981" />
        <circle cx="100" cy="140" r="4" fill="#10B981" />
        <circle cx="150" cy="80" r="4" fill="#10B981" />
        <circle cx="200" cy="60" r="4" fill="#10B981" />
      </g>
    </svg>
  );
};

export default AccountingIllustration;