import { useEffect } from "react";
import ErrorToast from "../ErrorToast/ErrorToast";
import { useNavigate } from "react-router-dom";

const ErrorRedirect = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return <ErrorToast message="La ruta no existe" />;
};

export default ErrorRedirect;
