import useData from "./useData";
import { Platform } from "./useGames";

//  interface Platform {
//     id : number,
//     name : String,
//     slug : String
//  }
  
 const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

 export default usePlatforms;