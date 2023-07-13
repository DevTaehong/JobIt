//
"use client"

import { Switch } from "@/components/ui/switch"


export default function StateSwitch() {
    const swap = (check: boolean) => {
        if (check) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        // Whenever the user explicitly chooses light mode
        localStorage.theme = 'light'

        // Whenever the user explicitly chooses dark mode
        localStorage.theme = 'dark'

        // Whenever the user explicitly chooses to respect the OS preference
        localStorage.removeItem('theme')
    }





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
