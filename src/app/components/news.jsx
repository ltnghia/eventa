import { imagePrefix } from "@/constant";

const News = () => {
  return (
    <div className="text-justify">
      <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
        <li>
          <span className="font-bold">04/2025:</span>{" "}
          <a
            href={`${imagePrefix}/eventa-2025`}
            className="underline text-[1.1em] text-[#232ba1]"
          >
            EVENTA 2025 Challenge
          </a>{" "}
          officially begins.
        </li>
        <li>
          <span className="font-bold">04/2025:</span> We release the{" "}
          <a
            href={`${imagePrefix}/openevents-v1`}
            className="underline text-[1.1em] text-[#232ba1]"
          >
            OpenEvents V1 dataset
          </a>
          .
        </li>
        <li>
          <span className="font-bold">02/2025:</span> We will host the EVENTA Grand Challenge at{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://acmmm2025.org/grand-challenge"
            className="underline text-[1.1em] text-[#232ba1]"
          >
            ACM Multimedia 2025
          </a>
          .
        </li>
      </ul>
    </div>
  );
};

export default News;
