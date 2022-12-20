import { HeroList } from "../components/HeroList"
import { heroes } from "../data/heroes"



export const DcPage = () => {
  return (

    <>

<h1 className="mt-4 text-primary animate__fadeInTopRight"><strong>DC COMICS</strong></h1>

  
    
    
    <HeroList key={heroes.id} publisher={'DC Comics'}/>

    </>
  )
}
