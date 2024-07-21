import { useQuery } from "@tanstack/react-query";
import platforms from "../Data/platforms";
import APIClient from "../services/api-client";
import { Platform } from "./useGames";
import ms from 'ms';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

//  interface Platform {
//     id : number,
//     name : String,
//     slug : String
//  }
  
 const usePlatforms = () => useQuery({
    queryKey : ['platforms'],
    queryFn : apiClient.getAll,
    staleTime : ms('24h'),
    initialData : platforms
 })
//   useData<Platform>("/platforms/lists/parents");

 export default usePlatforms;

