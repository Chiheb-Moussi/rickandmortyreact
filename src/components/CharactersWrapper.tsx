import { useEffect, useState } from "react";
import Character from "./Character";
import { CharacterModel } from "../models/Character";
import axios from "axios";

const CharactersWrapper = () => {

    const [characters, setCharacters] = useState<CharacterModel[]>([]);

    useEffect(()=> {
        axios.get('https://rickandmortyapi.com/api/character')
        .then((response) => 
            setCharacters(response?.data?.results ?? [])
        );
    },[]);

    

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {characters.length > 0 && characters.map((item: CharacterModel) => <Character key={item.id} image={item.image} name={item.name} status={item.status} />)}
                </div>
            </div>
        </div>

    )

}

export default CharactersWrapper;