import { Chart } from "react-google-charts";

const BarChart = (props) => {
    const getFun = () => {
        var data = []
        data.push(['Project', "Length"])

        data.push(
            ["Ongoing Project", 40],
            ["Pending Project", 30],
            ["Completed Project", 50],
            ["Future Project", 70]
        )

        // console.log(data, vagetableData);
        return data
    }

    return (
        <div className='card'>
            <div className='d-flex justify-content-between'>

                <div className='ml-3 mt-3'>
                    <h3 className='text-center text-muted '>Project Analytics</h3>
                </div>
            </div>


            <Chart
                // width={'500px'}
                // height={'300px'}

                chartType="ComboChart"
                loader={<div>Loading Chart</div>}
                data={
                    getFun()
                }
                options={{
                    // colors: ['#FB7A21'],
                    // backgroundColor: '#2F4F4F',
                    chart: {
                        title: 'Company Performance',
                        subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                    },
                    legend: { position: 'none' },
                    title: "weeklyTitle",
                    titleTextStyle: { color: '#FFF' },
                    // vAxis: { title: 'Percentage', titleTextStyle: { color: '#FFF' }, textStyle: { color: '#FFF' } },
                    // hAxis: { title: 'Month', fontSize: 28, titleTextStyle: { color: '#FFF' }, textStyle: { color: '#FFF' } },
                    seriesType: 'bars',
                    series: { 5: { type: 'line' } },
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}

export default BarChart