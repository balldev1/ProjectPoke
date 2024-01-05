"use client";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import axios from "axios";

interface Pokemon {
    name: string;
    sprites:{
        back_default: string;
    }
    types: {
      slot: number; // หรือ string ตามที่ให้มาจาก API
      type: {
        name: string;
        url: string;
      };
    }[];
  }

interface Params {
  params: {
    id: string;
  };
}

const DetailPage = ({ params }: Params) => {
  const monsterId = params.id;

  console.log(monsterId);

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {

        const PokeArray = [];

      try {
        const response = await axios.get(
        //   `https://pokeapi.co/api/v2/pokemon/${monsterId}`
          `https://pokeapi.co/api/v2/pokemon/${parseInt(monsterId) + 1}`

        );

        PokeArray.push(response.data);

        setPokemons(PokeArray);

      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchData();
  }, [monsterId]);

  console.log(pokemons);

  return (
    <div>
    {pokemons.length === 0 ? (
    <p>No data available</p>
    ) : (
    pokemons.map((pokemon, index) => (
      <div key={index}>
        <p>Name: {pokemon.name}</p>
        <p>Types:</p>
        <ul>
          {pokemon.types.map((type, typeIndex) => (
            <li key={typeIndex}>
              Type {type.slot}: {type.type.name}
            </li>
          ))}
        </ul>
      </div>
     ))
     )}
    </div>

  );
};

export default DetailPage;
