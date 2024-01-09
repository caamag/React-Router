import './produtoDetails.css'

import { useParams } from "react-router-dom";

function ProductsDetails () {

    const { id } = useParams(); 

    return <div className="product-selected-container">

    <p>ID do produto - {id}</p>

    </div>

}

export default ProductsDetails; 