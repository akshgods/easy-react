const Api=async (url)=>{
    let res= await fetch(url);
    return res.json();
   }

   export default Api;