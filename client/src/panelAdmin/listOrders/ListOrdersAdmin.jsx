import './list.scss'
import Sidebar from '../components/sidebar/Sidebar'
import CollapsibleTable from '../components/dataAllOrders/TableOrders'
import Navbar from '../components/navbar/Navbar'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrders } from '../../redux/actions'


const ListOrders = () => {
  const dispatch = useDispatch()
  // const userDetails = useSelector(state => state.UserLog)

  useEffect(() => {
    dispatch(getAllOrders())
    // dispatch(getUsers())
  }, [dispatch])
  const allOrders = useSelector(state => state.Orders)
  // const allUsers = useSelector(state => state.Users)

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <CollapsibleTable allOrders={allOrders} />
      </div>
    </div>
  )
}
export default ListOrders
