//
"use client";

import { Switch } from "@/components/ui/switch";
import { useSelector, useDispatch } from "react-redux";
import { setLight, setDark } from "@/redux/feature/theme/themeSlice";
import { RootState } from "@/redux/store";
import { useEffect } from "react";

export default function StateSwitch() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.value);
  const swap = (check: boolean) => {
    if (check) {
      dispatch(setDark());
    } else {
      dispatch(setLight());
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <Switch onCheckedChange={swap}>test</Switch>
      </div>
    </>
  );
}
