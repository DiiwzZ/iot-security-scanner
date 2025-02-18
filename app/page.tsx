'use client';

import React from 'react';
import Navbar from './components/Navbar';
import ScanButton from './components/ScanButton';
import Stats from './components/Stats';
import ResultCard from './components/ResultCard';
import { useScan } from './context/ScanContext';

export default function Home() {
    const { devices } = useScan();

    return (
        <main className="min-h-screen bg-[#141526]">
            <Navbar />
            
            <div className="max-w-5xl mx-auto pt-24 px-4">
                <div className="bg-[rgba(35,37,57,0.95)] rounded-3xl p-12 mb-8 text-center shadow-xl">
                    <h2 className="text-2xl mb-8 font-medium">แสกนอุปกรณ์ IoT ในเครือข่าย</h2>
                    <ScanButton />
                    <Stats />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <ResultCard 
                        title="อุปกรณ์ที่ตรวจพบ"
                        deviceName="Smart CCTV"
                        deviceIP="IP: 192.168.1.100"
                        status="เสี่ยง"
                        showAttackButton={true}
                    />
                    <ResultCard 
                        title="รายละเอียดช่องโหว่"
                        deviceName="Default Password"
                        deviceIP="ความรุนแรง: สูง"
                        status="อันตราย"
                    />
                </div>
            </div>
        </main>
    );
} 