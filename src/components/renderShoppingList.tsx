import { Dispatch, useEffect, useState } from 'react';
import { Product } from '../App';
import todo from '../assets/todo.svg';
import trash from '../assets/trash.svg';
import { useRemoveItem } from '../hooks/useRemoveItem';

export interface RenderShoppingListProps {
    items: Product[];
    setItems: Dispatch<React.SetStateAction<Product[]>>;
}

export const RenderShoppingList = ({ items, setItems }: RenderShoppingListProps)=> {
    const [itemsTodo, setItemsTodo] = useState<Product[]>([]);

    useEffect(() => {
        console.log(items, "RenderShoppingList")
        const itemNotDone = items.filter(item => !item.done);
        
        setItemsTodo(itemNotDone);
    }, [items])

    function handleImageTodo(itemID: number) {

        // Atualiza o estado, mudando a propriedade done do item para true
        setItems((prevState) => (
            prevState.map(item => {
                if(item.id === itemID) {
                    return { ...item, done: Boolean(itemID)} 
                }
    
                return item
            })
        ))
    }

    return (
        <section className="mt-10 space-y-3 ">
            {itemsTodo && itemsTodo.map((product: Product) => (
                <>
                    <article className="flex w-full gap-4" key={product.id} id={String(product.id)}>
                        <img src={todo} alt="#" onClick={() => handleImageTodo(product.id)}/>
                        <div className="flex-1">
                            <p>{product.item}</p>
                            <p>{product.quantity}</p>
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
        </section>
    )
}