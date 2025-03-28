const Abstract = () => {
    return (
        <div className="text-justify">
           <p>
           Conventional image analysis research (e.g., image captioning, image retrieval, object detection, object segmentation, etc.) usually tends to produce results with a limited understanding of the visual information, focusing primarily on analyzing objects, actions, and basic physical attributes in images. In many cases, captions of images are too superficial to capture complex scenarios where additional information, such as who is involved, what is happening, where and when the event took place, and its significance, is critical. Current approaches fall short in conveying deeper context, as they lack the ability to infer meaningful information about the events or interactions taking place in the image. This limitation becomes especially evident when the goal is to describe not just what is visible but also the underlying story or context associated with the image. As a result, these methods are inadequate for providing rich, informative captions that align with more sophisticated user needs, such as understanding or retrieving images related to real-world events.
           </p>
           <br/>
           <p>
           Event-Enriched Image Analysis (EVENTA) project aims to integrate contextual details and event-related information to create comprehensive, narrative-driven captions that go beyond simple visual analysis. Therefore, the captions provide richer, more comprehensive information about an image. These captions go beyond simple visual descriptions by offering deeper insights, including the names and attributes of objects, the timing, context, outcomes of events, and other crucial details - information that cannot be gleaned from merely observing the image.
           </p>
           <br/>
           <p>
           This project can facilitate the creation of more coherent and detailed narratives, capturing not only the visible elements but also the underlying context and significance of the scene, ultimately offering a more complete understanding of what the image represents. 
           </p>

        </div>
    )
}
export default Abstract;
