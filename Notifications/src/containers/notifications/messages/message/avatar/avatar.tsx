import "./avatar.scss";
import { AvatarProps } from "../../../../../types/types";

const Avatar = ({ image, author }: AvatarProps) => {
  return (
    <figure className='Avatar'>
      <img className='Avatar__image' src={image} alt={author} />
    </figure>
  );
};

export default Avatar;
