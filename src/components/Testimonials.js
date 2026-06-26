function Testimonials() {

    const reviews = [

        {
            name:"Sarah Johnson",
            role:"CEO, TechNova",
            review:"AIFlow reduced our manual work by nearly 70%. The automation is incredible."
        },

        {
            name:"Michael Lee",
            role:"Product Manager",
            review:"The dashboard is beautiful and the AI workflows save our team hours every day."
        },

        {
            name:"Emily Davis",
            role:"Operations Head",
            review:"Fast, reliable and very easy to integrate into our business."
        }

    ];

    return(

<section className="testimonials">

<div className="section-title">

<h2>What Our Customers Say</h2>

<p>
Thousands of companies trust AIFlow every day.
</p>

</div>

<div className="testimonial-grid">

{

reviews.map((item,index)=>(

<div className="testimonial-card" key={index}>

<div className="stars">

★★★★★

</div>

<p className="review">

"{item.review}"

</p>

<h3>{item.name}</h3>

<span>{item.role}</span>

</div>

))

}

</div>

</section>

);

}

export default Testimonials;