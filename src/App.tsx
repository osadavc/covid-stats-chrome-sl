import axios from "axios";
import { useState, useEffect } from "react";
import CovidCountCard from "./CovidCountCard";
import { CovidToday } from "./interfaces/covidToday";
import PrevCountCompare from "./PrevCountCompare";

const App = () => {
  const [covidToday, setCovidToday] = useState<CovidToday | null>(null);
  const [prevCount, setPrevCount] = useState<number | null>(0);

  useEffect(() => {
    setPrevCount(parseInt(localStorage.getItem("prevCount")!));

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
      <PrevCountCompare prevCount={prevCount!} covidToday={covidToday!} />

      <div className="w-full flex flex-col justify-center items-center space-y-3">
        <CovidCountCard
          imageUrl="https://hpb.health.gov.lk/covid19-dashboard/img/icon-4.d002c132.gif"
          count={covidToday?.local_new_cases!}
        />
        <CovidCountCard
          imageUrl="https://hpb.health.gov.lk/covid19-dashboard/img/icon-1.403b9d8b.gif"
          count={covidToday?.local_new_deaths!}
        />
      </div>
      <h3 className="text-gray-500 absolute bottom-5 text-sm text-center">
        <span className="text-indigo-700">Last Updated</span> -{" "}
        {covidToday?.update_date_time}
        <span className="block mt-1">
          Made With ❤️ By{" "}
          <a
            href="https://github.com/osadavc"
            className="text-indigo-700 hover:text-indigo-800 transition-colors"
          >
            Osada Vidath
          </a>
        </span>
      </h3>
    </div>
  );
};

export default App;
