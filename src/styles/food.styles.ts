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
  dateText:{
color:"#94A3B8",
marginTop:6,
fontSize:13
},

heroTop:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},

badge:{
backgroundColor:"rgba(255,255,255,.08)",
paddingHorizontal:12,
paddingVertical:8,
borderRadius:20,
flexDirection:"row",
alignItems:"center",
gap:6
},

badgeText:{
color:"#fff",
fontWeight:"700"
},

ringContainer:{
alignItems:"center",
marginVertical:24
},

ringCalories:{
color:"#fff",
fontSize:38,
fontWeight:"800"
},

ringTarget:{
color:"#CBD5E1",
fontSize:15
},

ringPercent:{
color:"#A855F7",
fontSize:20,
fontWeight:"700",
marginTop:8
},

heroMacros:{
flexDirection:"row",
justifyContent:"space-between",
marginTop:10,
gap:10
},

calendarOverlay: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.7)",
  justifyContent: "center",
  alignItems: "center",
},


calendarContainer: {
  backgroundColor: "#111827",
  marginHorizontal: 20,
  borderRadius: 24,
  padding: 30,
  borderWidth: 1,
  borderColor: "#374151",
  overflow: "hidden",
},

calendarHeader: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 18,
  paddingTop: 18,
  paddingBottom: 12,
},

calendarTitle: {
  color: "#fff",
  fontSize: 20,
  fontWeight: "700",
},

modalOverlay:{
    flex:1,
    backgroundColor:"rgba(0,0,0,.7)",
    justifyContent:"center",
    padding:20,
},

modalSheet:{
    backgroundColor:"#111827",
    borderRadius:26,
    padding:20,
    maxHeight:"90%",
},

modalHeader:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:18,
},

modalTitle:{
    color:"#fff",
    fontSize:22,
    fontWeight:"800",
},
});