import { MouseEvent } from "react";
import { Product } from "../App";

export function useRemoveItem(event: MouseEvent<HTMLImageElement>, items: Product, setItems) {
    const target = event.target as HTMLElement;
    const itemSelected = target.parentElement?.id

    const itemRemoved = items.filter(item => item.id !== Number(itemSelected));
    console.log(itemSelected, 'useRemove', itemRemoved)
    setItems(itemRemoved);
}

