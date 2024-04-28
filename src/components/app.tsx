import { AuthPage } from "../pages/auth-page/auth-page";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/main-page";

export function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/auth" element={<AuthPage />} />
            </Routes>
        </div>
    );
}
