import React from 'react';
import './Listitem.css';
import Input from './input';

const data = {
  todos: [
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ],
};

function ListItem() {
  return (
    <div className="list">
      <ul className="listItem">
        <h1> ListItemTask</h1>
        <Input />
        {data.todos.map((item) => (
          <li key={item.id}>{item.title}</li>

        ))}
      </ul>
    </div>
  );
}

export default ListItem;
