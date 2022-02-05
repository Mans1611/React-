const addElement = (blogs)=>{
        const arr = blogs.map((value,index)=>(
        <div className='item' key={index}>
            <h2>{value.userName}</h2>
            <h2>{value.email}</h2>
        </div>
   ))
   return arr;
}
export default addElement;