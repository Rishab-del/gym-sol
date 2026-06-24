import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { GlassView } from "expo-glass-effect";

type GlassCardProps = {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
};

export default function GlassCard({
  children,
  style,
}: GlassCardProps) {
  return (
    <GlassView style={[styles.card, style]}>
      {children}
    </GlassView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111827",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#1F2937",
    overflow: "hidden",
  },
});