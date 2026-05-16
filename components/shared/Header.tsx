import Link from "next/link";

export function Header() {
  return (
    <header className="relative w-full border-b border-foreground/10 bg-background">
      <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-center px-4 md:h-16 md:px-6">
        <Link
          href="/"
          aria-label="MEDVI home"
          className="font-display text-xl uppercase tracking-[0.28em] text-primary md:text-2xl"
        >
          MEDVI
        </Link>

        <nav className="absolute right-4 hidden items-center gap-6 text-sm text-foreground/70 md:flex md:right-6">
          <Link
            href="/how-it-works"
            className="transition-colors hover:text-foreground"
          >
            How it works
          </Link>
          <Link
            href="/sign-in"
            className="transition-colors hover:text-foreground"
          >
            Sign in
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
