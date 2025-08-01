import type { NextPage, GetStaticProps } from "next";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostCardProps } from "@/interfaces";
import { PostCardAPI } from "@/interfaces";

const Posts: NextPage<{posts: PostCardProps[]}> = ({posts}) => {

 // const  [posts, setPosts] = useState<PostCardProps[]>([]);

 // useEffect(() => {
 //  fetch('https://jsonplaceholder.typicode.com/posts')
 //   .then((response) => response.json())
 //   .then((data) => {
 //    // console.log(data)
 //    setPosts(data.map((item: PostCardAPI) => ({
 //    id: item.id,
 //    title: item.title,
 //    content: item.body,
 //    userId: item.userId,
 //   })))});
 // }, []);

 return(
  <div>
   <Header />
   <h1>Posts Page</h1>
   <div className="grid gap-4">
    {posts.map((eachPost) => (
     <PostCard 
     key = {eachPost.id}
     id = {eachPost.id}
     title = {eachPost.title}
     content = {eachPost.content}
     userId = {eachPost.userId}
     />
    ))}
   </div>
  </div>
 );
};

export const getStaticProps: GetStaticProps = async () => {
 const response = await fetch('https://jsonplaceholder.typicode.com/posts');
 const data: PostCardAPI[] = await response.json();

 // map API data to PostCardProps
 const posts: PostCardProps[] = data.map((item: PostCardAPI) => ({
  id: item.id,
  title: item.title,
  content: item.body,
  userId: item.userId,
 }));

 return {
  props: {
   posts,
  },
 };
};

export default Posts;