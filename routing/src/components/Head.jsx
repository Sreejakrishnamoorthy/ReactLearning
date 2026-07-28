import React from 'react'
import useFetch from './custom-hook/useFetch'

function Head() {
  let {products}=useFetch("https://fakestoreapi.com/products")
  return (
    <div>Home-{products.length}</div>
  )
}

export default Head