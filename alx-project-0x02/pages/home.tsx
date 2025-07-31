import React from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { useState } from 'react';
import { PostData } from '@/interfaces';

const Home: React.FC = () => {
 const [posts, updatePosts] = useState<PostData[]>([]); // Declare a state variable
 const [showModal, setShowModal] = useState(false); // Declare a "Modal" to accept user input for display from "PostModal"

 const handleSubmit = (title: string, content: string) => { // sends a prop "title & content" to PostModal to receive updates and sets the state of "posts" to new post using "updatePosts"
  const postId = Date.now().toString();
  updatePosts([...posts, { title, content, id: postId }]);
 };

 return(
  <div>
   <h1>Home Page</h1>
   <Card title='Tayos Villa' content='Two Bedroom Luxury apartment' />
   <Card title='Depaytez Villa' content='Eight Bedroom Luxury apartment' />
   <div>
    <button onClick={() => setShowModal(true)}>Add Post</button>
    <PostModal 
    isOpen = {showModal}
    onClose= {() => setShowModal(false)}
    onSubmit={handleSubmit}
    />
   </div>
   {posts.map((post, _index) => (
    <Card key={post.id} title={post.title} content={post.content} />
   ))}
  </div>
 );
};

export default Home;