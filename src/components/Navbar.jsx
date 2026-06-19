"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About",      href: "#about"        },
  { label: "Skills",     href: "#skills"       },
  { label: "Projects",   href: "#projects"     },
  { label: "Experience", href: "#experience"   },
  { label: "Services",   href: "#services"     },
  { label: "Contact",    href: "#contact"      },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 animate-nav-reveal
        backdrop-blur-xl bg-white/85
        border-b border-transparent transition-colors duration-300
        ${scrolled ? "border-b-gray-100" : ""}`}
      aria-label="Main navigation"
    >
      <div className="max-w-[1100px] mx-auto px-8 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <Link
           href="#hero"
          className="font-display text-[1.05rem] font-extrabold tracking-tight text-ink"
          aria-label="Arya Kumar Shastree — home"
        >
          Arya Kumar Shastree
        </Link>

        {/* Links — hidden on mobile */}
        <ul className="hidden md:flex items-center gap-1 list-none" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-[0.83rem] font-medium text-gray-500 hover:text-ink
                  px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-150"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
       <Link
  href="#contact"
  className="hidden md:inline-flex items-center justify-center
    px-5 py-2.5
    rounded-xl
    border border-gray-200
    bg-white
    text-sm
    font-semibold
    text-black
    transition-all duration-300
    hover:bg-black
    hover:text-white
    hover:border-black
    hover:shadow-lg"
>
  Hire Me
</Link>
      </div>
    </nav>
  );
}