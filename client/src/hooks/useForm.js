import React, { useState } from "react";

export default function useForm (initialValues) {
    const [values, setValues] = useState(initialValues);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccess(true);
    };


    return [values, handleChanges, showSuccess, handleSubmit];
}