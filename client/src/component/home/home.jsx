import React ,{useEffect} from "react";
import {useDispatch} from 'react-redux'
import { getAllShoes } from "../../redux/Actions/actions";

export function Home(){
    const dispatch = useDispatch()
    useEffect(()=>{
    dispatch(getAllShoes())
    },[dispatch])
    return (
        
        <div className="home">
            este es el home         
        
        </div>
    )
}
