import { Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";

const payments = [
  {
    id: 1,
    logo: require("../../../assets/images/payment/logos_google-pay.png"),
  },
  {
    id: 2,
    logo: require("../../../assets/images/payment/logos_visa.png"),
  },
  {
    id: 3,
    logo: require("../../../assets/images/payment/logos_gopay.png"),
  },
  {
    id: 4,
    logo: require("../../../assets/images/payment/logos_paypal.png"),
  },
  {
    id: 5,
    logo: require("../../../assets/images/payment/logos_dana.png"),
  },
  {
    id: 6,
    logo: require("../../../assets/images/payment/logos_bca.png"),
  },
  {
    id: 7,
    logo: require("../../../assets/images/payment/logos_bri.png"),
  },
  {
    id: 8,
    logo: require("../../../assets/images/payment/logos_ovo.png"),
  },
];

const PagePayment = () => {
  return (
    <div className="lg:px-32 py-16 md:px-16 sm:px-8 px-0">
      <div className="flex flex-row bg-gray-100 p-20 rounded-lg gap-10">
        <div className="w-full">
          <div className="flex flex-col gap-5 mb-8">
            <div className="text-2xl font-bold">Payment Info</div>
            <div className="bg-white flex flex-col rounded-md p-10 gap-4">
              <div className="flex justify-between">
                <div className="font-normal text-xl">Date & time</div>
                <div className="font-normal text-xl">
                  Tuesday, 07 July 2020 at 02:00
                </div>
              </div>
              <hr />
              <div className="flex justify-between">
                <div className="font-normal text-xl">Movie title</div>
                <div className="font-normal text-xl">
                  Spider-Man: Homecoming
                </div>
              </div>
              <hr />
              <div className="flex justify-between">
                <div className="font-normal text-xl">Cinema name</div>
                <div className="font-normal text-xl">CineOne21 Cinema</div>
              </div>
              <hr />
              <div className="flex justify-between">
                <div className="font-normal text-xl">Number of tickets</div>
                <div className="font-normal text-xl">3 pieces</div>
              </div>
              <hr />
              <div className="flex justify-between">
                <div className="font-normal text-xl">Total payment</div>
                <div className="font-normal text-2xl">$30</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold">Choose a Payment Method</div>
            <div className="bg-white rounded-md">
              <div className="flex flex-col items-center py-10 gap-5">
                <div className="grid grid-cols-4 gap-4">
                  {payments.map((payment) => (
                    <div
                      className="flex justify-center border border-[#FB2576] p-4 rounded-md"
                      key={payment.id}
                    >
                      <img className="h-6" src={payment.logo} alt="payment" />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 items-center gap-2 w-full">
                  <div className="w-full border">
                    <hr />
                  </div>
                  <div className="text-center">or</div>
                  <div className="w-full border">
                    <hr />
                  </div>
                </div>
                <div>
                  <div className="font-normal">
                    Pay via cash.{" "}
                    <Link
                      to="#"
                      className="font-normal text-[#FB2576] hover:text-[#3F0071]"
                    >
                      See how it work
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <Link
                to="/movie-list"
                className="border-[#FB2576] border px-4 py-2 rounded-md text-[#FB2576] hover:bg-[#3F0071] hover:border-[#3F0071] hover:text-white font-bold text-base"
              >
                Previous step
              </Link>
              <Link
                to="#"
                className="bg-[#3F0071] text-white px-4 py-2 rounded-md hover:bg-transparent hover:border-[#FB2576] hover:border hover:text-[#FB2576] font-bold text-base"
              >
                Pay your order
              </Link>
            </div>
          </div>
        </div>
        <div className="w-2/5 flex flex-col gap-5">
          <div className="text-2xl font-bold">Personal Info</div>
          <div className="bg-white rounded-lg flex flex-col px-10 gap-4">
            <div className="my-10 grid gap-4">
              <div className="flex flex-col gap-2">
                <label for="FullName">Full Name</label>
                <input
                  className="w-full px-4 py-2 border border-[#FB2576] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3F0071] focus:border-transparent"
                  type="text"
                  placeholder="Jonas El Rodriguez"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label for="Email">Email</label>
                <input
                  className="w-full px-4 py-2 border border-[#FB2576] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3F0071] focus:border-transparent"
                  type="email"
                  placeholder="jonasrodri123@gmail.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label for="PhoneNumber">Phone Number</label>
                <div className="flex border border-[#FB2576] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3F0071] focus:border-transparent">
                  <input
                    className="rounded-md rounded-r-none border-r-[#FB2576] px-4 border-r py-2 w-16"
                    type="text"
                    placeholder="+62"
                  />
                  <input
                    className="rounded-md rounded-l-none px-4 py-2 border-l-[#FB2576] border-l w-full"
                    type="text"
                    placeholder="81445687121"
                  />
                </div>
              </div>
              <div className="flex justify-center bg-yellow-100 items-center gap-2 p-2">
                <Icon icon="material-symbols:warning-rounded" color="yellow" />
                <div>Fill your data correctly.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagePayment;
