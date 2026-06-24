import React from "react";
import { View, Text, StyleSheet } from "react-native";
import GlassCard from "./GlassCard";

type StatCardProps = {
  emoji: string;
  value: string;
  label: string;
};

export default function StatCard({
  emoji,
  value,
  label,
}: StatCardProps) {
  return (
    <GlassCard style={styles.card}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    paddingVertical: 22,
    alignItems: "center",
    marginBottom: 15,
  },
  emoji: {
    fontSize: 28,
  },
  value: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "800",
    marginTop: 8,
  },
  label: {
    color: "#94A3B8",
    marginTop: 5,
  },
});