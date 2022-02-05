import { useState,useEffect} from "react";
import addElement from './addElement';
const Blogs = ({blogs}) => {
    
    return ( 
        <div className="Blogs">
             {  
                 addElement(blogs)
             }
          
        </div>
     );

};
    
             
export default Blogs;