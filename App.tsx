import { useFonts } from "expo-font";

import { Routes } from "./src/Routes";

export default function App() {
  const [isFontsLoaded] = useFonts({
    "GeneralSans-400": require("./src/assets/fonts/GeneralSans-Regular.otf"),
    "GeneralSans-500": require("./src/assets/fonts/GeneralSans-Semibold.otf"),
    "GeneralSans-600": require("./src/assets/fonts/GeneralSans-Bold.otf"),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return <Routes />;
}
