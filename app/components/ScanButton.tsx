'use client';

import { useScan } from '../context/ScanContext';

export default function ScanButton() {
    const { scanning, startScan } = useScan();

    return (
        <button 
            className="relative w-48 h-48 bg-[#141526] text-white rounded-full 
                     hover:scale-105 transition-transform shadow-lg hover:shadow-xl
                     disabled:opacity-50 disabled:cursor-not-allowed
                     border-2 border-[#3498db]"  // เพิ่ม border
            onClick={startScan}
            disabled={scanning}
        >
            <div className="relative z-10">  {/* เพิ่ม z-index ให้ text */}
                {scanning ? 'กำลังแสกน...' : 'เริ่มการแสกน'}
            </div>
            <div className="absolute inset-[-2px] rounded-full border-2 border-[#3498db] 
                          animate-pulse"></div>
        </button>
    );
} 