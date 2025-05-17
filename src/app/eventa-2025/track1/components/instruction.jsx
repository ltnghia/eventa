import React from 'react';

const Instruction = () => {
  return (
    <div>
      <p className="mb-4">
        Participants must submit a <strong>CSV</strong> file named using the following format:{' '}
        <code className="text-blue-600 font-semibold">TeamName_EVENTA2025_Track1.csv</code>.
        This file must be compressed into a <strong>ZIP</strong> archive named{' '}
        <code className="text-green-600 font-semibold">submission.zip</code> before uploading to <strong><a  target="_blank" href='https://www.codabench.org/competitions/7964/' className="underline text-[1.1em] text-[#232ba1]">CodaBench platform</a></strong>.
      </p>

      <p className="mb-4">
        The CSV file should include predictions for all images in the query set. It must contain <strong>12 columns</strong>, separated by <code>;</code> (semicolons), with the following structure:
      </p>

      <ul className="list-disc list-inside mb-4">
        <li><strong>Column 1</strong>: Query image ID</li>
        <li><strong>Columns 2–11</strong>: Top-10 retrieved article IDs, listed in descending order of relevance (from top-1 to top-10). If an article cannot be retrieved, use <code>#</code> as a placeholder.</li>
        <li><strong>Column 12</strong>: The generated caption corresponding to the query image</li>
      </ul>

      <p className="mb-4"><strong>CSV Row Format Template:</strong></p>
       <pre className="bg-gray-100 p-3 rounded mb-4 overflow-auto">
       {`<query_id>;<article_id_1>;<article_id_2>;...;<article_id_10>;<generated_caption>
<query_id>;<article_id_1>;#;...;#;<generated_caption>`}
      </pre>

      <p className="mb-4">We provide a submission example:</p>
      <pre className="bg-gray-100 p-3 rounded mb-4 overflow-auto">
        12312;56712;56723;56734;56745;56756;56767;56778;56789;56790;56701;A group of children playing soccer on a sunny afternoon.
        {"\n"}12334;56712;#;#;#;#;#;#;#;#;#;A man riding a bicycle through a busy city street.
        {"\n"}12345;56712;56723;56734;56745;56756;#;#;#;#;#;A cat sitting on a windowsill looking outside at the rain.
      </pre>


      <p className="mb-4 font-semibold">Submission Requirements:</p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Each <strong>query_id</strong> in your submission must be unique and must come from the official provided list.
        </li>
        <li>
          All <strong>image_id</strong> values must correspond to valid entries in our image database.
        </li>
        <li>
          There is <strong>no requirement</strong> to sort the rows by <strong>query_id</strong>—this will be automatically handled during evaluation.
        </li>
        <li>
          Each <strong>generated_caption</strong> must not exceed 8,000 characters in length.
        </li>
        <li>
          Your raw <strong>submission.csv</strong> file must not contain any blank lines.
        </li>
        <li>
          Submit the <strong>submission.csv</strong> file as a single ZIP file named <code>submission.zip</code> — do not include any containing folder.
        </li>
        <li>
          The <strong>submission.csv</strong> must include all columns, in the exact order as shown in the example file.
        </li>
      </ul>

      <p className="mb-4 font-semibold">Submission Limits:</p>
      <ul className="list-disc list-inside mb-4">
        <li>
          For <strong>public test submissions</strong>, each team is allowed a maximum of <strong>10 submissions per day</strong> and a total of <strong>150 submissions</strong>.
        </li>
        <li>
          For <strong>private test submissions</strong>, each team is allowed a maximum of <strong>10 submissions per day</strong> and a total of <strong>150 submissions</strong>.
        </li>
      </ul>

      <p>
          Participants also require to submit a detailed paper through <span className="font-bold"><a  target="_blank" href='https://cmt3.research.microsoft.com/EVENTA2025' className="underline text-[1.1em] text-[#232ba1]">CMT platform</a></span> to validate their solutions.
      </p>
      <br/>
      {/* <p className="mb-4 font-bold">
        The platform will be made available in the coming days. We kindly ask for your patience in the meantime.
      </p> */}
    </div>
  );
};

export default Instruction;
