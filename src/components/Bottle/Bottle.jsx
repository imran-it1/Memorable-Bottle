const Bottle = ({bottle, handleAddToCart}) => {
    const {name, price, img, id, stock} = bottle;
    return (
        <div className=" border border-sky-500 rounded-md px-10 py-2">
            <h3 className=" text-lg mb-2">{name}</h3>
            <img className="w-[250px] rounded-md mb-5" src={img} alt="" />
            <p className=" font-semibold mb-2">${price}</p>
            <div className=" flex flex-col gap-2">
                {/* <button className="btn normal-case btn-primary font-medium text-base">Purchase</button> */}
                <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
            </div>
        </div>
    );
}
export default Bottle;