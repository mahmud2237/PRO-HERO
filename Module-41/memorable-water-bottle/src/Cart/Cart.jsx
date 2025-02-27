import PropTypes from 'prop-types';

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className="bottles-container">
                {cart.map(bottle => 
                    <div key={bottle.id}>
                        <img src={bottle.img}></img>
                        <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
                    </div>
                )}
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;