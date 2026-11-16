interface Props {
  location: string;
}

const Minimap = ({ location }: Props) => {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    location || "",
  )}&output=embed`;

  return (
    <>
      <iframe
        src={mapUrl}
        width="100%"
        height="200"
        className="rounded-lg"
        loading="lazy"
      />
    </>
  );
};

export default Minimap;
