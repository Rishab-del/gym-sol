import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useMemo, useState } from "react";
import { Calendar } from "react-native-calendars";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import api from "../services/api";
import { styles } from "../styles/food.styles";
import { FOOD_LIBRARY, FoodItem } from "../data/foodLibrary";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from "react-native";

type Meal = {
  _id: string;
  foodId: string;
  mealType: string;
  foodName: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  quantity: number;
  unit: string;
  time: string;
};

export default function FoodScreen() {
  const today = new Date().toISOString().split("T")[0];
  const [selectedMeal, setSelectedMeal] =useState<Meal | null>(null);
  const [showMealOptions, setShowMealOptions] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(today);
  const [showCalendar, setShowCalendar] = useState(false);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [nutrition, setNutrition] = useState({
    totalCalories: 0,
    totalProtein: 0,
    totalCarbs: 0,
    totalFat: 0,
    water: 0,
  });
  const [search, setSearch] = useState("");
const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
const filteredFoods = useMemo(() => {
  if (!search.trim()) return [];

  return FOOD_LIBRARY.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  ).slice(0, 20);
}, [search]);

  const [showAddMeal, setShowAddMeal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [mealType, setMealType] = useState("Breakfast");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("gm");
  const [mealCalories, setMealCalories] = useState("");
  const [mealProtein, setMealProtein] = useState("");
  const [mealCarbs, setMealCarbs] = useState("");
  const [mealFat, setMealFat] = useState("");
  const [mealTime, setMealTime] = useState("");

  const calories = nutrition.totalCalories;
  const targetCalories: number = 2500;

const deleteSelectedMeal = () => {
  setShowMealOptions(false);

  setTimeout(() => {
    setDeleteModalVisible(true);
  }, 200);
};
const saveMeal = async () => {
  
  if (!selectedFood) {
    alert("Please select a food");
    return;
  }

  if (!quantity) {
    alert("Enter quantity");
    return;
  }

  try {
    if (isEditing && selectedMeal) {
      await api.put(`/food/${selectedMeal.foodId}/${selectedMeal._id}`, {
        mealType,
        foodName: selectedFood.name,
        quantity: Number(quantity),
        unit,
        calories: Number(mealCalories),
        protein: Number(mealProtein),
        carbs: Number(mealCarbs),
        fat: Number(mealFat),
        time: mealTime,
      });
    } else {
      await api.post("/food", {
        userId: 1,
        date: selectedDate,
        mealType,
        foodName: selectedFood.name,
        quantity: Number(quantity),
        unit,
        calories: Number(mealCalories),
        protein: Number(mealProtein),
        carbs: Number(mealCarbs),
        fat: Number(mealFat),
        time: mealTime,
      });
    }

    setIsEditing(false);
    setSelectedMeal(null);

    setShowAddMeal(false);
    setShowSuccess(true);

    setTimeout(() => setShowSuccess(false), 1000);

    setMealType("Breakfast");
    setSearch("");
    setSelectedFood(null);
    setQuantity("");
    setUnit("gm");
    setMealCalories("");
    setMealProtein("");
    setMealCarbs("");
    setMealFat("");
    setMealTime("");

    loadFood(selectedDate);
  } catch (err: any) {
  console.log("STATUS:", err.response?.status);
  console.log("DATA:", err.response?.data);
  console.log("MESSAGE:", err.message);
  alert(JSON.stringify(err.response?.data || err.message));
}
};
function NutritionCard({
  icon,
  color,
  label,
  value,
  unit,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  label: string;
  value: string;
  unit: string;
}) {
  return (
    <View
      style={{
        width: "47%",
        backgroundColor: "#111827",
        borderRadius: 18,
        paddingVertical: 18,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: "#1F2937",
      }}
    >
      <View
        style={{
          width: 42,
          height: 42,
          borderRadius: 21,
          backgroundColor: `${color}22`,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <Ionicons name={icon} size={20} color={color} />
      </View>

      <Text
        style={{
          color: "#FFFFFF",
          fontSize: 22,
          fontWeight: "700",
        }}
      >
        {value}
        <Text
          style={{
            fontSize: 13,
            color: "#94A3B8",
          }}
        >
          {" "}
          {unit}
        </Text>
      </Text>

      <Text
        style={{
          color: "#9CA3AF",
          marginTop: 4,
          fontSize: 14,
        }}
      >
        {label}
      </Text>
    </View>
  );
}
    
  const progress = useMemo(() => {
    if (targetCalories === 0) return 0;
    return Math.min(100, Math.round((calories / targetCalories) * 100));
  }, [calories]);

  useEffect(() => {
    loadFood(selectedDate);
  }, [selectedDate]);
  useEffect(() => {
  if (!selectedFood) return;
  

  const qty = Number(quantity);

  if (!qty || isNaN(qty)) {
    setMealCalories(selectedFood.calories.toString());
    setMealProtein(selectedFood.protein.toString());
    setMealCarbs(selectedFood.carbs.toString());
    setMealFat(selectedFood.fat.toString());
    return;
  }

  let factor = 1;

  if (
    selectedFood.unit.includes("100g") ||
    selectedFood.unit.includes("100ml")
  ) {
    factor = qty / 100;
  } else {
    factor = qty;
  }

  setMealCalories((selectedFood.calories * factor).toFixed(1));
  setMealProtein((selectedFood.protein * factor).toFixed(1));
  setMealCarbs((selectedFood.carbs * factor).toFixed(1));
  setMealFat((selectedFood.fat * factor).toFixed(1));
}, [quantity, selectedFood]);
  const loadFood = async (date: string) => {
    try {
      const res = await api.get(`/food/1/${date}`);

      if (!res.data) {
        setMeals([]);

        setNutrition({
          totalCalories: 0,
          totalProtein: 0,
          totalCarbs: 0,
          totalFat: 0,
          water: 0,
        });

        return;
      }

      setMeals(
  (res.data.meals || []).map((meal: any) => ({
    ...meal,
    foodId: res.data._id,
  }))
);

      setNutrition({
        totalCalories: res.data.totalCalories || 0,
        totalProtein: res.data.totalProtein || 0,
        totalCarbs: res.data.totalCarbs || 0,
        totalFat: res.data.totalFat || 0,
        water: res.data.water || 0,
      });
    } catch (err) {
      console.log(err);

      setMeals([]);

      setNutrition({
        totalCalories: 0,
        totalProtein: 0,
        totalCarbs: 0,
        totalFat: 0,
        water: 0,
      });
    }
  };
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
            <Text style={styles.headerSmall}>Daily Nutrition</Text>
            <Text style={styles.heading}>Food Tracker</Text>

            <Text style={styles.dateText}>
              {new Date(selectedDate).toLocaleDateString("en-US", {
                weekday: "long",
                month: "short",
                day: "numeric",
              })}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.calendarBtn}
            onPress={() => setShowCalendar(true)}
          >
            <Ionicons name="calendar-outline" size={22} color="#fff" />
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

          <View style={styles.heroTop}>
            <View>
              <Text style={styles.cardTitle}>Today's Calories</Text>

              <Text style={styles.remaining}>
                {Math.max(targetCalories - calories, 0)} kcal remaining
              </Text>
            </View>

            <View style={styles.badge}>
              <Ionicons name="flame" size={14} color="#F97316" />

              <Text style={styles.badgeText}>Goal</Text>
            </View>
          </View>

          <View style={styles.ringContainer}>
            <AnimatedCircularProgress
              size={180}
              width={14}
              fill={progress}
              rotation={220}
              arcSweepAngle={280}
              lineCap="round"
              tintColor="#8B5CF6"
              backgroundColor="rgba(255,255,255,.08)"
            >
              {() => (
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.ringCalories}>{calories}</Text>

                  <Text style={styles.ringTarget}>/ {targetCalories}</Text>

                  <Text style={styles.ringPercent}>{progress}%</Text>
                </View>
              )}
            </AnimatedCircularProgress>
          </View>

          <View style={styles.heroMacros}>
            <MacroMini
              label="Protein"
              value={`${nutrition.totalProtein}g`}
              icon="barbell-outline"
              color="#22C55E"
            />

            <MacroMini
              label="Carbs"
              value={`${nutrition.totalCarbs}g`}
              icon="flash-outline"
              color="#3B82F6"
            />

            <MacroMini
              label="Fat"
              value={`${nutrition.totalFat}g`}
              icon="water-outline"
              color="#F59E0B"
            />
          </View>
        </LinearGradient>
        {/* Macro Cards */}
        <View style={styles.macroGrid}>
          <MacroCard
            title="Protein"
            value={`${nutrition.totalProtein}g`}
            sub="140g target"
            icon="barbell-outline"
            color="#22C55E"
          />
          <MacroCard
            title="Carbs"
            value={`${nutrition.totalCarbs}g`}
            sub="300g target"
            icon="flash-outline"
            color="#3B82F6"
          />
          <MacroCard
            title="Fat"
            value={`${nutrition.totalFat}g`}
            sub="70g target"
            icon="water-outline"
            color="#F59E0B"
          />
          <MacroCard
            title="Water"
            value={`${nutrition.water}L`}
            sub="3L target"
            icon="water"
            color="#06B6D4"
          />
        </View>

        {/* Meals Section */}
        {/* Meals Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Meals</Text>

          <TouchableOpacity>
            <Text style={styles.sectionLink}>View All</Text>
          </TouchableOpacity>
        </View>

        {meals.length === 0 ? (
          <View
            style={{
              backgroundColor: "#08101D",
              borderRadius: 22,
              padding: 24,
              alignItems: "center",
              marginBottom: 16,
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.06)",
            }}
          >
            <Ionicons name="restaurant-outline" size={34} color="#6B7280" />

            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 18,
                fontWeight: "700",
                marginTop: 12,
              }}
            >
              No Meals Added
            </Text>

            <Text
              style={{
                color: "#94A3B8",
                fontSize: 14,
                marginTop: 8,
                textAlign: "center",
              }}
            >
              Tap on "Add Meal" to start tracking your nutrition.
            </Text>
          </View>
        ) : (
          meals.map((meal) => (

<TouchableOpacity
key={meal._id}
onPress={()=>{
setSelectedMeal(meal);
setShowMealOptions(true);
}}
>

<MealCard
icon="restaurant-outline"
iconBg="#3B82F622"
iconColor="#3B82F6"
title={meal.mealType}
subtitle={meal.foodName}
kcal={`${meal.calories} kcal`}
time={meal.time}
/>

</TouchableOpacity>

))
        )}

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
                Generate a custom diet plan based on your calories, protein
                goal, workout split and bodyweight.
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
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.addMealWrap}
          onPress={() => {
  setIsEditing(false);
  setSelectedMeal(null);

  setMealType("Breakfast");
  setSearch("");
  setSelectedFood(null);
  setQuantity("");
  setMealCalories("");
  setMealProtein("");
  setMealCarbs("");
  setMealFat("");
  setMealTime("");
  setUnit("gm");

  setShowAddMeal(true);
}}
        >
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

      <Modal visible={showCalendar} transparent animationType="fade">
        <View style={styles.calendarOverlay}>
          <View style={styles.calendarContainer}>
            <View style={styles.calendarHeader}>
              <Text style={styles.calendarTitle}>Food Calendar</Text>

              <TouchableOpacity onPress={() => setShowCalendar(false)}>
                <Ionicons name="close" size={22} color="#fff" />
              </TouchableOpacity>
            </View>

            <Calendar
              theme={{
                backgroundColor: "#111827",

                calendarBackground: "#111827",

                dayTextColor: "#fff",

                monthTextColor: "#fff",

                textSectionTitleColor: "#94A3B8",

                todayTextColor: "#8B5CF6",

                arrowColor: "#8B5CF6",

                selectedDayBackgroundColor: "#8B5CF6",

                selectedDayTextColor: "#fff",
              }}
              markedDates={{
                [selectedDate]: {
                  selected: true,
                },
              }}
              maxDate={today}
              onDayPress={(day) => {
                setSelectedDate(day.dateString);

                setShowCalendar(false);
              }}
            />
          </View>
        </View>
      </Modal>
      <Modal
  visible={showAddMeal}
  transparent
  animationType="slide"
>
  <View style={styles.modalOverlay}>

    <View style={styles.modalSheet}>

      <View style={styles.modalHeader}>

        <Text style={styles.modalTitle}>
          Add Meal
        </Text>

        <TouchableOpacity
          onPress={() => setShowAddMeal(false)}
        >
          <Ionicons
            name="close"
            size={24}
            color="#fff"
          />
        </TouchableOpacity>

      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        <View
  style={{
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 16,
  }}
>
  {["Breakfast", "Lunch", "Dinner", "Snack"].map((item) => (
    <TouchableOpacity
      key={item}
      onPress={() => setMealType(item)}
      style={{
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor:
          mealType === item ? "#8B5CF6" : "#1F2937",
        borderWidth: 1,
        borderColor:
          mealType === item ? "#A855F7" : "#374151",
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontWeight: "600",
        }}
      >
        {item}
      </Text>
    </TouchableOpacity>
  ))}
</View>

<View
  style={{
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1F2937",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: selectedFood ? "#8B5CF6" : "#374151",
    paddingHorizontal: 14,
    marginBottom: 14,
  }}
>
  <Ionicons
    name="search-outline"
    size={20}
    color="#9CA3AF"
    style={{ marginRight: 10 }}
  />

  <TextInput
    placeholder="Search food..."
    placeholderTextColor="#6B7280"
    value={search}
    onChangeText={setSearch}
    editable={!selectedFood}
    style={{
      flex: 1,
      color: "#FFFFFF",
      fontSize: 16,
      paddingVertical: 15,
    }}
  />


</View>
{selectedFood && (
  <TouchableOpacity
    onPress={() => {
      setSelectedFood(null);
      setSearch("");
      setQuantity("");
      setMealCalories("");
      setMealProtein("");
      setMealCarbs("");
      setMealFat("");
      setUnit("gm");
    }}
    style={{
      alignSelf: "flex-end",
      marginBottom: 12,
    }}
  >
    <Text style={{ color: "#8B5CF6", fontWeight: "600" }}>
      Change Food
    </Text>
  </TouchableOpacity>
)}

{search.trim() !== "" &&
search !== selectedFood?.name &&
filteredFoods.map(food => (

<TouchableOpacity
key={food.id}
style={{
backgroundColor:"#1F2937",
padding:14,
borderRadius:12,
marginBottom:8,
}}
onPress={() => {

setQuantity("");

setMealCalories(food.calories.toString());

setMealProtein(food.protein.toString());

setMealCarbs(food.carbs.toString());

setMealFat(food.fat.toString());

setUnit(food.unit);

setSelectedFood(food);
setSearch(food.name);

}}
>

<Text style={{color:"#fff",fontWeight:"600"}}>
{food.name}
</Text>

<Text style={{color:"#9CA3AF",marginTop:4}}>
{food.calories} kcal • Protein {food.protein} • Carbs {food.carbs} • Fat {food.fat}
</Text>

</TouchableOpacity>

))}

       <View
  style={{
    backgroundColor: "#111827",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#374151",
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginBottom: 16,
  }}
>
  <Text
    style={{
      color: "#9CA3AF",
      fontSize: 13,
      marginBottom: 8,
      fontWeight: "600",
    }}
  >
    Quantity
  </Text>

  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
    }}
  >
    <Ionicons
      name="scale-outline"
      size={20}
      color="#8B5CF6"
      style={{ marginRight: 12 }}
    />

    <TextInput
      placeholder="Enter quantity"
      placeholderTextColor="#6B7280"
      keyboardType="numeric"
      value={quantity}
      onChangeText={(text) => {
        const value = text.replace(/[^0-9.]/g, "");
        setQuantity(value);
      }}
      style={{
        flex: 1,
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
      }}
    />

    <View
      style={{
        backgroundColor: "#1F2937",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          color: "#A855F7",
          fontWeight: "700",
        }}
      >
        {unit}
      </Text>
    </View>
  </View>
</View>




     <View
  style={{
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 16,
    rowGap: 12,
  }}
>
  <NutritionCard
    icon="flame"
    color="#F97316"
    label="Calories"
    value={mealCalories || "0"}
    unit="kcal"
  />

  <NutritionCard
    icon="barbell-outline"
    color="#22C55E"
    label="Protein"
    value={mealProtein || "0"}
    unit="g"
  />

  <NutritionCard
    icon="flash-outline"
    color="#3B82F6"
    label="Carbs"
    value={mealCarbs || "0"}
    unit="g"
  />

  <NutritionCard
    icon="water-outline"
    color="#F59E0B"
    label="Fat"
    value={mealFat || "0"}
    unit="g"
  />
</View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={saveMeal}
          
          style={{
            marginTop:20,
            marginBottom:25,
          }}
        >
          <LinearGradient
            colors={["#4F46E5","#A855F7"]}
            style={styles.button}
          >
            <Ionicons
              name="save-outline"
              size={20}
              color="#fff"
            />

            <Text style={styles.buttonText}>
              Save Meal
            </Text>

          </LinearGradient>

        </TouchableOpacity>

      </ScrollView>

    </View>

  </View>

</Modal>

<Modal
  visible={showSuccess}
  transparent
  animationType="fade"
>
  <View
    style={{
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.55)",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <View
      style={{
        width: 290,
        backgroundColor: "#111827",
        borderRadius: 28,
        paddingVertical: 32,
        paddingHorizontal: 24,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#4F46E5",
      }}
    >
      <LinearGradient
        colors={["#4F46E5", "#A855F7"]}
        style={{
          width: 78,
          height: 78,
          borderRadius: 39,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Ionicons
          name="checkmark"
          size={42}
          color="#fff"
        />
      </LinearGradient>

      <Text
        style={{
          color: "#fff",
          fontSize: 24,
          fontWeight: "700",
        }}
      >
        Meal Saved
      </Text>

      <Text
        style={{
          color: "#94A3B8",
          marginTop: 10,
          textAlign: "center",
          lineHeight: 22,
          fontSize: 15,
        }}
      >
        Your meal has been added successfully.
      </Text>
    </View>
  </View>
</Modal>

<Modal
visible={showMealOptions}
transparent
animationType="slide"
>

<View
style={{
flex:1,
justifyContent:"flex-end",
backgroundColor:"rgba(0,0,0,.55)"
}}
>

<View
style={{
backgroundColor:"#111827",
padding:25,
borderTopLeftRadius:30,
borderTopRightRadius:30,
}}
>

<Text
style={{
color:"#fff",
fontSize:22,
fontWeight:"700",
marginBottom:25,
}}
>
{selectedMeal?.foodName}
</Text>
<TouchableOpacity
  style={{
    paddingVertical:18,
    flexDirection:"row",
    alignItems:"center",
  }}
  onPress={() => {
    if (!selectedMeal) return;

    setIsEditing(true);

    setMealType(selectedMeal.mealType);
    setSearch(selectedMeal.foodName);
    setQuantity(String(selectedMeal.quantity));
    setUnit(selectedMeal.unit);
    setMealCalories(String(selectedMeal.calories));
    setMealProtein(String(selectedMeal.protein));
    setMealCarbs(String(selectedMeal.carbs));
    setMealFat(String(selectedMeal.fat));
    setMealTime(selectedMeal.time);

    const food = FOOD_LIBRARY.find(
      f => f.name === selectedMeal.foodName
    );

    if (food) {
      setSelectedFood(food);
    }

    setShowMealOptions(false);
    setShowAddMeal(true);
  }}
>
  <Ionicons
    name="create-outline"
    size={24}
    color="#8B5CF6"
  />

  <Text
    style={{
      color:"#fff",
      fontSize:18,
      marginLeft:15,
    }}
  >
    Edit Meal
  </Text>
</TouchableOpacity>




<TouchableOpacity
style={{
paddingVertical:18,
flexDirection:"row",
alignItems:"center",
}}
onPress={deleteSelectedMeal}
>

<Ionicons
name="trash-outline"
size={24}
color="#EF4444"
/>

<Text
style={{
color:"#EF4444",
fontSize:18,
marginLeft:15,
}}
>
Delete Meal
</Text>

</TouchableOpacity>


<TouchableOpacity
style={{
paddingVertical:18,
alignItems:"center",
}}
onPress={()=>setShowMealOptions(false)}
>

<Text
style={{
color:"#9CA3AF",
fontSize:17,
}}
>
Cancel
</Text>

</TouchableOpacity>

</View>

</View>

</Modal>

<Modal
  visible={deleteModalVisible}
  transparent
  animationType="fade"
>
  <View style={styles.modalOverlay}>
    <View
      style={{
        backgroundColor: "#111827",
        borderRadius: 24,
        padding: 22,
        marginHorizontal: 24,
        borderWidth: 1,
        borderColor: "#374151",
      }}
    >
      <Ionicons
        name="trash-outline"
        size={44}
        color="#EF4444"
        style={{
          alignSelf: "center",
          marginBottom: 12,
        }}
      />

      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        Delete Meal?
      </Text>

      <Text
        style={{
          color: "#9CA3AF",
          textAlign: "center",
          marginTop: 10,
          lineHeight: 22,
        }}
      >
        Are you sure you want to delete{"\n"}
        <Text
          style={{
            color: "#fff",
            fontWeight: "700",
          }}
        >
          {selectedMeal?.foodName}
        </Text>
        ?
      </Text>

      <View
        style={{
          flexDirection: "row",
          marginTop: 24,
          gap: 12,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "#1F2937",
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 14,
          }}
          onPress={() => setDeleteModalVisible(false)}
        >
          <Text
            style={{
              color: "#CBD5E1",
              fontWeight: "700",
            }}
          >
            Cancel
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={async () => {
            setDeleteModalVisible(false);

            try {
              await api.delete(`/food/${selectedMeal?._id}`);

              setSelectedMeal(null);
              loadFood(selectedDate);
            } catch (err) {
              Alert.alert("Error", "Failed to delete meal.");
            }
          }}
        >
          <LinearGradient
            colors={["#DC2626", "#EF4444"]}
            style={{
              borderRadius: 16,
              paddingVertical: 14,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "700",
              }}
            >
              Delete
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</Modal>

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
