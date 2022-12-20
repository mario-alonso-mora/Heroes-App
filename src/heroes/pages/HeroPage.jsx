import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";


export const HeroPage = () => {

  const {id} = useParams();// hook de react para los params
  
  const hero = useMemo(()=>getHeroById(id),[id]) ;

  const navigate = useNavigate();

  const onNavigateBack = () =>{

    navigate(-1) // Esto navega al historial anterior

  }

  if(!hero){
    return <Navigate to={"marvel"} />
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInRight">
    <div className="col-4">
      {/* <img className="img-thumbnail" src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} /> */}
      <img className="rounded-3 animate__bounceIn " src={`/assets/gifs/${id}.gif`} alt={hero.superhero} />
    </div>

    <div className="col-8">
    <div className="container">
    <h1 className="animate__animated animate__bounce text-danger"><strong>{hero.superhero}</strong></h1>
    </div>  

      

<div className="container accordion-body">


      
      <ul className="list-group list-group-flush">
        <li className="list-group-item mt-4 rounded-3 text-white"><b>Alter ego: </b>{ hero.alter_ego }</li>
        <li className="list-group-item mt-4 rounded-3 text-white"><b>Publisher: </b>{ hero.publisher }</li>
        <li className="list-group-item mt-4 rounded-3 text-white"><b>First appearance: </b>{ hero.first_appearance }</li>
        <li className="list-group-item mt-4 rounded-3 text-white"><b>Characters: </b>{ hero.characters }</li>
        
      </ul> 
  
</div>
      
    <button className="btn btn-outline-primary mt-5 " onClick={onNavigateBack}>Back</button>

    
    </div>
  
    
    
    </div>
  )
}
