import {useState,useEffect} from 'react';
import Blogs from './Blogs'
import useFetch from './useFetch';

const Home = () => {
  const {data:blogs,isPending,error} = useFetch('http://localhost:8000/users')

    return ( 
        <div className='home'>
            {isPending && <div className="loading">Loading...</div>}
            {error && <div>{error.message}</div>}
          {blogs && <Blogs blogs={blogs} />}    
        </div>
        
     );
}
 
export default Home;