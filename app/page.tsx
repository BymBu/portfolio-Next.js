import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <section className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold text-gray-900">Вячеслав Ерофеев</h1>
        <p className="text-xl text-gray-600 mt-4">Junior Fullstack Developer</p>
        
        <div className="relative w-48 h-48 mt-8 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
          <Image 
            src="/me.jpg" 
            alt="Вячеслав Ерофеев" 
            fill
            style={{ objectFit: 'cover' }}
            priority // Загружаем сразу, так как это выше fold
          />
        </div>
      </section>
    </main>
  );
}