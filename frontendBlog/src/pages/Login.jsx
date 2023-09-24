import {
  Card,
  Input,
  Button,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

export function SimpleRegistrationForm() {
    const initState = {
        email: '',
        password: '',
    }
    const [data, setData] = useState(initState);
    const [ loading, error, login] = useLogin();
    const handleChange = (e) => {
        setData((val) => {
            return {
            ...val,
                [e.target.name]: e.target.value,
            };
        });
    }
    const handleClick = async () => {
        login(data);
    }
    console.log(data);
  return (
    <div className="h-[80vh] w-full mx-auto flex justify-center items-center">
        <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
            Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
            Enter your details to Login.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" name="email" value={data.email} onChange={handleChange}/>
            <Input type="password" size="lg" label="Password" name="password" value={data.password} onChange={handleChange} />
            </div>
            <p className="text-red-500 text-[13px] text-end">{error}</p>
            <Button className="mt-6" fullWidth onClick={handleClick}>
                Login
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
            Dont have account?
            <Link to="/register" className="font-medium text-gray-900">
                Sign up
            </Link>
            </Typography>
            <div className="flex justify-center mt-4">{loading && (<Spinner />)}</div>
        </form>
        </Card>
    </div>
);
}
