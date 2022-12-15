import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { checkout } from "../../../redux/actions/transactionAction";

const PagePayment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [paymentList, setPaymentList] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [value, setValue] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const token = useSelector((state) => state.auth.token);
  const dataTransaction = useSelector((state) => state.transaction);
  const userId = useSelector((state) => state.profile.userInfo.id);
  const imgURL = process.env.REACT_APP_API_URL + "/assets/uploads/";

  useEffect(() => {
    getPaymentList();
  }, []);

  const getPaymentList = async () => {
    const { data } = await axios.get(
      process.env.REACT_APP_API_URL + "/paymentmethods",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    setPaymentList(data.data);
  };

  const order = () => {
    dispatch(
      checkout({
        userId,
        ...dataTransaction,
        paymentMethodId: selectedPayment,
        ...value,
      })
    );
    navigate("/profile");
  };

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
                  {paymentList?.map((payment) => (
                    <div
                      className={`flex justify-center border border-[#FA86BE] p-4 rounded-md cursor-pointer hover:bg-[#A275E3]
                        ${selectedPayment === payment.id && " bg-[#A275E3]"}
                    `}
                      key={payment.id}
                      onClick={() => setSelectedPayment(payment.id)}
                    >
                      <img
                        className="h-6"
                        src={imgURL + payment.picture}
                        alt="payment"
                      />
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
                      className="font-normal text-[#FA86BE] hover:text-[#A275E3]"
                    >
                      See how it work
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => navigate(-1)}
                className="border-[#FA86BE] border px-4 py-2 rounded-md text-[#FA86BE] hover:bg-[#A275E3] hover:border-[#A275E3] hover:text-white font-bold text-base"
              >
                Previous step
              </button>
              <button
                onClick={order}
                className="bg-[#A275E3] text-white px-4 py-2 rounded-md hover:bg-transparent hover:border-[#FA86BE] hover:border hover:text-[#FA86BE] font-bold text-base"
              >
                Pay your order
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/5 flex flex-col gap-5">
          <div className="text-2xl font-bold">Personal Info</div>
          <div className="bg-white rounded-lg flex flex-col px-10 gap-4">
            <div className="my-10 grid gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="fullName">Full Name</label>
                <input
                  className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                  type="text"
                  placeholder="Jonas El Rodriguez"
                  value={value.fullName}
                  onChange={(event) =>
                    setValue({ ...value, fullName: event.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                  className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                  type="email"
                  placeholder="jonasrodri123@gmail.com"
                  value={value.email}
                  onChange={(event) =>
                    setValue({ ...value, email: event.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                  type="text"
                  placeholder="082256964453"
                  value={value.phoneNumber}
                  onChange={(event) =>
                    setValue({ ...value, phoneNumber: event.target.value })
                  }
                />
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
