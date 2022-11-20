import React from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import { Layout, Text } from '@ui-kitten/components';
import Games from "../football_games.json";

const Football = () =>  {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center' }}>
      <ScrollView>
        { Games.map((game, index) => {
          return (
            <View key={ index } style={ styles.card }>
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 11, color: "#ccc", fontWeight: "bold" }}>{ new Date(game.date).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }) }</Text>
              </View>
              <View style={ styles.content }>
                <View>
                  <Image style={ styles.team_logo } source={{ uri: game.team1.logo }} />
                </View>
                <View style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>
                  <Text style={{ fontSize: 13, fontWeight: "bold" }}>{ game.team1.name } vs. { game.team2.name }</Text>
                  <Text><Text style={ game.team1.score > game.team2.score ? { color: "orange", fontSize: 22, fontWeight: "bold" } : { fontSize: 22, fontWeight: "bold" } }>{ game.team1.score }</Text> - <Text style={ game.team2.score > game.team1.score ? { color: "orange", fontSize: 22, fontWeight: "bold" } : { fontSize: 22, fontWeight: "bold" } }>{ game.team2.score }</Text></Text>
                  <Text style={{ fontSize: 11, color: "#ccc" }}>{ game.stadium }</Text>
                </View>
                <View>
                  <Image style={ styles.team_logo } source={{ uri: game.team2.logo }} />
                </View>
              </View>
            </View>
          );
        }) }

      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: "#344063",
    borderRadius: 5,
    margin: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  team_logo: {
    width: 45,
    height: 45
  }
});

export default Football;