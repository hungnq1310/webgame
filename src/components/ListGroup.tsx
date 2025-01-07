import { Fragment } from "react";

function ListGroup() {

  let items = [
    'An item',
    'A second item',
    'A third item',
    'A fourth item',
    'And a fifth one'
  ];
  items = []; // test with empty array

  // not have loop in JSX

  // conditional rendering
  // #1
  // if (items.length === 0)
  //   //but loop h1 is not a good practice 
  //   return <Fragment>
  //     <h1>List</h1> 
  //     <p>There are no items</p>
  //   </Fragment>;

  // #2
  // add if directly in JSX is not a good practice, too
  // <Fragment>
  //     <h1>List Group</h1>
  //     {(items.length === 0) ? <p>There are no items</p> : null}
  //     <ul className="list-group">
  //       {items.map((item) => (
  //         <li key={item}>{item}</li>
  //       ))}
  //     </ul>
  //   </Fragment>
  
  // #3
  // use const or function to store conditional rendering
  const message = items.length === 0 ? <p>There are no items</p> : null;
  // or use && operator
  // const message = items.length === 0 && <p>There are no items</p>;
  
  // benefit: function can pass parameter 
  // const getMessage() {
  //   if (items.length === 0) {
  //     return <p>There are no items</p>;
  //   }
  //   return null;

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
      {message}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
    
  );
}

export default ListGroup;
