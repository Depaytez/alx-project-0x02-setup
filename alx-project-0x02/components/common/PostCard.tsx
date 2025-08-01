import { PostCardProps } from "@/interfaces";

const PostCard: React.FC<PostCardProps> = ({title, content, userId, id}) => {
 return(
  <div className="border rounded-lg p-4 shadow-md post-card-class">
   <h2>Post Title: {title}</h2>
   <p>Post ID: {id}</p>
   <p>User ID: {userId}</p>
   <p>Content: {content || 'No content available'}</p>
  </div>
 );
};

export default PostCard;