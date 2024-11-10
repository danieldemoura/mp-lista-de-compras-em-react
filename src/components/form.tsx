import { FormEvent } from "react";

interface Item {
    id: number;
    item: string;
    quantity: string;
    done: boolean;
}

interface FormProps {
    setItems: (item: (prevItems: Item[]) => Item[]) => void;
}

export const Form = ({ setItems }: FormProps) => {

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData);

        const item = formValues.item as string;
        const quantity = formValues.quantity as string;

        const id = Date.now();

        setItems((prevItems)=> (
            [
                ...prevItems,
                { id, item, quantity, done: false }
            ]
        ))

        form.reset()
        form.item.focus()
    }

    return (
        <form className="flex gap-2" onSubmit={handleSubmit}>
            <div className="flex-shrink">
            <label htmlFor="name" className="block text-xs text-slate-400">
                Item
            </label>
            <input
                type="text"
                id="name"
                className="block w-full px-3 py-2 border rounded-lg border-slate-300 text-slate-700"
                name="item"
                required
            />
            </div>
            <div className="flex-shrink">
            <label htmlFor="quantity" className="block text-xs text-slate-400">
                Quantidade
            </label>
            <input
                type="text"
                id="quantity"
                className="block w-full px-3 py-2 border rounded-lg border-slate-300 text-slate-700"
                name="quantity"
                required
            />
            </div>
            <button className="self-end flex-shrink h-10 px-4 font-extrabold text-white rounded-lg bg-fuchsia-300">
            +
            </button>
        </form>
    )
}