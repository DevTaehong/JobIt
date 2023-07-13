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
        document.body.classList.remove('light')
        document.body.classList.remove('dark')
        document.body.classList.add(theme)
    }, [theme])



    
    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <Switch onCheckedChange={swap}>test</Switch>
            </div>
        </>
    );
}

{/* <div className="bg-zinc-950 dark:bg-white">
    <StateSwitch />
</div> */}
