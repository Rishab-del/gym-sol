import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function WorkoutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={{ marginBottom: 20 }}>
  <Text
    style={{
      color: "#94A3B8",
      fontSize: 14,
    }}
  >
    Training Dashboard
  </Text>

  <Text style={styles.heading}>
    💪 Workout
  </Text>
</View>

      <View style={styles.banner}>
  <Text style={styles.bannerTitle}>
    Today's Workout
  </Text>

  <Text style={styles.bannerText}>
    Push Day 🔥
  </Text>

  <Text style={styles.bannerSub}>
    Chest • Shoulders • Triceps
  </Text>
</View>

      <View style={styles.card}>
  <View>
    <Text style={styles.cardTitle}>
      🏋️ Bench Press
    </Text>

    <Text style={styles.cardSub}>
      4 Sets × 8 Reps
    </Text>
  </View>

  <Text style={styles.weight}>
    80kg
  </Text>
</View>

      <View style={styles.card}>
  <View>
    <Text style={styles.cardTitle}>
      💪 Incline Dumbbell Press
    </Text>

    <Text style={styles.cardSub}>
      3 Sets × 10 Reps
    </Text>
  </View>

  <Text style={styles.weight}>
    30kg
  </Text>
</View>

<View style={styles.card}>
  <View>
    <Text style={styles.cardTitle}>
      🔥 Cable Fly
    </Text>

    <Text style={styles.cardSub}>
      3 Sets × 12 Reps
    </Text>
  </View>

  <Text style={styles.weight}>
    25kg
  </Text>
</View>

<View style={styles.card}>
  <View>
    <Text style={styles.cardTitle}>
      🚀 Tricep Pushdown
    </Text>

    <Text style={styles.cardSub}>
      4 Sets × 12 Reps
    </Text>
  </View>

  <Text style={styles.weight}>
    40kg
  </Text>
</View>

<View style={styles.card}>
  <View>
    <Text style={styles.cardTitle}>
      🔩 Overhead Tricep Extension
    </Text>

    <Text style={styles.cardSub}>
      3 Sets × 12 Reps
    </Text>
  </View>

  <Text style={styles.weight}>
    30kg
  </Text>
</View>

<View style={styles.card}>
  <View>
    <Text style={styles.cardTitle}>
      ⚡ Lateral Raises
    </Text>

    <Text style={styles.cardSub}>
      4 Sets × 15 Reps
    </Text>
  </View>

  <Text style={styles.weight}>
    12kg
  </Text>
</View>

<View style={styles.card}>
  <View>
    <Text style={styles.cardTitle}>
      🎯 Machine Chest Press
    </Text>

    <Text style={styles.cardSub}>
      3 Sets × 10 Reps
    </Text>
  </View>

  <Text style={styles.weight}>
    70kg
  </Text>
</View>

<View style={styles.card}>
  <View>
    <Text style={styles.cardTitle}>
      💥 Pec Deck Fly
    </Text>

    <Text style={styles.cardSub}>
      3 Sets × 15 Reps
    </Text>
  </View>

  <Text style={styles.weight}>
    55kg
  </Text>
</View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start Workout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030712",
    padding: 20,
  },

  heading: {
    fontSize: 32,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  banner: {
    backgroundColor: "#111827",
    borderRadius: 28,
    padding: 24,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#1F2937",
  },

  bannerTitle: {
    color: "#94A3B8",
    fontSize: 14,
  },

  bannerText: {
    color: "#3B82F6",
    fontSize: 34,
    fontWeight: "800",
    marginTop: 8,
  },

  bannerSub: {
    color: "#CBD5E1",
    marginTop: 8,
  },

  card: {
    backgroundColor: "#111827",
    padding: 20,
    borderRadius: 22,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#1F2937",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  cardSub: {
    color: "#94A3B8",
    marginTop: 5,
  },

  weight: {
    color: "#3B82F6",
    fontSize: 18,
    fontWeight: "700",
  },

  button: {
    backgroundColor: "#3B82F6",
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 40,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
});