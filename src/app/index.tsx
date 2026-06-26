import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Circle } from "react-native-svg";
import {
  styles,
  RING_SIZE,
  STROKE_WIDTH,
  RADIUS,
  CIRCUMFERENCE,
} from "../styles/home.styles";

type StatCardProps = {
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  title: string;
  value: string;
  sub: string;
  accent: string;
};

const calories = 1850;
const goal = 2500;

export default function HomeScreen() {
  const progress = calories / goal;
  const strokeDashoffset = CIRCUMFERENCE * (1 - progress);

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={{ flex: 1 }}>
            <Text style={styles.greeting}>Good Morning,</Text>
            <Text style={styles.name}>Rishabh! 👋</Text>
            <Text style={styles.subtitle}>
              Let&apos;s crush your goals today
            </Text>
          </View>

          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons
                name="notifications-outline"
                size={22}
                color="#FFFFFF"
              />
              <View style={styles.notificationDot} />
            </TouchableOpacity>

            <View style={styles.avatarWrapper}>
              <LinearGradient
                colors={["#7C3AED", "#2563EB"]}
                style={styles.avatarBorder}
              >
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>R</Text>
                </View>
              </LinearGradient>
            </View>
          </View>
        </View>

        {/* Calories Main Card */}
        <View style={styles.heroCard}>
          <View style={styles.heroLeft}>
            <View style={styles.ringWrapper}>
              <Svg width={RING_SIZE} height={RING_SIZE}>
                {/* Background ring */}
                <Circle
                  stroke="rgba(255,255,255,0.08)"
                  fill="none"
                  cx={RING_SIZE / 2}
                  cy={RING_SIZE / 2}
                  r={RADIUS}
                  strokeWidth={STROKE_WIDTH}
                />

                {/* Progress ring */}
                <Circle
                  stroke="#7C3AED"
                  fill="none"
                  cx={RING_SIZE / 2}
                  cy={RING_SIZE / 2}
                  r={RADIUS}
                  strokeWidth={STROKE_WIDTH}
                  strokeLinecap="round"
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset={strokeDashoffset}
                  transform={`rotate(-90 ${RING_SIZE / 2} ${RING_SIZE / 2})`}
                />
              </Svg>

              <View style={styles.ringCenter}>
                <Ionicons name="flame" size={18} color="#F97316" />
                <Text style={styles.calorieNumber}>
                  {calories.toLocaleString()}
                </Text>
                <Text style={styles.calorieSub}>
                  / {goal.toLocaleString()} kcal
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.heroRight}>
            <Text style={styles.heroTitle}>Calories</Text>

            <View style={styles.macroBlock}>
              <View style={styles.macroRow}>
                <Text style={styles.macroLabel}>Protein</Text>
                <Text style={styles.macroValue}>120g / 140g</Text>
              </View>
              <View style={styles.progressTrack}>
                <View
                  style={[
                    styles.progressFill,
                    { width: "86%", backgroundColor: "#A855F7" },
                  ]}
                />
              </View>
            </View>

            <View style={styles.macroBlock}>
              <View style={styles.macroRow}>
                <Text style={styles.macroLabel}>Carbs</Text>
                <Text style={styles.macroValue}>220g / 300g</Text>
              </View>
              <View style={styles.progressTrack}>
                <View
                  style={[
                    styles.progressFill,
                    { width: "73%", backgroundColor: "#3B82F6" },
                  ]}
                />
              </View>
            </View>

            <View style={styles.macroBlock}>
              <View style={styles.macroRow}>
                <Text style={styles.macroLabel}>Fat</Text>
                <Text style={styles.macroValue}>60g / 70g</Text>
              </View>
              <View style={styles.progressTrack}>
                <View
                  style={[
                    styles.progressFill,
                    { width: "86%", backgroundColor: "#F59E0B" },
                  ]}
                />
              </View>
            </View>
          </View>
        </View>

        {/* Quick Stats Row 1 */}
        <View style={styles.statsRow}>
          <StatCard
            icon="water-outline"
            iconColor="#38BDF8"
            title="Water"
            value="2.4L"
            sub="/ 3.5L"
            accent="#2563EB"
          />
          <StatCard
            icon="barbell-outline"
            iconColor="#22C55E"
            title="Weight"
            value="74.5 kg"
            sub="+0.4 kg"
            accent="#22C55E"
          />
        </View>

        {/* Quick Stats Row 2 */}
        <View style={styles.statsRow}>
          <StatCard
            icon="fitness-outline"
            iconColor="#A855F7"
            title="Workouts"
            value="12"
            sub="This week"
            accent="#A855F7"
          />
          <StatCard
            icon="flame-outline"
            iconColor="#F97316"
            title="Streak"
            value="12"
            sub="Days"
            accent="#F97316"
          />
        </View>

        {/* Workout Card */}
        <LinearGradient
          colors={["#0F172A", "#111827", "#1E1B4B"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.workoutCard}
        >
          <View style={styles.workoutTop}>
            <View>
              <Text style={styles.workoutSmall}>Today&apos;s Workout</Text>
              <Text style={styles.workoutTitle}>Push Day</Text>
              <Text style={styles.workoutMeta}>6 Exercises • 45 min</Text>
            </View>

            <TouchableOpacity style={styles.arrowBtn}>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#D1D5DB"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.workoutBottom}>
            <TouchableOpacity activeOpacity={0.85} style={styles.startBtn}>
              <LinearGradient
                colors={["#7C3AED", "#3B82F6"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.startBtnGradient}
              >
                <Text style={styles.startBtnText}>Start Workout</Text>
              </LinearGradient>
            </TouchableOpacity>

            <View style={styles.workoutImageMock}>
              <Ionicons name="barbell" size={42} color="#A855F7" />
            </View>
          </View>
        </LinearGradient>

        {/* Progress Overview */}
        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>Progress Overview</Text>

            <View style={styles.weekBadge}>
              <Text style={styles.weekBadgeText}>This Week</Text>
              <Ionicons name="chevron-down" size={14} color="#CBD5E1" />
            </View>
          </View>

          <View style={styles.chartArea}>
            {/* guide lines */}
            <View style={[styles.chartLine, { top: 18 }]} />
            <View style={[styles.chartLine, { top: 58 }]} />
            <View style={[styles.chartLine, { top: 98 }]} />

            {/* labels */}
            <View style={styles.chartLabels}>
              <Text style={styles.chartLabel}>78</Text>
              <Text style={styles.chartLabel}>74</Text>
              <Text style={styles.chartLabel}>70</Text>
              <Text style={styles.chartLabel}>66</Text>
            </View>

            {/* fake chart */}
            <View style={styles.chartPlotArea}>
              <View style={styles.chartPolyline}>
                <View style={[styles.dot, { left: 4, top: 78 }]} />
                <View style={[styles.dot, { left: 42, top: 74 }]} />
                <View style={[styles.dot, { left: 80, top: 76 }]} />
                <View style={[styles.dot, { left: 118, top: 68 }]} />
                <View style={[styles.dot, { left: 156, top: 72 }]} />
                <View style={[styles.dot, { left: 194, top: 50 }]} />
                <View style={[styles.dot, { left: 232, top: 58 }]} />
                <View style={[styles.dot, { left: 270, top: 46 }]} />

                <View
                  style={[
                    styles.segment,
                    {
                      left: 8,
                      top: 83,
                      width: 40,
                      transform: [{ rotate: "-6deg" }],
                    },
                  ]}
                />
                <View
                  style={[
                    styles.segment,
                    {
                      left: 46,
                      top: 79,
                      width: 40,
                      transform: [{ rotate: "4deg" }],
                    },
                  ]}
                />
                <View
                  style={[
                    styles.segment,
                    {
                      left: 84,
                      top: 74,
                      width: 40,
                      transform: [{ rotate: "-12deg" }],
                    },
                  ]}
                />
                <View
                  style={[
                    styles.segment,
                    {
                      left: 122,
                      top: 71,
                      width: 40,
                      transform: [{ rotate: "8deg" }],
                    },
                  ]}
                />
                <View
                  style={[
                    styles.segment,
                    {
                      left: 160,
                      top: 67,
                      width: 40,
                      transform: [{ rotate: "-22deg" }],
                    },
                  ]}
                />
                <View
                  style={[
                    styles.segment,
                    {
                      left: 198,
                      top: 55,
                      width: 40,
                      transform: [{ rotate: "10deg" }],
                    },
                  ]}
                />
                <View
                  style={[
                    styles.segment,
                    {
                      left: 236,
                      top: 54,
                      width: 38,
                      transform: [{ rotate: "-12deg" }],
                    },
                  ]}
                />
              </View>

              <View style={styles.weightTag}>
                <Text style={styles.weightTagText}>74.5 kg</Text>
              </View>
            </View>
          </View>

          <View style={styles.daysRow}>
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <Text key={day} style={styles.dayText}>
                {day}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Floating Add Button */}
      <TouchableOpacity activeOpacity={0.9} style={styles.fab}>
        <LinearGradient
          colors={["#7C3AED", "#3B82F6"]}
          style={styles.fabGradient}
        >
          <Ionicons name="add" size={28} color="#FFFFFF" />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

function StatCard({
  icon,
  iconColor,
  title,
  value,
  sub,
  accent,
}: StatCardProps) {
  return (
    <View style={styles.statCard}>
      <View style={[styles.statIconWrap, { backgroundColor: `${accent}22` }]}>
        <Ionicons name={icon} size={20} color={iconColor} />
      </View>

      <Text style={styles.statTitle}>{title}</Text>
      <Text style={styles.statValue}>{value}</Text>
      <Text
        style={[
          styles.statSub,
          { color: accent === "#22C55E" ? "#22C55E" : "#94A3B8" },
        ]}
      >
        {sub}
      </Text>
    </View>
  );
}