import { useState } from 'react';
import { ClipboardCopy } from 'lucide-react';

const Publications = () => {
    const bibtex = `@InProceedings{openeventsv1,
  title={OpenEvents V1: Large-Scale Benchmark Dataset for Multimodal Event Grounding}, 
  author={Hieu Nguyen and Phuc-Tan Nguyen and Thien-Phuc Tran and Minh-Quang Nguyen and Tam V. Nguyen and Minh-Triet Tran and Trung-Nghia Le},
  year={2025},
  booktitle={ACM International Conference on Multimedia},
  url={https://arxiv.org/abs/2506.18372}, 
}`;

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(bibtex).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="text-justify space-y-4">
            <div>
                <p>
                    <strong>Hieu Nguyen, Phuc-Tan Nguyen, Thien-Phuc Tran, Minh-Quang Nguyen, Tam V. Nguyen, Minh-Triet Tran, Trung-Nghia Le</strong>, 
                    &nbsp;&quot;<em>OpenEvents V1: Large-Scale Benchmark Dataset for Multimodal Event Grounding</em>&quot;, 
                    ACM International Conference on Multimedia, 2025. 
                    &nbsp;<a 
                        href="https://arxiv.org/abs/2506.18372" 
                        className="text-blue-600 hover:underline" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        [arXiv]
                    </a>
                    &nbsp;
                    <button 
                        onClick={handleCopy} 
                        className="inline-flex items-center text-blue-600 hover:underline"
                        title="Copy BibTeX"
                    >
                        [BibTeX] <ClipboardCopy className="w-4 h-4 ml-1" />
                    </button>
                    {copied && <span className="ml-2 text-green-600">Copied!</span>}
                </p>
            </div>
        </div>
    );
};

export default Publications;
