import { StyleSheet } from "react-native";

export const RING_SIZE = 150;
export const STROKE_WIDTH = 14;
export const RADIUS = (RING_SIZE - STROKE_WIDTH) / 2;
export const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#030712",
  },

  container: {
    flex: 1,
    paddingHorizontal: 18,
    backgroundColor: "#030712",
  },

  /* ================= HEADER ================= */
  header: {
    marginTop: 18,
    marginBottom: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  greeting: {
    color: "#A1A1AA",
    fontSize: 17,
    fontWeight: "500",
  },

  name: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "800",
    marginTop: 4,
  },

  subtitle: {
    color: "#9CA3AF",
    fontSize: 14,
    marginTop: 8,
  },

  headerRight: {
    alignItems: "center",
    gap: 12,
  },

  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#0B1220",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: 12,
  },

  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#A855F7",
    position: "absolute",
    top: 10,
    right: 10,
  },

  avatarWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },

  avatarBorder: {
    padding: 2,
    borderRadius: 26,
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 18,
  },

  /* ================= HERO CARD ================= */
  heroCard: {
    backgroundColor: "#08101D",
    borderRadius: 26,
    padding: 18,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    flexDirection: "row",
    marginBottom: 16,
  },

  heroLeft: {
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
  },

  ringWrapper: {
    width: RING_SIZE,
    height: RING_SIZE,
    justifyContent: "center",
    alignItems: "center",
  },

  ringCenter: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },

  calorieNumber: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "800",
    marginTop: 6,
  },

  calorieSub: {
    color: "#CBD5E1",
    fontSize: 14,
    marginTop: 2,
  },

  heroRight: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 18,
  },

  macroBlock: {
    marginBottom: 16,
  },

  macroRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 7,
  },

  macroLabel: {
    color: "#E5E7EB",
    fontSize: 14,
    fontWeight: "500",
  },

  macroValue: {
    color: "#CBD5E1",
    fontSize: 13,
  },

  progressTrack: {
    height: 7,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.08)",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: 999,
  },

  /* ================= QUICK STATS ================= */
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  statCard: {
    width: "48.2%",
    backgroundColor: "#08101D",
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },

  statIconWrap: {
    width: 38,
    height: 38,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },

  statTitle: {
    color: "#A1A1AA",
    fontSize: 14,
    marginBottom: 8,
  },

  statValue: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "800",
  },

  statSub: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: "500",
  },

  /* ================= WORKOUT CARD ================= */
  workoutCard: {
    borderRadius: 24,
    padding: 18,
    marginTop: 2,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },

  workoutTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  workoutSmall: {
    color: "#D1D5DB",
    fontSize: 14,
    marginBottom: 6,
  },

  workoutTitle: {
    color: "#FFFFFF",
    fontSize: 36,
    fontWeight: "800",
    marginBottom: 6,
  },

  workoutMeta: {
    color: "#CBD5E1",
    fontSize: 15,
  },

  arrowBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "rgba(255,255,255,0.06)",
    justifyContent: "center",
    alignItems: "center",
  },

  workoutBottom: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },

  startBtn: {
    width: 150,
    borderRadius: 16,
    overflow: "hidden",
  },

  startBtnGradient: {
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  startBtnText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  workoutImageMock: {
    width: 120,
    height: 120,
    borderRadius: 22,
    backgroundColor: "rgba(124,58,237,0.08)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(168,85,247,0.18)",
  },

  /* ================= PROGRESS OVERVIEW ================= */
  progressCard: {
    backgroundColor: "#08101D",
    borderRadius: 24,
    padding: 18,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    marginBottom: 20,
  },

  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  progressTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
  },

  weekBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#111827",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 14,
  },

  weekBadgeText: {
    color: "#CBD5E1",
    fontSize: 13,
    fontWeight: "500",
  },

  chartArea: {
    height: 150,
    position: "relative",
    marginBottom: 12,
  },

  chartLine: {
    position: "absolute",
    left: 30,
    right: 0,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.05)",
  },

  chartLabels: {
    position: "absolute",
    left: 0,
    top: 8,
    height: 110,
    justifyContent: "space-between",
  },

  chartLabel: {
    color: "#6B7280",
    fontSize: 12,
  },

  chartPlotArea: {
    marginLeft: 32,
    flex: 1,
    position: "relative",
  },

  chartPolyline: {
    flex: 1,
    position: "relative",
  },

  dot: {
    position: "absolute",
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#A855F7",
    shadowColor: "#A855F7",
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },

  segment: {
    position: "absolute",
    height: 3,
    backgroundColor: "#A855F7",
    borderRadius: 99,
  },

  weightTag: {
    position: "absolute",
    right: 0,
    top: 38,
    backgroundColor: "#7C3AED",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },

  weightTagText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },

  daysRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 28,
    marginTop: 4,
  },

  dayText: {
    color: "#9CA3AF",
    fontSize: 12,
  },

  /* ================= FAB ================= */
  fab: {
    position: "absolute",
    right: 22,
    bottom: 92,
    borderRadius: 999,
    overflow: "hidden",
    elevation: 8,
  },

  fabGradient: {
    width: 62,
    height: 62,
    borderRadius: 31,
    justifyContent: "center",
    alignItems: "center",
  },
  workoutCircle: {
  width: 80,
  height: 80,
  borderRadius: 40,
  justifyContent: "center",
  alignItems: "center",
},

workoutLevel: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "700",
  marginTop: 10,
},

workoutLevelSub: {
  color: "#94A3B8",
  fontSize: 12,
  marginTop: 4,
},
});