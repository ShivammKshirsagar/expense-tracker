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
            <form action="post" onSubmit={submit} className="flex flex-col w-1/6" >
                <label>Title</label>
                <input type="text" placeholder="Enter" value={form.title} name="title" onChange={handleChange} />
                <label>Amount</label>
                <input type="number" placeholder="Enter Amount" value={form.amount} name="amount" onChange={handleChange} />
                <label>Category</label>
                <input type="text" value={form.category} name="category" onChange={handleChange} />
                <label>Date</label>
                <input type="date" placeholder="Enter Date" value={form.date} name="date" onChange={handleChange} />
                <label>Payment Method</label>
                <input type="text" value={form.paymentMethod} name="paymentMethod" onChange={handleChange} />
                <button type="submit" className="border py-2 px-1 rounded-xl hover:bg-blue-300">Submit</button>
            </form>
        </>
    )
}