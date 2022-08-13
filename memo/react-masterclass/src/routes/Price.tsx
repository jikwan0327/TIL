import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface PriceProps {
  coinId: string;
}

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));

  data?.map((price) => price.close);

  return (
    <div>
      {isLoading ? (
        "Loading Price..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: [
                {
                  x: new Date(1538778600000),
                  y: [6629.81, 6650.5, 6623.04, 6633.33],
                },
                {
                  x: new Date(1538780400000),
                  y: [6632.01, 6643.59, 6620, 6630.11],
                },
                {
                  x: new Date(1538782200000),
                  y: [6630.71, 6648.95, 6623.34, 6635.65],
                },
                {
                  x: new Date(1538784000000),
                  y: [6635.65, 6651, 6629.67, 6638.24],
                },
                {
                  x: new Date(1538785800000),
                  y: [6638.24, 6640, 6620, 6624.47],
                },
                {
                  x: new Date(1538787600000),
                  y: [6624.53, 6636.03, 6621.68, 6624.31],
                },
                {
                  x: new Date(1538789400000),
                  y: [6624.61, 6632.2, 6617, 6626.02],
                },
                {
                  x: new Date(1538791200000),
                  y: [6627, 6627.62, 6584.22, 6603.02],
                },
                {
                  x: new Date(1538793000000),
                  y: [6605, 6608.03, 6598.95, 6604.01],
                },
              ],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              labels: { show: false, datetimeFormatter: { month: "mmm 'yy" } },
              type: "datetime",
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
            },
            colors: ["#0fbcf9"],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(3)}`,
              },
            },
          }}
        ></ApexChart>
      )}
    </div>
  );
}

export default Price;
