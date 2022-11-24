import "./card.scss";
import { CardProps } from "../../types/types";

const Card = ({ children }: CardProps) => {
  return <div className='Card'>{children}</div>;
};

export default Card;
