import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {

    const [bottles, setBottles] = useState([])

    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then( data => setBottles(data))
    },[])

    return (
        <div>
            <h3 className=" text-2xl font-bold mb-5">Bootles: {bottles.length}</h3>
            <div className=" grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle> )
                }
            </div>
        </div>
    );
};

export default Bottles;