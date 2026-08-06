import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import footerColumns from "@/constants/footer";

export default function Footer() {
  return (
    <footer className="pt-1 pb-2">
      <Container>
        <div className="rounded-2xl border border-[#FF91006B] bg-[#14100D] px-6 lg:px-14 pt-15 lg:pt-20 pb-10">
          {/* Navigation Columns */}
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1fr_2fr_1fr_1fr]">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm uppercase tracking-[0.7px] text-[#F4EFE98C]">
                  {column.title}
                </h3>

                <ul className="mt-6 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-base uppercase tracking-[0.56px] font-medium text-[#F4EFE9B2] transition-colors hover:text-[#F89A17]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Logo */}
          <div className="mt-15">
            <Image
              src="/images/logo/footer-logo.svg"
              alt="QuanSkill"
              width={250}
              height={250}
            />
          </div>

          {/* Bottom */}
          <div className="mt-8 flex flex-col items-center justify-between gap-6 border-t border-[#F4EFE91A] pt-6 md:flex-row">
            <p className="font-light text-sm uppercase tracking-[0.8px] text-[#F4EFE98C]">
              © 2026 QuanSkill · QuanSolutions. All rights reserved.
            </p>

            <div className="flex gap-8">
              <Link
                href="#"
                className="font-light text-sm uppercase tracking-[0.8px] text-[#F4EFE98C] hover:text-[#F89A17]"
              >
                Privacy Policy
              </Link>

              <Link
                href="#"
                className="font-light text-sm uppercase tracking-[0.8px] text-[#F4EFE98C] hover:text-[#F89A17]"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
