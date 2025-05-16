"use client";

import { Button } from "@/components/ui/button";

const DownloadCv = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pdf/Kamal-Hosny-CV.pdf';
    link.download = 'cv.pdf';
    link.click();
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