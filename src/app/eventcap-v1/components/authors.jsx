import PersonAvatar from "../../components/person-avatar";
import { imagePrefix } from "../../../constant.js";
const Authors = ()=>{
    return <div className="text-justify"> 
         
        <div className="grid sm:grid-cols-4 grid-cols-2 mt-4 gap-y-6">
            <PersonAvatar name="Trung-Nghia Le" image={`${imagePrefix}/ltnghia.jpg`} affiliation={"University of Science, Vietnam"} /> 
            <PersonAvatar name="Phuc-Tan Nguyen" image={`${imagePrefix}/nptan.jpg`} affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Trong-Hieu Nguyen" image={`${imagePrefix}/nthieu.jpg`} affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Thien-Phuc Tran" image={`${imagePrefix}/ttphuc.jpg`} affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Minh-Quang Nguyen" image={`${imagePrefix}/nmquang.jpg`} affiliation={"University of Science, Vietnam"} />
        </div>
        <br/>
        Contact: <a href="mailto:ltnghia@fit.hcmus.edu.vn">ltnghia@fit.hcmus.edu.vn</a>
    </div>
}
export default Authors;
