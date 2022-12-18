import { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");
const movies = ["tt0910936", "tt5071412", "tt1650062", "tt1232829"]

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovieInfo = async (imdb_id) => {
    try {
      const response = await fetch("https://www.omdbapi.com/?i=" + imdb_id + "&apikey=62d5dc7e");
      const json = await response.json();
      setMovieList(cur => {
        if (cur.length + 1 === movies.length) {
          setLoading(false);
        }
        return [...cur, json]
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    movies.forEach(movie => {
      getMovieInfo(movie);
    });
  }, []);

  return (
    <>
      { loading ? <Text>Loading...</Text> : (
        <View style={ styles.container }>
          <ScrollView snapToInterval={ width } decelerationRate="fast" horizontal>
            { movieList.map((movie) => (
              <View key={ movie.imdbID } style={ styles.picture }>
                <Image style={ styles.image } source={{ uri: movie.Poster }} />
              </View>
            )) }
          </ScrollView>
        </View>
      ) }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "black",
  },
  picture: {
    width,
    height,
    overflow: "hidden",
  },
  image: {
    ...StyleSheet.absoluteFillObject
  }
});

export default App;