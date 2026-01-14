import { useState } from "react";
import { AddExpense } from "./AddExpense";

export function Expense() {
    const [expenses, setExpenses] = useState([
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
    ])

    const heading = [
        "Title",
        "Amount",
        "Category",
        "Date",
        "Payment Method",
        "Action"
    ]

    function handleDelete(id) {
        setExpenses((prev) => prev.filter((expense) => expense.id != id));
    }

    const totalExpense = expenses.reduce((total,expense)=>{
            return total+expense.amount;
        },0)
    

    const gridCols ="grid grid-cols-[2fr_1fr_1.5fr_1.5fr_1fr_0.8fr]";

    return (
        <>
            <div className="flex items-center justify-around">
                <h2 className="font-poppins text-lg font-semibold px-6 py-4 bg-gray-50 rounded-xl shadow-sm">Total Expense: ₹{totalExpense}</h2>
                <AddExpense setExpenses={setExpenses} />
            </div>
            <div className="expense-list w-full m-4 border-4 rounded-lg border-[#fafafa]">
                <div className={`headings ${gridCols} p-3 font-semibold `}>
                    {heading.map((headings) => {
                        return (
                            <span key={headings}>{headings}</span>
                        )
                    })}

                </div>

                <div className="list  p-2">
                    {expenses.map((expense) => {
                        return (
                            <>
                                <div key={expense.id} className={`${gridCols}  odd:bg-gray-50 justify-between items-center p-2  rounded-lg`}>
                                    <span>{expense.title}</span>
                                    <span>₹{expense.amount}</span>
                                    <span >{expense.category}</span>
                                    <span>{expense.date}</span>
                                    <span>{expense.paymentMethod}</span>
                                    <button onClick={() => handleDelete(expense.id)} className="cursor-pointer border p-1 w-[60%] rounded-2xl bg-red-500 hover:bg-red-600 text-white font-semibold">Delete</button>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}