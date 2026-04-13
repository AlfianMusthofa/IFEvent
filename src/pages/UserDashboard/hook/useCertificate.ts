const ApiUrl = import.meta.env.VITE_API_URL;

export const useCertificate = () => {
  const handleCertificateDownload = async (eventId: number) => {
    try {
      const res = await fetch(`${ApiUrl}/certificate/${eventId}/download`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (!res.ok) {
        alert("Certificate not available");
        return;
      }

      const blob = await res.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `certificate-${eventId}.pdf`;

      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert("Failed to download certificate");
    }
  };

  return { handleCertificateDownload };
};
