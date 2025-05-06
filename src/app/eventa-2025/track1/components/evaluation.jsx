import React from 'react';

const Evaluation = () => {
  return (
    <div>
      <h3>📊 <span style={{ color: '#d32f2f', fontWeight: 'bold' }}>Performance Metric for Evaluation</span></h3>
      
      <p>
        To fairly and comprehensively evaluate submissions in our challenge—which includes both 
        <span style={{ color: '#1976d2', fontWeight: 'bold' }}> <strong>retrieval</strong></span> and 
        <span style={{ color: '#388e3c', fontWeight: 'bold' }}> <strong>captioning</strong></span> tasks—we define an 
        <span style={{ color: '#d32f2f', fontWeight: 'bold' }}> <strong>Overall Score</strong></span> that balances key 
        evaluation criteria across both domains.
      </p>

      <p>The <span style={{ color: '#d32f2f', fontWeight: 'bold' }}>Overall Score</span> integrates the following six metrics:</p>
      
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Description</th>
            <th>Domain</th>
            <th><span style={{ fontWeight: 'bold' }}>Weight</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>AP</strong></td>
            <td>Average Precision – measures retrieval precision across thresholds</td>
            <td style={{ color: '#1976d2' }}><strong>Retrieval</strong></td>
            <td><strong>1</strong></td>
          </tr>
          <tr>
            <td><strong>Recall@1</strong></td>
            <td>Whether the correct item is ranked at the top</td>
            <td style={{ color: '#1976d2' }}><strong>Retrieval</strong></td>
            <td><strong>2</strong></td>
          </tr>
          <tr>
            <td><strong>Recall@10</strong></td>
            <td>Whether the correct item is within the top 10 results</td>
            <td style={{ color: '#1976d2' }}><strong>Retrieval</strong></td>
            <td><strong>2</strong></td>
          </tr>
          <tr>
            <td><strong>CLIPScore</strong></td>
            <td>Semantic alignment between image and caption</td>
            <td style={{ color: '#388e3c' }}><strong>Captioning</strong></td>
            <td><strong>2</strong></td>
          </tr>
          <tr>
            <td><strong>FLEUR</strong></td>
            <td>Fluency and linguistic quality of generated captions</td>
            <td style={{ color: '#388e3c' }}><strong>Captioning</strong></td>
            <td><strong>2</strong></td>
          </tr>
          <tr>
            <td><strong>CIDEr</strong></td>
            <td>Agreement between generated and reference captions</td>
            <td style={{ color: '#388e3c' }}><strong>Captioning</strong></td>
            <td><strong>1</strong></td>
          </tr>
        </tbody>
      </table>

      <p>These metrics are combined using a 
        <span style={{ color: '#512da8', fontWeight: 'bold' }}> <strong>weighted harmonic mean</strong></span>, 
        which emphasizes <span style={{ fontWeight: 'bold' }}>balanced performance</span> and penalizes poor performance 
        more heavily than a simple average.
      </p>

      <p>The formula is:</p>
      <pre style={{ color: '#d32f2f', fontWeight: 'bold' }}>
        Overall Score = Σ(w<sub>i</sub>) / Σ(w<sub>i</sub> / (m<sub>i</sub> + ε))
      </pre>

      <p>Where:</p>
      <ul>
        <li><strong>m<sub>i</sub></strong> is the value of the i-th metric</li>
        <li><strong>w<sub>i</sub></strong> is the weight for the i-th metric</li>
        <li><strong>ε</strong> is a small constant (e.g., 10<sup>-8</sup>) to prevent division by zero</li>
      </ul>

      <p><strong>Default Weights:</strong> 
        <span style={{ color: '#1976d2', fontWeight: 'bold' }}> [1, 2, 2, 2, 2, 1] </span> for [AP, Recall@1, Recall@10, CLIPScore, FLEUR, CIDEr]
      </p>

      <p>This <span style={{ color: '#d32f2f', fontWeight: 'bold' }}>Overall Score</span> will be used as the 
        <span style={{ color: '#388e3c', fontWeight: 'bold' }}>official ranking metric</span> for evaluating all participant submissions on the leaderboard.
      </p>
    </div>
  );
};

export default Evaluation;
