import PersonAvatar from "../../components/person-avatar";
import { imagePrefix } from "../../../constant.js";
const TechnicalSupporters = ()=>{
    return <div className="text-justify"> 
         
        <div className="grid sm:grid-cols-4 grid-cols-2 mt-4">
            <PersonAvatar name="Duy-Nam Ly" image={`${imagePrefix}/ldnam.jpg`} affiliation={"University of Science, Vietnam"} />
            
        </div>

        <br/>
       
    </div>
}
export default TechnicalSupporters;
