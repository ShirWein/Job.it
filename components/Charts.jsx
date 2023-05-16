import React, {useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'; 

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Charts = () => {
    // This is the data for the char !!!
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});


    // Static Data For Example!!
    useEffect(() => {
        setChartData({
            labels: ['Saved', 'Applied', 'Interview', 'Offer'],
            datasets: [{
                label: 'Job Stage',
                data: [10, 50, 0, 0],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgb(53, 162, 235, 0.4',
            
            }

            ]
        })
        // Chart design
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Job Search By Stage'
                }
            },
            maintainAspectRatio: false,
            responsive: true

        })
    }, [])

  return (
    <>
        <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white font-bold'>
            <Bar data={chartData} options={chartOptions}/> 
        </div>
    </>
  )
}

export default Charts