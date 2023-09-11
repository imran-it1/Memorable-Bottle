const getStoredCart = () =>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return [];
}


const addToLS = id =>{
    const cart = getStoredCart();
    cart.push(id);
    saveCartToLS(cart);

    // OR

    // localStorage.setItem('cart', JSON.stringify(cart));
}

const saveCartToLS = cart => {
    const cartSting = JSON.stringify(cart);
    localStorage.setItem('cart', cartSting);
}

const removeFromLS = (id) => {
    const cart = getStoredCart();
    const ramaining = cart.filter((IdX)=> IdX !== id);
    saveCartToLS(ramaining);
}

export { addToLS, getStoredCart, removeFromLS };

