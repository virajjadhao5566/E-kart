import React from 'react'
import cartIcon from '../../assets/icons/cart.svg'
const ListItem = ({data}) => {
    return (
        <div className={"item-card"}>
            <img className={"img-fluid"} src={`../../assets/images/${data.thumbnail}`} alt="myimg" />
            <div className={"item-card__information"}>
                <div className={"pricing"}>
                    <span>₹{data.discountedPrice}</span>
                    <small>
                        <strike>₹{data.price}</strike>
                    </small>
                </div>
                <div className={"title"}>
                    <p>{data.title}</p>
                </div>
            </div>
            <div>
                <button className={"cart-add"}>
                    <span>Add to cart</span>
                    <img src={cartIcon} alt='myicon' />
                </button>
            </div>
        </div>
    )
}

export default ListItem
