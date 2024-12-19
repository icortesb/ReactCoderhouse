import { useEffect } from "react";
import ErrorToast from "../ErrorToast/ErrorToast";

const ErrorRedirect = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.replace("/");
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return <ErrorToast message="La ruta no existe" />;
};

export default ErrorRedirect;
