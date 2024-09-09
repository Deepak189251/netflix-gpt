import {  useSelector } from "react-redux"
import VideoBackground from "./VidoBackground"
import VideoTitle from "./VideoTitle"

const PrimaryContainer = () => {
      
    const Movie = useSelector((store) => (store.movie?.nowMovie))

    if(!Movie) return
    
    //let n = Math.floor(Math.random()*Movie.length) 
   // console.log(n)
    const MainMovie = Movie[3]
    const {title, overview, id} = MainMovie
    //console.log(original_title)

    return (
        <div>
            <VideoTitle title={title} overview={overview} id={id} />
            <VideoBackground id={id} />
        </div>
    )
}

export default PrimaryContainer