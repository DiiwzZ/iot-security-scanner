'use client';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-[rgba(35,37,57,0.95)] p-4 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-semibold">IoT Security Scanner</div>
                <div className="space-x-5">
                    <a href="#" className="text-[#8d8e98] hover:text-white transition-colors font-medium">หน้าหลัก</a>
                    <a href="#" className="text-[#8d8e98] hover:text-white transition-colors font-medium">ประวัติการแสกน</a>
                    <a href="#" className="text-[#8d8e98] hover:text-white transition-colors font-medium">รายงาน</a>
                    <a href="#" className="text-[#8d8e98] hover:text-white transition-colors font-medium">ตั้งค่า</a>
                    <a href="#" className="text-[#8d8e98] hover:text-white transition-colors font-medium">ออกจากระบบ</a>
                </div>
            </div>
        </nav>
    );
} 