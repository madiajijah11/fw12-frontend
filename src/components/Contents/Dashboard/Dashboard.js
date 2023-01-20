import Graph from '../../../assets/images/graph.png';

const Dashboard = () => {
  return (
    <>
      <div className="px-32 py-16">
        <div className="px-32 py-16 bg-gray-100 rounded-lg">
          <div className="flex gap-2">
            <div className="grid gap-5 w-3/4">
              <div className="text-2xl font-semibold">Form Movie</div>
              <div>
                <img className="w-[934px] h-[434px]" src={Graph} alt="Graph" title="Graph" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-2xl font-semibold">Filtered</div>
              <div className="grid grid-flow-row gap-5 h-full bg-white rounded-lg p-10">
                <select className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent">
                  <option value="1">Select Movie</option>
                </select>
                <select className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent">
                  <option value="1">Select Premiere</option>
                </select>
                <select className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent">
                  <option value="1">Select Location</option>
                </select>
                <button className="w-64 px-4 py-2 bg-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA86BE] hover:bg-[#A275E3] focus:border-transparent font-bold text-white">
                  Filter
                </button>
                <button className="w-64 px-4 py-2 border border-[#A275E3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] hover:bg-[#A275E3] text-[#A275E3] focus:border-transparent font-bold">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
