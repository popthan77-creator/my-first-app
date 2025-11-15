export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-blue-600">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">
          เว็บของผมออนไลน์แล้ว! 🌟
        </h1>
        <p className="text-2xl mb-8">
          Deploy ด้วย Vercel สำเร็จ!
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
          เริ่มต้นใช้งาน
        </button>
      </div>
    </div>
  )
}