import './list.scss'
import Sidebar from '../components/sidebar/Sidebar'
import CollapsibleTable from '../components/dataTable/Datatable2'
import Navbar from '../components/navbar/Navbar'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserReviews } from '../../redux/actions'


const ListOrders = () => {
  const dispatch = useDispatch()
  const userDetails = useSelector(state => state.UserLog)

  useEffect(() => {
    dispatch(getAllUserReviews(1))
  }, [dispatch])
  const review = useSelector(state => state.ReviewsUser)


  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <CollapsibleTable reviews={review.reviews} />
      </div>
    </div>
  )
}
// Orders={OrdersUser}
export default ListOrders
