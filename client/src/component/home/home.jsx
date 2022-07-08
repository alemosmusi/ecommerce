import React ,{useEffect} from "react";
import {useDispatch} from 'react-redux'
import { getAllShoes , getAllCategories} from "../../redux/Actions/actions";

export function Home(){
    const dispatch = useDispatch()
    useEffect(()=>{
    dispatch(getAllShoes())
    dispatch(getAllCategories())
    },[dispatch])
    return (
        
        <div className="home">
            este es el home         
        
        </div>
    )
}
