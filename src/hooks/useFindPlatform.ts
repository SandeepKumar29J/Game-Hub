import usePlatforms from "./usePlatforms";

const useFindPlatform = (id?:number) => {
    const { data: allPlatforms } = usePlatforms();
    return allPlatforms?.results.find(
      (p) => p.id === id
    );
}

export default useFindPlatform;