import Card from './components/Card';

function App() {
  return (
    <div className="content">
      <div className="header">Ты сегодня покормил кота?</div>
      <div className="shopwindow">
        <Card id={'1'} taste={'с фуа-гра'} countOfServings={10} countOfMouse={1} weight={'0,5'} />
        <Card id={'2'} taste={'с рыбой'} countOfServings={40} countOfMouse={2} weight={'2'} />
        <Card id={'3'} taste={'с курой'} countOfServings={100} countOfMouse={5} weight={'5'} />
      </div>
    </div>
  );
}

export default App;
