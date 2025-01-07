import Alert from './components/Alert';
import ListGroup from './components/ListGroup';

// function App() {

//   let items1 = [
//     'An item',
//     'A second item',
//     'A third item',
//     'A fourth item',
//     'And a fifth one'
//   ];

//   let items2 = [
//     'A',
//     'B',
//     'C',
//     'D',
//     'E'
//   ];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   }

//   return (
//     <div>
//       <ListGroup items={items1} heading="Items" onSelectItem={handleSelectItem} />
//       <ListGroup items={items2} heading="Characters" onSelectItem={handleSelectItem} />
//     </div>
//   );
//   // or <Message /> - JSX 
// }

function App() {
  
    return (
      // <div><Alert text='Hello World'/></div> // this is urgly
      <div>
        <Alert>
          Hello <span> world </span>
        </Alert>
      </div>
    );
    // or <Message /> - JSX 
  }
  
export default App;