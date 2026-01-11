export function Expense() {
    const expenses = [
        {
            id: 1,
            title: "Groceries",
            amount: 2450,
            category: "Food",
            date: "2026-01-05",
            paymentMethod: "UPI",
        },
        {
            id: 2,
            title: "Netflix Subscription",
            amount: 499,
            category: "Entertainment",
            date: "2026-01-03",
            paymentMethod: "Card",
        },
        {
            id: 3,
            title: "Electricity Bill",
            amount: 1860,
            category: "Bills",
            date: "2026-01-01",
            paymentMethod: "UPI",
        },
        {
            id: 4,
            title: "Cab to Office",
            amount: 320,
            category: "Transport",
            date: "2026-01-06",
            paymentMethod: "Cash",
        },
        {
            id: 5,
            title: "Coffee with Friends",
            amount: 280,
            category: "Food",
            date: "2026-01-04",
            paymentMethod: "UPI",
        },
    ];

    const heading = [
        "Title",
        "Amount",
        "Category",
        "Date",
        "Payment Method",
    ]

    const gridCols = "grid grid-cols-[2fr_1fr_1.5fr_1.5fr_1fr]";
    return (
        <>
            <div className="expense-list w-full m-4 border-4 rounded-lg border-[#fafafa]">
                <div className={`headings ${gridCols} p-3 font-semibold `}>
                    {heading.map((headings) => {
                        return (
                            <span key={headings}>{headings}</span>
                        )
                    })}

                </div>

                <div className={`list  p-3`}>
                    {expenses.map((expense) => {
                        return (
                            <div key={expense.id} className={`flex ${gridCols}  odd:bg-gray-50 justify-between items-center`}>
                                <span>{expense.title}</span>
                                <span>${expense.amount}</span>
                                <span >{expense.category}</span>
                                <span>{expense.date}</span>
                                <span>{expense.paymentMethod}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}