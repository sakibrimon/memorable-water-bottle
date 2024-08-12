import PropTypes from 'prop-types';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className="cart-container">
                {/* {cart.map(bottle=> <div  key={bottle.id}> */}
                {cart.map((bottle, index) => <div key={bottle.id+`${index}`}>
                    <img src={bottle.img}></img>
                    <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
                    
                    {/* not working properly */}
                    {/* <button onClick={() => handleRemoveFromCart(index)}>Remove {index}</button> */}
                </div>)}
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;