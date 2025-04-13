import PersonAvatar from "../../components/person-avatar";
import { imagePrefix } from "../../../constant.js";
const Organizers = ()=>{
    return <div className="text-justify"> 
         
        <div className="grid sm:grid-cols-4 grid-cols-2 mt-4 gap-y-6">
            <PersonAvatar name="Trung-Nghia Le" image={`${imagePrefix}/ltnghia.jpg`} affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Minh-Triet Tran" image={`${imagePrefix}/tmtriet.png`} affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Tam Nguyen" image={`${imagePrefix}/nvtam.jpeg`} affiliation={"University of Dayton, US"} />
            <PersonAvatar name="Thien-Phuc Tran" image={`${imagePrefix}/ttphuc.jpg`} affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Trong-Le Do" image={`${imagePrefix}/dtle.png`} affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Khanh-Duy Le" image={`${imagePrefix}/lkduy.jpg`} affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Duy-Nam Ly" image={`${imagePrefix}/ldnam.jpg`} affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Viet-Tham Huynh" image={`${imagePrefix}/hvtham.jpg`} affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Minh-Quang Nguyen" image={`${imagePrefix}/nmquang.jpg`} affiliation={"University of Science, Vietnama"} />
            <PersonAvatar name="Phuc-Tan Nguyen" image={`${imagePrefix}/nptan.jpg`} affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Trong-Hieu Nguyen" image={`${imagePrefix}/nthieu.jpg`} affiliation={"University of Science, Vietnam"} />
        </div>
        <br/>
        Contact: <a href="mailto:ltnghia@fit.hcmus.edu.vn">ltnghia@fit.hcmus.edu.vn</a>
    </div>
}
export default Organizers;
