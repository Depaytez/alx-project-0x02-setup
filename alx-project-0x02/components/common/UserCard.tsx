import { UserCardProps } from "@/interfaces";

const UserCard: React.FC<UserCardProps> = ({name, email, address}) => {
 return(
  <div className="border rounded-lg p-4 shadow-md user-card-class">
   <h2>User: {name}</h2>
   <p>Email: {email}</p>
   <p>Address: {address.street}, {address.city}</p>
  </div>
 );
};

export default UserCard;