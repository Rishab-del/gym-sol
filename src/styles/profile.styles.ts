import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#030712",
  },

  container: {
    flex: 1,
    backgroundColor: "#030712",
    paddingHorizontal: 18,
  },

  header: {
    marginTop: 18,
    marginBottom: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  smallText: {
    color: "#9CA3AF",
    fontSize: 14,
  },

  heading: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "800",
    marginTop: 4,
  },

  settingsBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#0B1220",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    justifyContent: "center",
    alignItems: "center",
  },

  profileHero: {
    borderRadius: 26,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    marginBottom: 16,
  },

  profileTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  avatarBorder: {
    width: 88,
    height: 88,
    borderRadius: 44,
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  },

  avatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "800",
  },

  name: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "800",
  },

  subName: {
    color: "#CBD5E1",
    marginTop: 4,
    fontSize: 14,
  },

  badgeRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 12,
  },

  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(255,255,255,0.06)",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 999,
  },

  badgeText: {
    color: "#E5E7EB",
    fontSize: 12,
    fontWeight: "500",
  },

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
    marginBottom: 12,
  },

  statTitle: {
    color: "#9CA3AF",
    fontSize: 14,
    marginBottom: 8,
  },

  statValueRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 4,
  },

  statValue: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "800",
  },

  statSub: {
    color: "#94A3B8",
    fontSize: 13,
    marginBottom: 3,
  },

  card: {
    backgroundColor: "#08101D",
    borderRadius: 24,
    padding: 18,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    marginBottom: 16,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  cardTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
  },

  goalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.05)",
  },

  goalLabel: {
    color: "#9CA3AF",
    fontSize: 15,
  },

  goalValue: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },

  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    marginTop: 8,
  },

  progressLabel: {
    color: "#CBD5E1",
    fontSize: 14,
  },

  progressValue: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },

  progressBar: {
    height: 10,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.06)",
    overflow: "hidden",
    marginBottom: 12,
  },

  progressFill: {
    height: "100%",
    borderRadius: 999,
  },

  achievementCard: {
    borderRadius: 24,
    padding: 18,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 18,
  },

  achievementIcon: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "rgba(250,204,21,0.12)",
    justifyContent: "center",
    alignItems: "center",
  },

  achievementTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },

  achievementText: {
    color: "#CBD5E1",
    fontSize: 14,
  },

  editBtn: {
    borderRadius: 18,
    overflow: "hidden",
    marginBottom: 20,
  },

  editBtnGradient: {
    height: 58,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  editBtnText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});