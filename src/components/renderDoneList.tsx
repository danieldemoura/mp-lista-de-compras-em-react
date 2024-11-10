import { RenderShoppingListProps } from "./renderShoppingList"
import { useEffect, useState } from "react";
import { useRemoveItem } from "../hooks/useRemoveItem";

import todo from '../assets/todo.svg';
import trash from '../assets/trash.svg';
import done from '../assets/done.svg';

interface Item {
    id: number;
    item: string;
    quantity: string;
    done: boolean;
}

export const RenderDoneList = ({ items, setItems }: RenderShoppingListProps) => {
    const [itemsDone, setItemsDone] = useState([])

    useEffect(() => {
        console.log(items, 'feito')
        setItemsDone(items.filter(product => product.done));

    }, [items])
    
    return (
        <>
            {itemsDone && itemsDone.map((product: Item) => (
                <>
                    <article className="flex w-full gap-4" key={product.id} id={String(product.id)}>
                        <img src={product.done ? done : todo} alt="#" />
                        <div className="flex-1">
                            <p className="line-through text-slate-400">{product.item}</p>
                            <p className="text-sm line-through text-slate-400">{product.quantity}</p>
                        </div>
                        <img
                            src={trash}
                            alt="ícone de lixeira"
                            className="justify-self-end cursor-pointer"
                            onClick={(event) => useRemoveItem(event, items, setItems)}
                        />
                    </article>
                    <hr />
                </>
            ))}
        </>
    )
}