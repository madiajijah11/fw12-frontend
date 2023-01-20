import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-24 text-center">
      <h1 className="text-9xl font-bold">404</h1>
      <h2 className="mb-8 text-6xl font-bold">Page Not Found</h2>
      <p className="mb-8">
        Sorry{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        we couldn’t find this page.
      </p>
      <p>But dont worry, you can find plenty of other things on our homepage.</p>
      {/* Back to homepage */}
      <Link
        to="/"
        className="px-4 py-2 mt-6 font-semibold text-white bg-[#FA86BE] rounded hover:bg-[#A275E3]"
      >
        Back to homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
