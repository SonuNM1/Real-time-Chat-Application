import React, { useEffect } from 'react'
import axios from "axios" ; 
import { useSelector } from 'react-redux';

export const useGetMessages = () => {
    const {selectedUser} = useSelector(store=> store.user) ; 
    useEffect(()=>{
        const fetchMessages = async()=>{
            try{
                axios.defaults.withCredentials = true ; 
                // message send api 
                const res = await axios.get(`http://localhost:5000/api/v1/message/${selectedUser?._id}`);
            }catch(error){
                console.log(error) ; 
            }
        }
        fetchMessages() ; 
    },[])
}

