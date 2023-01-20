import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-24 text-center">
      <h1 className="text-9xl font-bold">Order Success</h1>
      <h2 className="mb-8 text-6xl font-bold">Yay, your order is success!</h2>
      <p className="mb-8">
        <span role="img" aria-label="Pensive emoji">
          💕🙂
        </span>{' '}
        Thank you for your order.
      </p>
      <p>
        You can check your order in your profile page. If you have any question, please contact us.
      </p>
      {/* Back to homepage */}
      <Link
        to="/order-history"
        className="px-4 py-2 mt-6 font-semibold text-white bg-[#FA86BE] rounded hover:bg-[#A275E3]"
      >
        Go to order history
      </Link>
    </div>
  );
};

export default OrderSuccess;
