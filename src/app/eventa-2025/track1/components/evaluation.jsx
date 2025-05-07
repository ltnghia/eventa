import React from 'react';

const Evaluation = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <p className="mb-4">
        To fairly and comprehensively evaluate submissions in our challenge, which includes both 
        <span style={{ color: '#1976d2', fontWeight: 'bold' }}> <strong>retrieval</strong></span> and 
        <span style={{ color: '#388e3c', fontWeight: 'bold' }}> <strong>captioning</strong></span> tasks, we define an 
        <span style={{ color: '#d32f2f', fontWeight: 'bold' }}> <strong>Overall Score</strong></span> that balances key 
        evaluation criteria across both domains.
      </p>

      <p>The <span style={{ color: '#d32f2f', fontWeight: 'bold' }}>Overall Score</span> integrates the following six metrics:</p>
      
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th style={{ padding: '8px', borderBottom: '2px solid #ddd' }}>Metric</th>
            <th style={{ padding: '8px', borderBottom: '2px solid #ddd' }}>Description</th>
            <th style={{ padding: '8px', borderBottom: '2px solid #ddd' }}>Domain</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '8px' }}><strong>AP</strong></td>
            <td style={{ padding: '8px' }}>Average Precision – measures retrieval precision across thresholds</td>
            <td style={{ padding: '8px', color: '#1976d2' }}><strong>Retrieval</strong></td>
          </tr>
          <tr>
            <td style={{ padding: '8px' }}><strong>Recall@1</strong></td>
            <td style={{ padding: '8px' }}>Whether the correct item is ranked at the top</td>
            <td style={{ padding: '8px', color: '#1976d2' }}><strong>Retrieval</strong></td>
          </tr>
          <tr>
            <td style={{ padding: '8px' }}><strong>Recall@10</strong></td>
            <td style={{ padding: '8px' }}>Whether the correct item is within the top 10 results</td>
            <td style={{ padding: '8px', color: '#1976d2' }}><strong>Retrieval</strong></td>
          </tr>
          <tr>
            <td style={{ padding: '8px' }}><strong>CLIPScore</strong></td>
            <td style={{ padding: '8px' }}>Semantic alignment between image and caption</td>
            <td style={{ padding: '8px', color: '#388e3c' }}><strong>Captioning</strong></td>
          </tr>
          <tr>
            <td style={{ padding: '8px' }}><strong>FLEUR</strong></td>
            <td style={{ padding: '8px' }}>Fluency and linguistic quality of generated captions</td>
            <td style={{ padding: '8px', color: '#388e3c' }}><strong>Captioning</strong></td>
          </tr>
          <tr>
            <td style={{ padding: '8px' }}><strong>CIDEr</strong></td>
            <td style={{ padding: '8px' }}>Agreement between generated and reference captions</td>
            <td style={{ padding: '8px', color: '#388e3c' }}><strong>Captioning</strong></td>
          </tr>
        </tbody>
      </table>

      <p className="mb-4">These metrics are combined using a 
        <span style={{ color: '#512da8', fontWeight: 'bold' }}> <strong>weighted harmonic mean</strong></span>, 
        which emphasizes <span >balanced performance</span> and penalizes poor performance 
        more heavily than a simple average. The formula is:
      </p>
      <pre style={{ color: '#d32f2f', fontWeight: 'bold', fontSize: '1.2em', background: '#f9f9f9', padding: '10px', borderRadius: '5px' }}>
        Overall Score = Σ(w<sub>i</sub>) / Σ(w<sub>i</sub> / (m<sub>i</sub> + ε))
      </pre>

      <p>Where:</p>
      <ul style={{ marginLeft: '20px' }}>
        <li><strong>m<sub>i</sub></strong> is the value of the i-th metric</li>
        <li><strong>w<sub>i</sub></strong> is the weight for the i-th metric</li>
        <li><strong>ε</strong> is a small constant (e.g., 10<sup>-8</sup>) to prevent division by zero</li>
      </ul>

      <p className="mb-4"><strong>Default Weights:</strong> 
        <span style={{ fontWeight: 'bold' }}> [1, 2, 2, 2, 2, 1] </span> for [AP, Recall@1, Recall@10, CLIPScore, FLEUR, CIDEr]
      </p>

      <p className="mb-4">This <span style={{ color: '#d32f2f', fontWeight: 'bold' }}>Overall Score</span> will be used as the 
        <span style={{ color: '#388e3c', fontWeight: 'bold' }}> official ranking metric</span> for evaluating all participant submissions on the leaderboard.
      </p>
    </div>
  );
};

export default Evaluation;
