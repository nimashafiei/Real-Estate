<template>
    <div class=" home">

            <nav class="flex  items-center justify-between flex-wrap px-28 py-10  ">

                <div>
                      <h1 class="text-blue-500 font-bold text-2xl">Building.Rs</h1>  
                </div>
                
                <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-center">
                 
                        <a href="#Home" class="block mt-4 lg:inline-block lg:mt-0 text-lg  font-semibold hover-bold  mr-4 ">
                            Home
                        </a>
                        <a href="#About" class="block mt-4 lg:inline-block lg:mt-0 text-lg font-semibold hover-bold  mr-4">
                            About us
                        </a>
                        <a href="#Properties" class="block mt-4 lg:inline-block lg:mt-0 font-semibold text-lg hover-bold  mr-4">
                            Properties
                        </a>
                        <a href="#Agent" class="block mt-4 lg:inline-block lg:mt-0 text-lg  font-semibold hover-bold  mr-4">
                            Agent
                        </a>
                        <a href="#Contact" class="block mt-4 lg:inline-block lg:mt-0 text-lg font-semibold  hover-bold  mr-4">
                            Contact
                        </a>
                    
                </div>

                <div class="">
                    <button class="inline-block px-12 py-3 bg-blue-500 text-white font-medium text-sm leading-tight   shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">
                     Get Started
                    </button>
                </div>
            </nav>
        
        <div class="grid grid-cols-3 gap-3 ">

            <div class="col-span-2  pl-28	">
                    <h1 class="font-extrabold text-6xl mt-16	" >
                        Easy To Find Your Next Pergect Place
                    </h1>

                    <div class="mt-8 grid grid-cols-3 gap-3">
                        <p class="col-span-2 text-gray-500">
                            An agency, in broad terms, is any relationship between two parties in which one, the agent, represents the other , the principal, in day-to-day transactions. 
                        </p>

                      
                    </div>

                    <div class="flex mt-8">

                        <div>
                                <button class="mt-1 inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight  shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">
                                     Learn More
                                </button>
    
                        </div>

                    
                        <div>
                            
                                <div class="circle ml-6">

                                <i class="icofont-ui-play text-white"></i>       

                                </div>
                        </div>
                
                        
                    </div>
                  
                


                    <ul class="mt-16 nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab"
                    role="tablist">
                    <li class="nav-item" role="presentation">
                        <a href="#tabs-rent" class="
                        nav-link
                        block
                        font-medium
                        text-xs
                        leading-tight
                        bg-gray-100
                        border-x-0 border-t-0 border-b-2 border-transparent
                        px-6
                        py-3
                        my-2
                        hover:border-transparent hover:bg-blue-100  
                        focus:border-transparent
                        active
                        " id="tabs-rent-tab" data-bs-toggle="pill" data-bs-target="#tabs-rent" role="tab" aria-controls="tabs-rent"
                        aria-selected="true">Rent</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#tabs-buy" class="
                        nav-link
                        block
                        font-medium
                        text-xs
                        leading-tight
                        bg-gray-100
                        border-x-0 border-t-0 border-b-2 border-transparent
                        px-6
                        py-3
                        my-2
                        hover:border-transparent hover:bg-blue-100
                        focus:border-transparent
                        " id="tabs-buy-tab" data-bs-toggle="pill" data-bs-target="#tabs-buy" role="tab"
                        aria-controls="tabs-buy" aria-selected="false">Buy</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#tabs-sell" class="
                        nav-link
                        block
                        font-medium
                        text-xs
                        leading-tight
                        bg-gray-100
                        border-x-0 border-t-0 border-b-2 border-transparent
                        px-6
                        py-3
                        my-2
                        hover:border-transparent hover:bg-blue-100
                        focus:border-transparent
                        " id="tabs-sell-tab" data-bs-toggle="pill" data-bs-target="#tabs-sell" role="tab"
                        aria-controls="tabs-sell" aria-selected="false">Sell</a>
                    </li>
                   
                    </ul>

                    <div class="shadow-xl  mb-20  drop-shadow-2xl bg-white p-6	">
                        <div class="flex ">
                            <div class="flex-1 "><h3 class="text-gray-300">Location</h3> <h3 class="mt-3 font-bold text-sm">Zindabazar, Sylhet</h3></div>
                            <div class="flex-1 ml-6 pl-6 border-l-2 border-l-gray-300"><h3 class=" text-gray-300">Home Type</h3> <h3 class="mt-3 font-bold text-sm">Duplex House, 2400m</h3></div>
                            <div class="flex-1 ml-6 pl-6 border-l-2 border-l-gray-300"><h3 class=" text-gray-300">Range Home</h3> <h3 class="mt-3 font-bold text-sm">$10,000 - $60,000</h3></div>
                            <div class="flex-1 ml-3 pl-3 ">
                                    <button class=" inline-block p-3 h-14 w-30  bg-blue-500 text-white font-base text-lg	 leading-tight   shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">
                                       Search Property
                                    </button>
                            </div>
                        </div>
                    </div> 
                
            </div>

            <div class=" pb-2">

             

            </div>

        </div>
     
    </div>
</template>

<style>
.hover-bold:hover{
    @apply   font-bold  border-solid border-b-4;
}
.hover-bold:hover {
    border-bottom-color: rgb(2 132 199);
    border-bottom-width: 1px;
}

.home{
    background-image: url('/home.png');
    background-position: center;
    background-size: cover;
}

div.circle {
  cursor: pointer;
  scroll-behavior: smooth;
  transition: 0.5s ease-in;
}

div.circle {
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: rgb(138, 218, 255);
  display: grid;
  place-content: center;
  animation: grow 1s infinite;
}
div.circle > i {
  color: #eee;
  font-size: 12px;
}

@keyframes grow {
  from {
    box-shadow: 0px 0px 1em rgb(0, 153, 255);
  }
  to {
    box-shadow: 0px 0px 3em rgb(52, 174, 255);
  }
}

</style>
