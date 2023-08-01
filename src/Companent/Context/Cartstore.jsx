import axios from "axios";
import { createContext } from "react";

export const ConterContext = createContext(0)

export function ConterContextProvider({children}){

    const baseurl = 'https://ecommerce.routemisr.com/api/v1/';
    const token = localStorage.getItem('usertoken')

    async function addcart(productId){
       try {
        let objdata = {
            productId
        }
        const {data} = await axios.post(`${baseurl}cart`,objdata,{headers:{token}});
        return data

       } catch (error) {
        console.log(error);
        
       }
    }

    async function getdata(){
       try {
        const {data} = await axios.get(`${baseurl}cart`,{headers:{token}});
        return data
       } catch (error) {

        console.log(error);

        
       }
    }
     

    async function updatedata(productId,count){
        try {
         let objdata = {
             count,
         }
         const {data} = await axios.put(`${baseurl}cart/${productId}`,objdata,{headers:{token}});
         return data
 
        } catch (error) {
         console.log(error);
         
        }
     }
    async function deletee(productId){
        try {
        
         const {data} = await axios.delete(`${baseurl}cart/${productId}`,{headers:{token}});
         return data
 
        } catch (error) {
         console.log(error);
         
        }
     }


    return <ConterContext.Provider value={{addcart , getdata , updatedata,deletee}}>
        {children}
    </ConterContext.Provider>

}