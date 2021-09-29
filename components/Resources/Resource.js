const Resource = ({ isgray, heading, desc, children }) => {
  return (
    <div className={`${isgray && "bg-[#FAFAFA]"}`}>
      <div className="xl:container mx-auto flex flex-col justify-center px-44 py-28 min-h-screen">
        <h1 className="ho text-[3.125rem] font-bold mb-6">{heading}</h1>
        <p className="max-w-[56rem] text-[#707070] text-sm">{desc}</p>
        {/* SOP */}
        {children}
      </div>
    </div>
  );
};

export default Resource;
