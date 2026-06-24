import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,

        tabBarStyle: {
          position: "absolute",
          left: 14,
          right: 14,
          bottom: 14,
          height: 72,
          backgroundColor: "rgba(8, 15, 32, 0.96)",
          borderTopWidth: 0,
          borderRadius: 24,
          paddingTop: 10,
          paddingBottom: 10,
          paddingHorizontal: 10,
          elevation: 0,
        },

        tabBarActiveTintColor: "#3B82F6",
        tabBarInactiveTintColor: "#64748B",

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "700",
          marginTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size ?? 22}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="food"
        options={{
          title: "Food",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "restaurant" : "restaurant-outline"}
              size={size ?? 22}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="workout"
        options={{
          title: "Workout",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "barbell" : "barbell-outline"}
              size={size ?? 22}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size ?? 22}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}