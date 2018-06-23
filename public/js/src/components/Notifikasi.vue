<template>
   <div class="uk-flex uk-flex-center" style="background-color: white;" uk-height-viewport>
      <div class="uk-width-1-1 main-content">
         <!-- item notifikasi -->
         <div class="notif-content grid-normal" uk-grid style="margin-bottom: 2px;">
            <div class="uk-width-auto col-normal">
               <div class="uk-border-circle" style="height: 36px; width: 36px; background-color: #00E676;"></div>
            </div>
            <div class="uk-width-expand" style="padding-left: 12px;">
               <div style="font-size: 13px; padding-bottom: 4px;">
                  Laporan anda telah ditanggapi oleh <b>Sarpras DTETI</b>
               </div>

               <div class="uk-text-right" style="font-size: 12px; border-bottom: 2px solid #EEEEEE; padding-bottom: 4px;">
                  <b>16 Mei 2018, 18:30</b>
               </div>
            </div>
         </div>

         <div class="notif-content grid-normal" uk-grid style="margin-bottom: 2px; margin-top: 0px;">
            <div class="uk-width-auto col-normal">
               <div class="uk-border-circle" style="height: 36px; width: 36px; background-color: #E64A19;"></div>
            </div>
            <div class="uk-width-expand" style="padding-left: 12px;">
               <div style="font-size: 13px; padding-bottom: 4px;">
                  1 pesan baru dari <b>Bidang Pengelolaan Taman Pintar</b>
               </div>

               <div class="uk-text-right" style="font-size: 12px; border-bottom: 2px solid #EEEEEE; padding-bottom: 4px;">
                  <b>16 Mei 2018, 18:30</b>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style>
.notif-content{
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

