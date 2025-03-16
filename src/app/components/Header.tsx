import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          PropertyFinder
        </Link>
        <nav className="flex gap-6">
          <Link href="/buy" className="hover:text-primary">Buy</Link>
          <Link href="/rent" className="hover:text-primary">Rent</Link>
          <Link href="/saved" className="hover:text-primary">Saved</Link>
        </nav>
      </div>
    </header>
  );
} 