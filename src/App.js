import Card from './components/Card';

function App() {
  return (
    <div className="content">
      <div className="header">Ты сегодня покормил кота?</div>
      <div className="shopwindow">
        <Card id={'1'} className="card" />
        <Card id={'2'} className="card" />
        <Card id={'3'} className="card" />
      </div>
    </div>
  );
}

export default App;
