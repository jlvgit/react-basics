import React from 'react';
import { Link } from 'react-router-dom'

const Posts = () => {

    const ids = [
        {id: '1', name: "P1"},
        {id: '2', name: "P2"},
        {id: '3', name: "P3"}
    ]

    // const list = ids.map( item => {
    //     return (
    //         <span  key={item.id}>
    //             <Link to={item.id} >{item.name}</Link><br/>
    //         </span>
    //     )
    // })


    return ids.map( item => {
        return (
            <span  key={item.id}>
                <Link to={item.id} >{item.name}</Link><br/>
            </span>
        )
    })
}

export default Posts;