import Card from './components/Card';

function App() {
  return (
    <div className="content">
      <div className="header">Ты сегодня покормил кота?</div>
      <div className="shopwindow">
        <Card id={'1'} className="card" taste={'с фуа-гра'} countOfServings={1} countOfMouse={1} />
        <Card id={'2'} className="card" taste={'с рыбой'} countOfServings={2} countOfMouse={2} />
        <Card id={'3'} className="card" taste={'с курой'} countOfServings={5} countOfMouse={5} />
      </div>
    </div>
  );
}

export default App;
