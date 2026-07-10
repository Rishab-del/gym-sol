import React, { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";
import api from "../services/api";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../styles/profile.styles";

type StatCardProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  value: string;
  sub: string;
  color: string;
};

export default function ProfileScreen() {
  const [profile, setProfile] = useState<any>(null);
  const loadProfile = async () => {
  try {
    const res = await api.get("/profile/1");
    setProfile(res.data);
  } catch (err) {
    console.log(err);
  }
};
useFocusEffect(
  useCallback(() => {
    loadProfile();
  }, [])
);
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
            <Text style={styles.smallText}>My Fitness Profile</Text>
            <Text style={styles.heading}>Profile</Text>
          </View>

          <TouchableOpacity style={styles.settingsBtn}>
            <Ionicons name="settings-outline" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Profile Hero Card */}
        <LinearGradient
          colors={["#0F172A", "#111827", "#1E1B4B"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.profileHero}
        >
          <View style={styles.profileTop}>
            <LinearGradient
              colors={["#7C3AED", "#2563EB"]}
              style={styles.avatarBorder}
            >
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>R</Text>
              </View>
            </LinearGradient>

            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{profile?.name ?? "Rishabh"}</Text>
              <Text style={styles.subName}>
  {profile?.fitnessLevel ?? "Fitness Enthusiast 💪"}
</Text>
              <View style={styles.badgeRow}>
                <View style={styles.badge}>
                  <Ionicons name="flame" size={14} color="#F97316" />
                  <Text style={styles.badgeText}>
  {profile?.streak ?? 0} Day Streak
</Text>
                </View>

                <View style={styles.badge}>
                  <Ionicons name="barbell" size={14} color="#A855F7" />
                  <Text style={styles.badgeText}>
  {profile?.totalWorkouts ?? 0} Workouts
</Text>
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>

        {/* Stats Grid */}
        <View style={styles.statsRow}>
          <StatCard
            icon="scale-outline"
            title="Weight"
            value={String(profile?.weight ?? 0)}
            sub="kg"
            color="#3B82F6"
          />
          <StatCard
            icon="resize-outline"
            title="Height"
            value={String(profile?.height ?? 0)}
            sub="cm"
            color="#8B5CF6"
          />
        </View>

        <View style={styles.statsRow}>
          <StatCard
            icon="body-outline"
            title="Body Fat"
            value={String(profile?.bodyFat ?? 0)}
            sub="%"
            color="#F97316"
          />
          <StatCard
            icon="walk-outline"
            title="Steps"
            value={String(profile?.steps ?? 0)}
            sub="today"
            color="#22C55E"
          />
        </View>

        {/* Goals Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Goals</Text>
            <Ionicons name="flag-outline" size={18} color="#A855F7" />
          </View>

          <GoalRow
  label="Goal"
  value={profile?.goal ?? ""}
/>
          <GoalRow
  label="Calories Target"
  value={`${profile?.calorieGoal ?? 0} kcal`}
/>
          <GoalRow
  label="Protein Target"
  value={`${profile?.proteinGoal ?? 0} g`}
/>
         <GoalRow
  label="Water Goal"
  value={`${profile?.waterGoal ?? 0} L`}
/>
        </View>

        {/* Progress Summary */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Progress Summary</Text>
            <Ionicons name="trending-up-outline" size={18} color="#3B82F6" />
          </View>

          <View style={styles.progressRow}>
            <Text style={styles.progressLabel}>Weight Progress</Text>
            <Text style={styles.progressValue}>
  {profile?.startingWeight ?? 0}kg → {profile?.weight ?? 0}kg
</Text>
          </View>

          <View style={styles.progressBar}>
            <LinearGradient
              colors={["#7C3AED", "#3B82F6"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[styles.progressFill, { width: "74%" }]}
            />
          </View>

          <View style={styles.progressRow}>
            <Text style={styles.progressLabel}>Protein Avg</Text>
            <Text style={styles.progressValue}>125g/day</Text>
          </View>

          <View style={styles.progressBar}>
            <LinearGradient
              colors={["#22C55E", "#14B8A6"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[styles.progressFill, { width: "82%" }]}
            />
          </View>

          <View style={styles.progressRow}>
            <Text style={styles.progressLabel}>Workout Consistency</Text>
            <Text style={styles.progressValue}>85%</Text>
          </View>

          <View style={styles.progressBar}>
            <LinearGradient
              colors={["#F97316", "#F59E0B"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[styles.progressFill, { width: "85%" }]}
            />
          </View>
        </View>

        {/* Achievement Card */}
        <LinearGradient
          colors={["#1E1B4B", "#111827"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.achievementCard}
        >
          <View style={styles.achievementIcon}>
            <Ionicons name="trophy" size={26} color="#FACC15" />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.achievementTitle}>Latest Achievement</Text>
            <Text style={styles.achievementText}>
              {profile?.latestAchievement}
            </Text>
          </View>
        </LinearGradient>

        {/* Edit Button */}
        <TouchableOpacity activeOpacity={0.9} style={styles.editBtn}>
          <LinearGradient
            colors={["#7C3AED", "#3B82F6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.editBtnGradient}
          >
            <Ionicons name="create-outline" size={18} color="#fff" />
            <Text style={styles.editBtnText}>Edit Profile</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function StatCard({ icon, title, value, sub, color }: StatCardProps) {
  return (
    <View style={styles.statCard}>
      <View style={[styles.statIconWrap, { backgroundColor: `${color}22` }]}>
        <Ionicons name={icon} size={20} color={color} />
      </View>

      <Text style={styles.statTitle}>{title}</Text>

      <View style={styles.statValueRow}>
        <Text style={styles.statValue}>{value}</Text>
        <Text style={styles.statSub}>{sub}</Text>
      </View>
    </View>
  );
}

function GoalRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.goalRow}>
      <Text style={styles.goalLabel}>{label}</Text>
      <Text style={styles.goalValue}>{value}</Text>
    </View>
  );
}