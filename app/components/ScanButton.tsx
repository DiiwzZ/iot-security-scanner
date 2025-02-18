'use client';

import { useScan } from '../context/ScanContext';

export default function ScanButton() {
    const { scanning, startScan } = useScan();

    return (
        <button 
            className="scan-button relative w-[200px] h-[200px] bg-[#141526] text-white rounded-full 
                     hover:scale-105 transition-transform shadow-lg hover:shadow-xl
                     disabled:opacity-50 disabled:cursor-not-allowed
                     text-lg font-medium my-8"
            onClick={startScan}
            disabled={scanning}
        >
            {scanning ? 'กำลังแสกน...' : 'เริ่มการแสกน'}
        </button>
    );
} 