import { useParams } from "react-router-dom";
import { use, useContext } from "react";
import { ProductsContext } from "../context/FetchProdutos";
import SectionContainer from "../components/SectionContainer";
import ProductCard from "../components/ProductCard";



const SearchResults = () => {

    const {termoPesquisa} = useParams();
    const {products} = useContext(ProductsContext);

    const filtrados = products.filter(pegaItem => 
       pegaItem.title.toLowerCase().includes(termoPesquisa.toLowerCase())
    )


    

    return (
        <div>
            <h1 className="text-2xl font-bold">Resultados da Pesquisa para: {termoPesquisa} 
            <SectionContainer title={"REsultado PEsquisa"}>
                {filtrados.map(pegaItem => 
                    <ProductCard {...pegaItem}/>
                )}
            </SectionContainer>

            </h1>
        </div>
    );
};

export default SearchResults;