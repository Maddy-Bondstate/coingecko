import CardStats from "../Cards/CardStats";

export default function HeaderStats() {
  return (
    <div className="relative bg-sky-600 md:pt-32 pb-32 pt-12">
      <div className="px-4 md:px-10 mx-auto w-full">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
            <CardStats
              statSubtitle="TOTAL COINS"
              statTitle="11,655"
              statArrow="up"
              statPercent="3.48"
              statPercentColor="text-emerald-500"
              statDescripiron="Since last month"
              statIconName="fas fa-chart-bar"
              statIconColor="bg-red-500"
            />
          </div>
          <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
            <CardStats
              statSubtitle="COIN MARKETS"
              statTitle="100"
              statArrow="up"
              statPercent="2.5"
              statPercentColor="text-emerald-500"
              statDescripiron="Since last month"
              statIconName="fas fa-chart-line"
              statIconColor="bg-orange-500"
            />
          </div>
          <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
            <CardStats
              statSubtitle="CHART"
              statTitle="120"
              statArrow="down"
              statPercent="1.10"
              statPercentColor="text-orange-500"
              statDescripiron="Since yesterday"
              statIconName="fas fa-chart-area"
              statIconColor="bg-pink-500"
            />
          </div>
          <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
            <CardStats
              statSubtitle="PERFORMANCE"
              statTitle="95.65%"
              statArrow="up"
              statPercent="12"
              statPercentColor="text-emerald-500"
              statDescripiron="Since last month"
              statIconName="fas fa-percent"
              statIconColor="bg-sky-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
