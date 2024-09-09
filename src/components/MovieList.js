import MovieCard from "./MovieCard"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieList = ({title, movies}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 2
      };

    //console.log(movies)
    if(!movies) return

    return (
        <div className="">
            
                <h1 className=" text-[#e5e5e5] sm:ml-[30px] ml-[20px] sm:mt-[20px] mt-[10px] md:text-[20px] sm:text-[18px] text-[16px] sm:mb-[20px] mb-[10px]  font-semibold">{title}</h1>
                <div className=" overflow-x-scroll  sm:mt-[20px] mt-[10px] mx-auto  flex flex-col justify-center" >
                
                    <div className="flex mx-[10px]">
                        
                            {movies.map(movie =>  <MovieCard key={movie.id} id={movie.id} poster={movie.poster_path} />)}
                        
                    </div>
                
                </div>
              
        </div>
    )
}

export default MovieList