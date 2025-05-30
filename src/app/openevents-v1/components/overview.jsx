import { imagePrefix } from "@/constant";

const Overview = () => {
    return (
      <section className="max-w-5xl mx-auto px-6 py-12 text-gray-900">
        <h1 className="text-3xl font-bold mb-6">
          🌍 OpenEvents V1: A Real-World News-Centric Dataset for Vision–Language Research
        </h1>
  
        <p className="text-lg mb-6">
          <strong>OpenEvents V1</strong> is a large-scale, event-driven dataset built to bridge the gap
          between <strong>visual content</strong> and <strong>real-world news understanding</strong>.
          Collected from over a decade of reporting by two major global outlets — <strong>CNN</strong> and <strong>The Guardian</strong> —
          this dataset captures the dynamic intersection of <em>images</em>, <em>events</em>, and <em>storytelling</em>.
          It aims to foster research in <strong>context-aware image understanding</strong>, <strong>cross-modal retrieval</strong>,
          and <strong>news-grounded visual reasoning</strong>.
        </p>
  
        <h2 className="text-2xl font-semibold mb-3">📰 What’s Inside?</h2>
        <ul className="list-disc ml-6 space-y-2 mb-6">
          <li>
            <strong>200,000+ news articles</strong> with <strong>400,000+ images</strong><br />
            A rich and diverse database spanning 2011–2022, covering politics, climate,
            technology, culture, sports, and more.
          </li>
          <li>
            <strong>30,000+ annotated image–event caption pairs</strong><br />
            Expertly curated and split into <strong>training</strong>, <strong>public test</strong>, and <strong>private test</strong> sets
            for benchmarking and experimentation.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">
          📦 Support for three tasks:
        </h2>
  
        <ul className="list-disc ml-6 space-y-2 mb-6">
          <li>
            <strong>Event-Based Image Retrieval</strong>: Given a description, retrieve related image from the news database.
          </li>
          <li>
            <strong>Event-Based Article Retrieval</strong>: Given an image, retrieve related articles from the news database.
          </li>
          <li>
            <strong>Event-Enriched Image Captioning</strong>: Given an image and it related article, generate a caption enriched with real event details.
          </li>
        </ul>
  
        <h2 className="text-2xl font-semibold mb-3">
          🚀 Support for EVENTA Grand Challenge @ ACM Multimedia 2025
        </h2>
  
        <p className="mb-6">
          OpenEvents V1 powers <strong>two brand-new tasks</strong> in <span className="font-bold"><a href={`${imagePrefix}/eventa-2025`} className="underline"> the EVENTA 2025 Grand Challenge</a></span>.
        </p>
  
        {/* <div className="mb-6">
          <h3 className="text-xl font-medium mb-1">📸 Event-Enriched Image Captioning</h3>
          <p>
            <em>Can a model generate a news-savvy caption?</em><br />
            Given an image, retrieve related articles from the news database and generate a caption enriched with
            <strong> real event details</strong> and <strong>context</strong>.
          </p>
            <div className="flex flex-col items-center">
                <img src={`${imagePrefix}/eventa-2025/assets/eventa25-track-1.png`} className="w-[80%] my-4  h-auto object-cover " />
            </div>
        </div>
  
        <div>
          <h3 className="text-xl font-medium mb-1">🔍 Event-Based Image Retrieval</h3>
          <p>
            <em>Can a model visualize the news?</em><br />
            Given a caption that describes a real-world event, retrieve the most relevant image(s)
            from the news database.
          </p>
          <div className="flex flex-col items-center">
                <img src={`${imagePrefix}/eventa-2025/assets/eventa25-track-2.png`} className="w-[80%] my-4  h-auto object-cover " />
          </div>
        </div> */}
      </section>
    );
  };
  
  export default Overview;
  