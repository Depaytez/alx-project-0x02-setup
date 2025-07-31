import { type ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({children, size = 'medium', shape = 'rounded-md'}) => {
 const sizeClasses = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg'
 }

 const shapeClasses = {
  'rounded-sm': 'rounded-sm',
  'rounded-md': 'rounded-md',
  'rounded-full': 'rounded-full'
 }
 return(
  <div>
   <button
    className = {`bg-blue-500 text-white ${sizeClasses[size]} ${shapeClasses[shape]} hover:bg-blue-600`}
   >
    {children}
   </button>
  </div>
 );
};

export default Button