import { Avatar, Button, Input } from "@material-tailwind/react";
const Protofillo = () => {
  return (
    <div className="py-4 mt-6 flex justify-center items-center">
      <div className="bg-[#ffffff] h-[80vh] border-[1px] border-black w-[900px] rounded-lg py-3 px-6 flex">
        <h1 className="text-[18px] font-bold">Account Information</h1>
        <div className="flex gap-7 items-center">
        <Avatar
          variant="circular"
          alt="tania andrew"
          className="cursor-pointer w-[130px] h-[130px]"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        />
          <form className="w-[350px] space-y-4">
            <Input label="Username" />
            <Input label="Email" />
            <Input label="Password" />
            <Button size="lg">Update</Button>
          </form>
        </div>
        <div className="flex gap-4">
          <p>Name: <span className="text-[#5a5a5a]">Tareq</span></p>
          <p>E-mail: <span className="text-[#5a5a5a]">tareq@gmail.com</span></p>
        </div>
      </div>  
    </div>
  )
}

export default Protofillo