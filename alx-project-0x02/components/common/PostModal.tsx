import React from "react";
import { useState } from "react";
import { PostModalProps } from "@/interfaces";

const PostModal: React.FC<PostModalProps> = ({isOpen, onClose, onSubmit}) => {
 const [title, setTitle] = useState('');
 const [content, setContent] = useState('');

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (title.trim() === "" || content.trim() === "") {
   alert("Please fill in the title and content");
   return;
  }
  onSubmit(title, content);
  setTitle('');
  setContent('');
  onClose();
 };

 if (!isOpen) return null;

 return(
  <div>
   <h1> Fill Form and Add Property to Website for Sale</h1>
   {/* <form action="" method="post"> */}
   <form onSubmit={handleSubmit}>
    <div>
     <div className="property_name">
      <label htmlFor="input_text_id">Property Name:</label>
      <input 
       type="text" 
       id="input_text_id" 
       placeholder="Type Property Name/Title Here" 
       required
       value={title}
       onChange={(e) => setTitle(e.target.value)}
      />
     </div>
     <div className="property_content">
      <label htmlFor="input_content_id">Property Details:</label>
      <textarea 
       rows={5} 
       id="input_content_id" 
       placeholder="Type Property Details/Content Here" 
       value={content}
       required
       onChange={(e) => setContent(e.target.value)}
      />
     </div>
     
     {/* action buttons to close/submit form */}
     <div className="flex justify-end space-x-2">
      <button type="button" className="p-2 rounded" onClick={onClose}>
       Close
      </button>
      <button type="submit">
       Submit
      </button>
     </div>
    </div>
   </form>
  </div>
 );
};

export default PostModal;