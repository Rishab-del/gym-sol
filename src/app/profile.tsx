import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Profile Header */}
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>R</Text>
        </View>

        <Text style={styles.name}>Rishabh Patel</Text>

        <Text style={styles.email}>
          Fitness Enthusiast 💪
        </Text>
      </View>

      {/* Stats Row 1 */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>74</Text>
          <Text style={styles.statLabel}>Weight</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>181</Text>
          <Text style={styles.statLabel}>Height</Text>
        </View>
      </View>

      {/* Stats Row 2 */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>18%</Text>
          <Text style={styles.statLabel}>Body Fat</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>6245</Text>
          <Text style={styles.statLabel}>Steps</Text>
        </View>
      </View>

      {/* Goals */}
      <View style={styles.menuCard}>
        <Text style={styles.sectionTitle}>
          🎯 Goals
        </Text>

        <Text style={styles.menuItem}>
          🎯 Goal: Muscle Gain
        </Text>

        <Text style={styles.menuItem}>
          💧 Water Goal: 3L
        </Text>

        <Text style={styles.menuItem}>
          🔥 Calories Target: 2500
        </Text>

        <Text style={styles.menuItem}>
          🥩 Protein Target: 140g
        </Text>

        <Text style={styles.menuItem}>
          🏆 Current Streak: 12 Days
        </Text>
      </View>

      {/* Progress */}
      <View style={styles.progressCard}>
        <Text style={styles.progressTitle}>
          📈 Progress Summary
        </Text>

        <Text style={styles.progressText}>
          Weight: 70kg → 74kg
        </Text>

        <Text style={styles.progressText}>
          Protein Avg: 125g/day
        </Text>

        <Text style={styles.progressText}>
          Workouts Completed: 48
        </Text>

        <Text style={styles.progressText}>
          Calories Burned: 12,540
        </Text>
      </View>

      {/* Achievement Card */}
      <View style={styles.achievementCard}>
        <Text style={styles.achievementTitle}>
          🏅 Latest Achievement
        </Text>

        <Text style={styles.achievementText}>
          7 Day Workout Streak Completed
        </Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Edit Profile
        </Text>
      </TouchableOpacity>

      <View style={{ height: 80 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030712",
    padding: 20,
  },

  profileCard: {
    backgroundColor: "#111827",
    borderRadius: 28,
    padding: 28,
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#1F2937",
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#3B82F6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  avatarText: {
    fontSize: 40,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  name: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "800",
  },

  email: {
    color: "#94A3B8",
    marginTop: 6,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  statCard: {
    width: "48%",
    backgroundColor: "#111827",
    borderRadius: 22,
    padding: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1F2937",
  },

  statValue: {
    color: "#3B82F6",
    fontSize: 28,
    fontWeight: "800",
  },

  statLabel: {
    color: "#94A3B8",
    marginTop: 6,
  },

  menuCard: {
    backgroundColor: "#111827",
    borderRadius: 24,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#1F2937",
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 15,
  },

  menuItem: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 14,
  },

  progressCard: {
    backgroundColor: "#052E16",
    borderRadius: 24,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#22C55E",
  },

  progressTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
  },

  progressText: {
    color: "#D1FAE5",
    marginBottom: 8,
  },

  achievementCard: {
    backgroundColor: "#172554",
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#3B82F6",
  },

  achievementTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },

  achievementText: {
    color: "#BFDBFE",
  },

  button: {
    backgroundColor: "#3B82F6",
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 18,
  },
});