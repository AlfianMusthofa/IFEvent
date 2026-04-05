import ModalBox from "../ModalBox";

const EventLocationModal = ({ open, onClose, location }: any) => {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    location || "",
  )}&output=embed`;

  return (
    <>
      <ModalBox open={open} onClose={onClose}>
        <h2 className="text-lg font-semibold mb-3">Event Location</h2>
        <iframe
          src={mapUrl}
          width="100%"
          height="400"
          className="rounded-lg"
          loading="lazy"
        />
      </ModalBox>
    </>
  );
};

export default EventLocationModal;
