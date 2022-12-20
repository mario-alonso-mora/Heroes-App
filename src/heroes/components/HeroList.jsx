
import { useMemo } from 'react';


import { getHeroesByPublisher } from '../helpers/getHeroeByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroes = useMemo(()=>getHeroesByPublisher(publisher),[publisher]) ;

  return (
    <>
     <div className='row row-cols-1 row-cols-md-2 g-3 text-white'>
     
    {

    heroes.map(heroe =>
     
     <HeroCard key={heroe.id}
     {...heroe}
    /> 
                  

    )}
    
     </div>
     <hr />

     </>

  )
  
}
