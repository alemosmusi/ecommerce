import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllShoes, getAllCategories } from '../../redux/actions'
import { Wrapper } from '../wrapper/wrapper'
import Footer from '../footer/footer.jsx'
import Cards from '../cards/Cards'

// import Loading from "../loading/loading";

export function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllShoes())
    dispatch(getAllCategories())
  }, [dispatch])

  const shoes = useSelector(state => state.Shoes)

  return (
    <div className="home p-1">
      <Cards shoes={shoes} />
      {/* <Carousel shoes={shoes} /> */}
      <Wrapper></Wrapper>
    </div>
  )
}
