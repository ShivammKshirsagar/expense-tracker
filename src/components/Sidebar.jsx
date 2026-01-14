export function Sidebar() {
    const menuItems = [
        "Dashboard",
        "Expenses",
        "Categories",
        "Reports",
        "Settings"
    ]

    return (
        <>
            <div className="sidebar p-4 w-64 border-0 h-lvh bg-[#fafafafa]">
                <ul className="flex flex-col gap-5 items-center mt-6">
                    {menuItems.map((item) => {
                        return (
                            <li key={item} className="font-poppins font-semibold text-black h-full w-[60%] text-center border-0 rounded-2xl p-2 bg-gray-200 cursor-pointer hover:bg-blue-50 transition">
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    );
}