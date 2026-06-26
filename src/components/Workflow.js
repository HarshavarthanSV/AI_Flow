function Workflow() {

    const steps = [
        {
            title: "Upload Data",
            description: "Import files, APIs or databases into AIFlow.",
            icon: "📁"
        },
        {
            title: "AI Processing",
            description: "AI analyzes your data and builds intelligent workflows.",
            icon: "🧠"
        },
        {
            title: "Automation",
            description: "Business processes run automatically without manual work.",
            icon: "⚡"
        },
        {
            title: "Analytics",
            description: "Monitor KPIs using real-time dashboards.",
            icon: "📊"
        }
    ];

    return (

        <section className="workflow">

            <div className="section-title">

                <h2>How AIFlow Works</h2>

                <p>
                    From raw data to intelligent automation in four simple steps.
                </p>

            </div>

            <div className="workflow-container">

                {steps.map((step, index) => (

                    <div className="workflow-item" key={index}>

                        <div className="workflow-icon">
                            {step.icon}
                        </div>

                        <h3>{step.title}</h3>

                        <p>{step.description}</p>

                        {index !== steps.length - 1 &&
                            <div className="workflow-line"></div>
                        }

                    </div>

                ))}

            </div>

        </section>

    );

}

export default Workflow;