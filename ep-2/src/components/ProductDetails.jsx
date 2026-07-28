import React, { useContext } from 'react'
import {UserContext} from '../App'

function ProductDetails({pro}) {
    // console.log(pro)
    let {user}=useContext(UserContext)
    // console.log(recievedValue);
  return (
    <section>
      <article>
        <h2>UserName:{user.uName}</h2>
        <h2>{user.email}</h2>
      </article>
        {/* <h3>{pro.name}</h3>
        <p>{pro.price}</p>
        <p>{pro.description}</p> */}
      </section>
  )
}

export default ProductDetails