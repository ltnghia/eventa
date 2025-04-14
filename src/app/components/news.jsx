import { imagePrefix } from "@/constant";

const News = () => {
    return <div className="text-justify">
        
        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
            <li>04/2025: We release <span className="font-bold"><a href={`${imagePrefix}/openevents-v1`} className="underline text-[1.1em] text-[#232ba1]">OpenEvents V1 dataset</a></span></li>
            <li>02/2025: We will organize <span className="font-bold"><a href={`${imagePrefix}/eventa-2025`} className="underline text-[1.1em] text-[#232ba1]"> grand challenge EVENTA at ACM Multimedia 2025</a></span></li>
        </ul>
    </div>
}
export default News;
