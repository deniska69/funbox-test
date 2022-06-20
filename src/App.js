import Card from './components/Card';

function App() {
  return (
    <div className="content">
      <div className="header">Ты сегодня покормил кота?</div>
      <div className="shopwindow">
        <Card
          enable={true}
          id={'card_1'}
          taste={'с фуа-гра'}
          countOfServings={10}
          countOfMouse={1}
          weight={'0,5'}
          bottomTextForCardIsSelected={'Печень утки разварная с артишоками.'}
        />
        <Card
          enable={true}
          id={'card_2'}
          taste={'с рыбой'}
          countOfServings={40}
          countOfMouse={2}
          weight={'2'}
          bottomTextForCardIsSelected={'Головы щучьи с чесноком да свежайшая сёмгушка.'}
        />
        <Card
          enable={false}
          id={'card_3'}
          taste={'с курой'}
          countOfServings={100}
          countOfMouse={5}
          weight={'5'}
          bottomTextForCardIsSelected={'Филе из цыплят с трюфелями в бульоне.'}
        />
      </div>
    </div>
  );
}

export default App;
