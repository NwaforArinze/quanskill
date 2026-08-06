"use client";
import Container from "../ui/Container";
import Button from "../ui/Button";
import navigation from "@/constants/navigation";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import useActiveSection from "@/hooks/useActiveSection";
import useScrollDirection from "@/hooks/useScrollDirection";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const activeSection = useActiveSection(navigation.map((link) => link.id));
  const direction = useScrollDirection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${
          direction === "down" ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <Container>
          <div className="mt-1 flex items-center justify-between rounded-2xl border border-[#FF91006B] bg-[#14100D] p-3 backdrop-blur-md">
            {/* Logo */}
            <div className="text-xl font-bold text-white">
              <Image
                src="/images/logo/quanskill-logo.png"
                alt="Quanskill Logo"
                width={120}
                height={120}
              />
            </div>

            {/* Navigation */}
            <nav className="hidden gap-8 lg:flex items-center">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`text-sm font-normal tracking-[0.7px] uppercase transition hover:text-[#F89A17] ${
                    activeSection === item.id
                      ? "text-[#FF9100]"
                      : "text-[#F4EFE9]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex">
              <Button size="sm">
                <span>Start a Conversation</span>
                <ArrowUpRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 bg-black text-white p-1 rounded-lg ml-2.5"
                />
              </Button>
            </div>

            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="text-white" />
            </button>
          </div>
        </Container>
      </header>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
