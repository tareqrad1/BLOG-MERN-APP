import { axiosApi } from '../api/axiosApi.api'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Cookie  from 'cookie-universal'


const useLogin = () => {
    const Navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const cookies = Cookie()

    const login = async (params) => {
        try {
            setLoading(true);
            setError('');
            const response = await axiosApi.post('/users/login', params,{
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setLoading(false);
            setError('');
            Navigate('/');
            const accessToken = response.data
            cookies.set('token', accessToken.data.token);
        } catch (error) {
            console.log(error.response.data.message);
            setError(error.response.data.message)
            setLoading(false);
        }
    }
    return [loading, error, login]
}

export default useLogin