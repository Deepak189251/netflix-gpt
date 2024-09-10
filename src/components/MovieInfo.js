import { useParams } from "react-router-dom"
//import { options } from "../utils/Constants"
import { useMovieInfo } from "../hooks/useMovies"
import { useSelector, useDispatch } from "react-redux"
import {  useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faHeart, faStar } from "@fortawesome/free-solid-svg-icons"
import { useMovieClips } from "../hooks/useNowMovieClips"
import { useErrorBoundary } from "react-error-boundary"
import { Spinner } from "./ui/Spinner"
import { checkWish } from "../utils/UserSlice"
import { addMovieInWishList } from "../utils/MovieSlice";

const MovieInfo = () => {

    const {resId} = useParams()
    useMovieInfo(resId)
    useMovieClips(resId)
    const [movieData, setMovieData] = useState(null);
    //const [info, setInfo] = useState()
    const movieInfo = useSelector(store => store.movie.movieInfo)
    const movieCast = useSelector(store => store.movie.movieCast)
    const movieClip = useSelector(store => store.movie.movieClip)
    const imgUrl = "https://media.istockphoto.com/id/1337144146/ro/vector/implicit-avatar-profil-icon-vector.jpg?s=2048x2048&w=is&k=20&c=J9_blvGXaq_t7qrhr8Pq_veC7dDo9dZ6bjRU730GWzI="
   // if(!info) return
    //console.log(info)
    const user = useSelector((store) => store?.user?.uid);
    const wish = useSelector((store) => store?.user?.wish);
    const dispatch = useDispatch();
    const { showBoundary } = useErrorBoundary()

    useEffect(() => {
        if (movieInfo) {
            if(!movieData || movieData?.imdbID !== movieInfo?.imdb_id){
                getMovieData(movieInfo?.imdb_id);
            }
            
        }
       
      }, [movieInfo]);

    const rottonRatings = movieData?.Ratings?.filter((a) => a.Source === "Rotten Tomatoes")

    if (!movieInfo && !movieClip && !movieData && !rottonRatings){
  
        return (
         <div className="mt-[360px] ml-[750px] flex justify-center absolute">
           <Spinner />
         </div>
       );
 
      
    }

    const getMovieData = async (id) => {
        try{
            const url = `https://www.omdbapi.com/?i=${id}&apikey=8fccf8aa&plot=short&r=json`;
            const data = await fetch(url);
            const json = await data.json();
            setMovieData(json);
        } 
        catch (err){
            console.log(err)
            showBoundary(err)
      
        }
    };

    
    console.log(movieCast)
    console.log(movieInfo)
    
    let runtime = Number(movieInfo?.runtime)
    
    let processedRuntime = getruntime(runtime)


    function getruntime (num) {
        if(num < 60) return num
        let hr = num / 60

        for(let a = 60 ; a < num ; a++){
            num = num - 60
        }

        let finalNum = hr.toString().slice(0,1) + 'Hr ' + num + 'mins' 
        return finalNum
    }

    if (!localStorage.getItem(user)) {
        localStorage.setItem(user, "[]");
      }
    
    const wishList = JSON.parse(localStorage.getItem(user));

    dispatch(checkWish(movieInfo?.id));

    const HandleWishlist = async () => {
        
        if (wishList?.length === 0) {
          // wishList?.push(movieData)
          wishList?.push({ id: movieInfo?.id, data: movieData });
        } else {
          const res = wishList.find((element) => element?.id === movieInfo.id);
          if (!res) {
            // wishList?.push(movieData)
            wishList?.push({ id: movieInfo?.id, data: movieData });
          }
        }
    
        localStorage.setItem(user, JSON.stringify(wishList));
        dispatch(addMovieInWishList(wishList));
        //dispatch(checkWish(movieData?.imdbID))
        dispatch(checkWish(movieInfo?.id));
    
    
        
      };

    /*if(!rottonRatings){}
    
        const rottonRatingsValue = rottonRatings[0]?.Value
    */
    console.log(movieData)
    console.log(rottonRatings)

    return (
        <div className=" bg-gray-800 w-[100%] h-auto absolute">
            <div className=" xl:mx-[150px] lg:mx-[110px] mx-[35px] mt-[100px]">
                <div className=" flex justify-between ">
                    <div>
                        <p className=" lg:text-4xl md:text-3xl text-[20px] font-bold text-white">{movieInfo?.title}</p>
            
                        <div className=" flex mb-[10px]">
                            <p className=" text-gray-100 mr-[10px] md:text-base text-[12px]">{movieInfo?.release_date?.slice(0,4)}</p>

                            <FontAwesomeIcon icon={faCircle} className=" w-[5px] h-[5px] text-gray-100 md:mr-[10px]  md:mt-[10px] mr-[7px] mt-[7px]"/>

                            <p className=" text-gray-100 mr-[10px] md:text-base text-[12px]">{movieData?.Rated}</p>

                            <FontAwesomeIcon icon={faCircle} className=" w-[5px] h-[5px] text-gray-100 md:mr-[10px]  md:mt-[10px] mr-[7px] mt-[7px]"/>

                            <p className=" text-gray-100 md:text-base text-[12px]">{processedRuntime}</p>
                        </div>

                    </div>

                    <div className="flex text-white">
                        <div className=" md:mr-[20px] mr-[10px]"> 
                            <p className=" md:text-base text-[12px] font-semibold text-gray-200">{"IMDB RATING"}</p>
                            <div className=" flex mt-[3px] ml-[10px]">
                                <FontAwesomeIcon className=" mt-[4px] mr-[6px] md:w-[25px] md:h-[25px] w-[20px] h-[20px]" icon={faStar} color="yellow" />
                                <p className=" mt-[2px] mr-[2px] md:text-xl text-base font-semibold">{movieData?.imdbRating ? movieData?.imdbRating : "N/A"}</p>
                            </div>
                        </div>

                        <div className=" md:mr-[20px] mr-[10px]">
                            <p className=" md:text-base text-[12px] font-semibold text-gray-200">{"TOMATO METER"}</p>
                            <div className=" flex mt-[3px] ml-[26px]">
                                <svg className=" md:w-[25px] md:h-[25px] w-[20px] h-[20px] mt-[4px] mr-[6px]" type="certified" viewBox="0 0 80 80" preserveAspectRatio="xMidYMid" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <g transform="translate(2.29, 0)">
                                        <path
                                            d="M42.1942857,18.8022857 C44.3794286,18.608 49.1565714,18.7177143 51.4902857,21.0057143 C51.6297143,21.1451429 51.5085714,21.4605714 51.3097143,21.408 C47.8902857,20.4868571 42.5577143,25.0217143 39.1017143,22.0891429 C39.008,22.9485714 38.2331429,27.0857143 32.3314286,26.4731429 C32.192,26.4594286 32.1371429,26.304 32.24,26.2171429 C33.1542857,25.44 34.2765714,23.2891429 33.3142857,21.9154286 C30.3108571,23.9085714 28.7565714,23.9954286 23.2182857,21.5954286 C23.0377143,21.5177143 23.1451429,21.2228571 23.3577143,21.1748571 C24.5074286,20.9165714 27.2434286,19.9222857 29.696,19.4582857 C30.1645714,19.3691429 30.624,19.3165714 31.0674286,19.312 C28.528,18.7062857 27.4217143,18.1805714 25.7485714,18.1874286 C25.5657143,18.1897143 25.4742857,17.9611429 25.6068571,17.8354286 C28.224,15.3188571 32.9691429,15.1885714 35.2548571,17.0628571 L33.2068571,12.7862857 L35.696,12.4114286 C35.696,12.4114286 36.3451429,14.6925714 36.9257143,16.7428571 C39.5177143,13.904 43.5268571,14.192 44.8777143,16.672 C44.9577143,16.8182857 44.8251429,16.992 44.6605714,16.9622857 C43.3005714,16.7314286 42.3702857,17.8628571 42.1737143,18.7977143 L42.1942857,18.8022857"
                                            id="Fill-2"
                                            fill="#00912D"
                                        ></path>
                                        <mask id="mask-2" fill="white">
                                            <polygon points="0.137142857 0.921142857 75.0534777 0.921142857 75.0534777 79.8628571 0.137142857 79.8628571"></polygon>
                                        </mask>
                                        <path
                                            d="M13.0491429,59.1817143 C9.90628571,55.3554286 7.86971429,50.576 7.51771429,44.9622857 C6.912,35.2342857 10.2354286,26.0845714 23.1794286,21.4834286 C23.1908571,21.5245714 23.1725714,21.5748571 23.2182857,21.5954286 C23.0377143,21.5177143 23.1451429,21.2228571 23.3577143,21.1748571 C24.5074286,20.9165714 27.2434286,19.92 29.696,19.4582857 C30.1645714,19.3691429 30.624,19.3165714 31.0674286,19.3097143 C28.528,18.7062857 27.4217143,18.1805714 25.7485714,18.1874286 C25.5657143,18.1897143 25.4742857,17.9611429 25.6068571,17.8331429 C28.224,15.3165714 32.9691429,15.1885714 35.2548571,17.0628571 L33.2068571,12.784 L35.696,12.4114286 C35.696,12.4114286 36.3451429,14.6902857 36.9257143,16.7428571 C39.5177143,13.904 43.5268571,14.192 44.8777143,16.672 C44.9577143,16.8182857 44.8251429,16.992 44.6605714,16.9622857 C43.3005714,16.7314286 42.3702857,17.8628571 42.1737143,18.7977143 L42.1942857,18.8022857 C44.3794286,18.608 49.1565714,18.7177143 51.4902857,21.0057143 C51.328,20.8502857 51.1337143,20.7245714 50.9508571,20.5874286 C60.2765714,23.504 66.7474286,30.1531429 67.44,41.2251429 C67.8811429,48.2948571 65.5702857,54.3885714 61.568,59.1154286 C62.784,59.2891429 63.9931429,59.4925714 65.2045714,59.6937143 C70.304,53.4537143 73.2502857,45.5428571 73.2502857,37.056 C73.2502857,17.7165714 57.5337143,2.56685714 37.472,2.56685714 C17.4102857,2.56685714 1.69371429,17.7165714 1.69371429,37.056 C1.69371429,45.5565714 4.64,53.472 9.744,59.7097143 C10.8434286,59.5268571 11.9451429,59.3462857 13.0491429,59.1817143"
                                            fill="#FFD700"
                                            mask="url(#mask-2)"
                                        ></path>
                                        <path
                                            d="M9.744,59.7097143 C4.64,53.472 1.69371429,45.5565714 1.69371429,37.056 C1.69371429,17.7165714 17.4102857,2.56685714 37.472,2.56685714 C57.5337143,2.56685714 73.2502857,17.7165714 73.2502857,37.056 C73.2502857,45.5428571 70.304,53.4537143 65.2045714,59.6937143 C65.8125714,59.7942857 66.4205714,59.8742857 67.0285714,59.984 C71.9497143,53.6457143 74.8937143,45.6982857 74.8937143,37.056 C74.8937143,16.3862857 58.1394286,0.921142857 37.472,0.921142857 C16.8022857,0.921142857 0.048,16.3862857 0.048,37.056 C0.048,45.7074286 2.99885714,53.6594286 7.92914286,59.9977143 C8.53257143,59.8902857 9.13828571,59.8102857 9.744,59.7097143"
                                            fill="#FA6E0F"
                                            mask="url(#mask-2)"
                                        ></path>
                                        <path
                                            d="M58.2857143,74.9394286 C62.3748571,75.1954286 65.7874286,77.2137143 67.8468571,79.9474286 C67.9131429,80.0182857 68.0114286,80.016 68.0411429,79.9382857 C68.7451429,77.0971429 68.9394286,74.0662857 68.5851429,71.0125714 C68.5874286,70.9805714 68.6125714,70.9577143 68.6537143,70.9485714 C70.576,70.3428571 72.7017143,70.0137143 74.9645714,70.0457143 C75.0857143,70.0594286 75.0834286,69.9405714 74.9554286,69.8194286 C72.5577143,67.4994286 69.6297143,65.6914286 66.416,64.5417143 C65.3051429,67.68 64.2217143,70.816 63.1565714,73.9634286 C63.136,74.0228571 63.0514286,74.0594286 62.9645714,74.0434286 L58.2857143,74.9394286"
                                            fill="#0AC855"
                                            mask="url(#mask-2)"
                                        ></path>
                                        <path
                                            d="M62.9645714,74.0434286 L58.2857143,74.9394286 C58.2857143,74.9394286 58.3451429,74.512 58.528,73.3325714 C60.9417143,73.6754286 62.9645714,74.0434286 62.9645714,74.0434286"
                                            fill="#0B4902"
                                        ></path>
                                        <g transform="translate(0, 20.57)">
                                            <mask id="mask-4" fill="white">
                                                <polygon points="0.137142857 0.016 67.4935952 0.016 67.4935952 59.2914286 0.137142857 59.2914286"></polygon>
                                            </mask>
                                            <path
                                                d="M13.0765714,38.6057143 C29.1177143,36.2605714 45.5222857,36.2354286 61.568,38.544 C65.5702857,33.8171429 67.8811429,27.7234286 67.44,20.6537143 C66.7474286,9.58171429 60.2765714,2.93257143 50.9508571,0.016 C51.1337143,0.153142857 51.328,0.278857143 51.4902857,0.434285714 C51.6297143,0.573714286 51.5085714,0.889142857 51.3097143,0.836571429 C47.8902857,-0.0845714286 42.5577143,4.45028571 39.1017143,1.51771429 C39.008,2.37485714 38.2331429,6.51428571 32.3314286,5.90171429 C32.192,5.888 32.1371429,5.73257143 32.24,5.64571429 C33.1542857,4.86857143 34.2765714,2.71542857 33.3142857,1.344 C30.3108571,3.33714286 28.7565714,3.424 23.2182857,1.024 C23.1725714,1.00342857 23.1908571,0.953142857 23.1794286,0.912 C10.2354286,5.51314286 6.912,14.6628571 7.51771429,24.3908571 C7.86971429,30.0091429 9.93142857,34.7748571 13.0765714,38.6057143"
                                                fill="#FA3200"
                                                mask="url(#mask-4)"
                                            ></path>
                                            <path
                                                d="M12.0868571,53.472 C12,53.488 11.9154286,53.4514286 11.8948571,53.392 C10.8274286,50.2445714 9.73485714,47.0971429 8.62171429,43.9611429 C5.41028571,45.1108571 2.49371429,46.9302857 0.0982857143,49.248 C-0.0297142857,49.3691429 -0.032,49.488 0.0891428571,49.4742857 C2.352,49.4422857 4.47771429,49.7714286 6.4,50.3771429 C6.44114286,50.3862857 6.46628571,50.4091429 6.46857143,50.4411429 C6.11428571,53.4948571 6.30857143,56.5257143 7.01257143,59.3668571 C7.04228571,59.4445714 7.14057143,59.4468571 7.20685714,59.376 C9.26628571,56.6422857 12.6742857,54.624 16.7657143,54.368 L12.0868571,53.472"
                                                fill="#0AC855"
                                                mask="url(#mask-4)"
                                            ></path>
                                        </g>
                                        <path
                                            d="M62.9645714,74.0434286 C46.192,71.104 28.8571429,71.104 12.0868571,74.0434286 C12,74.0594286 11.9154286,74.0228571 11.8948571,73.9634286 C10.3428571,69.3851429 8.74285714,64.8182857 7.09257143,60.2628571 C7.06971429,60.1988571 7.14057143,60.1257143 7.248,60.1074286 C27.1885714,56.464 47.8605714,56.464 67.8034286,60.1074286 C67.9108571,60.1257143 67.9817143,60.1988571 67.9565714,60.2628571 C66.3085714,64.8182857 64.7085714,69.3851429 63.1565714,73.9634286 C63.136,74.0228571 63.0514286,74.0594286 62.9645714,74.0434286"
                                            fill="#00912D"
                                        ></path>
                                        <path
                                            d="M12.0868571,74.0434286 L16.7657143,74.9394286 C16.7657143,74.9394286 16.704,74.512 16.5211429,73.3325714 C14.1074286,73.6754286 12.0868571,74.0434286 12.0868571,74.0434286"
                                            fill="#0B4902"
                                        ></path>
                                    </g>
                                </svg>   

                                <p className=" mt-[2px] mr-[2px] md:text-xl text-base font-semibold" >{/*rottonRatings ? rottonRatings[0]?.Value : "N/A"*/ rottonRatings ? rottonRatings[0] ? rottonRatings[0]?.Value : "N/A" : "N/A"}</p>
                            </div>
                        </div>


                         <div className=" mt-[6px]">
                            <FontAwesomeIcon className=" md:w-[40px] md:h-[35px] w-[30px] h-[25px] " icon={faHeart} color={wish} onClick={HandleWishlist}/>
                        </div>

                    </div>
                </div>
                <div className=" flex mb-[20px]">
                    <div>
                        <img className="xl:max-w-[300px] xl:h-[500px] max-w-[265px] h-[380px] " alt="poster" src={`https://image.tmdb.org/t/p/w500/${movieInfo?.poster_path}`} /> 
                    </div>

                    <div className=" xl:h-[500px] h-[380px] w-[900px] ml-[30px]">
                        <iframe className="w-[100%] h-[100%]  aspect-video" src={`https://www.youtube.com/embed/${movieClip?.key}?&autoplay=1&loop=1&mute=1&playlist=${movieClip?.key}&controls=0`} title="YouTube video player"  ></iframe>
                    </div>
                </div>

                <div className=" flex mb-[20px]">
                    {movieInfo?.genres.map((n) => <div className=" border border-gray-500 text-gray-100 w-[120px] h-[30px] text-center rounded-xl mr-[20px] hover:bg-gray-400 cursor-pointer">{n?.name}</div> )}
                </div>
                
                <div>
                    <p className=" text-gray-100 text-base font-medium mb-[20px]">{movieInfo?.overview}</p>
                </div>

                { /*<div className=" flex overflow-x-scroll overflow-y-visible h-[200px]">
                    {movieCast?.cast?.map((n) => 
                            <div className=" w-[150px] h-[70px] mr-[10px]">
                                <img className=" w-[100%]" alt="poster" src={`https://image.tmdb.org/t/p/w500/${n?.profile_path}`}></img>
                                <p>{n?.name}</p>
                                <p>{n?.character}</p>
                            </div>
                        )
                    }
                </div> */}

                <div className=" flex overflow-x-scroll">
                    {movieCast?.cast?.map((n) => 
                        <div className=" w-[170px] h-[230px] text-center text-gray-100 mb-[10px]">
                            <img className=" w-[110px] h-[150px] mx-auto mb-[10px]" alt="poster" src={n.profile_path ? `https://image.tmdb.org/t/p/w500/${n?.profile_path}` : imgUrl}/>
                            <p className=" mb-[10px]">{n?.name}</p>
                            <p className=" text-xs mb-[10px] w-[150px]">{n?.character}</p>
                        </div>
                    )}
                </div>

                {/*<div className=" w-auto flex">
                    
                    {movieCast?.cast?.map((n) => <CastCard key={n.id} img={n.profile_path} />)}
                </div>*/}

                
                    
             
                
            </div>

           
            
        </div>
    )
}

export default MovieInfo