import Link from "next/link";
import { useState } from "react";
export default function MobileMenu({ handleMobileMenu }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <ul
        //   Inline style added for navbar list.
        className="wsmenu-list nav-theme"
        style={{
          paddingTop: "22px",
        }}
      >
        {/* DROPDOWN SUB MENU */}
        <li aria-haspopup="true">
          <span
            className={
              isActive.key == 1 ? "wsmenu-click ws-activearrow" : "wsmenu-click"
            }
            onClick={() => handleToggle(1)}
          >
            <i className="wsmenu-arrow" />
          </span>
          <Link href="#" className="h-link">
            Learn
            <span className="wsarrow" />
          </Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}
          >
            <li aria-haspopup="true">
              <Link href="/whitepaper" onClick={handleMobileMenu}>
                Whitepaper
              </Link>
            </li>
            <li aria-haspopup="true">
              <Link href="/#features" onClick={handleMobileMenu}>
                Features
              </Link>
            </li>
            {/*<li aria-haspopup="true"><Link href="/framework">Framework</Link></li>*/}
            <li aria-haspopup="true">
              <Link href="/faqs" onClick={handleMobileMenu}>
                FAQs
              </Link>
            </li>
          </ul>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link
            href="https://docs.koinos.io"
            onClick={handleMobileMenu}
            className="h-link"
          >
            Documentation
          </Link>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link
            href="/ecosystem"
            onClick={handleMobileMenu}
            className="h-link"
          >
            Ecosystem
          </Link>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link href="/#roadmap" onClick={handleMobileMenu} className="h-link">
            Roadmap
          </Link>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link href="/team" onClick={handleMobileMenu} className="h-link">
            Team
          </Link>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link
            legacyBehavior
            href="https://github.com/koinos"
            onClick={handleMobileMenu}
            target="_blank"
            passHref
          >
            <a target="_blank" rel="noopener noreferrer">
              <img
                src="/images/menu/github-mark.svg"
                alt="GitHub"
                style={{ width: "30px", height: "30px" }}
                className="light-theme-img"
              />
              <img
                src="/images/menu/github-mark-white.svg"
                alt="GitHub"
                style={{ width: "30px", height: "30px" }}
                className="dark-theme-img"
              />
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
}
