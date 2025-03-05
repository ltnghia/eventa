import Image from "next/image";
import { imagePrefix } from "../../constant.js";
const Footer = () => {
    return (
        <footer className="h-[10em] ">
            <div className="flex flex-row justify-between w-[70em] px-2">
                {/*  <div className="flex flex-col justify-center">
                    <Image src={`${imagePrefix}/hcmus-logo-white.png`} alt="University of Science" width={150} height={50} className="sm:w-[7em] w-[4em]"/>
                </div>
                <div className="flex flex-col justify-center">
                    <Image src={`${imagePrefix}/hcmus-logo-white.png`} alt="University of Dayton" width={150} height={50} className="sm:w-[7em] w-[4em]"/>
                </div>
                <div className="flex flex-col justify-center">
                    <Image src={`${imagePrefix}/hcmus-logo-white.png`} alt="University of Information Technology" width={150} height={50} className="sm:w-[7em] w-[4em]"/>
                </div>
                <div className="flex flex-col justify-center">
                    <Image src={`${imagePrefix}/hcmus-logo-white.png`} alt="Monash University" width={150} height={50} className="sm:w-[7em] w-[4em]"/>
                </div>*/}
            </div>

        </footer>
    );
}
export default Footer;
