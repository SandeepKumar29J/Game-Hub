import useGenres from "./useGenres";

const useFindGenre = (id?:number) =>{
  const { data: allGenres } = useGenres();
  return allGenres?.results.find((g) => g.id === id);
}

export default useFindGenre;