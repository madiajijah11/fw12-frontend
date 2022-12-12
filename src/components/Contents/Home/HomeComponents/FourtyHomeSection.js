const FourtyHomeSection = () => {
  return (
    <>
      <div className="flex flex-col mt-10">
        <div className="text-center shadow-lg w-full rounded-lg px-10 md:px-20 py-20">
          <div className="py-5">
            <p className="text-2xl">Be the vanguard of the</p>
            <h1 className="text-[#FA86BE] text-5xl font-bold">Moviegoers</h1>
          </div>
          <form className="pt-10">
            <input
              className="py-4 px-5 mr-3 rounded border-2 border-[#DEDEDE]"
              placeholder="Type your email"
            />
            <button
              className="py-4 px-7 bg-[#FA86BE] text-white rounded"
              type="submit"
            >
              join now
            </button>
          </form>
          <div className="py-10 text-sm text-slate-400">
            <p className="pb-3">By joining you as a Tickitz member,</p>
            <p>we will always send you the latest updates via email .</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourtyHomeSection;
