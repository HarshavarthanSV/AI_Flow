import { useState } from "react";

function FAQ(){

const [open,setOpen]=useState(0);

const data=[

{
question:"Is AIFlow secure?",
answer:"Yes. Enterprise-grade encryption protects all your data."
},

{
question:"Can I change plans later?",
answer:"Absolutely. Upgrade or downgrade anytime."
},

{
question:"Do you offer support?",
answer:"Yes. All plans include support with different priority levels."
}

];

return(

<section className="faq">

<div className="section-title">

<h2>Frequently Asked Questions</h2>

</div>

{

data.map((item,index)=>(

<div
className="faq-item"
key={index}
>

<div
className="faq-question"
onClick={()=>setOpen(open===index?-1:index)}
>

<h3>{item.question}</h3>

<span>

{open===index?"−":"+"}

</span>

</div>

{

open===index&&

<div className="faq-answer">

<p>{item.answer}</p>

</div>

}

</div>

))

}

</section>

);

}

export default FAQ;