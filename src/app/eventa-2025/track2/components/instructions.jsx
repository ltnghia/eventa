import React from 'react';

const Instruction = () => {
  return (
    <div>
      <p className="mb-4">
        Participants must submit a <strong>CSV</strong> file named using the following format:{' '}
        <code className="text-blue-600 font-semibold">TeamName_EVENTA2025_Track2.csv</code>.
        This file must be compressed into a <strong>ZIP</strong> archive named{' '}
        <code className="text-green-600 font-semibold">submission.zip</code> before uploading to <strong>CodaLab</strong>.
      </p>

      <p className="mb-4">
        The CSV file should include predictions for all descriptions in the query set. It must contain <strong>11 columns</strong>, separated by <code>;</code> (semicolons), with the following structure:
      </p>

      <ul className="list-disc list-inside mb-4">
        <li><strong>Column 1</strong>: Query text ID</li>
        <li><strong>Columns 2–11</strong>: Top-10 retrieved image IDs, listed in descending order of relevance (from top-1 to top-10). If an image cannot be retrieved, use <code>#</code> as a placeholder.</li>
      </ul>

      <p className="mb-4"><strong>CSV Row Format Template:</strong></p>
       <pre className="bg-gray-100 p-3 rounded mb-4 overflow-auto">
       {`<query_id>;<image_id_1>;<image_id_2>;...;<image_id_10>
<query_id>;<image_id_1>;#;...;#`}
      </pre>

      <p className="mb-4">
        There is <strong>no requirement</strong> to sort the rows by query ID—this will be handled automatically during evaluation.
      </p>

      <p className="mb-4">We provide a submission example:</p>
      <pre className="bg-gray-100 p-3 rounded mb-4 overflow-auto">
        12312;56712;56723;56734;56745;56756;56767;56778;56789;56790;56701
        {"\n"}12334;56712;#;#;#;#;#;#;#;#;#
        {"\n"}12345;56712;56723;56734;56745;56756;#;#;#;#;#
      </pre>

      <p>
          Participants also require to submit a detailed paper through <span className="font-bold"><a  target="_blank" href='https://cmt3.research.microsoft.com/EVENTA2025' className="underline text-[1.1em] text-[#232ba1]">the official challenge platform</a></span> to validate their solutions.
      </p>

      <p className="mb-4 font-bold">
        The platform will be made available in the coming days. We kindly ask for your patience in the meantime.
      </p>
    </div>
  );
};

export default Instruction;
