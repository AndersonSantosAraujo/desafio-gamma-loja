import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

interface IDataChart {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
}

const Chart = ({ dataChart }: { dataChart: IDataChart[] }) => {
  const labels = ["HP", "AT", "DF", "SA", "SD", "SP"];
  const data = dataChart.map(
    ({ base_stat }: { base_stat: number }) => base_stat,
  );

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Score",
        data: data,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <Radar options={chartOptions} data={chartData} />
      <p>Legend</p>
      <ul>
        <li>HP: Health Points</li>
        <li>AT: Atack</li>
        <li>DF: Defense</li>
        <li>SA: Special Attack</li>
        <li>SD: Special Defense</li>
        <li>SP: Speed</li>
      </ul>
    </>
  );
};
export default Chart;
