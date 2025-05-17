import { imagePrefix } from "@/constant";

const Track2 = () => {
    return (
        <div className="text-justify">
           <p>
           <code className="text-blue-600 font-semibold">Given a realistic caption, participants are required to retrieve corresponding images from a provided database.</code> 
           This retrieval task is a fundamental task in computer vision and natural language processing that requires learning a joint representation space where visual and textual modalities can be meaningfully compared. 
           Image retrieval with textual queries is widely used in search engines, medical imaging, e-commerce, and digital asset management. 
           However, challenges remain, such as handling abstract or ambiguous queries, improving retrieval efficiency for large-scale datasets, and ensuring robustness to linguistic variations and biases in training data. 
           This image retrieval track aims to tackle issues of realistic information from events in real life.
           </p>
           <div className="flex flex-col items-center">
                <img src={`${imagePrefix}/eventa-2025/assets/eventa25-track-2.png`} className="w-[80%] my-4  h-auto object-cover " />
            </div>
        </div>
    )
}
export default Track2;
