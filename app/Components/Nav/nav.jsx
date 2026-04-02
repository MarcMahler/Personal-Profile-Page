"use client";
import "./nav.css";
import { useRouter, usePathname } from "next/navigation";

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="nav">
      <ul className="nav-links">
        <li
          onClick={() => router.push("/")}
          className={pathname === "/" ? "active-tab" : ""}
        >
          Me
        </li>
        <li
          onClick={() => router.push("/university")}
          className={pathname === "/university" ? "active-tab" : ""}
        >
          University
        </li>
        <li
          onClick={() => router.push("/projects")}
          className={pathname === "/projects" ? "active-tab" : ""}
        >
          Projects
        </li>
      </ul>
    </nav>
  );
}
