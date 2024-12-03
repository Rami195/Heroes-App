import { Route, Routes } from "react-router-dom"
import { Home } from "../components/screens/Home/Home"
import { Header } from "../components/ui/Header/Header"
import { Search } from "../components/screens/Search/Search"
import { DcHeroes } from "../components/screens/DcHeroes/DcHeroes"
import { MarvelHeroes } from "../components/screens/MarvelHero/MarvelHeroes"
import { HeroPage } from "../components/screens/HeroPage/HeroPage"

export const ProtectedRoutes = () => {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Search" element={<Search/>}/>
        <Route path="/dcHeroes" element={<DcHeroes/>}/>
        <Route path="/marvelHeroe" element={<MarvelHeroes/>}/>
        <Route path="/hero/:id" element={<HeroPage/>}/>
    </Routes>
    </>
  )
}