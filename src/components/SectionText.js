const SectionText = ({ title, desc }) => {
  return (
    <div className="py-16 text-center">
      <h2 className="font-caveat text-5xl font-bold capitalize text-eucalyptus">
        {title || ""}
      </h2>
      <p className="text-2xl font-medium capitalize mt-2">{desc || ""}</p>
    </div>
  );
};

export default SectionText;
