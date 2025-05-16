"use client";

import { Button } from "@/components/ui/button";

const DownloadCv = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    // Set the href to your CV file in the public directory
    link.href = '/cv.pdf'; // Make sure to update this to match your actual CV filename
    // Set the download attribute
    link.download = 'Kamal-Hosny-CV.pdf';
    // Append to body
    document.body.appendChild(link);
    // Trigger the download
    link.click();
    // Clean up
    document.body.removeChild(link);
  };

  return (
    <Button
      variant="outline"
      className="cursor-pointer border-emerald-500/50 text-emerald-400 px-8 py-6 rounded-xl backdrop-blur-sm hover:text-white hover:bg-emerald-500/10"
      onClick={handleDownload}
    >
      Download CV
    </Button>
  );
};

export default DownloadCv;