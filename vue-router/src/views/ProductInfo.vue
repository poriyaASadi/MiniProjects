<template>
    <div>
         <div class="parentbox_aboutproduct">
            <div class="boxleft_product">
                <img src="../assets/img/Buy_Mobile.jpg" class="boximage_aboutproduct" alt="">
            </div>
            <div class="box_rightproduct">
                <h2 class="name_product">{{dee.name}}</h2>
                <p class="about_product">{{dee.about}}</p>
                <div class="amount_product">
                    <span>amount : {{dee.amout}}</span>
                </div>
            </div>
         </div>
    </div>
</template>

<script>
import products from '@/services/data';
export default {
   name : 'ProductInfo',
  created () {
    this.invaled();
  },
   data () {
    return {
        products : products,
        dee : null
    }
   },
   methods : {
    invaled : function () {
        let data = this.products.findIndex(data => data.id == this.$route.params.id);
        this.dee = this.products[data + 1]
    }
   }
}
</script>

<style>

</style>
