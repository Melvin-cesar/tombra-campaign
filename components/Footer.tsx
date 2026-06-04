import Link from "next/link";
import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-bayelsa-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-xl font-black">Tombra Mohammed</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/76">
            A stronger voice for Bayelsa West. Jobs, better representation, and
            real grassroots leadership for Sagbama and Ekeremor.
          </p>
          <p className="mt-4 text-sm font-semibold text-bayelsa-gold">
            Young Progressives Party (YPP)
          </p>
        </div>
        <div>
          <p className="font-bold">Pages</p>
          <div className="mt-3 grid gap-2">
            {navItems.slice(0, 6).map((item) => (
              <Link
                className="text-sm text-white/76 transition hover:text-bayelsa-gold"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold">Contact</p>
          <div className="mt-3 grid gap-2 text-sm text-white/76">
            <p>Phone: [Campaign phone]</p>
            <p>WhatsApp: [WhatsApp number]</p>
            <p>Email: [Campaign email]</p>
            <p>Social: [Facebook] [X] [Instagram] [TikTok]</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/62">
        (c) 2026 Tombra Mohammed Campaign. All campaign details should be verified
        before public launch.
      </div>
    </footer>
  );
}
