import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRoute } from "../layout/useRoute";
import { auth } from "../firebace/config";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { authStateChangesUsers } from "../Screens/redux/auth/authOperations";

export const Main = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth.stateChange);
  auth.onAuthStateChanged((user) => setUser(user));

  useEffect(() => {
    dispatch(authStateChangesUsers());
  });

  const routing = useRoute(state);

  return <NavigationContainer>{routing}</NavigationContainer>;
};
