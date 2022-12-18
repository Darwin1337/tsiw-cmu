import { StyleSheet, Text, View, Image } from "react-native";
import Teste from "../test.json";
import f_games from "../football_games.json";
import b_games from "../basketball_games.json";

export default Details = ({ route, navigation }) => {
  const { type, id } = route.params;
  const data = type === "football" ? {...f_games[id]} : {...b_games[id]};
  console.log(data.team1.lineup);

  return (
    <View style={ styles.container }>
      <Text style={{ fontSize: 14, color: "white", fontWeight: "bold", marginBottom: 5 }}>{ data.league } - Round { data.round }</Text>
      <Text style={{ fontSize: 12, textAlign: "center", color: "white", fontWeight: "bold", marginBottom: 5 }}>{ data.year }</Text>
      <View style={ styles.card }>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 11, color: "#ccc", fontWeight: "bold" }}>{ new Date(data.date).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }) }</Text>
        </View>
        <View style={ styles.content }>
          <View>
            <Image style={ styles.team_logo } source={{ uri: data.team1.logo }} />
          </View>
          <View style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>
            <Text style={{ fontSize: 13, fontWeight: "bold", color: "white" }}>{ data.team1.name } vs. { data.team2.name }</Text>
            <Text style={{ color: "white" }}><Text style={ data.team1.score > data.team2.score ? { color: "orange", fontSize: 22, fontWeight: "bold" } : { color: "white", fontSize: 22, fontWeight: "bold" } }>{ data.team1.score }</Text> - <Text style={ data.team2.score > data.team1.score ? { color: "orange", fontSize: 22, fontWeight: "bold" } : { color: "white", fontSize: 22, fontWeight: "bold" } }>{ data.team2.score }</Text></Text>
            <Text style={{ fontSize: 11, color: "#ccc" }}>{ data.stadium }</Text>
          </View>
          <View>
            <Image style={ styles.team_logo } source={{ uri: data.team2.logo }} />
          </View>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontWeight: "bold", color: "white" }}>Referee: <Text style={{ fontWeight: "normal" }}>{ data.referee.name } ({ data.referee.nationality })</Text></Text>
        </View>
        <View>
          <Text style={{ fontSize: 14, color: "white", fontWeight: "bold", marginBottom: 5 }}>Lineups</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View >
              { data.team1.lineup.map(player => {
                return (
                  <View key={player.number} style={{ flexDirection: "row", marginLeft: -4, marginTop: -4, padding: 2 }}>
                    <View style={{ marginLeft: 4, marginTop: 4, justifyContent: "center", alignItems: "center", backgroundColor: "#ccc", width: 20, height: 20, borderRadius: 20/2 }}>
                      <Text style={{ fontWeight: "bold" }}>{player.number}</Text>
                    </View>
                    <View style={{ marginLeft: 4, marginTop: 4 }}>
                      <Text style={{ color: "white" }}>{player.name}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
            <View>
              { data.team2.lineup.map(player => {
                return (
                  <View key={player.number} style={{ flexDirection: "row", justifyContent:"flex-end", marginLeft: -4, marginTop: -4, padding: 2 }}>
                    <View style={{ marginLeft: 4, marginTop: 4 }}>
                      <Text style={{ color: "white" }}>{player.name}</Text>
                    </View>
                    <View style={{ marginLeft: 4, marginTop: 4, justifyContent: "center", alignItems: "center", backgroundColor: "#ccc", width: 20, height: 20, borderRadius: 20/2 }}>
                      <Text style={{ fontWeight: "bold" }}>{player.number}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#222B45"
  },
  team_logo: {
    width: 45,
    height: 45
  },
  card: {
    padding: 15,
    backgroundColor: "#344063",
    borderRadius: 5,
    margin: 1,
    flex: 1,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});