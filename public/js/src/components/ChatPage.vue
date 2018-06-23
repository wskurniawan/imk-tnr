<template>
   <div style="background-color: #EEEEEE;">
      <v-toolbar dark color="indigo lighten-2" dense>
         <v-btn icon v-on:click="back">
            <v-icon>arrow_back</v-icon>
         </v-btn>
         <v-toolbar-title class="white--text">{{pageTitle}}</v-toolbar-title>
         <v-spacer></v-spacer>
         <v-btn icon>
            <v-icon>search</v-icon>
         </v-btn>
      </v-toolbar>

      <div class="uk-flex uk-flex-center uk-width-1-1" style="margin-top: 12px;">
         <div class="uk-width-1-1 main-content" style="margin-bottom: 90px;">
            <!-- item chat to-->
            <div class="grid-normal" uk-grid style="margin-bottom: 8px;">
               <div class="uk-width-auto col-normal">
                  <div class="uk-border-circle" style="height: 36px; width: 36px; background-color: #00E676;"></div>
               </div>
               <div class="uk-width-auto" style="padding-left: 4px; max-width: 80%;">
                  <v-card color="indigo lighten-4">
                     <div style="padding: 4px;">
                        <!-- item post -->
                        <div style="background-color: white;">
                           <!-- header, foto, waktu -->
                           <div class="uk-child-width-1-2" uk-grid style="margin-left: 0px;">
                              <div uk-grid class="uk-flex uk-flex-middle timeline-content" style="margin-left: 0px; padding-left: 12px; padding-right: 12px;">
                                 <div class="uk-width-auto" style="padding-left: 0px;">
                                    <div class="uk-border-circle" style="background-color: #009688; width: 32px; height: 32px;"></div>
                                 </div>
                                 <div class="uk-width-expand" style="font-size: 12px; padding-left: 4px;">
                                    <b>Wisnu Kurniawan</b>
                                 </div>
                              </div>
                              <div class="uk-flex uk-flex-right timeline-content" style="font-size: 12px; padding-right: 12px;">
                                 Selasa, 15 April 2018
                              </div>
                           </div>

                           <!-- gambar post -->
                           <img src="http://2.bp.blogspot.com/-XTnADbvEyvk/VjrYgC7s0zI/AAAAAAAAAj8/wWbL-Krqi1c/s1600/Lantai-Keramik.jpg">

                           <!-- caption -->
                           <div class="timeline-content" style="padding-left: 12px; padding-right: 12px; font-size: 12px; color: black;">
                              Lantai rusak di depan akademik DTETI
                           </div>

                           <div style="border-top: 2px solid #EEEEEE;"></div>

                           <!-- nama tempat dan lokasi -->
                           <div class="timeline-content padding-content">
                              <div class="grid-normal uk-flex uk-flex-middle" uk-grid>
                                 <div class="uk-width-auto col-normal">
                                    <div class="uk-border-circle uk-flex uk-flex-middle uk-flex-center" style="border: 1px solid #424242; width: 24px; height: 24px;">
                                       <v-icon size="14">fas fa-map-marker</v-icon>
                                    </div>
                                 </div>
                                 <div class="uk-width-expand" style="padding-left: 4px; font-size: 12px;">
                                    Akademik lt2 DTETI
                                 </div>
                              </div>
                              <div style="font-size: 10px;">
                                 Jl. Grafika No.2, Yogyakarta, Sinduadi, Mlati, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55281
                              </div>
                           </div>

                           <div style="border-top: 2px solid #EEEEEE;"></div>

                           <!-- tag untuk stakeholder -->
                           <div class="padding-content timeline-content grid-normal uk-flex uk-flex-right" uk-grid>
                              <div class="uk-width-auto">
                                 <v-chip color="indigo lighten-4" text-color="white" small>
                                    <div style="font-size: 12px;">Sarpras DTETI</div>
                                 </v-chip>
                              </div>
                           </div>
                        </div>
                        <!-- end item post -->
                     </div>
                  </v-card>

                  <div style="margin-top: 4px;"></div>

                  <v-card color="indigo lighten-4">
                     <div style="padding: 4px;">
                        <div class="grid-normal" uk-grid>
                           <div class="uk-width-expand col-normal" style="font-size: 13px;">
                              <b>Sarpras DTETI</b>
                           </div>

                           <div class="uk-width-auto col-normal" style="font-size: 11px; padding-bottom: 4px;">
                              16/4 18:30
                           </div>
                        </div>

                        <div style="margin-top: 0px; font-size: 13px;">
                           Terimakasih atas sarannya. Akan kami kerjakan secepat mungkin.
                        </div>
                     </div>
                  </v-card>
               </div>
            </div>
            <!-- end item chat -->

            <!-- item chat from -->
            <div class="uk-width-1-1 uk-flex uk-flex-right" style="margin-bottom: 8px;">
               <div class="uk-width-auto" style="padding-left: 4px; max-width: 70%;">
                  <v-card color="white">
                     <div style="padding: 4px;">
                        <div class="grid-normal" uk-grid>
                           <div class="uk-width-expand col-normal" style="font-size: 13px;">
                              <b>saya</b>
                           </div>

                           <div class="uk-width-auto col-normal" style="font-size: 11px; padding-bottom: 4px;">
                              16/4 18:32
                           </div>
                        </div>

                        <div style="margin-top: 0px; font-size: 13px;">
                           Terimakasih atas tanggapannya pak.
                        </div>
                     </div>
                  </v-card>
               </div>
            </div>
            <!-- end item chat -->

         </div>
      </div>

      <div class="uk-width-1-1" style="position: fixed; bottom: 0;">
         <div class="uk-width-1-1 uk-flex uk-flex-center">
            <div class="section chat-content padding-content uk-width-1-1">
               <div class="grid-normal" uk-grid>
                  <div class="uk-width-expand col-normal">
                     <textarea class="uk-textarea" style="font-size: 12px;" rows="2"></textarea>
                  </div>
                  <div class="uk-width-auto" style="padding-left: 8px;">
                     <v-btn icon size="12">
                        <v-icon>send</v-icon>
                     </v-btn>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
module.exports = {
   data(){
      return{
         pageTitle: 'Sarpras DTETI'
      }
   },
   methods:{
      back: function(){
         this.$eventHub.$emit('secondary-back');
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
