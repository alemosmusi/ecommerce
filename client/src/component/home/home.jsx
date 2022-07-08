
import React ,{useEffect} from "react";
import {useDispatch} from 'react-redux'
import { getAllShoes , getAllCategories} from "../../redux/Actions/actions";
import { Wrapper } from "../wrapper/wrapper";
import Footer from '../footer/footer.jsx'

export function Home(){
    const dispatch = useDispatch()
    useEffect(()=>{
    dispatch(getAllShoes())
    dispatch(getAllCategories())
    },[dispatch])
    return (
        
        <div className="home">
            <Wrapper></Wrapper>
            <Footer/>
        
        </div>
    )
}
