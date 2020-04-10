import React, { Component } from 'react';
import PropTypes from 'prop-types';

//JSX'te inline styling yapiyoruz. inline styling icin 2 curly braces kullaniyoruz {{}} seklinde.
//Ayrica, CSS'teki gibi background-color gibi yazmak yerine cammel case olarak backgroundColor diye yaziyoruz. Asagidaki gibi:
// <div style={{ backgroundColor: '#f4f4f4' }}>
//   <p style={itemStyle}>{this.props.todo.title}</p>
// </div>;
// const itemStyle = {
//   color: 'red',
// };

//Standart javascript ten farkli olarak onchange yerine cammel case olarak onChange diye yaziyoruz

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };

  render() {
    // console.log('todo item', this.props);
    const { id, title, completed } = this.props.todo;

    return (
      // Asagidaki style'da getStyle'dan sonra () var. yani direkt execute edilmis.
      <div style={this.getStyle()}>
        <p>
          <input
            type='checkbox'
            checked={completed}
            // onChange={this.props.markComplete.bind(this, this.props.todo.id)}
            onChange={this.props.markComplete.bind(this, id)}
            //asagidaki {title'i} destructuring sayesinde  {this.props.todo.title} yerine {title} yazmak yeterli oldu
          />
          {title}
          <button
            onClick={this.props.deleteTodo.bind(this, id)}
            style={btnStyle}>
            X
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: '#f00',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: ' 50%',
  cursor: 'pointer',
  float: 'right',
};

export default TodoItem;
