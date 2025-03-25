import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-4 text-center"
      >
        🚀 Welcome to Velinto
      </motion.h1>
      <p className="text-lg mb-6 max-w-xl text-center text-gray-300">
        Simulate investments, learn strategies, and stay updated with market trends.
      </p>
      <Link href="/dashboard">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-400 transition">
          Get Started
        </button>
      </Link>
    </main>
  );
}
