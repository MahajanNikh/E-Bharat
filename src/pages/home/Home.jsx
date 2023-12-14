import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/filter'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/CartSlice'

const Home = () => {
  const dispatch = useDispatch()
  const cartItem = useSelector((state) => state.cart)
  console.log(cartItem)

  const addCart = () => {
    dispatch(addToCart("Shirt"))
  }
  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"))
  }

  return (
    <Layout>
      <div className='p-5 flex justify-center'>
        <button onClick={addCart} className='bg-green-600 p-5 '>Add</button>
        <button onClick={deleteCart} className='bg-red-600 p-5 '>Delete</button>
      </div>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track />
      <Testimonial />

    </Layout>

  )
}

export default Home