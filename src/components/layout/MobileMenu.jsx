"use client";

import Link from "next/link";
import { X } from "lucide-react";
import navigation from "@/constants/navigation";
import Button from "../ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MobileMenu({ isOpen, onClose, activeSection }) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={` fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-[100] w-[85vw] max-w-[360px] bg-[#14100D] bg-[radial-gradient(circle_at_top_right,#FF910015,transparent_45%)] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${isOpen ? "translate-x-0" : "translate-x-full"}
`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#2D241D] px-6 py-5">
            <Image
              src="/images/logo/quanskill-logo.png"
              alt="Quanskill"
              width={120}
              height={36}
            />

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="rounded-lg p-2 transition hover:bg-white/5"
            >
              <X size={26} className="text-white" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-1 flex-col justify-center px-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : 20,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.35,
                }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`group block py-5 border-b border-white/5 transition ${
                    activeSection === item.id
                      ? "text-[#FF9100]"
                      : "text-white hover:text-[#FF9100]"
                  }`}
                >
                  <span className="font-mono text-lg uppercase tracking-[1px]">
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Footer */}
          <div className="border-t border-[#2D241D] p-6">
            <Button className="px-15">Start a Conversation</Button>
          </div>
        </div>
      </aside>
    </>
  );
}
