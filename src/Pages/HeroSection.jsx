 
 import { useParams, Link } from "react-router-dom";
 import tail from "../Image/tail.PNG"

function HeroSection() {
  return (
    <>
      {/* <h1 > HeroSection Page</h1> */}
      
        {/* Header section   */}

  <header class="text-gray-600 body-font">
   <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
       </svg>
       <span class="ml-3 text-xl">Tailwind</span>
     </a>
     <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
     <a class="mr-5 hover:text-gray-900"> <Link to="/">Home</Link></a>
       <a class="mr-5 hover:text-gray-900"> <Link to="/herosection">HeroSection</Link></a>
       <a class="mr-5 hover:text-gray-900"><Link to="/feature">Feature</Link></a>
       <a class="mr-5 hover:text-gray-900"><Link to="/pricing">Pricing</Link></a>
       <a class="mr-5 hover:text-gray-900"><Link to="/contact">Contact</Link></a>
       <a class="mr-5 hover:text-gray-900"><Link to="/blog">Blog</Link></a>
     </nav>
     <button class="inline-flex items-center bg-black text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Get all-access
       <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
         <path d="M5 12h14M12 5l7 7-7 7"></path>
       </svg>
     </button>
   </div>
 </header>

     {/* HERO SECTION   */}
    <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Data to enrich your
              <br class="hidden lg:inline-block"/> online business
            </h1>
            <p class="mb-8 leading-relaxed"> Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get started</button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Live demo</button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src= {tail}/>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
