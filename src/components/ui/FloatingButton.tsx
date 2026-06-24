import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type FloatingButtonProps = {
  onPress?: () => void;
};

export default function FloatingButton({
  onPress,
}: FloatingButtonProps) {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      <Text style={styles.fabText}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 25,
    bottom: 90,
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: "#3B82F6",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#3B82F6",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 15,
  },
  fabText: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "bold",
  },
});
