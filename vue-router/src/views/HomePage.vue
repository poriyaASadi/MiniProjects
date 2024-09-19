<template>
    <div>
        <div>
          <ul>
            <li v-for="product in products" :key="product.id"  class="boxcart">
              <img  class="imagecartbox" src="../assets/img/Buy_Mobile.jpg" alt="">
              <div class="aboutcart">
                <h3>{{product.name}} in {{product.id}}</h3>
                <p>{{product.about}}</p>
                <router-link class="btncart" :to="{name : 'productinfo' , params : {id : product.id }}">show product</router-link>
              </div>
            </li>
          </ul>
        </div>  
    </div>
</template>
<script>
import products from '../services/data.js'
export default {
    name : 'HomePage',
    data () {
    return {
      products : products
    }
  }
}
</script>