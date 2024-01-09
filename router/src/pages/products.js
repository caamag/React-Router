
import './products.css';

import { Link } from 'react-router-dom';

function Products () {

    const products = [

        {id: 1, name: 'Monitor', price: '1499'},
        {id: 2, name: 'Mouse', price: '90'},
        {id: 3, name: 'Teclado', price: '250'},
        {id: 4, name: 'Placa de vídeo', price: '2499'},
        {id: 5, name: 'Processador', price: '899'},
        {id: 6, name: 'Mouse Pad', price: '50'},
        {id: 7, name: 'Gabinete', price: '250'},
        {id: 8, name: 'Memória RAM', price: '499'},

    ]

    return (

        <div className="product-container">

            <h1>Produtos</h1>

            <ul>

                {products.map((item) => (
                    <li key={item.id}>
                    {item.name} <br /> R${item.price},00 <br />
                    <Link to={`/products/${item.id}`}>Detalhes</Link>
                    </li>
                ))}

            </ul>

        </div>

    )

}

export default Products; 