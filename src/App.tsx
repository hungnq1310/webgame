import ListGroup from './components/ListGroup';

function App() {

  let items1 = [
    'An item',
    'A second item',
    'A third item',
    'A fourth item',
    'And a fifth one'
  ];

  let items2 = [
    'A',
    'B',
    'C',
    'D',
    'E'
  ];


  return (
    <div>
      <ListGroup items={items1} heading="Items"/>
      <ListGroup items={items2} heading="Characters"/>
    </div>
  );
  // or <Message /> - JSX 
}

export default App;