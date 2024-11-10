import logo from './assets/logo.svg';
import { Form } from './components/form';
import { useState } from 'react';
import { RenderShoppingList } from './components/renderShoppingList';
import { RenderDoneList } from './components/renderDoneList';

export interface Product {
  id: number;
  item: string;
  quantity: string;
  done: boolean;
}

function App() {
  const [items, setItems] = useState<Product[]>([]);

  return (
    <main className="max-w-2xl px-6 py-12 pb-20 mx-auto my-10 bg-white md:my-20 md:px-32 md:rounded-3xl">
      <header className="text-center">
        <img src={logo} alt="logotipo" className="mx-auto" />
        <h1 className="mt-4 text-3xl font-medium font-display">
          Lista de Compras
        </h1>
        <p className="text-sm text-slate-500">
          Facilite sua ida ao supermercado!
        </p>
        <hr className="w-1/3 mx-auto mt-6 mb-8" />
      </header>
      <Form setItems={setItems}/>
      <RenderShoppingList items={items} setItems={setItems}/>
      
      <section className="mt-16 space-y-3">
        <h2 className="mb-10 text-3xl text-center font-display">
          Itens já comprados
        </h2>
        <RenderDoneList items={items} setItems={setItems}/>
      </section>
    </main>
  );
}

export default App;
