import { Fragment } from "react";

function ListGroup() {

  const items = [
    'An item',
    'A second item',
    'A third item',
    'A fourth item',
    'And a fifth one'
  ];

  // not have loop in JSX
  

  return (
    // cannot create multiple elements in JSX
    // <ul className="list-group">
    //   <li className="list-group-item">An item</li>
    //   <li className="list-group-item">A second item</li>
    //   <li className="list-group-item">A third item</li>
    //   <li className="list-group-item">A fourth item</li>
    //   <li className="list-group-item">And a fifth one</li>
    // </ul>

    // use map to loop through items
    /* <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li> 
      */

    // use Fragment to wrap multiple elements
    // or use a div (add extra div element)
    <Fragment>
      <h1>List Group</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
    
  );
}

export default ListGroup;
