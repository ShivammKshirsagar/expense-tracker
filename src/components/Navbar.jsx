import { Logo } from "./Logo";
import { Profile } from "./Profile";

export function Navbar(){

    return(
        <>
        <div className="navbar flex items-center justify-between mx-3 bg-[#fafafafa]">

            <div className="left-side flex items-center gap-2 mt-4">
                <Logo/>
                <h3 className="text-3xl font-semibold text-[#0a376a]">ExpenseTracker</h3>
            </div>
            <div className="right-side cursor-pointer mt-4">
                <Profile/>
            </div>
        </div>
        </>
    );
}