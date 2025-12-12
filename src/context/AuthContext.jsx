import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [redirectAfterLogin, setRedirectAfterLogin] = useState(null);

    const navigate = useNavigate();

    const login = (userData) => {
        setUser(userData);
        if (redirectAfterLogin) {
            navigate(redirectAfterLogin);
            setRedirectAfterLogin(null);
        } else {
            navigate("/");
        }
    };

    const logout = () => {
        setUser(null);
        navigate("/signin");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, setRedirectAfterLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
