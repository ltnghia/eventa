import { imagePrefix } from "@/constant";

const Track1 = () => {
    return (
        <div className="text-justify">
           <p>
           This track aims to generate captions that provide richer, more comprehensive information about an image. 
           These captions go beyond simple visual descriptions by offering deeper insights, including the names and attributes of objects, the timing, context, outcomes of events, and other crucial details—information that cannot be gleaned from merely observing the image. 
           <code className="text-blue-600 font-semibold">Given an image, participants are required to search relevant articles in a provided external database and extract necessary information to generate an enriched image caption.</code> 
           This retrieval augmentation generation track facilitates the creation of more coherent and detailed narratives, capturing not only the visible elements but also the underlying context and significance of the scene, ultimately offering a more complete understanding of what the image represents.
           </p>
           <div className="flex flex-col items-center">
                <img src={`${imagePrefix}/eventa-2025/assets/eventa25-track-1.png`} className="w-[80%] my-4  h-auto object-cover " />
            </div>
        </div>
    )
}
export default Track1;
