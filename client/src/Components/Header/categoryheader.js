import React from 'react'
import { Link } from 'react-router-dom'

const Categoryheader = () => {
    const categories = ['Science', 'Programming', 'Health', 'World', 'Astronomy', 'Research', 'Money', 'Food']
    return (
        <div class="ui fluid nine item menu categoryHeaderWrapper" style={{ "border": "0", "margin": "0" }}>
            <Link to={'/posts/categoryAll'} class="item">All</Link>
            {
                categories.map(category => {
                    return (
                        <Link to={`/posts/category${category}`} class="item">{category}</Link>
                    )
                })
            }
        </div>
    )
}

export default Categoryheader