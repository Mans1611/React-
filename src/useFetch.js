import {useState,useEffect} from "react";
const useFetch = (url) =>{
    const [data,updateData] = useState(null);
    const [isPending,updatePending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        setTimeout(() => {
            fetch(url)
            .then(res=>{
                if(!res.ok) 
                    throw Error('How are you');
                else 
                    return res.json();
            })
            .then(data=> {
                updateData(data)
                updatePending(false)
            }).catch(err=>{
                    err.message = 'The Data is not found';
                    setError(err);
                    updatePending(null)
                });
        },200);
    },[]);
return {data,isPending,error}
}
export default useFetch;