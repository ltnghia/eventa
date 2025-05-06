import React from 'react';

const Instruction = () => {
  return (
    <div>
      <p className="mb-4">
        Participants must submit a <strong>CSV</strong> file named using the following format:{' '}
        <code className="text-blue-600 font-semibold">TeamName_EVENTA2025_Track1.csv</code>.
        This file must be compressed into a <strong>ZIP</strong> archive named{' '}
        <code className="text-green-600 font-semibold">submission.zip</code> before uploading to <strong>CodaLab</strong>.
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

      <p className="mb-4">
        There is <strong>no requirement</strong> to sort the rows by query ID—this will be handled automatically during evaluation.
      </p>

      <p className="mb-4">We provide a submission example:</p>
      <pre className="bg-gray-100 p-3 rounded mb-4 overflow-auto">
        12312;56712;56723;56734;56745;56756;56767;56778;56789;56790;56701;A group of children playing soccer on a sunny afternoon.
        {"\n"}12334;56712;#;#;#;#;#;#;#;#;#;A man riding a bicycle through a busy city street.
        {"\n"}12345;56712;56723;56734;56745;56756;#;#;#;#;#;A cat sitting on a windowsill looking outside at the rain.
      </pre>

      <p>
          Participants also require to submit a detailed paper through <span className="font-bold"><a  target="_blank" href='https://cmt3.research.microsoft.com/EVENTA2025' className="underline text-[1.1em] text-[#232ba1]">the official challenge platform</a></span> to validate their solutions.
      </p>
      <br/>
      <p className="mb-4 font-bold">
        The platform will be made available in the coming days. We kindly ask for your patience in the meantime.
      </p>
    </div>
  );
};

export default Instruction;
