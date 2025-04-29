const QrCode = () => {
  return (
    <div className=" bg-blue-100  justify-center flex items-center min-h-[calc(100vh-200px)] w-[calc(100vw-600px)]">
      <div className="border-4 w-[170px] shrink-0 shadow-xl bg-white h-[270px] p-1 rounded-[16px] font-bold ">
      <img
        src="../../src/assets/qrc.png"
        alt=""
        className="w-[170px] shadow-2xlz h-[150px] rounded-[5px]"
      />
      <p className="text-black text-[12px] pt-3 ">
        improve your front-end skills by building projects
      </p>
      <p className=  "text-gray-400 pt-1  text-[8px] ">
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p> 
      </div>

    </div>
  );
};

export default QrCode;
