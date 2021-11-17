const PrevCountCompare = ({ prevCount }) => {
  return (
    <div>
      {prevCount && (
        <div className="absolute top-10 text-md w-[10.3rem] text-center ">
          {prevCount == covidToday?.local_new_cases && (
            <h1 className="font-bold">Nothing New Here, Not Worth Checking</h1>
          )}
          {prevCount > covidToday?.local_new_cases && (
            <h1 className="text-gray-700 font-bold">
              Oops!! it is lower than last time
            </h1>
          )}
          {prevCount < covidToday?.local_new_cases && (
            <h1 className="text-indigo-700 font-extrabold">
              Interesting, it is higher than last time
            </h1>
          )}
        </div>
      )}
    </div>
  );
};

export default PrevCountCompare;
