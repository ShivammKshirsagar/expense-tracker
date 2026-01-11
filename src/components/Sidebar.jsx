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
            <div className="sidebar p-4 w-64 h-lvh bg-[#fafafafa]">
                <ul className="flex flex-col gap-4 items-center">
                    {menuItems.map((item) => {
                        return (
                            <li key={item} className="cursor-pointer hover:bg-blue-50 transition rounded-md">
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    );
}