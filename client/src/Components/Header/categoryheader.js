import React from 'react'
import { Link } from 'react-router-dom'

const Categoryheader = () => {
    const categories = ['Science', 'Programming', 'Health', 'World', 'Astronomy', 'Research', 'Money', 'Food']
    return (
        <div className="ui fluid nine item menu categoryHeaderWrapper" style={{ "border": "0", "margin": "0" }}>
            <Link to={'/posts/categoryAll'} className="item">All</Link>
            {
                categories.map((category, index) => {
                    return (
                        <Link to={`/posts/category${category}`} className="item" key ={index}>{category}</Link>
                    )
                })
            }
        </div>
    )
}

export default Categoryheader