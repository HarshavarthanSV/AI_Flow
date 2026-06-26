import { useState } from "react";

function Pricing() {

    const [billing, setBilling] = useState("monthly");
    const [currency, setCurrency] = useState("USD");

    const currencyRate = {
        USD: 1,
        INR: 84,
        EUR: 0.92
    };

    const currencySymbol = {
        USD: "$",
        INR: "₹",
        EUR: "€"
    };

    const plans = [
        {
            name: "Starter",
            base: 19,
            features: [
                "5 AI Workflows",
                "Basic Analytics",
                "Email Support"
            ]
        },
        {
            name: "Pro",
            base: 49,
            popular: true,
            features: [
                "Unlimited Workflows",
                "Advanced Analytics",
                "Priority Support"
            ]
        },
        {
            name: "Enterprise",
            base: 99,
            features: [
                "Custom AI Models",
                "Unlimited Team",
                "24/7 Support"
            ]
        }
    ];

    function calculatePrice(base){

        let price = base * currencyRate[currency];

        if(billing==="yearly"){
            price = price * 12 * 0.8;
        }

        return price.toFixed(0);

    }

    return(

<section className="pricing" id="pricing">

<div className="section-title">

<h2>Simple Pricing</h2>

<p>
Choose the perfect plan for your business.
</p>

</div>

<div className="pricing-controls">

<div className="billing-toggle">

<button
className={billing==="monthly" ? "active" : ""}
onClick={()=>setBilling("monthly")}
>
Monthly
</button>

<button
className={billing==="yearly" ? "active" : ""}
onClick={()=>setBilling("yearly")}
>
Yearly
</button>

</div>

<select
value={currency}
onChange={(e)=>setCurrency(e.target.value)}
>

<option>USD</option>
<option>INR</option>
<option>EUR</option>

</select>

</div>

<div className="pricing-grid">

{

plans.map((plan,index)=>(

<div
className={`price-card ${plan.popular ? "popular":""}`}
key={index}
>

{plan.popular &&

<div className="badge">

Most Popular

</div>

}

<h3>{plan.name}</h3>

<h1>

{currencySymbol[currency]}

{calculatePrice(plan.base)}

<span>

{billing==="monthly" ? "/mo":"/yr"}

</span>

</h1>

<ul>

{

plan.features.map((feature,i)=>(

<li key={i}>✓ {feature}</li>

))

}

</ul>

<button>

Get Started

</button>

</div>

))

}

</div>

</section>

);

}

export default Pricing;