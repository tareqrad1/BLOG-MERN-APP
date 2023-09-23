import Landing from "../components/Landing"
import { Posts } from "../components/Posts"
import { useDispatch, useSelector } from 'react-redux'
import { fetchingPost } from '../featchers/postSlice'
import { useEffect, useRef } from "react"
import { Spinner } from "@material-tailwind/react"

const Home = () => {
  const isMount = useRef(false);
  const dispatch = useDispatch();
  const {loading, post, error} = useSelector((state) => state.posts);
  console.log('wow', loading, post, error);

  useEffect(() => {
    if(!isMount.current) {
      dispatch(fetchingPost());
      isMount.current = true;
    }
  }, [dispatch]);
  console.log('asd', post)
  return (
    <>
        <Landing />
        <div className="flex justify-center w-full">{loading && (<Spinner />)}</div>
        <div className="text-center"> {!post.posts && !loading && error &&(<h1>{error}</h1>)} </div>
        <div className="px-16 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {post.posts && !loading && !error && (
            post.posts.map((ele) => {
              return (
                <Posts key={ele._id} post={ele} />
              )
            })
          )}
        </div>
    </>
  )
}

export default Home