import React from "react";

const ErrorToast = ({ message }) => {
    return (
        <div className="bg-red-500 text-white p-4 rounded fixed top-2 right-2 z-50">
            {message}
        </div>
    );
};

export default ErrorToast;
