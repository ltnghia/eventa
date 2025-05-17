import React from 'react';
import { MathJaxContext, MathJax } from 'better-react-mathjax';

const Evaluation = () => {
  const config = {
    loader: { load: ['input/tex', 'output/chtml'] },
  };

  const defaultWeights = [0.3, 0.2, 0.2, 0.15, 0.15];

  return (
    <MathJaxContext version={3} config={config}>
      <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
        <p className="mb-4">
          To fairly and comprehensively evaluate submissions in this challenge task,
          we define an <span style={{ color: '#d32f2f', fontWeight: 'bold' }}> <strong>Overall Score</strong></span> that integrates key evaluation criteria using a principled and balanced approach.
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
              <td style={{ padding: '8px', textAlign: 'left' }}><strong>mAP</strong></td>
              <td style={{ padding: '8px', textAlign: 'left' }}>Mean Average Precision – measures overall retrieval precision</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', textAlign: 'left' }}><strong>MRR</strong></td>
              <td style={{ padding: '8px', textAlign: 'left' }}>Mean Reciprocal Rank – measures how early the first correct item is retrieved</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', textAlign: 'left' }}><strong>Recall@1</strong></td>
              <td style={{ padding: '8px', textAlign: 'left' }}>Whether the correct item is ranked first</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', textAlign: 'left' }}><strong>Recall@5</strong></td>
              <td style={{ padding: '8px', textAlign: 'left' }}>Whether the correct item is within the top 5 results</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', textAlign: 'left' }}><strong>Recall@10</strong></td>
              <td style={{ padding: '8px', textAlign: 'left' }}>Whether the correct item is within the top 10 results</td>
            </tr>
          </tbody>
        </table>

        <p className="mb-4">
          These metrics are combined using a
          <span style={{ color: '#512da8', fontWeight: 'bold' }}> <strong>weighted harmonic mean</strong></span>,
          which penalizes poor-performing metrics more strongly than an arithmetic mean and encourages balanced improvements across all criteria.
          The formula is:
        </p>

        <MathJax>
          {`\\[
          \\text{Overall Score} = r \\cdot \\left( \\frac{\\sum w_i}{\\sum \\left( \\frac{w_i}{m_i + \\varepsilon} \\right)} \\right)
          \\]`}
        </MathJax>

        <p>Where:</p>
        <ul style={{ marginLeft: '20px' }}>
          <li><strong>m<sub>i</sub></strong> is the value of the i-th retrieval metric</li>
          <li><strong>w<sub>i</sub></strong> is the weight for the i-th metric</li>
          <li><strong>ε</strong> is a small constant (e.g., 10<sup>-8</sup>) to avoid division by zero</li>
          <li><strong>r</strong> = (#valid queries) / (#total ground-truth queries)</li>
        </ul>

        <p className="mb-4"><strong>Default Weights:</strong>
          <span style={{ fontWeight: 'bold' }}> [{defaultWeights.join(', ')}] </span> for [mAP, MRR, R@1, R@5, R@10]
        </p>

        <p className="mb-4">This <span style={{ color: '#d32f2f', fontWeight: 'bold' }}>Overall Score</span> will be used as the
          <span style={{ color: '#1976d2', fontWeight: 'bold' }}> official ranking metric</span> for evaluating all participant submissions
          on the retrieval leaderboard.
        </p>
      </div>
    </MathJaxContext>
  );
};

export default Evaluation;
