<template>
    <div class="p-12">
        <div class=" text-center "> 

            <h3 class=" text-4xl font-semibold" >Recent Added <strong class="text-blue-500">Tranding</strong> Properties</h3>

            <div class="flex justify-around"> 
                <div> </div>
                <div class="w-1/2"> 
                  <p class="text-gray-500 text-base pt-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  </p>  
                </div>
                <div> </div>
            </div>
          


        </div>
      

        <div class="grid grid-cols-3 gap-3 p-6">
            <div class="p-3" v-for="item in items" :key="item.id">
                <Item :item="item"></Item>
            </div>
        </div>

        <div class="text-center"> 
                <button class=" inline-block px-12 py-4 bg-blue-500 text-white font-medium text-base leading-tight   shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">
                     Learn More
                </button>

        </div>
       
     
    </div>

  
    
</template>

<script>

export default {
    data() {
        return {
            items:[
                {
                    id:1,
                    is_available:false,
                    price:'$256,000',
                    image:"/home1.jpg",
                    title:"The better impression it would make An agency.",
                    address:"Amv 333 , Syllet , Bacngh u3",
                    bed:'3 Bd',
                    bath:'2 Bth',
                    m:'1200 Sqft'

                },

                 {
                    id:2,
                    is_available:true,
                    price:'$256,000',
                    image:"/home2.jpg",
                    title:"The better impression it would make An agency.",
                    address:"Amv 333 , Syllet , Bacngh u3",
                    bed:'3 Bd',
                    bath:'2 Bth',
                    m:'1200 Sqft'

                }

                ,

                 {
                   id:3,
                    is_available:true,
                    price:'$256,000',
                    image:"/home3.jpg",
                    title:"The better impression it would make An agency.",
                    address:"Amv 333 , Syllet , Bacngh u3",
                    bed:'3 Bd',
                    bath:'2 Bth',
                    m:'1200 Sqft'


                },

                 {
                    id:4,
                    is_available:true,
                    price:'$256,000',
                    image:"/home4.jpg",
                    title:"The better impression it would make An agency.",
                    address:"Amv 333 , Syllet , Bacngh u3",
                    bed:'3 Bd',
                    bath:'2 Bth',
                    m:'1200 Sqft'

                },

                 {
                    id:5,
                    is_available:true,
                    price:'$256,000',
                    image:"/home5.jpg",
                    title:"The better impression it would make An agency.",
                    address:"Amv 333 , Syllet , Bacngh u3",
                    bed:'3 Bd',
                    bath:'2 Bth',
                    m:'1200 Sqft'

                }

                ,

                 {
                   id:6,
                    is_available:true,
                    price:'$256,000',
                    image:"/home6.jpg",
                    title:"The better impression it would make An agency.",
                    address:"Amv 333 , Syllet , Bacngh u3",
                    bed:'3 Bd',
                    bath:'2 Bth',
                    m:'1200 Sqft'


                }
            ]    
        }
    },
}
</script>


<style scoped>

</style>