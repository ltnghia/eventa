const Schedule = () => {
  return (
    <div className="text-justify">
      <p className="mb-4">
        <strong>Date:</strong> October 31st, 2025 (Friday), 9:00 AM – 10:30 AM (GMT+1)
        <br />
        <strong>Venue:</strong> Distillers, Hyatt at the Royal Dublin Convention Centre, Dublin, Ireland
        <br />
        <strong>Online:</strong>{" "}
        <a
          href="https://zoom.us/j/97777827806?pwd=jjHaPDaKHVgSHa3zIOBRKMGm9vGjbt.1"
          target="_blank"
          className="underline text-blue-600"
        >
          Zoom link
        </a>
      </p>

      <ul className="list-disc ml-6 space-y-1">
        <li><strong>09:00 – 09:10</strong> Welcome and Introduction</li>
        <li><strong>09:10 – 09:25</strong> <strong>Cerebro Team (onsite):</strong> ENRIC: EveNt-AwaRe Captioning with Image Retrieval via UnCertainty-Guided Re-ranking and Semantic Ensemble Reasoning</li>
        <li><strong>09:25 – 09:40</strong> <strong>SodaBread Team (online):</strong> ReCap: Event-Aware Image Captioning with Article Retrieval and Semantic Gaussian Normalization</li>
        <li><strong>09:40 – 09:55</strong> <strong>NoResources Team (online):</strong> EVENT-Retriever: Event-Aware Multimodal Image Retrieval for Realistic Captions</li>
        <li><strong>09:55 – 10:10</strong> <strong>HCMUS-NoName Team (online):</strong> Hierarchical Multi-Modal Retrieval for Knowledge-Grounded News Image Captioning</li>
        <li><strong>10:10 – 10:25</strong> <strong>23trinitrotoluen Team (online):</strong> A Hybrid Dense-Sparse Multi-Stage Re-ranking Framework for Event-Based Image Retrieval</li>
        <li><strong>10:25</strong> Closing Remark</li>
      </ul>
    </div>
  );
};

export default Schedule;
