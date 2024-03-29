import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
// import { storeProducts } from '../data';
import { ProductConsumer } from './context';

export default class ProductList extends Component {
  render() {
    return (
      <>
        <div className='py-5'>
          <div className='container'>
            <Title name='our' title='products' />
            <div className='row'>
              <ProductConsumer>
                {hello => {
                  return hello.products.map(product => {
                    return <Product product={product} key={product.id} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </>
    );
  }
}
