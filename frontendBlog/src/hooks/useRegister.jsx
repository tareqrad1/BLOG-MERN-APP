import { useState } from "react";
import { axiosApi } from "../api/axiosApi.api";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
    const Navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    
    const register = async(params) => {
        try {
            setLoading(true);
            setError('');
            await axiosApi.post('/users/register', params);
            setSuccess(true);
            setLoading(false);
            Navigate('/login')
        } catch (error) {
            setLoading(false);
            setError(error.response.data.error);
            setSuccess(false);
        }
    }
    return [loading, success, error, register]
}

export default useRegister;












// firstName,
//         lastName,
//         email,
//         password,
//         confirmPassword,