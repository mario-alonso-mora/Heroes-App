import { Link } from "react-router-dom";


//podemos crear otro functional component dentro de este mismo para que se hago cargo 
// de la funcionalidad que yo desee

const CharactersByHero = ({alter_ego,characters}) =>{
if(alter_ego === characters) return(<></>)
return <p>{characters}</p>
}


export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeInLeft" >
        <div className="card animate__animated animate__fadeInDown">
            <div className="row no-gutters">
                <div className="col-4">
                    <img className="card-img" src={heroImageUrl} alt={superhero} />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h3 className="card-title mt-4 ">{superhero}</h3>
                        <p className="card-text mt-3">{alter_ego}</p>

                        {/* {
                            esta es una forma 
                            (alter_ego !== characters) && (<p>{characters}</p>)
                        } */}

                        {/* la otra forma es crearse un componente personalizado dentro
                        de este mismo para hacer la lectura del codigo mas facil y legible
                         */}
                        <CharactersByHero alter_ego={alter_ego} characters={characters}/>

                        <p className="card-text">{<small className="text-success">{first_appearance}</small>}</p>


                        <Link to={`/hero/${id}`}>
                        Mas info..
                        </Link>
                        
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
