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

  /* =========================
     HEADER
  ========================= */
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

  headerIconBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#0B1220",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    justifyContent: "center",
    alignItems: "center",
  },

  /* =========================
     HERO CARD
  ========================= */
  heroCard: {
    borderRadius: 28,
    padding: 22,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    marginBottom: 16,
    minHeight: 200,
  },

  heroGlowOne: {
    position: "absolute",
    top: -24,
    right: -10,
    width: 140,
    height: 140,
    borderRadius: 999,
    backgroundColor: "rgba(168,85,247,0.18)",
  },

  heroGlowTwo: {
    position: "absolute",
    bottom: -24,
    left: -10,
    width: 120,
    height: 120,
    borderRadius: 999,
    backgroundColor: "rgba(59,130,246,0.16)",
  },

  heroTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  heroDate: {
    color: "#A1A1AA",
    fontSize: 13,
    marginBottom: 8,
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "800",
  },

  heroSubtitle: {
    color: "#CBD5E1",
    fontSize: 15,
    marginTop: 6,
  },

  heroBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(255,255,255,0.08)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
  },

  heroBadgeText: {
    color: "#E5E7EB",
    fontSize: 13,
    fontWeight: "600",
  },

  heroProgressWrap: {
    marginTop: 28,
  },

  heroProgressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  heroProgressLabel: {
    color: "#E5E7EB",
    fontSize: 14,
    fontWeight: "600",
  },

  heroProgressValue: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },

  heroProgressBar: {
    height: 12,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.08)",
    overflow: "hidden",
  },

  heroProgressFill: {
    height: "100%",
    borderRadius: 999,
  },

  /* =========================
     STATS ROW
  ========================= */
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  statCard: {
    width: "31.5%",
    backgroundColor: "#08101D",
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },

  statIconWrap: {
    width: 34,
    height: 34,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  statLabel: {
    color: "#94A3B8",
    fontSize: 12,
    marginBottom: 8,
  },

  statValue: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
  },

  statSub: {
    color: "#CBD5E1",
    fontSize: 12,
    marginTop: 4,
  },

  /* =========================
     SECTION HEADER
  ========================= */
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
    marginTop: 4,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
  },

  sectionSubTitle: {
    color: "#94A3B8",
    fontSize: 13,
    marginTop: 4,
  },

  addMiniBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#7C3AED",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
  },

  addMiniBtnText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },

  /* =========================
     EMPTY WORKOUT
  ========================= */
  emptyWorkoutCard: {
    backgroundColor: "#08101D",
    borderRadius: 24,
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    marginBottom: 18,
  },

  emptyWorkoutTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    marginTop: 12,
  },

  emptyWorkoutSub: {
    color: "#94A3B8",
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
    lineHeight: 20,
  },

  emptyWorkoutBtn: {
    marginTop: 16,
    backgroundColor: "#7C3AED",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 14,
  },

  emptyWorkoutBtnText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },

  /* =========================
     EXERCISE CARD
  ========================= */
  exerciseCard: {
    backgroundColor: "#08101D",
    borderRadius: 22,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },

  exerciseTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },

  exerciseLeft: {
    flex: 1,
    flexDirection: "row",
    gap: 12,
  },

  exerciseIndexWrap: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "rgba(168,85,247,0.12)",
    justifyContent: "center",
    alignItems: "center",
  },

  exerciseIndex: {
    color: "#A855F7",
    fontSize: 16,
    fontWeight: "800",
  },

  exerciseTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  exerciseMuscle: {
    color: "#94A3B8",
    fontSize: 13,
    marginTop: 4,
  },

  exerciseTopRight: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 8,
  },

  exerciseWeight: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },

  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },

  statusBadgeDone: {
    backgroundColor: "rgba(34,197,94,0.14)",
    borderWidth: 1,
    borderColor: "rgba(34,197,94,0.25)",
  },

  statusBadgePending: {
    backgroundColor: "rgba(245,158,11,0.12)",
    borderWidth: 1,
    borderColor: "rgba(245,158,11,0.22)",
  },

  statusBadgeText: {
    fontSize: 12,
    fontWeight: "700",
  },

  statusBadgeTextDone: {
    color: "#22C55E",
  },

  statusBadgeTextPending: {
    color: "#F59E0B",
  },

  exerciseMetaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 14,
  },

  metaPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#0F172A",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
  },

  metaPillText: {
    color: "#CBD5E1",
    fontSize: 12,
    fontWeight: "600",
  },

  exerciseBottom: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 16,
  },

  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#0F172A",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderRadius: 14,
  },

  actionBtnText: {
    color: "#CBD5E1",
    fontSize: 13,
    fontWeight: "700",
  },

  completeBtn: {
    flex: 1,
    minWidth: 150,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#374151",
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderRadius: 14,
  },

  completeBtnDone: {
    backgroundColor: "#16A34A",
  },

  completeBtnText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },

  /* =========================
     PRIMARY / SECONDARY BUTTONS
  ========================= */
  primaryButtonWrap: {
    marginTop: 8,
    marginBottom: 12,
    borderRadius: 18,
    overflow: "hidden",
  },

  primaryButton: {
    height: 58,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  secondaryButton: {
    height: 56,
    borderRadius: 18,
    backgroundColor: "#0F172A",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
  },

  secondaryButtonText: {
    color: "#CBD5E1",
    fontSize: 15,
    fontWeight: "700",
  },

  /* =========================
     FAB
  ========================= */
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

  /* =========================
     MODAL COMMON
  ========================= */
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.55)",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  modalSheet: {
    backgroundColor: "#030712",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 18,
    paddingTop: 18,
    maxHeight: "88%",
    borderTopWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },

  detailSheet: {
    backgroundColor: "#030712",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    maxHeight: "92%",
    overflow: "hidden",
    borderTopWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },

  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },

  modalTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
  },

  modalSubTitle: {
    color: "#94A3B8",
    fontSize: 13,
    marginTop: 4,
  },

  modalCloseBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
  },

  /* =========================
     SEARCH BOX
  ========================= */
  searchBox: {
    height: 52,
    borderRadius: 16,
    backgroundColor: "#0F172A",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 16,
  },

  searchInput: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 15,
  },

  /* =========================
     LIBRARY CARD
  ========================= */
  libraryCard: {
    backgroundColor: "#08101D",
    borderRadius: 18,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  libraryImage: {
    width: 74,
    height: 74,
    borderRadius: 14,
    backgroundColor: "#111827",
  },

  libraryContent: {
    flex: 1,
  },

  libraryName: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  libraryMuscle: {
    color: "#A855F7",
    fontSize: 13,
    marginTop: 4,
    fontWeight: "600",
  },

  libraryMetaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 10,
  },

  emptyWrap: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
  },

  emptyText: {
    color: "#94A3B8",
    marginTop: 10,
    fontSize: 14,
  },

  /* =========================
     DETAIL MODAL
  ========================= */
  detailImageWrap: {
    position: "relative",
  },

  detailImage: {
    width: "100%",
    height: 260,
    backgroundColor: "#111827",
  },

  detailCloseBtn: {
    position: "absolute",
    top: 16,
    right: 16,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },

  detailContent: {
    paddingHorizontal: 18,
    paddingTop: 18,
  },

  detailName: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "800",
  },

  detailMuscle: {
    color: "#A855F7",
    fontSize: 15,
    fontWeight: "700",
    marginTop: 10,
  },

  detailSecondaryMuscles: {
    color: "#CBD5E1",
    fontSize: 14,
    marginTop: 8,
    lineHeight: 22,
  },

  detailPillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 14,
  },

  infoCard: {
    backgroundColor: "#08101D",
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    marginTop: 16,
  },

  infoCardTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 12,
  },

  infoCardText: {
    color: "#CBD5E1",
    fontSize: 14,
    lineHeight: 22,
  },

  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    marginBottom: 10,
  },

  bulletDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#A855F7",
    marginTop: 7,
  },

  infoBulletText: {
    flex: 1,
    color: "#CBD5E1",
    fontSize: 14,
    lineHeight: 22,
  },

  addExerciseButtonWrap: {
    borderRadius: 18,
    overflow: "hidden",
    marginTop: 18,
    marginBottom: 8,
  },

  addExerciseButton: {
    height: 56,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  addExerciseButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },
  editModalCard: {
  backgroundColor: "#0F172A",
  marginHorizontal: 20,
  borderRadius: 24,
  padding: 20,
  borderWidth: 1,
  borderColor: "rgba(255,255,255,0.08)",
},
calendarContainer: {
  backgroundColor: "#111827",
  marginHorizontal: 20,
  borderRadius: 24,
  padding: 16,
  borderWidth: 1,
  borderColor: "#374151",
  overflow: "hidden",
},
});