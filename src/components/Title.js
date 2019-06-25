import React from 'react';

export default function Title({ name, title }) {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-10 mx-auto text-title py-2 text-center'>
          <h1 className='text-captalize font-weight-bold'>
            {name} <strong className='text-blue'>{title}</strong>
          </h1>
        </div>
      </div>
    </div>
  );
}
