import React, { useState } from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import ProductDisplay from '../components/ProductDisplay'
import GetApp from '../components/GetApp'
import Footer from '../components/Footer'
// import Popular from '../components/Popular'
// import Offer from '../components/Offer'
// import NewCollections from '../components/NewCollections'
// import NewsLetter from '../components/NewsLetter'

const Home = () => {

  const [category, setCategory] = useState('All')
  return (
    <>
      <Hero />
      <GetApp />
      <Categories category={category} setCategory={setCategory}/>
      <ProductDisplay category={category}/>
      <Footer />
      {/* <Popular />
      <Offer />
      <NewCollections />
      <NewsLetter /> */}
    </>
  )
}

export default Home