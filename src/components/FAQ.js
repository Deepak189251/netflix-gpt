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
        <div className="  mb-[10px] transition duration-300">
            <div className="accordian-question h-[84px] w-[100%] bg-[rgb(45,45,45)] flex justify-between text-[23px] font-medium pt-[24px] pl-[20px] transition" onClick={() => changeValue(index, value)}>
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