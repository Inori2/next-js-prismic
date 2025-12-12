"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function WorksNavbar() {
  const pathname = usePathname();

  const getLinkClass = (path) => {
    const isActive = pathname === path;
    return `${
      isActive ? "text-neutral-50" : "text-neutral-300"
    } hover:text-neutral-50`;
  };

  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 flex bg-black/50 backdrop-blur-sm px-6 py-4 gap-4 text-white rounded-2xl z-50">
      <Link href="/works/still" className={getLinkClass("/works/still")}>
        Still
      </Link>
      <Link href="/works/video" className={getLinkClass("/works/video")}>
        Video
      </Link>
    </nav>
  );
}
