import { useState } from 'react';
import { ClipboardCopy } from 'lucide-react';

const Publications = () => {
    const bibtex = `@InProceedings{eventa2025,
  title={Event-Enriched Image Analysis Grand Challenge at ACM Multimedia 2025}, 
  author={Thien-Phuc Tran and Minh-Quang Nguyen and Minh-Triet Tran and Tam V. Nguyen and Trong-Le Do and Duy-Nam Ly and Viet-Tham Huynh and Khanh-Duy Le and Mai-Khiem Tran and Trung-Nghia Le},
  year={2025},
  booktitle={ACM International Conference on Multimedia},
  url={https://arxiv.org/abs/2508.18904}, 
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
                    <strong>Thien-Phuc Tran, Minh-Quang Nguyen, Minh-Triet Tran, Tam V. Nguyen, Trong-Le Do, Duy-Nam Ly, Viet-Tham Huynh, Khanh-Duy Le, Mai-Khiem Tran, Trung-Nghia Le</strong>, 
                    &nbsp;&quot;<em>Event-Enriched Image Analysis Grand Challenge at ACM Multimedia 2025</em>&quot;, 
                    ACM International Conference on Multimedia, 2025. 
                    &nbsp;<a 
                        href="https://arxiv.org/abs/2508.18904" 
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
