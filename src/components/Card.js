import { useState } from 'react';

import BorderBack from '../components/BorderBack';
import BorderFront from '../components/BorderFront';
import Underline from '../components/Underline';
import Circle from '../components/Circle';
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
    <div className="textCard4">
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
  const [isSelect, setIsSelect] = useState(false);
  // eslint-disable-next-line
  const [isEnable, setIsEnable] = useState(props.enable);

  function selectCard() {
    if (isEnable) {
      setIsSelect(!isSelect);
      const circle = document.getElementById('circle_' + props.id);
      const circleClassList = circle.className.baseVal;

      if (circleClassList.indexOf('circleCardFill_selected') !== -1) {
        circle.className.baseVal = 'circleCardFill';
      } else {
        circle.className.baseVal = 'circleCardFill circleCardFill_selected';
      }

      const borderFront = document.getElementById('borderFront_' + props.id);
      const borderFrontClassList = borderFront.className.baseVal;

      if (borderFrontClassList.indexOf('borderFrontFill_selected') !== -1) {
        borderFront.className.baseVal = 'borderFrontFill';
      } else {
        borderFront.className.baseVal = 'borderFrontFill borderFrontFill_selected';
      }

      const borderBack = document.getElementById('borderBack_' + props.id);
      const borderBackClassList = borderBack.className.baseVal;

      if (borderBackClassList.indexOf('borderBackFill_selected') !== -1) {
        borderBack.className.baseVal = 'borderBackFill';
      } else {
        borderBack.className.baseVal = 'borderBackFill borderBackFill_selected';
      }
    }
  }

  return (
    <div id={props.id} className="card">
      <div
        className="cardItems"
        onClick={() => {
          selectCard();
        }}>
        <BorderBack id={props.id} />
        <img src={Cat} alt="Cat" className="imgCat" />
        <BorderFront id={props.id} />
        <div className="textCard1">Сказочное заморское яство</div>
        <div className="textCard2">Нямушка</div>
        <div className="textCard3">{props.taste}</div>
        <TextCard4 countOfServings={props.countOfServings} countOfMouse={props.countOfMouse} />
        <Circle id={props.id} />
        <div className="textCard5">{props.weight}</div>
        <div className="textCard6">кг</div>
      </div>

      <div className="textCard7" id={'text7_' + props.id}>
        {isEnable && !isSelect && (
          <>
            <div className="textCard7-1">Чего сидишь? Порадуй котэ,</div>
            <div
              className="textCard7-2"
              onClick={() => {
                selectCard();
              }}>
              {' купи.'}
              <Underline />
            </div>
          </>
        )}

        {isEnable && isSelect && props.bottomTextForCardIsSelected}

        {!isEnable && <div className="textCardDisable">{'Печалька, ' + props.taste + ' закончился.'}</div>}
      </div>
    </div>
  );
};

export default Card;
