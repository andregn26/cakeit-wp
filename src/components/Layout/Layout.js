import React, { useState } from "react"
import Hamburger from "../Hamburger/Hamburger"
import Header from "../Header/Header"
import OverlayMenu from "../OverlayMenu/OverlayMenu"
import { GlobalStyles, Primary } from "./Layout.styles"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleOverlayMenu = () => setMenuOpen(prev => !prev)
  return (
    <>
      <GlobalStyles />
      <Hamburger handleOverlayMenu={handleOverlayMenu} />
      <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
      <Header />
      <Primary>{children}</Primary>
      <Footer />
    </>
  )
}

export default Layout
