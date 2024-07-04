import { AuthPage } from "../pages/auth-page/auth-page";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/main-page";
import { SearchPage } from "../pages/search-page/search-page";
import { ResultPage } from "../pages/result-page/result-page";
import { localStorageService } from "../services/local-storage-service/local-storage-service";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { DocumentFetcher } from "./DocumentFetcher";

export function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/" element={<MainPage />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/result" element={<ResultPage />} />
                    <Route path="/documents" element={<DocumentFetcher />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    );
}

function useAuth() {
    const authData = localStorageService.auth.get();

    const expirationDate = new Date(authData?.expire ?? "");
    const now = new Date();

    const isAuth = !authData ? false : expirationDate > now;

    return { isAuth };
}

function PrivateRoute() {
    const { isAuth } = useAuth();
    return isAuth ? <Outlet /> : <Navigate to={"/auth"} />;
}
