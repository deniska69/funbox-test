import BorderBack from '../assets/BorderBack';
import BorderFront from '../assets/BorderFront';
import Underline from '../assets/Underline';
import Circle from '../assets/Circle';
import Cat from '../assets/cat.png';
import './Card.css';

function TextCard4({ countOfServings, countOfMouse }) {
  const text = { text1: '', text2: '', text3: '' };

  if (countOfServings === 1) {
    text.text1 = 'порция';
  } else if (countOfServings > 0 && countOfServings < 5) {
    text.text1 = 'порции';
  } else if (countOfServings > 4) {
    text.text1 = 'порций';
  } else {
    text.text1 = 'Ошибка количества порций';
  }

  if (countOfMouse === 1) {
    text.text2 = 'мышь в подарок';
    text.text3 = '';
  } else if (countOfMouse > 0 && countOfMouse < 5) {
    text.text2 = 'мыши в подарок';
    text.text3 = '';
  } else if (countOfMouse > 4) {
    text.text2 = 'мышей в подарок';
    text.text3 = 'заказчик доволен';
  } else {
    text.text2 = 'Ошибка количества подарочных мышей';
    text.text3 = '';
  }

  return (
    <div className={'textCard4'}>
      <strong>{countOfServings}</strong>
      {' ' + text.text1}
      <div>
        <strong>{countOfMouse > 1 && countOfMouse}</strong>
        {' ' + text.text2}
      </div>
      <div>{text.text3}</div>
    </div>
  );
}

const Card = props => {
  return (
    <div id={props.id} className="card">
      <div className="cardItems">
        <BorderBack />
        <img src={Cat} alt="Cat" className="imgCat" />
        <BorderFront />
        <div className="textCard1">Сказочное заморское яство</div>
        <div className="textCard2">Нямушка</div>
        <div className="textCard3">{props.taste}</div>
        <TextCard4 countOfServings={props.countOfServings} countOfMouse={props.countOfMouse} />
        <Circle />
        <div className="textCard5">{props.weight}</div>
        <div className="textCard6">кг</div>
      </div>
      <div className="textCard7">
        Чего сидишь? Порадуй котэ, {/* eslint-disable-next-line */}
        <a className="textCard8">
          купи.
          <Underline />
        </a>
      </div>
    </div>
  );
};

export default Card;
