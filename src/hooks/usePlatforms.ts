import useData from "./useData";

 interface Platform {
    id : number,
    name : String,
    slug : String
 }
  
 const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

 export default usePlatforms;