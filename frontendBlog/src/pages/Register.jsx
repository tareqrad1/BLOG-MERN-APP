import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Spinner,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useRegister from '../hooks/useRegister'

const Register = () => {
    const [loading, success, error, register] = useRegister();
    console.log(success);
    const initState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
    const [data, setData] = useState(initState);
    const handleChange = (e) => {
        setData((val) => {
            return {
            ...val,
                [e.target.name]: e.target.value,
            };
        });
    }

    //clickable
    const handleClick = async () => {
        register(data)
    }
  return (
    <div className="h-[100vh] w-full mx-auto flex justify-center items-center">
        <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
            Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
            Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
                <input type="file" />
                <Input size="lg" label="FirstName" name="firstName" value={data.firstName}  onChange={handleChange} />
                <Input size="lg" label="LastName"  name="lastName" value={data.lastName} onChange={handleChange}/>
                <Input size="lg" label="Email"  name="email" value={data.email} onChange={handleChange}/>
                <Input type="password" size="lg" label="Password"  name="password" value={data.password} onChange={handleChange}/>
                <Input type="password" size="lg" label="Confirm Password"  name="confirmPassword" value={data.confirmPassword} onChange={handleChange}/>
            </div>
            <p className="text-red-500 text-[13px] text-end">{error}</p>
            <Checkbox
            label={
                <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
                >
                I agree the
                <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                >
                    &nbsp;Terms and Conditions
                </a>
                </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            />
            <div className="flex justify-center">{loading && (<Spinner />)}</div>
            <Button className="mt-6" fullWidth onClick={handleClick}>
            Register
            </Button>
            
            <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?
            <Link to='/login' className="font-medium text-gray-900">
                Sign In
            </Link>
            </Typography>
        </form>
        </Card>
    </div>
  )
}

export default Register