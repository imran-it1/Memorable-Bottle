import { useEffect, useState } from "react";
import { addToLS, getStoredCart, removeFromLS } from "../../utilities/localstorage";
import Bottle from "../Bottle/Bottle";


const Bottles = () => {

    const [bottles, setBottles] = useState([])
    const [carts, setCarts] = useState([])

    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then( data => setBottles(data))
    },[])


    useEffect(()=> {
        const saveCartArray = [];
        if(bottles.length){
            const storedCart = getStoredCart();
            for(const id of storedCart){
                const bottle = bottles.find((bottle) => bottle.id === id);
                if(bottle){
                    saveCartArray.push(bottle);
                }
            }
            setCarts(saveCartArray);
        }
    },[bottles])

    const handleAddToCart = (bottle) => {
        setCarts([...carts,bottle]);
        addToLS(bottle.id);
    }


    const handleRemove = (id) => {
        console.log('Will remove soon');
        // Visually remove

        const remainingCart = carts.filter((bottle) => bottle.id !== id)
        setCarts(remainingCart);

        // Remove from LS
        console.log(id);
        removeFromLS(id);

    }

    return (
        <div>
            <h3 className=" text-2xl font-bold mb-5">Bootles: {bottles.length}</h3>

            {/* Cart */}
            <p className=" text-2xl font-bold mb-5">Cart: {carts.length}</p>

            {/* Cart Product Image */}

            {
                carts.map((cart => <div className=" inline-block">
                    <img className="w-[150px] mb-5 rounded-md mr-5" src={cart.img}></img>
                    <button onClick={() => handleRemove(cart.id)} className=" mb-5">Remove</button>
                </div>))
            }

            <div>
                
            </div>

            <div className=" grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle> )
                }
            </div>
        </div>
    );
};


export default Bottles;