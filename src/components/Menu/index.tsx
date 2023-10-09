import { useRoute } from "@react-navigation/native";

import { MenuWrapper, MenuBar, IconHandler, Icon } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export function Menu() {
  const routeIcons = [
    {
      routeName: "Home",
      iconName: require("../../assets/icons/HomeIcon.png"),
    },
    {
      routeName: "Search",
      iconName: require("../../assets/icons/SearchIcon.png"),
    },
    {
      routeName: "Favorites",
      iconName: require("../../assets/icons/HeartIcon.png"),
    },
    {
      routeName: "Settings",
      iconName: require("../../assets/icons/SettingsIcon.png"),
    },
  ];

  const route = useRoute();

  return (
    <MenuWrapper>
      <MenuBar>
        {routeIcons.map((item) => (
          <TouchableOpacity>
            <IconHandler
              key={item.routeName}
              style={{
                backgroundColor:
                  route.name === item.routeName ? "#fff" : "transparent",
                borderColor:
                  route.name === item.routeName ? "#303030" : "transparent",
              }}
            >
              <Icon
                source={item.iconName}
                active={route.name === item.routeName}
                style={{
                  tintColor: route.name === item.routeName ? "#303030" : "#fff",
                }}
              />
            </IconHandler>
          </TouchableOpacity>
        ))}
      </MenuBar>
    </MenuWrapper>
  );
}
