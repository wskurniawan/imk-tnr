<template>
   <div>
      <div v-show="primaryPage">
         <v-component v-on:change-page="changePage" :is="activePage"></v-component>
      </div>
      <div :v-show="secondaryPage">      
         <v-component :is="activeSecondary" v-if="secondaryPage"></v-component>
      </div>
   </div>
</template>

<script>
const MainFrame = require('./MainFrame.vue');
const Splash = require('./Splash.vue');
const Login = require('./Login.vue');
const Register = require('./Register.vue');

// secondary frame
const ChatPage = require('./ChatPage.vue');

module.exports = {
   data(){
      return{
         activePage: 'Splash',
         primaryPage: true,
         activeSecondary: 'ChatPage',
         secondaryPage: false
      }
   },
   methods:{
      changePage: function(pageName){
         this.activePage = pageName;
      },
      openSecondary: function(pageName){
         this.activeSecondary = pageName;
         console.log(pageName);

         this.activePrimary(false);
      },
      activePrimary: function(isActive){
         this.primaryPage = isActive;
         this.secondaryPage = !isActive;
      },
      secondaryBack: function(){
         this.activePrimary(true);
      }
   },
   components:{
      'MainFrame': MainFrame,
      'ChatPage': ChatPage,
      'Splash': Splash,
      'Login': Login,
      'Register': Register
   },
   created: function(){
      //inisiasi event listener
      this.$eventHub.$on('open-secondary', this.openSecondary);
      this.$eventHub.$on('secondary-back', this.secondaryBack);
   },
   beforeDestroy(){
      this.$eventHub.$off('open-secondary');
      this.$eventHub.$off('secondary-back');
   }
}
</script>
