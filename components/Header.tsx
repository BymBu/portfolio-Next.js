import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">VE</div> {/* Лого */}
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-blue-600 transition">Главная</Link></li>
          <li><Link href="#projects" className="hover:text-blue-600 transition">Проекты</Link></li>
          <li><Link href="#contact" className="hover:text-blue-600 transition">Контакты</Link></li>
        </ul>
      </nav>
    </header>
  );
}
