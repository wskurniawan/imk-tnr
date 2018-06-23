<template>
   <div class="uk-flex uk-flex-center">
      <div class="uk-width-1-1">
         <v-toolbar color="indigo lighten-2" dark tabs dense grow>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>
               <span style="color: white;">{{activeTabs}}</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
               <v-icon>search</v-icon>
            </v-btn>
            
            <v-btn icon>
               <v-icon>more_vert</v-icon>
            </v-btn>
         
            <v-tabs slot="extension" v-model="activeTabs" color="indigo lighten-2" grow>
               <v-tabs-slider color="yellow"></v-tabs-slider>
               <v-tab href="#Home">
                  <v-icon>home</v-icon>
               </v-tab>
               <v-tab href="#Timeline">
                  <v-icon>access_time</v-icon>
               </v-tab>
               <v-tab href="#Message">
                  <v-icon>message</v-icon>
               </v-tab>
               <v-tab href="#Notification">
                  <v-icon>notifications</v-icon>
               </v-tab>
            </v-tabs>
         </v-toolbar>
         <v-tabs-items v-model="activeTabs">
            <v-tab-item id="Home">
               <home-tab v-on:change-tab="changeTabs"></home-tab>
            </v-tab-item>
            <v-tab-item id="Timeline">
               <timeline></timeline>
            </v-tab-item>
            <v-tab-item id="Message">
               <chat></chat>
            </v-tab-item>
            <v-tab-item id="Notification">
               <notif></notif>
            </v-tab-item>
         </v-tabs-items>
      </div>
   </div>
</template>

<script>
const Home = require('./Home.vue');
const Timeline = require('./Timeline.vue');
const Notif = require('./Notifikasi.vue');
const Chat = require('./Chat.vue');

module.exports = {
   data(){
      return{
         activeTabs: 'Home'
      }
   },
   methods:{
      changeTabs: function(tabName){
         console.log(tabName);
         this.activeTabs = tabName;
      }
   },
   components:{
      'home-tab': Home,
      'timeline': Timeline,
      'notif': Notif,
      'chat': Chat
   }
}
</script>

