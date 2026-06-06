import Link from "next/link";
import { campaignDetails, contactItems, socialLinks } from "@/lib/campaignDetails";
import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-bayelsa-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-xl font-black">{campaignDetails.candidateName}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/76">
            A stronger voice for Bayelsa West. Jobs, better representation, and
            real grassroots leadership for Sagbama and Ekeremor.
          </p>
          <p className="mt-4 text-sm font-semibold text-bayelsa-gold">
            {campaignDetails.party}
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
            <Link
              className="text-sm text-white/76 transition hover:text-bayelsa-gold"
              href="/privacy"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div>
          <p className="font-bold">Contact</p>
          <div className="mt-3 grid gap-2 text-sm text-white/76">
            {contactItems.length ? (
              contactItems.map((item) => (
                <p key={item.label}>
                  {item.label}: {item.value}
                </p>
              ))
            ) : (
              <p>Campaign contact details will be published after approval.</p>
            )}
            {socialLinks.length ? (
              <p>
                Social:{" "}
                {socialLinks.map((item, index) => (
                  <span key={item.label}>
                    <Link
                      className="transition hover:text-bayelsa-gold"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                    {index < socialLinks.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
            ) : null}
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
