const Resource = ({ isgray, heading, desc, children }) => {
  return (
    <div className={`${isgray && "bg-[#FAFAFA]"}`}>
      <div className="max-w-[70rem] mx-auto flex flex-col justify-center px-44 py-[2.5rem] ">
        <h1 className="ho text-[3.125rem] font-bold mb-[-0.2rem]">{heading}</h1>
        <p className="max-w-[56rem] text-[#707070] text-sm">{desc}</p>
        {/* SOP */}
        {children}
      </div>
    </div>
  );
};

export default Resource;
