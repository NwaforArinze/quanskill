"use client";

import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds = []) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = sectionIds[0];

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        if (scrollPosition >= section.offsetTop) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll(); // Set initial section

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
