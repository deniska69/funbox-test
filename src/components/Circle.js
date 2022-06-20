import './Circle.css';

const Circle = props => {
  return (
    <svg width="80" height="80" className="circleCard">
      <circle cx="40" cy="40" r="40" className={'circleCardFill '} id={'circle_' + props.id}></circle>
    </svg>
  );
};

export default Circle;
