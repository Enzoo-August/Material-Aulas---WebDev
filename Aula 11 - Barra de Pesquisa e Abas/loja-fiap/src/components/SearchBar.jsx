import { use, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    function pesquisa(e){
        let value = e.target.value;
        setSearch(value);
        if(!value){
            navigate("/");
            return;
        }


        navigate(`searchResults/${value}`);
    }
    return (
         <div className="w-64">
         <input
            type="text"
            id="search"
            onChange={pesquisa}
            onFocus={() => navigate("searchWelcome")}
            // onBlur={() => navigate("/")}
            value={search}
            placeholder="Pesquisar produtos..."
            className="pl-10 pr-3 py-1 w-64 bg-transparent border-b-2 border-black focus:border-black outline-none transition-colors duration-300"
          />

        <ul className="hidden absolute top-full left-0 w-full bg-white border shadow mt-1 z-10 max-h-60 overflow-y-auto">
            <li> Itens  </li>
        </ul>
        
        </div>
          
    )
}

export default SearchBar;