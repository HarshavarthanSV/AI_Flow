function ActivityChart() {

    const heights = [60, 120, 90, 160, 130, 200, 180];

    return (

        <div className="activity-card">

            <h2>📈 Weekly Activity</h2>

            <div className="bars">

                {

                    heights.map((height, index) => (

                        <div
                            key={index}
                            className="bar-chart"
                            style={{ height: `${height}px` }}
                        ></div>

                    ))

                }

            </div>

        </div>

    );

}

export default ActivityChart;