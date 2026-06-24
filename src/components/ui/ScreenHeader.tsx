import React from "react";
import { View, Text, StyleSheet } from "react-native";

type ScreenHeaderProps = {
  title: string;
  subtitle?: string;
  avatarText?: string;
};

export default function ScreenHeader({
  title,
  subtitle,
  avatarText = "R",
}: ScreenHeaderProps) {
  return (
    <View style={styles.header}>
      <View>
        {subtitle ? (
          <Text style={styles.subtitle}>{subtitle}</Text>
        ) : null}
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{avatarText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subtitle: {
    color: "#94A3B8",
    fontSize: 14,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "800",
    marginTop: 4,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#3B82F6",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "800",
  },
});