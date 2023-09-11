const Bottle = ({bottle}) => {
    const {name, price, img, id, stock} = bottle;
    return (
        <div>
            <h3 className=" text-lg mb-2">{name}</h3>
            <img className="w-[300px] rounded-md" src={img} alt="" />
            <p className=" font-semibold mb-2">${price}</p>
        </div>
    );
}

export default Bottle;