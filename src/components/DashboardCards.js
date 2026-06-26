function DashboardCards() {

    const cards = [

        {
            title:"Users",
            value:"124K",
            icon:"👥"
        },

        {
            title:"AI Tasks",
            value:"1.4M",
            icon:"🤖"
        },

        {
            title:"Accuracy",
            value:"98%",
            icon:"🎯"
        },

        {
            title:"Revenue",
            value:"$58K",
            icon:"💰"
        }

    ];

    return (

        <div className="dashboard-cards">

            {

                cards.map((card,index)=>(

                    <div className="dash-card" key={index}>

                        <span className="dash-icon">

                            {card.icon}

                        </span>

                        <h2>{card.value}</h2>

                        <p>{card.title}</p>

                    </div>

                ))

            }

        </div>

    );

}

export default DashboardCards;