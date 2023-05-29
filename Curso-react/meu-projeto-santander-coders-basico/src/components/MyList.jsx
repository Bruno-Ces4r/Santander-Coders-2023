import { useEffect, useState } from "react";

const myList = [
    {id: '1', value: 'Banana'},
    {id: '2', value: 'Apple'},
    {id: '3', value: 'Meat'},    
]



export default function MyList() {

    const [products, setProducts] = useState(myList);
    const [search, setSearch] = useState('');

    useEffect(
        () => {
            if(search) {
                const newList = myList.filter((item) => {return item.value.toLowerCase().includes(search.toLowerCase())});
                setProducts(newList);
            } else{
                setProducts(myList);
            }
        }, [search] //Toda vez que o valor do search mudar, vou ver se existe o que está sendo digitado no campo de busca
    ) // Efeito colateral

    return(
        <div>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}  placeholder="Search here"/>
        
            {products.map((item) => {return(
                <div key={item.id}>
                    <h4>{item.value}</h4>
                </div>
            )})}
        </div>        
    )// Aqui estou retornando um array da minha lista, definindo uma key para o item e também mostrando o valor
} 