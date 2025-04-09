// components/Header.js
import useIsMobile from "../hooks/CheckNarrow";
import HeaderDesktop from "./HeaderWide";
import HeaderMobile from "./HeaderNarrow";

export default function Header({ dark, toggleDark }) {
  const isMobile = useIsMobile(690);
  return isMobile ? (
    <HeaderMobile dark={dark} toggleDark={toggleDark} />
  ) : (
    <HeaderDesktop dark={dark} toggleDark={toggleDark} />
  );
}
