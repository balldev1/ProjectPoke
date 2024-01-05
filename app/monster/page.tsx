"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

const MonsterPage = () => {

  const router = useRouter();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countPoke = 16;
        const PokeArray = [];

        for (let i = 1; i <= countPoke; i++) {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${i}`
          );
          PokeArray.push(response.data);
        }

        setPokemons(PokeArray);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchData();
  }, []);

  

  return (
  <div>
  {pokemons.length === 0 ? (
    <p>No data available</p>
  ) : (
    
    <div className="m-5 border-2 rounded-md">
      <div className="m-5 flex">
          <div className=" ml-auto">
            <input className="border-2 ml-auto " placeholder="Search Name Poke"/>
          </div>
       
      </div>  
      <div className="m-5 grid md:grid-cols-4 grid-cols-2 gap-10">
        {pokemons.map((pokemon, index) => (
          <div key={index} className="border-2 p-5">
            <div className="border-2 py-5 flex items-center justify-center">
             <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div className="my-5 text-center">
              {pokemon.name}
            </div>
            <button
              onClick={() => router.push(`/monster/detail/${index}`)} 
              className="p-2 border-2 w-full"
            >
              {/* Render the 'View' section */}
              <span>View</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )}
</div>

  );
};

export default MonsterPage;
