import { createContext, useContext } from "react"

export const global = createContext<string>("")

export const useGlobal = () => useContext(global)

export const ITEMS = [
  { href: "#intro", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#blog", label: "Blog" },
  { href: "#services", label: "Services" },
]
