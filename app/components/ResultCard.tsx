'use client';

import { useScan } from '../context/ScanContext';

interface ResultCardProps {
    title: string;
    deviceName?: string;
    deviceIP?: string;
    status: string;
    showAttackButton?: boolean;
}

export default function ResultCard({ 
    title, 
    deviceName, 
    deviceIP, 
    status, 
    showAttackButton 
}: ResultCardProps) {
    const { attackDevice } = useScan();

    return (
        <div className="bg-[#1a1b2e] p-6 rounded-xl">
            <h3 className="text-[#8d8e98] text-sm uppercase mb-4 font-medium">{title}</h3>
            <div className="bg-[#232539] p-4 rounded-lg flex justify-between items-center mb-3">
                <div>
                    <strong className="block text-lg mb-1">{deviceName}</strong>
                    <p className="text-[#8d8e98]">{deviceIP}</p>
                </div>
                <span className="px-4 py-1.5 rounded-full text-sm bg-[#e74c3c] font-medium">
                    {status}
                </span>
            </div>
            {showAttackButton && (
                <button 
                    onClick={() => deviceIP && attackDevice(deviceIP)}
                    className="bg-[#3498db] text-white px-6 py-2.5 rounded-lg w-full
                             hover:bg-[#2980b9] transition-colors font-medium"
                >
                    ทดสอบการโจมตี
                </button>
            )}
        </div>
    );
} 