import Chart from "react-apexcharts";
import { convertTimeLabel } from "../../utils";

export const TempCharts = ({ data }) => {

    const { daily: { time, weathercode }
    } = data;

    console.log(weathercode, time)

    const modifiedData = {
        options: {
            chart: {
                // height: 250,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'Temperature trends by daily',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
        },
        xaxis: {
            times: convertTimeLabel(time)
        },
        series: [
            {
                name: "weathercode",
                data: weathercode
            }
        ]
    };





    return (
        <div className='h-1/6 w-full'>
            <h1 className='text-2xl font-bold mt-2'>
                TempCharts
            </h1>
            <div>
                <Chart options={modifiedData.options} series={modifiedData.series} type="line" width="500" />
            </div>
        </div>
    )
}
