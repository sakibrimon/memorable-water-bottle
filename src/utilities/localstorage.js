const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString)
    }
    return [];
}

const saveCartToLS = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addToLS = id => {
    const cart = getStoredCart();
    cart.push(id);
    // save to local storage
    saveCartToLS(cart);
}

const removeFromLS = index => {
    const cart = getStoredCart();
    // removing every id
    cart.splice(index, 1);
    saveCartToLS(cart);
}

export { addToLS, getStoredCart, removeFromLS }