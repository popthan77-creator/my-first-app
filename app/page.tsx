export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">
          สวัสดีครับ! 👋
        </h1>
        <p className="text-2xl mb-8">
          นี่คือเว็บแรกของผม
        </p>
        <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
          เริ่มต้นใช้งาน
        </button>
      </div>
    </div>
  )
}