<template>
    <div class="back p-12" >
        <div class=" text-center "> 

            <h3 class=" text-4xl font-bold" >How It <strong class="text-blue-500">Works</strong>.</h3>

            <p class="text-gray-500 text-lg pt-6">
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>


        </div>
      
      <div class=" grid grid-cols-4 gap-4 p-12">

        <div v-for="item in items" :key="item.id" > 

            <div :class="[item.is_active ? 'bg-blue-500': 'bg-white']" class="drop-shadow-xl m-3  p-6 shadow  rounded" > 
                    <div class="flex"> 
                          <div class="pt-3"><i :class="'rounded p-3 mr-3 mt-3 icofont-'+item.icon+' '+(item.is_active ? 'text-'+item.color :'text-white' )+' '+(item.is_active ?  'bg-white' : 'bg-'+item.color) "></i> </div>  
                           <div><h6 :class="'font-bold text-base ' + (item.is_active ? 'text-white'  : 'text-gray-700'  )" >{{item.title}}</h6></div> 
                    </div>
                    <p :class="'pt-5 text-base '+ (item.is_active ? 'text-white'  : 'text-gray-400'  )">{{item.text}}</p>
                    <a :class="'text-base   '+ (item.is_active ? 'text-white'  : 'text-gray-400'  )" :href="item.link">Read more...</a>
                    
            </div>

        </div>
            
      </div>
      
    </div>
</template>

<script>


export default {
  data() {
     return{
        items:[
            {
                id:1,
                color:"black",
                icon:"search-1",
                title:"Search your demanding house",
                text:"The better impression it would make.The better impression it would make.",
                link:"#",
                is_active:false
            },
              {
                id:2,
                color:"blue-500",
                icon:"star-shape",
                title:"Our best Home Features",
                text:"The better impression it would make.The better impression it would make.",
                link:"#",
                is_active:true
            },
              {
                id:3,
                color:"green-500",
                icon:"shield-alt",
                title:"Book your Dream House Property",
                text:"The better impression it would make.The better impression it would make.",
                link:"#",
                is_active:false
            },
              {
                id:4,
                color:"red-700",
                icon:"users-social",
                title:"Enjoy your new place with family",
                text:"The better impression it would make.The better impression it would make.",
                link:"#",
                is_active:false
            }
        ]
     }
  }
}
</script>


<style scoped>
.back{
    background-image: url('/back2.jpg');
    background-position: center;
    background-size: cover;
    height: 600px;
}
.shadow{
box-shadow: 0px 0px 49px -23px rgba(0,0,0,0.29);
-webkit-box-shadow: 0px 0px 49px -23px rgba(0,0,0,0.29);
-moz-box-shadow: 0px 0px 49px -23px rgba(0,0,0,0.29);
}
</style>