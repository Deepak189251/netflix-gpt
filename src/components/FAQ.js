import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faX } from "@fortawesome/free-solid-svg-icons"
const FAQ = (props) => {
    
    const index = props.serielnum
    const value = props.value
    const changeValue = props.changeValue
    const data = props.data

   /* const [Z, setZ] = useState(false)

    const answer = () => {
        setZ(!Z)
    }*/

    return (
        <div className="  mb-[10px] ">
            <div className="accordian-question lg:h-[84px] h-[60px] w-[100%] bg-[rgb(45,45,45)] flex justify-between sm:text-[23px] text-[20px] font-medium pl-[20px] hover:bg-[rgb(78,78,78)] duration-300 items-center" onClick={() => changeValue(index, value)}>
                <div>{data.QUESTION}</div>
                <div className=" pr-[20px] transition-transform duration-500">{value === true ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faPlus} />}</div>
            </div>
            {value && <div className="accordian-answer w-[100%] bg-[rgb(45,45,45)] text-[21px] font-medium mt-[2px] transition-all duration-500 py-[25px] px-[25px] ">
                 {data.ANSWER}
            </div>}
            
        </div>
    )
}

export default FAQ