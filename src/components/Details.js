import React, { Component } from 'react';
import { ProductConsumer } from './context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            info,
            title,
            img,
            company,
            inCart,
            price
          } = value.detailProduct;
          return (
            <div className='container py-5'>
              <div className='row'>
                <div className='col-10 mx-auto text-slanted text-blue my-5 text-center'>
                  <h1>{title}</h1>
                </div>
              </div>
              <div className='row'>
                <div className='col-10 mx-auto my-3 col-md-6'>
                  <img src={img} alt='product' className='img-fluid' />
                </div>
                <div className='col-10 col-md-6 mx-auto text-capitalize my-3'>
                  <h2>model: {title}</h2>
                  <h4 className='text-title-text-muted mt-3 mt-2 text-uppercase'>
                    made by: <span>{company}</span>
                  </h4>
                  <h4 className='text-blue'>
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className='text-capitalize mt-3 mb-0 font-weight-bold'>
                    some info about product :
                  </p>
                  <p className='lead text-muted'>{info}</p>

                  <Link to='/'>
                    <ButtonContainer>back to products</ButtonContainer>
                  </Link>
                  <ButtonContainer
                    cart
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? 'in Cart' : 'add to cart'}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
