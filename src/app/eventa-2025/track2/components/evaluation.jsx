import React from 'react';

const Evaluation = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <p className="mb-4">
        To fairly and comprehensively evaluate submissions in this challenge task,
        we define an <span style={{ color: '#d32f2f', fontWeight: 'bold' }}> <strong>Overall Score</strong></span> 
        that integrates key evaluation criteria using a principled and balanced approach.
      </p>

      <p>The <span style={{ color: '#d32f2f', fontWeight: 'bold' }}>Overall Score</span> combines the following five metrics:</p>
      
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th style={{ padding: '8px', borderBottom: '2px solid #ddd' }}>Metric</th>
            <th style={{ padding: '8px', borderBottom: '2px solid #ddd' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '8px' }}><strong>mAP</strong></td>
            <td style={{ padding: '8px' }}>Mean Average Precision measures overall retrieval precision</td>
          </tr>
          <tr>
            <td style={{ padding: '8px' }}><strong>MRR</strong></td>
            <td style={{ padding: '8px' }}>Mean Reciprocal Rank – measures how early the first correct item is retrieved</td>
          </tr>
          <tr>
            <td style={{ padding: '8px' }}><strong>Recall@1</strong></td>
            <td style={{ padding: '8px' }}>Whether the correct item is ranked first</td>
          </tr>
          <tr>
            <td style={{ padding: '8px' }}><strong>Recall@5</strong></td>
            <td style={{ padding: '8px' }}>Whether the correct item is within the top 5 results</td>
          </tr>
          <tr>
            <td style={{ padding: '8px' }}><strong>Recall@10</strong></td>
            <td style={{ padding: '8px' }}>Whether the correct item is within the top 10 results</td>
          </tr>
        </tbody>
      </table>

      <p className="mb-4">These metrics are combined using a 
        <span style={{ color: '#512da8', fontWeight: 'bold' }}> <strong>weighted harmonic mean</strong></span>, 
        which penalizes poor performance more heavily than a simple average and encourages balanced improvements across all criteria. 
        The formula is:
      </p>
      <pre style={{ color: '#d32f2f', fontWeight: 'bold', fontSize: '1.2em', background: '#f9f9f9', padding: '10px', borderRadius: '5px' }}>
        Overall Score = Σ(w<sub>i</sub>) / Σ(w<sub>i</sub> / (m<sub>i</sub> + ε))
      </pre>

      <p>Where:</p>
      <ul style={{ marginLeft: '20px' }}>
        <li><strong>m<sub>i</sub></strong> is the value of the i-th retrieval metric</li>
        <li><strong>w<sub>i</sub></strong> is the weight for the i-th metric</li>
        <li><strong>ε</strong> is a small constant (e.g., 10<sup>-8</sup>) to prevent division by zero</li>
      </ul>

      <p className="mb-4"><strong>Default Weights:</strong> 
        <span style={{ fontWeight: 'bold' }}> [0.3, 0.2, 0.2, 0.15, 0.15] </span> for [mAP, MRR, R@1, R@5, R@10]
      </p>

      <p className="mb-4">This <span style={{ color: '#d32f2f', fontWeight: 'bold' }}>Overall Score</span> will be used as the 
        <span style={{ color: '#1976d2', fontWeight: 'bold' }}> official ranking metric</span> for evaluating all participant submissions 
        on the retrieval leaderboard.
      </p>
    </div>
  );
};

export default Evaluation;
