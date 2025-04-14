const Track2 = () => {
    return (
        <div className="text-justify">
           <p>
           Given a realistic caption, participants are required to retrieve corresponding images from a provided database. This retrieval task is a fundamental task in computer vision and natural language processing that requires learning a joint representation space where visual and textual modalities can be meaningfully compared. Image retrieval with textual queries is widely used in search engines, medical imaging, e-commerce, and digital asset management. However, challenges remain, such as handling abstract or ambiguous queries, improving retrieval efficiency for large-scale datasets, and ensuring robustness to linguistic variations and biases in training data. This image retrieval track aims to tackle issues of realistic information from events in real life. <span className="font-bold"><a href='./eventa-2025/track2' className="underline text-[1.1em] text-[#232ba1]">More details here</a></span>.
           </p>
           <div className="flex flex-col items-center">
                <img src="../assets/eventa25-track-2.png" className="rounded-full w-[8em] h-[8em] object-cover " />
            </div>
        </div>
    )
}
export default Track2;
