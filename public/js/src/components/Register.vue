<template>
   <div uk-height-viewport class="uk-flex uk-flex-middle uk-flex-center">
      <div class="uk-width-1-1 main-content">
         <div class="uk-width-1-1 uk-flex uk-flex-center">
            <div class="uk-border-circle uk-flex uk-flex-middle" style="border: 8px solid #7986CB; height: 108px; width: 108px;">
               <div class="uk-width-1-1 uk-text-center" style="color: #7986CB; font-family: Josefin Sans; font-size: 36px;">
                  <b>TnR</b>
               </div>
            </div>
         </div>

         <!-- form login -->
         <div style="margin-top: 24px; padding-left: 24px; padding-right: 24px;" class="login-content">
            <div>
               <form>
                  <input class="uk-input form-input" type="text" placeholder="nama" v-model="password" style="border: 0.5px solid #7986CB; border-radius: 50px; color: #7986CB; font-size: 14px;">
                  <input class="uk-input form-input" type="email" placeholder="email" v-model="email" style="margin-top: 8px; border: 0.5px solid #7986CB; border-radius: 50px; color: #7986CB; font-size: 14px;">
                  <input class="uk-input form-input" type="password" placeholder="password" v-model="password" style="margin-top: 8px; border: 0.5px solid #7986CB; border-radius: 50px; color: #7986CB; font-size: 14px;">
                  <input class="uk-input form-input" type="password" placeholder="ulangi password" v-model="password" style="margin-top: 8px; border: 0.5px solid #7986CB; border-radius: 50px; color: #7986CB; font-size: 14px;">
               </form>
            </div>
            <div class="uk-width-1-1 uk-flex uk-flex-center" style="margin-top: 48px;">
               <button @click="openMainFrame" class="uk-button uk-button-default" style="border-radius: 50px; border: 0.5px solid #7986CB; color: #7986CB;">signup</button>
            </div>
            <div class="uk-width-1-1 uk-flex uk-flex-center" style="margin-top: 24px;">
               <button @click="openLogin" class="uk-button uk-button-linl" style="color: #7986CB; font-size: 12px;">login</button>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
module.exports = {
   methods:{
      openMainFrame: function(){
         this.$emit('change-page', 'MainFrame');
      },
      openLogin: function(){
         this.$emit('change-page', 'Login');
      }
   }
}
</script>


<style>
.section{
   max-width: 486px;
}
.login-content{
   background-color: white; 
   padding-top: 12px; 
   padding-bottom: 12px;
}
.padding-content{
	padding-left: 12px; 
	padding-right: 12px;
}
.grid-normal{
	margin-left: 0px;
}
.col-normal{
	padding-left: 0px;
}
</style>