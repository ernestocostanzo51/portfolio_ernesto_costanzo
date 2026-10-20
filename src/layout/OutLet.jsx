import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter"

export default function OutLet(){
    return(
        <>
         <AppHeader/>
        <main>
            <Outlet/>
        </main>
        <AppFooter/>
        </>
    )
}