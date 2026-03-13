import { FileDown } from 'lucide-react';

const DownloadBrochure = () => {
  const handleDownload = () => {
    const pdfUrl = 'https://ik.imagekit.io/arkspindles/docs/ArkspindlesCatalogue.PDF?download=true';
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center px-4 py-2 border border-primary-500 text-sm font-medium rounded-md text-primary-500 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
    >
      <FileDown className="w-4 h-4 mr-2" />
      Download Catalog
    </button>
  );
};

export default DownloadBrochure;
