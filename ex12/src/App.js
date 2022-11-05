import { useState, useEffect } from "react";
import Film from "./Film.js";
import data from "./data.json";

function App() {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const reqTimeout = setTimeout(() => {
      console.log("Request took longer than 5 seconds, using local data");
      controller.abort();
      setFilms(data);
    }, 5000);

    (async () => {
      try {
        const res = await fetch("https://swapi.dev/api/films", { signal: controller.signal });
        if (res.ok) setFilms(await res.json());
        return new Error("Error happened whilst fetching from API");
      } catch (error) {
        if (error.name !== "AbortError") console.log("An error happened: " + error.message);
      }
    })();

    return () => {
      clearTimeout(reqTimeout);
      controller.abort();
    }
  }, []);

  return (
    <div className="p-6 bg-slate-200 min-h-screen">
      <h3 className="font-bold text-3xl mb-5 text-center text-gray-500">Star Wars episodes</h3>
      <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex flex-wrap gap-3 justify-center">
        { films ? films.results.sort((a, b) => (a.episode_id < b.episode_id) ? -1 : ((a.episode_id > b.episode_id) ? 1 : 0)).map((film, index) => <Film key={ index } content={ film } />) : (
          <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) }
      </div>
    </div>
  );
}

export default App;