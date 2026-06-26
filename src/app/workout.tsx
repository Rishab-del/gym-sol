import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useMemo, useState } from "react";
import { Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Calendar } from "react-native-calendars";
import {
  Alert,
  FlatList,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { EXERCISE_LIBRARY } from "../data/exerciseLibrary";
import api from "../services/api";
import { styles } from "../styles/workout.styles";
import type {
  Exercise,
  ExerciseLibraryItem,
  ExerciseSet,
} from "../types/types";

/* ---------------- helpers ---------------- */

function buildSetDetails(
  totalSets: number,
  reps: number,
  weight: string,
): ExerciseSet[] {
  return Array.from({ length: totalSets }, (_, index) => ({
    id: `${Date.now()}_${index + 1}`,
    setNumber: index + 1,
    reps,
    weight,
    done: false,
  }));
}

function makeExerciseFromLibrary(
  item: ExerciseLibraryItem,
  id: string,
  done = false,
): Exercise {
  return {
    id,
    name: item.name,
    muscle: item.muscle,
    sets: item.defaultSets,
    reps: item.defaultReps,
    weight: item.defaultWeight,
    rest: item.defaultRest,
    done,
    setDetails: buildSetDetails(
      item.defaultSets,
      item.defaultReps,
      item.defaultWeight,
    ),
  };
}

function getLibraryExercise(index: number) {
  return EXERCISE_LIBRARY[index] ?? EXERCISE_LIBRARY[0];
}

const initialTodaysExercises: Exercise[] = [
  makeExerciseFromLibrary(getLibraryExercise(0), "1", false),
  makeExerciseFromLibrary(getLibraryExercise(1), "2", false),
  makeExerciseFromLibrary(getLibraryExercise(2), "3", false),
];




/* ====================================================== */

export default function WorkoutScreen() {
  const [todaysExercises, setTodaysExercises] =
  useState<Exercise[]>([]);

  const [addModalVisible, setAddModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExercise, setSelectedExercise] =
    useState<ExerciseLibraryItem | null>(null);
  const [expandedExerciseId, setExpandedExerciseId] = useState<string | null>(
    null,
  );
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const isToday = selectedDate === today;
  const handleToggleExpandExercise = (exerciseId: string) => {
    setExpandedExerciseId((prev) => (prev === exerciseId ? null : exerciseId));
  };
  const [showCalendar, setShowCalendar] = useState(false);

  /* edit modal state */
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingExerciseId, setEditingExerciseId] = useState<string | null>(
    null,
  );
  const [editingExerciseName, setEditingExerciseName] = useState("");
  const [editSetDetails, setEditSetDetails] = useState<ExerciseSet[]>([]);
  const [editRestValue, setEditRestValue] = useState("");
  const loadWorkout = async (date = selectedDate) => {
  try {
    const res = await api.get(`/workout/1/${date}`);

    if (res.data) {
      setTodaysExercises(res.data.exercises);
    } else {
      setTodaysExercises([]);
    }
  } catch (err) {
    console.log(err);
    setTodaysExercises([]);
  }
};
useEffect(() => {
  loadWorkout(selectedDate);
}, [selectedDate]);

const [saveModalVisible, setSaveModalVisible] = useState(false);
    

  /* summary */
  const completedExercises = todaysExercises.filter((item) => item.done).length;

  const totalSets = todaysExercises.reduce(
    (sum, item) => sum + item.setDetails.length,
    0,
  );

  const progress = useMemo(() => {
    if (todaysExercises.length === 0) return 0;
    return Math.round((completedExercises / todaysExercises.length) * 100);
  }, [completedExercises, todaysExercises.length]);

  const todayDateLabel = useMemo(() => {
  return new Date(selectedDate).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}, [selectedDate]);

  const workoutSummary = useMemo(() => {
    if (todaysExercises.length === 0) {
      return {
        title: "No Workout Planned",
        subtitle: "Add exercises to build your session",
      };
    }

    const muscleCount: Record<string, number> = {};

    todaysExercises.forEach((exercise) => {
      const muscle = exercise.muscle?.trim() || "Workout";
      muscleCount[muscle] = (muscleCount[muscle] || 0) + 1;
    });

    const sortedMuscles = Object.entries(muscleCount).sort(
      (a, b) => b[1] - a[1],
    );

    const topMuscles = sortedMuscles.map(([muscle]) => muscle);

    let title = "Workout Day";

    if (topMuscles.length === 1) {
      title = `${topMuscles[0]} Day 💪`;
    } else if (topMuscles.length > 1) {
      if (sortedMuscles[0][1] > (sortedMuscles[1]?.[1] ?? 0)) {
        title = `${topMuscles[0]} Day 💪`;
      } else {
        title = "Mixed Workout 💪";
      }
    }

    return {
      title,
      subtitle: topMuscles.slice(0, 3).join(" • "),
    };
  }, [todaysExercises]);

  const estimatedDuration = useMemo(() => {
    if (todaysExercises.length === 0) return "0 min";
    const minutes = Math.max(20, todaysExercises.length * 8);
    return `${minutes} min`;
  }, [todaysExercises]);

  const filteredExercises = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return EXERCISE_LIBRARY;

    return EXERCISE_LIBRARY.filter((item) => {
      return (
        item.name.toLowerCase().includes(query) ||
        item.muscle.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.equipment.toLowerCase().includes(query) ||
        item.secondaryMuscles.some((m) => m.toLowerCase().includes(query))
      );
    });
  }, [searchQuery]);

  /* ---------------- add / detail ---------------- */

  const handleOpenExerciseDetail = (exercise: ExerciseLibraryItem) => {
    setSelectedExercise(exercise);
    setDetailModalVisible(true);
  };

  const handleAddExerciseToWorkout = (exercise: ExerciseLibraryItem) => {
    const alreadyExists = todaysExercises.some(
      (item) => item.name.toLowerCase() === exercise.name.toLowerCase(),
    );

    if (alreadyExists) {
      Alert.alert(
        "Already added",
        `${exercise.name} is already in today's workout.`,
      );
      return;
    }

    const newExercise = makeExerciseFromLibrary(
      exercise,
      String(Date.now()),
      false,
    );

    setTodaysExercises((prev) => [...prev, newExercise]);
    setDetailModalVisible(false);
    setAddModalVisible(false);
    setSelectedExercise(null);
    setSearchQuery("");
  };

  /* ---------------- delete ---------------- */

  const handleDeleteExercise = (exerciseId: string, exerciseName: string) => {
    Alert.alert(
      "Remove Exercise",
      `Are you sure you want to remove ${exerciseName} from today's workout?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Remove",
          style: "destructive",
          onPress: () => {
            setTodaysExercises((prev) =>
              prev.filter((item) => item.id !== exerciseId),
            );
          },
        },
      ],
    );
  };

  /* ---------------- complete exercise ---------------- */

  const handleToggleDone = (exerciseId: string) => {
    setTodaysExercises((prev) =>
      prev.map((item) => {
        if (item.id !== exerciseId) return item;
        const nextDone = !item.done;

        return {
          ...item,
          done: nextDone,
          setDetails: item.setDetails.map((set) => ({
            ...set,
            done: nextDone,
          })),
        };
      }),
    );
  };

  /* ---------------- toggle set done ---------------- */

  const handleToggleSetDone = (exerciseId: string, setId: string) => {
    setTodaysExercises((prev) =>
      prev.map((exercise) => {
        if (exercise.id !== exerciseId) return exercise;

        const updatedSets = exercise.setDetails.map((set) =>
          set.id === setId ? { ...set, done: !set.done } : set,
        );

        const allDone =
          updatedSets.length > 0 && updatedSets.every((set) => set.done);

        return {
          ...exercise,
          setDetails: updatedSets,
          done: allDone,
        };
      }),
    );
  };

  /* ---------------- edit exercise ---------------- */

  const handleEditExercise = (exerciseId: string) => {
    const exercise = todaysExercises.find((item) => item.id === exerciseId);
    if (!exercise) return;

    setEditingExerciseId(exerciseId);
    setEditingExerciseName(exercise.name);
    setEditSetDetails(
      exercise.setDetails.map((set) => ({
        ...set,
      })),
    );
    setEditRestValue(exercise.rest || "");
    setEditModalVisible(true);
  };

  const handleChangeEditSetReps = (setId: string, value: string) => {
    setEditSetDetails((prev) =>
      prev.map((set) =>
        set.id === setId
          ? {
              ...set,
              reps: Number(value.replace(/[^0-9]/g, "")) || 0,
            }
          : set,
      ),
    );
  };

  const handleChangeEditSetWeight = (setId: string, value: string) => {
    setEditSetDetails((prev) =>
      prev.map((set) => (set.id === setId ? { ...set, weight: value } : set)),
    );
  };

  const handleSaveEditedExercise = () => {
    if (!editingExerciseId) return;

    if (editSetDetails.length === 0) {
      Alert.alert("No sets", "Exercise must have at least 1 set.");
      return;
    }

    const invalidSet = editSetDetails.find(
      (set) => !set.reps || set.reps <= 0 || !set.weight.trim(),
    );

    if (invalidSet) {
      Alert.alert(
        "Invalid set details",
        "Please fill valid reps and weight for all sets.",
      );
      return;
    }

    if (!editRestValue.trim()) {
      Alert.alert("Rest required", "Please enter rest time.");
      return;
    }

    setTodaysExercises((prev) =>
      prev.map((exercise) => {
        if (exercise.id !== editingExerciseId) return exercise;

        const firstSet = editSetDetails[0];

        return {
          ...exercise,
          sets: editSetDetails.length,
          reps: firstSet?.reps ?? exercise.reps,
          weight: firstSet?.weight ?? exercise.weight,
          rest: editRestValue.trim(),
          setDetails: editSetDetails,
          done:
            editSetDetails.length > 0 &&
            editSetDetails.every((set) => set.done === true),
        };
      }),
    );

    closeEditModal();
  };

  const handleAddOneMoreSet = () => {
    setEditSetDetails((prev) => {
      const last = prev[prev.length - 1];

      return [
        ...prev,
        {
          id: `${Date.now()}_${prev.length + 1}`,
          setNumber: prev.length + 1,
          reps: last?.reps ?? 10,
          weight: last?.weight ?? "0kg",
          done: false,
        },
      ];
    });
  };

  const handleDeleteEditSet = (setId: string) => {
    setEditSetDetails((prev) => {
      if (prev.length <= 1) {
        Alert.alert("Minimum 1 set required");
        return prev;
      }

      const filtered = prev.filter((set) => set.id !== setId);

      return filtered.map((set, index) => ({
        ...set,
        setNumber: index + 1,
      }));
    });
  };

  const closeEditModal = () => {
    setEditModalVisible(false);
    setEditingExerciseId(null);
    setEditingExerciseName("");
    setEditSetDetails([]);
    setEditRestValue("");
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 140 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.smallText}>Today&apos;s Training</Text>
            <Text style={styles.heading}>Workout Log</Text>
          </View>

          <TouchableOpacity
    style={styles.headerIconBtn}
    onPress={() => setShowCalendar(true)}
>

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
          <View style={styles.heroGlowOne} />
          <View style={styles.heroGlowTwo} />

          <View style={styles.heroTopRow}>
            <View>
              <Text style={styles.heroDate}>{todayDateLabel}</Text>
              <Text style={styles.heroTitle}>{workoutSummary.title}</Text>
              <Text style={styles.heroSubtitle}>{workoutSummary.subtitle}</Text>
            </View>

            <View style={styles.heroBadge}>
              <Ionicons name="time-outline" size={14} color="#A855F7" />
              <Text style={styles.heroBadgeText}>{estimatedDuration}</Text>
            </View>
          </View>

          <View style={styles.heroProgressWrap}>
            <View style={styles.heroProgressRow}>
              <Text style={styles.heroProgressLabel}>Workout Progress</Text>
              <Text style={styles.heroProgressValue}>{progress}%</Text>
            </View>

            <View style={styles.heroProgressBar}>
              <LinearGradient
                colors={["#4F46E5", "#A855F7"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.heroProgressFill, { width: `${progress}%` }]}
              />
            </View>
          </View>
        </LinearGradient>

        {/* Stats */}
        <View style={styles.statsRow}>
          <StatCard
            icon="barbell-outline"
            label="Exercises"
            value={String(todaysExercises.length)}
            sub="Today"
            color="#3B82F6"
          />
          <StatCard
            icon="layers-outline"
            label="Total Sets"
            value={String(totalSets)}
            sub="Sets"
            color="#A855F7"
          />
          <StatCard
            icon="checkmark-done-outline"
            label="Done"
            value={String(completedExercises)}
            sub="Completed"
            color="#22C55E"
          />
        </View>

        {/* Section Header */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Today&apos;s Exercises</Text>
            <Text style={styles.sectionSubTitle}>
              Log what you&apos;re training today
            </Text>
          </View>

          <TouchableOpacity
            style={styles.addMiniBtn}
            onPress={() => {
  if (!isToday) {
    Alert.alert("Past Workout", "Previous workouts are read only.");
    return;
  }

  setAddModalVisible(true);
}}
          >
            <Ionicons name="add" size={16} color="#FFFFFF" />
            <Text style={styles.addMiniBtnText}>Add</Text>
          </TouchableOpacity>
        </View>

        {/* Exercise List */}
        {todaysExercises.length === 0 ? (
          <View style={styles.emptyWorkoutCard}>
            <Ionicons name="barbell-outline" size={30} color="#6B7280" />
            <Text style={styles.emptyWorkoutTitle}>No exercises added yet</Text>
            <Text style={styles.emptyWorkoutSub}>
              Tap on Add to build today&apos;s workout
            </Text>

            <TouchableOpacity
              style={styles.emptyWorkoutBtn}
              onPress={() => {
  if (!isToday) {
    Alert.alert(
      "Past Workout",
      "Previous workouts are read only."
    );
    return;
  }

  setAddModalVisible(true);
}}
            >
              <Text style={styles.emptyWorkoutBtnText}>Add Exercise</Text>
            </TouchableOpacity>
          </View>
        ) : (
          todaysExercises.map((exercise, index) => (
            <ExerciseCard
              key={exercise.id}
              index={index + 1}
              exercise={exercise}
              isExpanded={expandedExerciseId === exercise.id}
              onToggleExpand={() => handleToggleExpandExercise(exercise.id)}
              onDelete={() => handleDeleteExercise(exercise.id, exercise.name)}
              onToggleDone={() => handleToggleDone(exercise.id)}
              onEdit={() => handleEditExercise(exercise.id)}
              onToggleSetDone={(setId) =>
                handleToggleSetDone(exercise.id, setId)
              }
              readOnly={!isToday}
            />
          ))
        )}

        {/* Bottom Buttons */}
        <TouchableOpacity activeOpacity={0.7} style={styles.primaryButtonWrap}>
          <LinearGradient
            colors={["#4F46E5", "#A855F7"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.primaryButton}
          >
            <Ionicons name="play" size={18} color="#FFFFFF" />
            <Text style={styles.primaryButtonText}>
              Start / Continue Workout
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <Pressable
  onPress={() => {
    if (!isToday) {
      Alert.alert(
        "Past Workout",
        "Previous workouts cannot be edited."
      );
      return;
    }

    setSaveModalVisible(true);
  }}
  style={({ pressed }) => [
    styles.secondaryButton,
    {
      opacity: pressed ? 0.6 : 1,
      transform: [{ scale: pressed ? 0.97 : 1 }],
    },
  ]}
>
  <Ionicons name="save-outline" size={18} color="#93a4ba" />
  <Text style={styles.secondaryButtonText}>
    Save Today&apos;s Workout
  </Text>
</Pressable>
      </ScrollView>

      {/* Floating Add Exercise Button */}
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.fab}
        onPress={() => {
          if (!isToday) {
            Alert.alert(
              "Past Workout",
              "Previous workouts are read only."
            );
            return;
          }

          setAddModalVisible(true);
        }}
      >
        <LinearGradient
          colors={["#7C3AED", "#3B82F6"]}
          style={styles.fabGradient}
        >
          <Ionicons name="add" size={28} color="#FFFFFF" />
        </LinearGradient>
      </TouchableOpacity>

      {/* ---------------- ADD EXERCISE MODAL ---------------- */}
      <Modal
        visible={addModalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setAddModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalSheet}>
            <View style={styles.modalHeader}>
              <View>
                <Text style={styles.modalTitle}>Add Exercise</Text>
                <Text style={styles.modalSubTitle}>
                  Pick an exercise for today&apos;s workout
                </Text>
              </View>

              <TouchableOpacity
                style={styles.modalCloseBtn}
                onPress={() => setAddModalVisible(false)}
              >
                <Ionicons name="close" size={22} color="#FFFFFF" />
              </TouchableOpacity>
            </View>

            <View style={styles.searchBox}>
              <Ionicons name="search-outline" size={18} color="#94A3B8" />
              <TextInput
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Search chest, back, squat..."
                placeholderTextColor="#6B7280"
                style={styles.searchInput}
              />
            </View>

            <FlatList
              data={filteredExercises}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 24 }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.libraryCard}
                  onPress={() => handleOpenExerciseDetail(item)}
                >
                  <View style={styles.libraryContent}>
                    <Text style={styles.libraryName}>{item.name}</Text>
                    <Text style={styles.libraryMuscle}>{item.muscle}</Text>

                    <View style={styles.libraryMetaRow}>
                      <MetaPill
                        icon="layers-outline"
                        text={`${item.defaultSets} sets`}
                      />
                      <MetaPill
                        icon="fitness-outline"
                        text={`${item.defaultReps} reps`}
                      />
                    </View>
                  </View>

                  <Ionicons name="chevron-forward" size={18} color="#CBD5E1" />
                </TouchableOpacity>
              )}
              ListEmptyComponent={
                <View style={styles.emptyWrap}>
                  <Ionicons name="barbell-outline" size={28} color="#6B7280" />
                  <Text style={styles.emptyText}>No exercises found</Text>
                </View>
              }
            />
          </View>
        </View>
      </Modal>

      {/* ---------------- EXERCISE DETAIL MODAL ---------------- */}
      <Modal
        visible={detailModalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setDetailModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.detailSheet}>
            {selectedExercise && (
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 24 }}
              >
                <View style={styles.detailImageWrap}>
                  <TouchableOpacity
                    style={styles.detailCloseBtn}
                    onPress={() => setDetailModalVisible(false)}
                  >
                    <Ionicons name="close" size={22} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>

                <View style={styles.detailContent}>
                  <Text style={styles.detailName}>{selectedExercise.name}</Text>

                  <Text style={styles.detailMuscle}>
                    Primary Muscle: {selectedExercise.muscle}
                  </Text>

                  {!!selectedExercise.secondaryMuscles?.length && (
                    <Text style={styles.detailSecondaryMuscles}>
                      Secondary Muscles:{" "}
                      {selectedExercise.secondaryMuscles.join(", ")}
                    </Text>
                  )}

                  <View style={styles.detailPillsRow}>
                    <MetaPill
                      icon="layers-outline"
                      text={`${selectedExercise.defaultSets} Sets`}
                    />
                    <MetaPill
                      icon="fitness-outline"
                      text={`${selectedExercise.defaultReps} Reps`}
                    />
                    <MetaPill
                      icon="time-outline"
                      text={`Rest ${selectedExercise.defaultRest}`}
                    />
                  </View>

                  <View style={styles.detailPillsRow}>
                    <MetaPill
                      icon="barbell-outline"
                      text={selectedExercise.defaultWeight}
                    />
                    <MetaPill
                      icon="construct-outline"
                      text={selectedExercise.equipment}
                    />
                    <MetaPill
                      icon="flash-outline"
                      text={selectedExercise.difficulty}
                    />
                  </View>

                  <View style={styles.infoCard}>
                    <Text style={styles.infoCardTitle}>Target Muscles</Text>
                    <Text style={styles.infoCardText}>
                      Main: {selectedExercise.muscle}
                      {selectedExercise.secondaryMuscles?.length
                        ? `\nSecondary: ${selectedExercise.secondaryMuscles.join(
                            ", ",
                          )}`
                        : ""}
                    </Text>
                  </View>

                  {!!selectedExercise.instructions?.length && (
                    <View style={styles.infoCard}>
                      <Text style={styles.infoCardTitle}>How to Perform</Text>

                      {selectedExercise.instructions.map((step, idx) => (
                        <View
                          key={`${selectedExercise.id}-step-${idx}`}
                          style={styles.bulletRow}
                        >
                          <View style={styles.bulletDot} />
                          <Text style={styles.infoBulletText}>{step}</Text>
                        </View>
                      ))}
                    </View>
                  )}

                  {!!selectedExercise.tips?.length && (
                    <View style={styles.infoCard}>
                      <Text style={styles.infoCardTitle}>Form Tips</Text>

                      {selectedExercise.tips.map((tip, idx) => (
                        <View
                          key={`${selectedExercise.id}-tip-${idx}`}
                          style={styles.bulletRow}
                        >
                          <Ionicons
                            name="checkmark-circle"
                            size={16}
                            color="#22C55E"
                            style={{ marginTop: 2 }}
                          />
                          <Text style={styles.infoBulletText}>{tip}</Text>
                        </View>
                      ))}
                    </View>
                  )}

                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.addExerciseButtonWrap}
                    onPress={() => handleAddExerciseToWorkout(selectedExercise)}
                  >
                    <LinearGradient
                      colors={["#4F46E5", "#A855F7"]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.addExerciseButton}
                    >
                      <Ionicons
                        name="add-circle-outline"
                        size={18}
                        color="#fff"
                      />
                      <Text style={styles.addExerciseButtonText}>
                        Add to Today&apos;s Workout
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            )}
          </View>
        </View>
      </Modal>

      {/* ---------------- EDIT EXERCISE MODAL ---------------- */}
      <Modal
        visible={editModalVisible}
        animationType="slide"
        transparent
        onRequestClose={closeEditModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalSheet}>
            <View style={styles.modalHeader}>
              <View>
                <Text style={styles.modalTitle}>Edit Exercise</Text>
                <Text style={styles.modalSubTitle}>
                  {editingExerciseName || "Update set details"}
                </Text>
              </View>

              <TouchableOpacity
                style={styles.modalCloseBtn}
                onPress={closeEditModal}
              >
                <Ionicons name="close" size={22} color="#FFFFFF" />
              </TouchableOpacity>
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 24 }}
            >
              {editSetDetails.map((set, index) => (
                <View
                  key={set.id}
                  style={{
                    backgroundColor: "#111827",
                    borderRadius: 18,
                    padding: 14,
                    marginBottom: 12,
                    borderWidth: 1,
                    borderColor: "#1F2937",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 12,
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: "700",
                      }}
                    >
                      Set {index + 1}
                    </Text>

                    <TouchableOpacity
                      onPress={() => handleDeleteEditSet(set.id)}
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 16,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#1F2937",
                      }}
                    >
                      <Ionicons
                        name="trash-outline"
                        size={16}
                        color="#F87171"
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.searchBox}>
                    <Ionicons
                      name="fitness-outline"
                      size={18}
                      color="#94A3B8"
                    />
                    <TextInput
                      value={String(set.reps)}
                      onChangeText={(value) =>
                        handleChangeEditSetReps(set.id, value)
                      }
                      placeholder="Reps"
                      placeholderTextColor="#6B7280"
                      keyboardType="numeric"
                      style={styles.searchInput}
                    />
                  </View>

                  <View style={[styles.searchBox, { marginTop: 10 }]}>
                    <Ionicons
                      name="barbell-outline"
                      size={18}
                      color="#94A3B8"
                    />
                    <TextInput
                      value={set.weight}
                      onChangeText={(value) =>
                        handleChangeEditSetWeight(set.id, value)
                      }
                      placeholder="Weight (e.g. 20kg)"
                      placeholderTextColor="#6B7280"
                      style={styles.searchInput}
                    />
                  </View>
                </View>
              ))}

              <TouchableOpacity
                onPress={handleAddOneMoreSet}
                activeOpacity={0.7}
                style={{
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: "#374151",
                  paddingVertical: 14,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 14,
                  flexDirection: "row",
                  gap: 8,
                  backgroundColor: "#0F172A",
                }}
              >
                <Ionicons name="add-circle-outline" size={18} color="#A855F7" />
                <Text
                  style={{
                    color: "#E5E7EB",
                    fontWeight: "700",
                    fontSize: 14,
                  }}
                >
                  Add Another Set
                </Text>
              </TouchableOpacity>

              <View style={styles.searchBox}>
                <Ionicons name="time-outline" size={18} color="#94A3B8" />
                <TextInput
                  value={editRestValue}
                  onChangeText={setEditRestValue}
                  placeholder="Rest time (e.g. 60s)"
                  placeholderTextColor="#6B7280"
                  style={styles.searchInput}
                />
              </View>

              <View style={{ flexDirection: "row", gap: 12, marginTop: 18 }}>
                <TouchableOpacity
                  style={[styles.secondaryButton, { flex: 1, marginTop: 0 }]}
                  onPress={closeEditModal}
                >
                  <Text style={styles.secondaryButtonText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.primaryButtonWrap, { flex: 1 }]}
                  onPress={handleSaveEditedExercise}
                  activeOpacity={0.7}
                >
                  <LinearGradient
                    colors={["#4F46E5", "#A855F7"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.primaryButton}
                  >
                    <Text style={styles.primaryButtonText}>Save</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <Modal
  visible={saveModalVisible}
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
        name="save-outline"
        size={42}
        color="#A855F7"
        style={{ alignSelf: "center", marginBottom: 12 }}
      />

      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        Save Workout?
      </Text>

      <Text
        style={{
          color: "#9CA3AF",
          textAlign: "center",
          marginTop: 10,
          lineHeight: 22,
        }}
      >
        Do you want to save today's workout?
      </Text>

      <View
        style={{
          flexDirection: "row",
          marginTop: 24,
          gap: 12,
        }}
      >
        <TouchableOpacity
          style={[styles.secondaryButton, { flex: 1, marginTop: 0 }]}
          onPress={() => setSaveModalVisible(false)}
        >
          <Text style={styles.secondaryButtonText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={async () => {
            setSaveModalVisible(false);

            try {
              await api.post("/workout", {
                userId: "1",
                workoutDate: selectedDate,
                exercises: todaysExercises,
              });

              Alert.alert("Success", "Workout Saved");
            } catch (err) {
              Alert.alert("Error", "Failed to save workout");
            }
          }}
        >
          <LinearGradient
            colors={["#4F46E5", "#A855F7"]}
            style={styles.primaryButton}
          >
            <Text style={styles.primaryButtonText}>Save</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</Modal>

<Modal
  visible={showCalendar}
  transparent
  animationType="fade"
  onRequestClose={() => setShowCalendar(false)}
>
  <View style={styles.modalOverlay}>
    <View style={styles.calendarContainer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "700",
          }}
        >
          Workout Calendar
        </Text>

        <TouchableOpacity onPress={() => setShowCalendar(false)}>
          <Ionicons name="close" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <Calendar
        current={selectedDate}
        maxDate={today}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
          setShowCalendar(false);
        }}
        theme={{
          backgroundColor: "#111827",
          calendarBackground: "#111827",

          dayTextColor: "#fff",
          monthTextColor: "#fff",
          textDisabledColor: "#4B5563",

          todayTextColor: "#A855F7",

          selectedDayBackgroundColor: "#7C3AED",
          selectedDayTextColor: "#fff",

          arrowColor: "#A855F7",

          textMonthFontWeight: "700",
          textDayFontWeight: "600",
        }}
      />
    </View>
  </View>
</Modal>
    </View>
  );
}

/* ====================================================== */
/* ---------------- stat card ---------------- */

function StatCard({
  icon,
  label,
  value,
  sub,
  color,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string | number;
  sub: string;
  color: string;
}) {
  return (
    <View style={styles.statCard}>
      <View style={[styles.statIconWrap, { backgroundColor: `${color}22` }]}>
        <Ionicons name={icon} size={18} color={color} />
      </View>

      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statSub}>{sub}</Text>
    </View>
  );
}

/* ====================================================== */
/* ---------------- exercise card ---------------- */
function ExerciseCard({
  index,
  exercise,
  isExpanded,
  onToggleExpand,
  onDelete,
  onToggleDone,
  onEdit,
  onToggleSetDone,
  readOnly,
}: {

  index: number;
  exercise: Exercise;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onDelete: () => void;
  onToggleDone: () => void;
  onEdit: () => void;
  onToggleSetDone: (setId: string) => void;
  readOnly: boolean;
}) {
  const completedSets = exercise.setDetails.filter((set) => set.done).length;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onToggleExpand}
      style={styles.exerciseCard}
    >
      {/* top summary */}
      <View style={styles.exerciseTop}>
        <View style={styles.exerciseLeft}>
          <View style={styles.exerciseIndexWrap}>
            <Text style={styles.exerciseIndex}>{index}</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.exerciseTitle}>{exercise.name}</Text>
            <Text style={styles.exerciseMuscle}>{exercise.muscle}</Text>
          </View>
        </View>

        <View style={styles.exerciseTopRight}>
          <Text style={styles.exerciseWeight}>
            {completedSets}/{exercise.setDetails.length} sets
          </Text>

          <View
            style={[
              styles.statusBadge,
              exercise.done
                ? styles.statusBadgeDone
                : styles.statusBadgePending,
            ]}
          >
            <Text
              style={[
                styles.statusBadgeText,
                exercise.done
                  ? styles.statusBadgeTextDone
                  : styles.statusBadgeTextPending,
              ]}
            >
              {exercise.done ? "Done" : "Pending"}
            </Text>
          </View>
        </View>
      </View>

      {/* compact meta row */}
      <View style={styles.exerciseMetaRow}>
        <MetaPill
          icon="layers-outline"
          text={`${exercise.setDetails.length} Sets`}
        />
        <MetaPill icon="repeat-outline" text={`${exercise.reps} Reps`} />
        <MetaPill icon="time-outline" text={`Rest ${exercise.rest}`} />
      </View>

      {/* expand / collapse row */}
      <View
        style={{
          marginTop: 12,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 10,
          borderTopWidth: 1,
          borderTopColor: "#1F2937",
        }}
      >
        <Text
          style={{
            color: "#A1A1AA",
            fontSize: 13,
            fontWeight: "600",
          }}
        >
          {isExpanded ? "Hide details" : "View full set details"}
        </Text>

        <Ionicons
          name={isExpanded ? "chevron-up" : "chevron-down"}
          size={18}
          color="#CBD5E1"
        />
      </View>

      {/* expanded content */}
      {isExpanded && (
        <>
          {/* per set rows */}
          <View style={{ marginTop: 14, gap: 10 }}>
            {exercise.setDetails.map((set) => (
              <View
                key={set.id}
                style={{
                  backgroundColor: "#0F172A",
                  borderRadius: 14,
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  borderWidth: 1,
                  borderColor: "#1F2937",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 14,
                      fontWeight: "700",
                      marginBottom: 4,
                    }}
                  >
                    Set {set.setNumber}
                  </Text>
                  <Text style={{ color: "#94A3B8", fontSize: 13 }}>
                    {set.reps} reps • {set.weight}
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => {if (readOnly) return;onToggleSetDone(set.id);}}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 6,
                    backgroundColor: set.done ? "#14532D" : "#1F2937",
                    paddingHorizontal: 12,
                    paddingVertical: 8,
                    borderRadius: 999,
                  }}
                >
                  <Ionicons
                    name={set.done ? "checkmark-circle" : "ellipse-outline"}
                    size={16}
                    color="#FFFFFF"
                  />
                  <Text style={{ color: "#FFFFFF", fontWeight: "700" }}>
                    {set.done ? "Done" : "Mark"}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {/* bottom actions */}
          <View style={styles.exerciseBottom}>
            <TouchableOpacity
              style={styles.actionBtn}
              onPress={(e) => {
    e.stopPropagation?.();

    if (readOnly) {
        Alert.alert(
            "Past Workout",
            "Previous workouts cannot be edited."
        );
        return;
    }

    onEdit();
}}
            >
              <Ionicons name="create-outline" size={16} color="#CBD5E1" />
              <Text style={styles.actionBtnText}>Edit Sets</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionBtn}
              onPress={(e) => {
    e.stopPropagation?.();

    if (readOnly) {
        Alert.alert(
            "Past Workout",
            "Previous workouts cannot be edited."
        );
        return;
    }

    onDelete();
}}
            >
              <Ionicons name="trash-outline" size={16} color="#F87171" />
              <Text style={[styles.actionBtnText, { color: "#F87171" }]}>
                Remove
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.completeBtn,
                exercise.done && styles.completeBtnDone,
              ]}
              onPress={(e) => {
    e.stopPropagation?.();

    if (readOnly) {
        Alert.alert(
            "Past Workout",
            "Previous workouts cannot be edited."
        );
        return;
    }

    onToggleDone();
}}
            >
              <Ionicons
                name={exercise.done ? "checkmark-circle" : "ellipse-outline"}
                size={18}
                color="#FFFFFF"
              />
              <Text style={styles.completeBtnText}>
                {exercise.done ? "Completed" : "Mark All"}
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
}
/* ====================================================== */
/* ---------------- meta pill ---------------- */

function MetaPill({
  icon,
  text,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  text: string;
}) {
  return (
    <View style={styles.metaPill}>
      <Ionicons name={icon} size={14} color="#A855F7" />
      <Text style={styles.metaPillText}>{text}</Text>

    </View>
  );
}
