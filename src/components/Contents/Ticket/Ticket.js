import Barcode from '../../../assets/images/qr-code.png';
import Logo from '../../../assets/images/mexl_cinema-1-edit-removebg.png';

const Ticket = () => {
  return (
    <>
      <div className="lg:px-32 py-16 md:px-16 sm:px-8 px-0">
        <div className="flex flex-col bg-gray-100 p-20 rounded-lg gap-10">
          <div className="text-center text-2xl font-bold">Proof of Payment</div>
          <div className="flex flex-col self-center">
            <div className="bg-[#FA86BE] flex justify-between p-10 rounded-t-lg">
              <div>
                <img src={Logo} alt="MexL Cinema" />
              </div>
              <div className="font-bold ">1234 Main St, New York, NY 10001</div>
            </div>
            <div className="flex border border-[#FA86BE] p-10 rounded-b-lg">
              <div className="flex flex-row gap-10 items-center">
                <div className="flex flex-col gap-5">
                  <div>
                    <div className="text-sm font-normal text-gray-400">Movie</div>
                    <div className="text-lg font-bold">Spiderman: No Way Home</div>
                  </div>
                  <div className="grid grid-cols-3 gap-5">
                    <div>
                      <div className="text-sm font-normal text-gray-400">Date</div>
                      <div className="text-lg font-bold">Friday, 10 December 2021</div>
                    </div>
                    <div>
                      <div className="text-sm font-normal text-gray-400">Time</div>
                      <div className="text-lg font-bold">10:00 AM</div>
                    </div>
                    <div>
                      <div className="text-sm font-normal text-gray-400">Genre</div>
                      <div className="text-lg font-bold">Action, Adventure, Fantasy</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-5">
                    <div>
                      <div className="text-sm font-normal text-gray-400">Count</div>
                      <div className="text-lg font-bold">3</div>
                    </div>
                    <div>
                      <div className="text-sm font-normal text-gray-400">Seat</div>
                      <div className="text-lg font-bold">A1, A2, A3</div>
                    </div>
                    <div>
                      <div className="text-sm font-normal text-gray-400">Price</div>
                      <div className="text-2xl font-bold">$30</div>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={Barcode} alt="barcode" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
