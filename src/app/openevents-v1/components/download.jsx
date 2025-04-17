const Download = () => {
    return (
      <div className="text-justify space-y-4">
        <p>
          We provide multiple versions of the <strong>OpenEvents V1</strong> dataset to accommodate different computational resources. You can choose and download the version that best fits your setup.
        </p>
  
        <p>
          📦 Access the dataset here:&nbsp;
          <a
            href="https://drive.google.com/drive/folders/1xWgEDWPcIl-JtNPDMa7hlXPHs2Sw__vG?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Google Drive – OpenEvents V1
          </a>
        </p>
  
        <p>
          🔒 <strong>Usage Notice:</strong> The dataset is made available strictly for <strong>research and academic purposes</strong> only.
          Commercial use is not permitted.
        </p>
  
        <p>
          📖 If you use <strong>OpenEvents V1</strong> in your work, please cite our paper(s) appropriately. Your citation helps support future updates and research efforts.
        </p>
      </div>
    );
  };
  
  export default Download;
  