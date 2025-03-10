// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return <Stack />;
// }

// app/_layout.tsx
import { Slot } from 'expo-router';
import React from 'react';

export default function Layout() {
  return <Slot />;
}
