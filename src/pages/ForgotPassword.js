const ForgotPassword = () => {
  return (
    <>
      <div className="grid sm:grid-cols-[2fr,1.3fr] h-screen">
        <div className="bg-[url('../images/background.png')] bg-cover bg-center bg-no-repeat w-full h-full relative">
          <div>
            <div className="absolute top-0 left-0 w-full h-full bg-[#FA86BE] opacity-80">
              <div className="flex flex-col content-center w-full h-full flex-wrap justify-center gap-6">
                <div className="font-bold text-5xl text-white mb-16">MexL Cinema</div>
                <div className="text-5xl font-bold text-white">Lets reset your password</div>
                <div className="text-white">
                  To be able to use your account again, please complete the following steps.
                </div>
                <div>
                  <div className="flex flex-row items-center mb-8">
                    <div className="border-2 border-white relative rounded-full w-10 h-10 flex justify-center mr-5 items-center font-bold bg-white">
                      1<div className="border-l-2 h-full absolute -bottom-full"></div>
                    </div>
                    <div className="font-bold text-white">Fill your complete email</div>
                  </div>
                  <div className="flex flex-row items-center mb-8">
                    <div className="border-2 border-white relative rounded-full w-10 h-10 flex justify-center mr-5 items-center text-white font-bold">
                      2<div className="border-l-2 h-full absolute -bottom-full"></div>
                    </div>
                    <div className="font-bold text-white">Check your email</div>
                  </div>
                  <div className="flex flex-row items-center mb-8">
                    <div className="border-2 border-white relative rounded-full w-10 h-10 flex justify-center mr-5 items-center text-white font-bold">
                      3<div className="border-l-2 h-full absolute -bottom-full"></div>
                    </div>
                    <div className="font-bold text-white">Enter your new password</div>
                  </div>
                  <div className="flex flex-row items-center mb-8">
                    <div className="border-2 border-white relative rounded-full w-10 h-10 flex justify-center mr-5 items-center text-white font-bold">
                      4
                    </div>
                    <div className="font-bold text-white">Done</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mx-8 my-8">
          <div className="w-2/3 grid gap-7">
            <div className="text-3xl font-bold">Fill your complete email</div>
            <div className="font-thin text-gray-700">
              we&apos;ll send a link to your email shortly
            </div>
            <form className="flex flex-col items-center w-full gap-4">
              <div className="w-full">
                <label htmlFor="email" className="block text-md font-medium leading-10">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Write your email"
                  name="email"
                  className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="bg-[#FA86BE] hover:bg-[#A275E3] py-2 px-4 text-medium text-white w-full rounded-md font-medium">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
