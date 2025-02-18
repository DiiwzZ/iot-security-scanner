import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { deviceIP } = await req.json();
        const result = {
            success: true,
            target: deviceIP,
            method: "Default Password Attack",
            details: "Successfully accessed device"
        };
        return NextResponse.json(result);
    } catch {
        return NextResponse.json({ message: "Attack failed" }, { status: 500 });
    }
} 