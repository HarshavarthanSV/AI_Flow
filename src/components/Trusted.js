function Trusted() {

    const companies = [
        "Google",
        "Microsoft",
        "Amazon",
        "OpenAI",
        "Netflix",
        "Spotify"
    ];

    return (

        <section className="trusted">

            <p className="trusted-title">
                Trusted by innovative companies
            </p>

            <div className="trusted-container">

                {companies.map((company,index)=>(
                    <div className="company" key={index}>
                        {company}
                    </div>
                ))}

            </div>

        </section>

    );

}

export default Trusted;