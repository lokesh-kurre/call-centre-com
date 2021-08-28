let btnfirst = document.querySelector("#buttonf");
let btnsecond = document.querySelector("#buttons");
let btnthird = document.querySelector("#buttont");
let heading = document.querySelector("#offer_h");
let para = document.querySelector("#offer_p");

btnfirst.addEventListener('click' , () => {
    heading.innerHTML ="Top Quality Call Center Services";
    para.innerHTML ="CallLogic is a leading provider of contact center and customer relationship management services throughout North America, Europe, and Asia.We possess years of demonstrable experience in delivering desired business outcomes for our clients, across industries with our best-in-class outbound, inbound and web enabled outsourcing services to improve your reputation and give your clients efficient support."
})


btnsecond.addEventListener('click' , () => {
    heading.innerHTML ="Affordable Call Center Services";
    para.innerHTML ="We see our mission in providing our clients with a lower cost customer support and lead generation solution that they are looking for.Our talented and experienced team delivers reliable yet affordable services for small, medium, and big businesses all over the world. We are constantly creating a better atmosphere of customer service and satisfaction, while making your business better every day.";

})


btnthird.addEventListener('click' , () => {
    heading.innerHTML ="Offering Reliable Support";
    para.innerHTML ="Our goal since day one has been to become an industry leader in our field so that our clients could always count on us.We aim to deliver first-class customer support to your customers, while working for your success using inbound and outbound call center techniques. We are always open for cooperation and new ideas. Our team will design any call center solution for you.";

})