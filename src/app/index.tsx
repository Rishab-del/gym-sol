import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";


import { AnimatedCircularProgress } from "react-native-circular-progress";
import { GlassView } from "expo-glass-effect";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.date}>Tuesday, Jun 24</Text>
            <Text style={styles.name}>Hey Rishabh 👋</Text>
          </View>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>R</Text>
          </View>
        </View>

        {/* Main Card */}
        <GlassView style={styles.heroCard}>
  <AnimatedCircularProgress
    size={180}
    width={14}
    fill={74}
    tintColor="#3B82F6"
    backgroundColor="#1E293B"
    rotation={0}
  >
    {() => (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.heroNumber}>1850</Text>
        <Text style={styles.heroSub}>/2500 kcal</Text>
      </View>
    )}
  </AnimatedCircularProgress>

  <Text
    style={{
      color: "#94A3B8",
      marginTop: 15,
      textAlign: "center",
    }}
  >
    650 kcal remaining
  </Text>
</GlassView>

        {/* Stats */}
        <View style={styles.grid}>
          <GlassView style={styles.card}>
            <Text style={styles.emoji}>🚶</Text>
            <Text style={styles.value}>6245</Text>
            <Text style={styles.label}>Steps</Text>
          </GlassView>

          <GlassView style={styles.card}>
            <Text style={styles.emoji}>💧</Text>
            <Text style={styles.value}>2.1L</Text>
            <Text style={styles.label}>Water</Text>
          </GlassView>

          <GlassView style={styles.card}>
            <Text style={styles.emoji}>🥩</Text>
            <Text style={styles.value}>92g</Text>
            <Text style={styles.label}>Protein</Text>
          </GlassView>

          <GlassView style={styles.card}>
            <Text style={styles.emoji}>⚖️</Text>
            <Text style={styles.value}>74kg</Text>
            <Text style={styles.label}>Weight</Text>
          </GlassView>
        </View>

        {/* Workout */}
        <GlassView style={styles.workoutCard}>
          <Text style={styles.workoutTitle}>
            🔥 Today's Workout
          </Text>

          <Text style={styles.workoutName}>
            Push Day
          </Text>

          <Text style={styles.workoutSub}>
            Chest • Shoulders • Triceps
          </Text>
        </GlassView>

        {/* Goal */}
        <GlassView style={styles.goalCard}>
          <Text style={styles.goalTitle}>
            🎯 Daily Goal
          </Text>

          <Text style={styles.goalText}>
            2500 Calories • 140g Protein
          </Text>
        </GlassView>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Floating Button */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030712",
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 20,
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  date: {
    color: "#94A3B8",
    fontSize: 14,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "800",
    marginTop: 4,
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#3B82F6",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
  },

  heroCard: {
    backgroundColor: "#111827",
    borderRadius: 30,
    padding: 25,
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: "#464a4f",
  },

  heroLabel: {
    color: "#94A3B8",
    fontSize: 15,
  },

  heroNumber: {
    color: "#3B82F6",
    fontSize: 52,
    fontWeight: "800",
    marginTop: 8,
  },

  heroSub: {
    color: "#CBD5E1",
    marginTop: 8,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#111827",
    borderRadius: 24,
    paddingVertical: 22,
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#1F2937",
  },

  emoji: {
    fontSize: 28,
  },

  value: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "800",
    marginTop: 8,
  },

  label: {
    color: "#94A3B8",
    marginTop: 5,
  },

  workoutCard: {
    backgroundColor: "#111827",
    borderRadius: 24,
    padding: 22,
    marginTop: 10,
    borderLeftWidth: 5,
    borderLeftColor: "#3B82F6",
  },

  workoutTitle: {
    color: "#94A3B8",
    fontSize: 14,
  },

  workoutName: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 8,
  },

  workoutSub: {
    color: "#94A3B8",
    marginTop: 6,
  },

  goalCard: {
    backgroundColor: "#052E16",
    borderRadius: 24,
    padding: 22,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#22C55E",
  },

  goalTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  goalText: {
    color: "#D1FAE5",
    marginTop: 6,
  },

  fab: {
  position: "absolute",
  right: 25,
  bottom: 90,
  width: 65,
  height: 65,
  borderRadius: 35,
  backgroundColor: "#3B82F6",
  justifyContent: "center",
  alignItems: "center",

  shadowColor: "#3B82F6",
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 0.8,
  shadowRadius: 20,

  elevation: 15,
},

  fabText: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "bold",
  },
});