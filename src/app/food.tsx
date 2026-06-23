import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";



export default function FoodScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={{ marginBottom: 20 }}>
  <Text
    style={{
      color: "#94A3B8",
      fontSize: 20,
    }}
  >
    Nutrition Dashboard
  </Text>

  <Text style={styles.heading}>
    Food Tracker 🍽️
  </Text>
</View>

      <View style={styles.calorieCard}>
        <Text style={styles.cardTitle}>Today's Calories</Text>
        <Text style={styles.calorieValue}>1850 / 2500</Text>
        <Text style={styles.remaining}>650 kcal remaining</Text>
      </View>

      <View style={styles.mealCard}>
        <Text style={styles.mealTitle}>🥣 Breakfast</Text>
        <Text style={styles.mealFood}>
  Oats + Milk + Banana
</Text>
        <Text style={styles.calories}>420 kcal</Text>
      </View>

      <View style={styles.mealCard}>
        <Text style={styles.mealTitle}>🍛 Lunch</Text>
        <Text style={styles.mealFood}>
  4 Roti + Sabzi
</Text>
        <Text style={styles.calories}>650 kcal</Text>
      </View>

      <View style={styles.mealCard}>
        <Text style={styles.mealTitle}>🥤 Protein</Text>
        <Text style={styles.mealFood}>
  Protein Shake
</Text>
        <Text style={styles.calories}>180 kcal</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+ Add Meal</Text>
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
    marginBottom: 20,
  },

  calorieCard: {
    backgroundColor: "#111827",
    borderRadius: 28,
    padding: 24,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#1F2937",
  },

  cardTitle: {
    color: "#94A3B8",
    fontSize: 15,
  },

  calorieValue: {
    color: "#3B82F6",
    fontSize: 42,
    fontWeight: "800",
    marginVertical: 10,
  },

  remaining: {
    color: "#CBD5E1",
  },

  mealCard: {
    backgroundColor: "#111827",
    padding: 20,
    borderRadius: 22,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#1F2937",
  },

  mealTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },

  mealFood: {
    color: "#94A3B8",
    fontSize: 15,
  },

  calories: {
    color: "#3B82F6",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 10,
  },

  button: {
    backgroundColor: "#3B82F6",
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 40,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
});