import React from 'react';

const Instruction = () => {
  return (
    <div>
      <p className="mb-4">
        Participants must submit a <strong>CSV</strong> file named using the following format:{' '}
        <code className="text-blue-600 font-semibold">TeamName_EVENTA2025_Track2.csv</code>.
        This file must be compressed into a <strong>ZIP</strong> archive named{' '}
        <code className="text-green-600 font-semibold">submission.zip</code> before uploading it to the{' '}
        <strong>
          <a
            target="_blank"
            href="https://www.codabench.org/competitions/7965/"
            className="underline text-[1.1em] text-[#232ba1]"
          >
            CodaBench platform
          </a>
        </strong>.
      </p>

      <p className="mb-4">
        The CSV file should contain predictions for all queries in the provided query set. It must include <strong>11 columns</strong>, separated by <code>;</code> (semicolons), with the following structure:
      </p>

      <ul className="list-disc list-inside mb-4">
        <li><strong>Column 1</strong>: <strong>query_id</strong> — the unique ID of the query text</li>
        <li>
          <strong>Columns 2–11</strong>: Top-10 retrieved <strong>image_id</strong> values, ordered from most to least relevant (top-1 to top-10). If an image cannot be retrieved, use <code>#</code> as a placeholder.
        </li>
      </ul>

      <p className="mb-2"><strong>CSV Row Format Example:</strong></p>
      <pre className="bg-gray-100 p-3 rounded mb-4 overflow-auto">
{`<query_id>;<image_id_1>;<image_id_2>;...;<image_id_10>
<query_id>;<image_id_1>;#;#;#;#;#;#;#;#;#`}
      </pre>

      <p className="mb-2">Example submission:</p>
      <pre className="bg-gray-100 p-3 rounded mb-4 overflow-auto">
{`12312;56712;56723;56734;56745;56756;56767;56778;56789;56790;56701
12334;56712;#;#;#;#;#;#;#;#;#
12345;56712;56723;56734;56745;56756;#;#;#;#;#`}
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
          Your raw <strong>submission.csv</strong> file must not contain any blank lines.
        </li>
        <li>
          Submit the <strong>submission.csv</strong> file as a single ZIP file named <code>submission.zip</code> — do not include any containing folder.
        </li>
        <li>
          The <strong>submission.csv</strong> must include all required headers and columns, in the exact order as shown in the example file.
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

      <p className="mb-4">
        Participants are also required to submit a detailed technical paper via the{' '}
        <strong>
          <a
            target="_blank"
            href="https://cmt3.research.microsoft.com/EVENTA2025"
            className="underline text-[1.1em] text-[#232ba1]"
          >
            CMT platform
          </a>
        </strong>{' '}
        to validate their approach and results.
      </p>

      <br />
      {/* <p className="mb-4 font-bold">
        The platform will be made available in the coming days. We kindly ask for your patience in the meantime.
      </p> */}
    </div>
  );
};

export default Instruction;
