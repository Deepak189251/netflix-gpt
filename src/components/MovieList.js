import MovieCard from "./MovieCard"
//import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Spinner } from "../ui/Spinner";

const MovieList = ({title, movies}) => {
   /* const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 2
      }; */

    //console.log(movies)
    if(!movies) {
        return (
            <Spinner />
        )
    }

    return (
        <div className="">
            
                <h1 className=" text-[#e5e5e5] ml-[30px] mt-[20px] text-[20px] mb-[20px] font-semibold">{title}</h1>
                <div className=" overflow-x-scroll  mt-[20px] mx-auto  flex flex-col justify-center" >
                
                    <div className="flex">
                        
                            {movies.map(movie =>  <MovieCard key={movie.id} id={movie.id} poster={movie.poster_path} />)}
                        
                    </div>
                
                </div>
              
        </div>
    )
}

export default MovieList