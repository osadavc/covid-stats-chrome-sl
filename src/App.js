import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [covidToday, setCovidToday] = useState({});
  const [prevCount, setPrevCount] = useState(0);

  useEffect(() => {
    setPrevCount(localStorage.getItem("prevCount"));
    axios
      .get("https://hpb.health.gov.lk/api/get-current-statistical")
      .then((response) => {
        setCovidToday(response.data.data);
        localStorage.setItem("prevCount", response.data.data.local_new_cases);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-w-[340px] max-w-[310px] min-h-[500px] bg-gray-100 relative font-lato text-base">
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

      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex justify-center items-center mb-10 bg-gray-200 py-3 rounded-lg shadow-sm cursor-pointer space-x-2 w-[10.3rem]">
          <img
            src="https://hpb.health.gov.lk/covid19-dashboard/img/icon-4.d002c132.gif"
            className="w-20 h-20"
          />
          <h1 className="text-lg">{covidToday?.local_new_cases}</h1>
        </div>
        <div className="flex justify-center items-center bg-gray-200 py-3 w-[10.3rem] rounded-lg shadow-sm cursor-pointer space-x-2">
          <img
            src="https://hpb.health.gov.lk/covid19-dashboard/img/icon-1.403b9d8b.gif"
            className="w-20 h-20"
          />
          <h1 className="text-lg">{covidToday?.local_new_deaths}</h1>
        </div>
      </div>
      <h3 className="text-gray-500 absolute bottom-5 text-sm">
        <span className="text-indigo-700">Last Updated</span> -{" "}
        {covidToday?.update_date_time}
      </h3>
    </div>
  );
};

export default App;
