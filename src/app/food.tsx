import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

export default function FoodScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerSmall}>Nutrition Dashboard</Text>
            <Text style={styles.heading}>Food Tracker 🍽️</Text>
          </View>

          <TouchableOpacity style={styles.calendarBtn}>
            <Ionicons name="calendar-outline" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Hero Card */}
        <LinearGradient
          colors={["#0F172A", "#111827", "#1E1B4B"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroCard}
        >
          <View style={styles.heroGlow1} />
          <View style={styles.heroGlow2} />

          <Text style={styles.cardTitle}>Today's Calories</Text>
          <Text style={styles.calorieValue}>1850 / 2500</Text>
          <Text style={styles.remaining}>650 kcal remaining</Text>

          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>

          <View style={styles.heroBottomRow}>
            <MacroMini
              label="Protein"
              value="120g"
              color="#22C55E"
              icon="barbell-outline"
            />
            <MacroMini
              label="Carbs"
              value="220g"
              color="#3B82F6"
              icon="flash-outline"
            />
            <MacroMini
              label="Fat"
              value="60g"
              color="#F59E0B"
              icon="water-outline"
            />
          </View>
        </LinearGradient>

        {/* Macro Cards */}
        <View style={styles.macroGrid}>
          <MacroCard
            title="Protein"
            value="120g"
            sub="140g target"
            icon="barbell-outline"
            color="#22C55E"
          />
          <MacroCard
            title="Carbs"
            value="220g"
            sub="300g target"
            icon="flash-outline"
            color="#3B82F6"
          />
          <MacroCard
            title="Fat"
            value="60g"
            sub="70g target"
            icon="water-outline"
            color="#F59E0B"
          />
          <MacroCard
            title="Water"
            value="2.4L"
            sub="3L target"
            icon="water"
            color="#06B6D4"
          />
        </View>

        {/* Meals Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Meals</Text>
          <TouchableOpacity>
            <Text style={styles.sectionLink}>View All</Text>
          </TouchableOpacity>
        </View>

        <MealCard
          icon="sunny-outline"
          iconBg="#22C55E22"
          iconColor="#22C55E"
          title="Breakfast"
          subtitle="Oats + Milk + Banana"
          kcal="420 kcal"
          time="8:30 AM"
        />

        <MealCard
          icon="restaurant-outline"
          iconBg="#F59E0B22"
          iconColor="#F59E0B"
          title="Lunch"
          subtitle="4 Roti + Sabzi + Curd"
          kcal="650 kcal"
          time="1:30 PM"
        />

        <MealCard
          icon="nutrition-outline"
          iconBg="#A855F722"
          iconColor="#A855F7"
          title="Protein Shake"
          subtitle="Whey + Milk"
          kcal="180 kcal"
          time="4:30 PM"
        />

        <MealCard
          icon="moon-outline"
          iconBg="#3B82F622"
          iconColor="#3B82F6"
          title="Dinner"
          subtitle="Rice + Dal + Paneer"
          kcal="600 kcal"
          time="8:30 PM"
        />

        {/* AI Diet Plan Card */}
        <LinearGradient
          colors={["#111827", "#1E1B4B", "#312E81"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.aiCard}
        >
          <View style={styles.aiTopRow}>
            <View style={styles.aiIconWrap}>
              <Ionicons name="sparkles" size={20} color="#C084FC" />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.aiTitle}>Personalized AI Diet Plan</Text>
              <Text style={styles.aiSubtitle}>
                Generate a custom diet plan based on your calories, protein goal,
                workout split and bodyweight.
              </Text>
            </View>
          </View>

          <View style={styles.aiTagsRow}>
            <View style={styles.aiTag}>
              <Text style={styles.aiTagText}>2500 kcal</Text>
            </View>

            <View style={styles.aiTag}>
              <Text style={styles.aiTagText}>140g protein</Text>
            </View>

            <View style={styles.aiTag}>
              <Text style={styles.aiTagText}>Muscle Gain</Text>
            </View>
          </View>

          <TouchableOpacity activeOpacity={0.9} style={{ marginTop: 16 }}>
            <LinearGradient
              colors={["#4F46E5", "#A855F7"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.aiButton}
            >
              <Ionicons name="sparkles-outline" size={18} color="#FFFFFF" />
              <Text style={styles.aiButtonText}>Generate AI Diet Plan</Text>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>

        {/* Add Meal Button */}
        <TouchableOpacity activeOpacity={0.9} style={styles.addMealWrap}>
          <LinearGradient
            colors={["#4F46E5", "#A855F7"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Ionicons name="add" size={22} color="#fff" />
            <Text style={styles.buttonText}>Add Meal</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

/* ---------- Reusable Meal Card ---------- */
function MealCard({
  icon,
  iconBg,
  iconColor,
  title,
  subtitle,
  kcal,
  time,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle: string;
  kcal: string;
  time: string;
}) {
  return (
    <View style={styles.mealCard}>
      <View style={styles.mealLeft}>
        <View style={[styles.mealIconWrap, { backgroundColor: iconBg }]}>
          <Ionicons name={icon} size={20} color={iconColor} />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.mealTitle}>{title}</Text>
          <Text style={styles.mealFood}>{subtitle}</Text>
        </View>
      </View>

      <View style={styles.mealRight}>
        <Text style={styles.mealCalories}>{kcal}</Text>
        <Text style={styles.mealTime}>{time}</Text>
      </View>
    </View>
  );
}

/* ---------- Reusable Macro Card ---------- */
function MacroCard({
  title,
  value,
  sub,
  icon,
  color,
}: {
  title: string;
  value: string;
  sub: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
}) {
  return (
    <View style={styles.macroCard}>
      <View style={[styles.macroIconWrap, { backgroundColor: `${color}22` }]}>
        <Ionicons name={icon} size={18} color={color} />
      </View>

      <Text style={styles.macroTitle}>{title}</Text>
      <Text style={styles.macroValue}>{value}</Text>
      <Text style={styles.macroSub}>{sub}</Text>
    </View>
  );
}

/* ---------- Small macro in hero card ---------- */
function MacroMini({
  label,
  value,
  color,
  icon,
}: {
  label: string;
  value: string;
  color: string;
  icon: keyof typeof Ionicons.glyphMap;
}) {
  return (
    <View style={styles.heroMacroItem}>
      <View style={[styles.heroMacroIcon, { backgroundColor: `${color}22` }]}>
        <Ionicons name={icon} size={14} color={color} />
      </View>

      <View>
        <Text style={styles.heroMacroLabel}>{label}</Text>
        <Text style={styles.heroMacroValue}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#030712",
  },

  container: {
    flex: 1,
    backgroundColor: "#030712",
    paddingHorizontal: 18,
  },

  /* Header */
  header: {
    marginTop: 18,
    marginBottom: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerSmall: {
    color: "#94A3B8",
    fontSize: 15,
    marginBottom: 4,
  },

  heading: {
    fontSize: 30,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  calendarBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#0B1220",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    justifyContent: "center",
    alignItems: "center",
  },

  /* Hero */
  heroCard: {
    borderRadius: 28,
    padding: 22,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    marginBottom: 18,
  },

  heroGlow1: {
    position: "absolute",
    top: -25,
    right: -20,
    width: 150,
    height: 150,
    borderRadius: 999,
    backgroundColor: "rgba(168,85,247,0.18)",
  },

  heroGlow2: {
    position: "absolute",
    bottom: -25,
    left: -15,
    width: 130,
    height: 130,
    borderRadius: 999,
    backgroundColor: "rgba(59,130,246,0.15)",
  },

  cardTitle: {
    color: "#94A3B8",
    fontSize: 14,
  },

  calorieValue: {
    color: "#FFFFFF",
    fontSize: 36,
    fontWeight: "800",
    marginTop: 10,
  },

  remaining: {
    color: "#CBD5E1",
    marginTop: 6,
  },

  progressTrack: {
    height: 10,
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 999,
    marginTop: 18,
    overflow: "hidden",
  },

  progressFill: {
    width: "74%",
    height: "100%",
    borderRadius: 999,
    backgroundColor: "#7C3AED",
  },

  heroBottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
    gap: 10,
  },

  heroMacroItem: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderRadius: 16,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  heroMacroIcon: {
    width: 32,
    height: 32,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  heroMacroLabel: {
    color: "#94A3B8",
    fontSize: 11,
  },

  heroMacroValue: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 2,
  },

  /* Macro grid */
  macroGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  macroCard: {
    width: "48%",
    backgroundColor: "#08101D",
    borderRadius: 22,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },

  macroIconWrap: {
    width: 38,
    height: 38,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  macroTitle: {
    color: "#94A3B8",
    fontSize: 13,
  },

  macroValue: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "800",
    marginTop: 6,
  },

  macroSub: {
    color: "#64748B",
    fontSize: 12,
    marginTop: 4,
  },

  /* Section header */
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
    marginTop: 2,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
  },

  sectionLink: {
    color: "#A855F7",
    fontWeight: "600",
  },

  /* Meal card */
  mealCard: {
    backgroundColor: "#08101D",
    padding: 18,
    borderRadius: 22,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },

  mealLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 12,
  },

  mealIconWrap: {
    width: 46,
    height: 46,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  mealTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  mealFood: {
    color: "#94A3B8",
    fontSize: 13,
    marginTop: 4,
  },

  mealRight: {
    alignItems: "flex-end",
  },

  mealCalories: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  mealTime: {
    color: "#94A3B8",
    fontSize: 12,
    marginTop: 4,
  },

  /* AI Card */
  aiCard: {
    marginTop: 10,
    borderRadius: 26,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    overflow: "hidden",
    marginBottom: 18,
  },

  aiTopRow: {
    flexDirection: "row",
    gap: 14,
  },

  aiIconWrap: {
    width: 46,
    height: 46,
    borderRadius: 16,
    backgroundColor: "rgba(168,85,247,0.18)",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
  },

  aiTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 8,
  },

  aiSubtitle: {
    color: "#CBD5E1",
    fontSize: 13,
    lineHeight: 20,
  },

  aiTagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 16,
  },

  aiTag: {
    backgroundColor: "rgba(255,255,255,0.08)",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
  },

  aiTagText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },

  aiButton: {
    height: 54,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  aiButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  /* Add meal button */
  addMealWrap: {
    borderRadius: 18,
    overflow: "hidden",
  },

  button: {
    height: 58,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },
});