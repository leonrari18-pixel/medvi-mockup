import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-foreground/10 bg-background px-4 py-6 text-center text-xs text-foreground/60 md:py-8">
      <p className="mb-3">
        Not medical advice. Consult a licensed physician.
      </p>
      <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        <Link
          href="/privacy"
          className="transition-colors hover:text-foreground"
        >
          Privacy
        </Link>
        <Link
          href="/terms"
          className="transition-colors hover:text-foreground"
        >
          Terms
        </Link>
        <Link
          href="/contact"
          className="transition-colors hover:text-foreground"
        >
          Contact
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
