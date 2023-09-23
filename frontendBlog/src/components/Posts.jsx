/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
  } from "@material-tailwind/react";

  export function Posts({ post }) {
    console.log(post);
    console.log(post.image);
    return (
      <Card className="max-w-[27rem] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <div className='px-3 p-2 text-end cursor-pointer space-x-3'>
            <i className="fa-solid fa-heart"></i>
            <i className="fa-solid fa-pen-to-square"></i>
          </div>
          <img
            src={post.image}
            alt={post.title}
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
            {post.title}
          </Typography>
          <Typography variant="lead" className="mt-3 font-normal text-[#999]">
          {post.content}
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center -space-x-3">
            <Tooltip content="Natali Craig">
              <Avatar
                size="sm"
                variant="circular"
                alt="natali craig"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                className="border-2 border-white hover:z-10"
              />
            </Tooltip>
            <Tooltip content="Tania Andrew">
              <Avatar
                size="sm"
                variant="circular"
                alt="tania andrew"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                className="border-2 border-white hover:z-10"
              />
            </Tooltip>
          </div>
        <div className="flex-col">
          <Typography className="font-normal text-[14px]"><i className="fa-solid fa-calendar-days"></i>  {post.date.split('.')[0].split('T')[0]}</Typography>
          <Typography className="font-normal text-[14px]"><i className="fa-regular fa-clock"></i>  {post.date.split('.')[0].split('T')[1]}</Typography>
        </div>
        </CardFooter>
      </Card>
    );
  }