import { useState } from "react"

export function AddExpense({ setExpenses }) {

    const [form, setForm] = useState(
        {
            title: "",
            amount: "",
            category: "",
            date: "",
            paymentMethod: ""
        }
    )

    const handleChange = (e) => {
        const {name,value,type} = e.target;

        setForm((prev)=>({
            ...prev,
            [name]:type==="number"?Number(value):value,
        }))
    }


    function submit(e) {
        e.preventDefault();
        if((!form.title || !form.amount)){
            return;
        }


        setExpenses((prev)=>[
            ...prev,
            {
                id:crypto.randomUUID(),
                ...form,
            },
        ]);

        setForm({
            title: "",
            amount: "",
            category: "",
            date: "",
            paymentMethod: ""
        })
    }

    return (
        <>
            <form action="post" onSubmit={submit} className="flex flex-col w-1/4 font-semibold gap-1" >
                <label>Title</label>
                <input className="pl-1.5 rounded-md bg-gray-100 font-medium" type="text" placeholder="Enter Title" value={form.title} name="title" onChange={handleChange} />
                <label>Amount</label>
                <input className="pl-1.5 rounded-md bg-gray-100 font-medium" type="number" placeholder="Enter Amount" value={form.amount} name="amount" onChange={handleChange} />
                <label>Category</label>
                <input className="pl-1.5 rounded-md bg-gray-100 font-medium" type="text" placeholder="Enter Category" value={form.category} name="category" onChange={handleChange} />
                <label>Date</label>
                <input className="pl-1.5 rounded-md bg-gray-100 font-medium" type="date" placeholder="Enter Date" value={form.date} name="date" onChange={handleChange} />
                <label>Payment Method</label>
                <input className="pl-1.5 rounded-md bg-gray-100 font-medium" type="text" placeholder="Enter Payment Method" value={form.paymentMethod} name="paymentMethod" onChange={handleChange} />
                <button type="submit" className="mt-1 border-0 py-1 px-1 w-1/2 rounded-xl bg-blue-200 hover:bg-blue-300">Submit</button>
            </form>
        </>
    )
}