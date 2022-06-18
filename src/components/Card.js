import BorderBack from '../assets/BorderBack';
import BorderFront from '../assets/BorderFront';
import Underline from '../assets/Underline';
import Cat from '../assets/cat.png';
import './Card.css';

const Card = props => {
  return (
    <div id={props.id} className="card">
      <BorderBack />
      <img src={Cat} alt="Cat" className="imgCat" />
      <BorderFront />
      <Underline />
      <div className="bottomTextCard">
        Чего сидишь? Порадуй котэ, {/* eslint-disable-next-line */}
        <a href="#" className="bottomTextUrlCard">
          купи.
        </a>
      </div>
    </div>
  );
};

export default Card;
