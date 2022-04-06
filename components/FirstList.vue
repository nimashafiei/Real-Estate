<template>
    <div class="p-12 px-24">
        <h3 class="text-4xl font-bold" >Our Most Popular Tranding</h3>
        <h3 class="text-4xl font-bold text-blue-400">Properties</h3>
        <div class="flex justify-between">
            <div>
                 <p class="w-1/2 text-gray-500 text-base pt-6 ">
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  </p>

            </div>
            
            <div>
               <div class=" "> 
                    <i class="p-3 bg-blue-200 rounded text-lg icofont-thin-left text-white"></i>  <i class="ml-6 p-3 bg-blue-500 rounded  icofont-thin-right text-lg text-white"></i>
               </div>
            </div>
        </div>
           

        <div class="grid grid-cols-3 gap-3 p-6">
            <div class="p-3" v-for="item in items" :key="item.id">
                <Item :item="item"></Item>
            </div>
        </div>
     
    </div>

  
    
</template>

<script>

export default {
    data() {
        return {
            items:[
                {
                    id:11,
                    is_available:true,
                    price:'$256,000',
                    image:"/home1.jpg",
                    title:"The better impression it would make An agency.",
                    address:"Amv 333 , Syllet , Bacngh u3",
                    bed:'3 Bd',
                    bath:'2 Bth',
                    m:'1200 Sqft'

                },

                 {
                    id:12,
                    is_available:false,
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
                   id:13,
                    is_available:true,
                    price:'$256,000',
                    image:"/home3.jpg",
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