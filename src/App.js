import React from 'react';
import './App.css';

const colors = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
  '#ff5722',
]

function App(props) {
  const { data = {} } = props;
  let elements;
  try {
    elements = parseInt(data.elements);
  } catch {
    elements = 1;
  }

  return (
    <div style={{width: 100 + 'vw', height: 100 + 'vh', position: 'relative'}}>
      {
        Array.from(Array(elements)).map((_, index) => {
          const color = (index % 16) + 1;
          const left = Math.ceil(Math.random() * 80);
          const top = Math.ceil(Math.random() * 80);
          const rotate = Math.ceil(Math.random() * 360);
          const scaleX = Math.ceil(Math.random() * 40) + 80;
          const scaleY = Math.ceil(Math.random() * 20) + 90;

          return (
            <div key={index} className='holder' style={{left: left + '%', top: top + '%', transform: 'rotate(' + rotate + 'deg) scale(' + scaleX + '%, ' + scaleY + '%)'}}>
              <div className={'dick color-' + color}>
                <div className='b1' />
                <div className='b2' />
                <div className='c' />
                <div className='s' />
                <div className='l' />
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
