'use client';

import { useScan } from '../context/ScanContext';

export default function Stats() {
    const { devices } = useScan();

    return (
        <div className="grid grid-cols-3 gap-4 mt-8 text-[#8d8e98]">
            <div>
                <div className="text-4xl text-white mb-2">{devices.length}</div>
                <div>อุปกรณ์ที่พบ</div>
            </div>
            <div>
                <div className="text-4xl text-white mb-2">
                    {devices.filter(d => d.risk === 'high').length}
                </div>
                <div>ช่องโหว่ที่ตรวจพบ</div>
            </div>
            <div>
                <div className="text-4xl text-white mb-2">
                    {devices.some(d => d.risk === 'high') ? 'สูง' : 'ต่ำ'}
                </div>
                <div>ระดับความเสี่ยง</div>
            </div>
        </div>
    );
} 