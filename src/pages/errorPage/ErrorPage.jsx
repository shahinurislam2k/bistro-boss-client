const ErrorPage = () => {
  return (
    <div className=" flex min-h-screen justify-center items-center">
      <div>
        <h1 className="text-8xl font-bold text-center">404</h1>
        <h2 className="text-4xl my-6 font-bold text-center">Not Found</h2>
        <p className="text-center">The resource requested could not be found on this server!</p>
      </div>
    </div>
  );
};

export default ErrorPage;
