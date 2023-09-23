import { Button, Input, Textarea } from "@material-tailwind/react";
import Img from "../image/b5.jpg";
import { useState } from "react";
import { axiosApi } from "../api/axiosApi.api";
import { Spinner } from "@material-tailwind/react";

const CreatePosts = () => {

  const initState = {
    title: "",
    content:
      'The redux best practice "Do Not Put Non-Serializable Values in State or Actions" explained',
  };
  const [post, setPost] = useState(initState);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setPost((val) => {
      return {
        ...val,
        [e.target.name]: e.target.value,
      };
    });
  };
  const params = {
    title: post.title,
    content: post.content,
  };
  async function handleClick() {
    try {
      const formData = new FormData();
      formData.append("image" , image);
      formData.append("title" , params.title);
      formData.append("content" , params.content);
      setLoading(true)
      await axiosApi.post("/posts" , formData);
      setLoading(false)
      setError('done')
    }catch (error) {
      setLoading(false)
      setError(error.response.data.error)
    }
  }
  console.log(post);
  return (
    <div className="py-4 mt-6 flex justify-center items-center">
      <div className="bg-[#ffffff] h-[80vh] border-[1px] border-black w-[900px] rounded-lg py-3 px-6 overflow-hidden">
        <img src={Img} alt="img" className="w-[100%] h-[250px]" />
        <form className="w-[350px] space-y-4 m-auto mt-5">
          <input
            type="file"
            alt="img"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <Input
            label="Title"
            name="title"
            value={post.title}
            onChange={handleChange}
          />
          <Textarea
            label="Content"
            name="content"
            value={post.content}
            onChange={handleChange}
          />
          <div className="flex space-x-4 items-center">
            <Button onClick={handleClick}>create post</Button>
            {loading && (<Spinner />)}
            <p className={`font-normal text-[13px] ${error =='done' ? 'text-green-500 text-[15px]' : 'text-red-500'} `}>{error}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePosts;
