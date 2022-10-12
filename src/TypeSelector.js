export default function TypeSelector(typeName) {

  switch (typeName) {
    case "fighting":
      return (
        <div>
          <img src="types/Fighting_icon_LA.png" alt={"Type " + typeName}></img>
          <h3 style={{ textTransform: 'capitalize' }}>{typeName}</h3>
        </div>
      )
    case "flying":
      return (
        <div>
          <img src="types/Flying_icon_LA.webp" alt={"Type " + typeName}></img>
          <h3 style={{ textTransform: 'capitalize' }}>{typeName}</h3>
        </div>
      )
    case "poison":
      return (
        <div>
          <img src="types/Poison_icon_LA.webp" alt={"Type " + typeName}></img>
          <h3 style={{ textTransform: 'capitalize' }}>{typeName}</h3>
        </div>
      )
    case "ground":
      return (
        <div>
          <img src="types/Ground_icon_LA.png" alt={"Type " + typeName}></img>
          <h3 style={{ textTransform: 'capitalize' }}>{typeName}</h3>
        </div>
      )
    case "rock":
      return (
        <div>
          <img src="types/Rock_icon_LA.png" alt={"Type " + typeName}></img>
          <h3 style={{ textTransform: 'capitalize' }}>{typeName}</h3>
        </div>
      )
    case "bug":
      return (
        <div>
          <img src="types/Bug_icon_LA.webp" alt={"Type " + typeName}></img>
          <h3 style={{ textTransform: 'capitalize' }}>{typeName}</h3>
        </div>
      )
    case "ghost":
      return (
        <div>
          <img src="types/Ghost_icon_LA.png" alt={"Type " + typeName}></img>
          <h3 style={{ textTransform: 'capitalize' }}>{typeName}</h3>
        </div>
      )
    case "steel":
      return (
        <div>
          <img src="types/Steel_icon_LA.webp" alt={"Type " + typeName}></img>
          <h3 style={{ textTransform: 'capitalize' }}>{typeName}</h3>
        </div>
      )
    case "fire":
      return (
        <div>
          <img src="types/Fire_icon_LA.webp" alt={"Type " + typeName}></img>
          <h3 style={{ textTransform: 'capitalize' }}>{typeName}</h3>
        </div>
      )
    case "water":
      return (
        <div>
          <img src="types/Water_icon_LA.webp" alt={"Type " + typeName}></img>
          <h3 style={{ textTransform: 'capitalize' }}>{typeName}</h3>
        </div>
      )
    case "grass":
      return (
        <div>
          <img src="types/Grass_icon_LA.webp" alt={"Type " + typeName}></img>
          <h3 style={{ textTransform: 'capitalize' }}>{typeName}</h3>
        </div>
      )
    case "electric":
      return (
        <div>
          <img src="types/Electric_icon_LA.webp" alt={"Type " + typeName}></img>
          <h3 style={{ textTransform: 'capitalize' }}>{typeName}</h3>
        </div>
      )
    case "psychic":
      return (
        <div>
          <img src="types/Psychic_icon_LA.webp" alt={"Type " + typeName}></img>
          <h3 style={{ textTransform: 'capitalize' }}>{typeName}</h3>
        </div>
      )
    case "ice":
      return (
        <div>
          <img src="types/Ice_icon_LA.webp" alt={"Type " + typeName}></img>
          <h3 style={{ textTransform: 'capitalize' }}>{typeName}</h3>
        </div>
      )
    case "dragon":
      return (
        <div>
          <img src="types/Dragon_icon_LA.webp" alt={"Type " + typeName}></img>
          <h3 style={{ textTransform: 'capitalize' }}>{typeName}</h3>
        </div>
      )
    case "dark":
      return (
        <div>
          <img src="types/Dark_icon_LA.png" alt={"Type " + typeName}></img>
          <h3 style={{ textTransform: 'capitalize' }}>{typeName}</h3>
        </div>
      )
    case "fairy":
      return (
        <div>
          <img src="types/Fairy_icon_LA.webp" alt={"Type " + typeName}></img>
          <h3 style={{ textTransform: 'capitalize' }}>{typeName}</h3>
        </div>
      )
    case "normal":
    default:
      return (
        <div>
          <img src="types/Normal_icon_LA.png" alt={"Type normal"}></img>
          <h3 style={{ textTransform: 'capitalize' }}>{"normal"}</h3>
        </div>
      )
  }
}