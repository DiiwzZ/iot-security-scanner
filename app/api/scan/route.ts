import { NextResponse } from 'next/server';

export async function POST() {
    try {
        const devices = [
            {
                name: "Smart CCTV",
                ip: "192.168.1.100",
                risk: "high",
                vulnerabilities: ["Default Password", "Open Ports"]
            }
        ];
        return NextResponse.json({ devices });
    } catch {
        return NextResponse.json({ message: "Scan failed" }, { status: 500 });
    }
} 