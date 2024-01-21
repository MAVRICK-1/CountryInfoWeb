import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContextcreateContext"


export const useTheme =() =>useContext(ThemeContext)
