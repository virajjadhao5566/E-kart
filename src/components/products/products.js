import React from 'react'
import ListItem from '../listItems/ListItem'

let Items = [
    {
        id: 1,
        discountedPrice: 400,
        price: 500,
        title: "Oranges",
        thumbnail: "orange.png"
    },
    {
        id: 1,
        discountedPrice: 40,
        price: 10,
        title: "Oranges",
        thumbnail: "orange.png"
    },
    {
        id: 1,
        discountedPrice: 400,
        price: 500,
        title: "Oranges",
        thumbnail: "orange.png"
    }
]

const Products = () => {
    return (
        <div>
            <div className='product-list'>
                <div className='product-list--wrapper'>
                    <ListItem data={Items[0]} />
                    <ListItem data={Items[1]} />
                    <ListItem data={Items[2]} />
                </div>
            </div>
        </div>
    )
}

export default Products
