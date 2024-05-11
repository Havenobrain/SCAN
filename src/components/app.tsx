import { AuthPage } from "../pages/auth-page/auth-page"
import { Route, Routes } from "react-router-dom"
import { MainPage } from "../pages/main-page"
import { SearchPage } from "../pages/search-page/search-page"
import { ResultPage } from "../pages/result-page/result-page"

export function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/result" element={<ResultPage />} />
        </Routes>
    )
}
