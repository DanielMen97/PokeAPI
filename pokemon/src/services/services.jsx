//Funcion llamar 20 pokemones
export const getAllPokemon = async (info, setInfo, offset) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
  const data = await response.json()
  const promises = data.results.map( async (item) => {
    const response = await fetch(item.url)
    const data = response.json()
    return data
  })
  const results = await Promise.all(promises)
  setInfo([...info, ...results])
}

//Funcion que realiza la consulta de un unico Pokemon
export const getSearchPokemon = async (searchPokemon, setInfo, setShowButton) => {
if(searchPokemon === ""){
  alert("Ingrese nombre o numero del Pokemon que desea consultar")
} else{
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`, { method: 'GET' })
    try {
      const data = await response.json()
      const pokemon = []
      pokemon.push(data)
      setInfo(pokemon)
      setShowButton(prev => !prev)
    } catch (error) {
      alert("El Pokemon no existe")
    }
}}

//Funcion que enlista los tipos de Pokemon
export const getListTypePokemon = async (setOptionsSelect) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/`, {method: 'GET'})
  const data = await response.json()
      .then(async (data) => setOptionsSelect(data.results))
}

//Funcion que filtra por tipo de Pokemon
export const getTypeSelect = async (selectValue, setInfo, setShowButton) => {
  if(selectValue === ""){
    alert("Seleccione un tipo de Pokemon")
  } else {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${selectValue}`, {method: 'GET'})
    const data = await response.json()
      .then(async (data) => {
        const pokemonUrl = data.pokemon.map(item => item.pokemon.url)
        return pokemonUrl
      })
    const pokemonData = await Promise.all(
      data.map( async(url) => {
        const response = await fetch(url)
        const data = await response.json()
        return data
      })
    )
    setInfo(pokemonData)
    setShowButton(prev => !prev)    
}}