import axios from "axios";

export const getProducts=async (url,setState)=>{
    const response=await axios.get(url)
    setState(response.data)
    return
}
export const getSingleProduct=async (url,setState)=>{
    console.log(url)
    const response=await axios.get(url)
    setState(response.data[0])
    return
}
export const updateProduct=async (url,data,setState)=>{
    const response=await axios.put(url,data)
    setState(response.data)

}