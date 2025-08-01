import type { NextPage, GetStaticProps } from 'next';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserCardProps } from '@/interfaces';

const Users: NextPage<{ users: UserCardProps[] }> = ({ users }) => {
 return(
  <div>
   <Header />
   <h1> User Page</h1>
   <div className='grid gap-4'>
    {users.map((user) => (
     <UserCard 
     id = {user.id}
      key=  {user.id}
      name = {user.name}
      email = {user.email}
      address = {user.address}
     />
    ))}
   </div>
  </div>
 );
};

export const getStaticProps: GetStaticProps = async () => {
 const response = await fetch('https://jsonplaceholder.typicode.com/users');
 const users: UserCardProps[] = await response.json();

 return {
  props: {
   users,
  },
 };
};

export default Users;