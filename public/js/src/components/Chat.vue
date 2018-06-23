<template>
   <div class="uk-flex uk-flex-center" style="background-color: #EEEEEE;" uk-height-viewport>
      <div class="uk-width-1-1 section">
         <div class="chat-content padding-content" style="font-size: 12px;">
            Kirimkan saran ke pengelola tempat
         </div>

         <!-- section pengelola terdekat -->
         <div class="chat-content padding-content" style="margin-top: 12px;">
            <!-- header -->
            <div class="grid-normal" uk-grid>
               <div class="grid-normal col-normal uk-width-1-2 uk-flex uk-flex-middle" uk-grid>
                  <div class="col-normal uk-width-auto">
                     <v-icon>far fa-dot-circle</v-icon>
                  </div> 
                  <div class="uk-width-expand" style="padding-left: 4px; font-size: 12px;">
                     <b>Pengelola terdekat</b>
                  </div>
               </div>
               <div class="grid-normal uk-width-1-2 uk-flex uk-flex-right">
                  <v-btn icon>
                     <v-icon>refresh</v-icon>
                  </v-btn>
               </div> 
            </div>

            <!-- list pengelola -->
            <div class="grid-normal uk-flex uk-flex-center" uk-grid style="margin-top: 0px;">
               <div class="col-normal uk-width-auto">
                  <v-chip color="indigo lighten-4" text-color="white" v-on:click="openChat">
                     <v-avatar class="green"></v-avatar>
                     <div style="font-size: 12px;">Sarpras DTETI</div>
                  </v-chip>
               </div>

               <div class="col-normal uk-width-auto" style="margin-top: 0px;">
                  <v-chip color="indigo lighten-4" text-color="white">
                     <v-avatar class="cyan"></v-avatar>
                     <div style="font-size: 12px;">DTMI</div>
                  </v-chip>
               </div>

               <div class="col-normal uk-width-auto" style="margin-top: 0px;">
                  <v-chip color="indigo lighten-4" text-color="white">
                     <v-avatar class="orange"></v-avatar>
                     <div style="font-size: 12px;">Pengelola Fakultas Teknik</div>
                  </v-chip>
               </div>
            </div>
         </div>
         <!-- end section -->

         <!-- section chat list -->
         <div style="margin-top: 12px;">
            <div class="padding-content" style="font-size: 14px;">
               <b>Pesan</b>
            </div>
            
            <!-- item list chat -->
            <div>
               <div class="chat-content padding-content grid-normal" uk-grid style="margin-top: 0px; margin-bottom: 1px;" v-on:click="openChat">
                  <div class="uk-width-auto col-normal">
                     <div class="uk-border-circle" style="height: 36px; width: 36px; background-color: #00E676;"></div>
                  </div>
                  <div class="uk-width-expand" style="padding-left: 12px;">
                     <div style="font-size: 13px;">
                        <b>Sarpras DTETI</b>
                     </div>

                     <div style="font-size: 10px;">
                        1 Pesan baru
                     </div>

                     <div class="uk-text-right" style="font-size: 11px; border-bottom: 2px solid #EEEEEE; padding-bottom: 4px;">
                        16 Mei 2018, 18:30
                     </div>
                  </div>
               </div>

               <div class="chat-content padding-content grid-normal" uk-grid style="margin-top: 0px; margin-bottom: 1px;">
                  <div class="uk-width-auto col-normal">
                     <div class="uk-border-circle" style="height: 36px; width: 36px; background-color: #03A9F4;"></div>
                  </div>
                  <div class="uk-width-expand" style="padding-left: 12px;">
                     <div style="font-size: 13px;">
                        <b>DTMI</b>
                     </div>

                     <div style="font-size: 10px;">
                        3 Pesan baru
                     </div>

                     <div class="uk-text-right" style="font-size: 11px; border-bottom: 2px solid #EEEEEE; padding-bottom: 4px;">
                        16 Mei 2018, 18:30
                     </div>
                  </div>
               </div>

               <div class="chat-content padding-content grid-normal" uk-grid style="margin-top: 0px; margin-bottom: 1px;">
                  <div class="uk-width-auto col-normal">
                     <div class="uk-border-circle" style="height: 36px; width: 36px; background-color: #FF9800;"></div>
                  </div>
                  <div class="uk-width-expand" style="padding-left: 12px;">
                     <div style="font-size: 13px;">
                        <b>Pengelola Fakultas Teknik</b>
                     </div>

                     <div style="font-size: 10px;">
                        2 Pesan baru
                     </div>

                     <div class="uk-text-right" style="font-size: 11px; border-bottom: 2px solid #EEEEEE; padding-bottom: 4px;">
                        16 Mei 2018, 18:30
                     </div>
                  </div>
               </div>
            </div>
            <!-- end item chat list -->
   
         </div>
         <!-- end section -->

      </div>
   </div>
</template>

<script>
module.exports = {
   methods:{
      openChat: function(){
         this.$eventHub.$emit('open-secondary', 'ChatPage');
      }
   }
}
</script>


<style>  
.section{
   max-width: 486px;
}
.chat-content{
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
