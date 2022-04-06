<template>
    <div class="shadow bg-gray-100  drop-shadow-lg  rounded-lg my-rounded  py-3 px-3">
        <div class="image rounded-lg p-3" v-bind:style="{ 'background-image': 'url(' + item.image + ')' }">
                <span v-if="item.is_available" class="rounded-full text-xs text-blue-400 bg-white p-1">Available Now</span>
        </div>
        <div class="flex flex-row justify-between p-3">
            <div> <strong class="text-blue-600">{{item.price}}</strong> </div>
            <div><i class="text-gray-300 icofont-heart"></i>  <i class="text-gray-300 icofont-share"></i> </div>
            
        </div>
        <h3 class="font-bold">{{item.title}}</h3>
        <p class="pt-3 text-sm text-gray-400">{{item.address}}</p>

        <div class="flex flex-row justify-between p-3">
            <div><i class="icofont-bed text-red-600"></i> <span class="text-xs">{{item.bed}}</span></div>
            <div><i class="icofont-bathtub text-blue-600"></i> <span class="text-xs">{{item.bath}}</span></div>
            <div><i class="icofont-square text-green-600"></i> <span class="text-xs">{{item.m}}</span></div>
        </div>
        
    </div>
</template>

<script>


export default {
    props: ['item'],
}
</script>


<style scoped>
 .image{
    height: 250px;
    background-position: center;
    background-size: cover;
    border-radius: 20px;
 }

.shadow{
box-shadow: 0px 0px 49px -23px rgba(0,0,0,0.29);
-webkit-box-shadow: 0px 0px 49px -23px rgba(0,0,0,0.29);
-moz-box-shadow: 0px 0px 49px -23px rgba(0,0,0,0.29);
}

.my-rounded{
      border-radius: 20px;
}
</style>