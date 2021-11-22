import React ,{ useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
// import { useState } from 'react';

const ExpenseItem = (props) => {

  const[title, setTitle] = useState(props.title);

  const clickHandler =() => {
    setTitle('updated');
    let title2 = JSON.stringify(title)
    alert(title2);
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={() => {alert("hi")}}></button> */}
      <Card><button onClick={clickHandler}> change Title</button></Card>
    </Card>
  );
}

export default ExpenseItem;