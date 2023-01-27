const form = document.querySelector('.form')
const input = document.querySelector('.input__search')
const pokemonName = document.querySelector('.pokemon__name')
const pokemonNumber = document.querySelector('.pokemon__number')
const pokemon__image = document.querySelector('.pokemon__image')
const btnNext = document.querySelector('.btn-next')
const btnPrev= document.querySelector('.btn-prev')
let searchPokemon = 1;

const fetchApiPokemon = async(pokemon) => { 
    const apiFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if(apiFetch.status === 200) { 
        const data = apiFetch.json()
        return data
    }    
}

 
const renderPokemon = async (pokemon) => { 
    const data =  await fetchApiPokemon(pokemon);

    
    if(data) { 
    
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemon__image.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    input.value=''
    }
    else { 
        pokemon__image.style.display='none'
        pokemonName.innerHTML='Not Found :c'
        pokemonNumber.innerHTML='';
    }
    
    
}

form.addEventListener('submit', (event) => { 
    event.preventDefault()
    renderPokemon(input.value.toLowerCase());
})

btnNext.addEventListener('click',() => { 
    searchPokemon += 1
    renderPokemon(searchPokemon)
})
btnPrev.addEventListener('click',() => { 
    if(searchPokemon > 1) { 
        searchPokemon -= 1
    renderPokemon(searchPokemon)
    }
    
})


renderPokemon(searchPokemon)