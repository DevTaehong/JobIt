//
"use client"

import { Switch } from "@/components/ui/switch"
import { useSelector, useDispatch } from "react-redux";
import { setLight, setDark } from "@/app/context/feature/theme/themeSlice";
import { RootState } from "@/app/context/feature/store";
import { useEffect } from "react";

export default function StateSwitch() {
    const dispatch = useDispatch()
    const theme = useSelector((state: RootState) => state.theme.value)
    const swap = (check: boolean) => {
        if (check) {
            dispatch(setDark())
        } else {
            dispatch(setLight())
        }
    }

    useEffect(() => {
        document.body.classList.toggle('light')
        document.body.classList.toggle('dark')
        document.body.classList.add(theme)
    }, [theme])

    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <Switch onCheckedChange={swap}>test</Switch>
            </div>
        </>
    );
}

{/* <div className="bg-zinc-950 dark:bg-white">
    <StateSwitch />
</div> */}
