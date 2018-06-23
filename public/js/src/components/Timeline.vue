<template>
   <div class="uk-flex uk-flex-center" style="background-color: #EEEEEE; padding-bottom: 12px;">
      <div class="uk-width-1-1 main-content-timeline">
         <!-- lokasi -->
         <div class="uk-width-1-1 class timeline-content" style="margin-left: 0px; padding-left: 12px; padding-right: 12px;">
            <div uk-grid class="uk-width-1-1 uk-flex uk-flex-middle" style="margin-left: 0px;">
               <div class="uk-width-auto" style="padding-left: 0px;">
                  <v-icon size="12">location_on</v-icon>
               </div>
               <div class="uk-width-expand" style="padding-left: 0px;">
                  <span style="font-size: 12px;"><b>lokasi saat ini</b></span>
               </div>
            </div>
            <div>
               <span style="font-size: 10px;">
                  Departemen Teknik Elektro dan Teknologi Informasi, UGM, Komplek Fakultas Teknik UGM, Jl. Grafika No.2, Yogyakarta, Sinduadi, Mlati, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55281
               </span>
            </div>
         </div>

         <!-- section pengelola -->
         <div class="uk-width-1-1 class timeline-content" style="margin-top: 2px; margin-left: 0px; padding-left: 12px; padding-right: 12px;">
            <div uk-grid class="uk-width-1-1 uk-flex uk-flex-middle" style="margin-left: 0px;">
               <div class="uk-width-auto" style="padding-left: 0px;">
                  <v-icon size="12">fas fa-building</v-icon>
               </div>
               <div class="uk-width-expand" style="padding-left: 0px;">
                  <span style="font-size: 12px;"><b>pengelola</b></span>
               </div>
            </div>
            <div class="uk-flex uk-flex-center" uk-grid style="margin-left: 0px; margin-top: 4px;">
               <div class="uk-width-auto">
                  <v-chip color="indigo lighten-4" text-color="white">
                     <v-avatar class="indigo lighten-3">
                        <v-icon>account_circle</v-icon>
                     </v-avatar>
                     <div style="font-size: 12px;">Sarpras DTETI</div>
                  </v-chip>
               </div>
            </div>
        	</div>

			<!-- section buat post -->
			<div class="uk-width-1-1 timeline-content" style="margin-top: 12px;" v-on:click="sheet = true">
				<div style="margin-left: 12px; margin-right: 12px; margin-bottom: 24px;" uk-grid>
						<div class="uk-width-auto" style="padding: 0px;">
							<div class="uk-border-circle" style="height: 42px; width: 42px; background-color: #3949AB;"></div>
						</div>
						<div class="uk-width-expand" style="padding: 12px;">
							<span style="color: #BDBDBD; font-size: 14px;">Ada fasilitas rusak?</span>
						</div>
				</div>
			</div>

			<!-- section timeline -->
			<div style="margin-top: 12px;">
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

				<!-- item post -->
				<div style="background-color: white; margin-top: 12px;">
					<!-- header, foto, waktu -->
					<div class="uk-child-width-1-2" uk-grid style="margin-left: 0px;">
						<div uk-grid class="uk-flex uk-flex-middle timeline-content" style="margin-left: 0px; padding-left: 12px; padding-right: 12px;">
							<div class="uk-width-auto" style="padding-left: 0px;">
								<div class="uk-border-circle" style="background-color: #FF5722; width: 32px; height: 32px;"></div>
							</div>
							<div class="uk-width-expand" style="font-size: 12px; padding-left: 4px;">
								<b>Wanda Dwi P</b>
							</div>
						</div>
						<div class="uk-flex uk-flex-right timeline-content" style="font-size: 12px; padding-right: 12px;">
							Selasa, 15 April 2018
						</div>
					</div>

					<!-- gambar post -->
					<img src="https://akcdn.detik.net.id/community/media/visual/2018/02/18/8cbed52e-a643-457a-92a1-49c9de80ed4e.jpeg?w=780&q=90">

					<!-- caption -->
					<div class="timeline-content" style="padding-left: 12px; padding-right: 12px; font-size: 12px; color: black;">
						Taman rusak di Somewhere
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
								Taman Antah brantah
							</div>
						</div>
						<div style="font-size: 10px;">
							Jl. Jalan No.2, Yogyakarta, Sinduadi, Mlati, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55281
						</div>
					</div>

					<div style="border-top: 2px solid #EEEEEE;"></div>

					<!-- tag untuk stakeholder -->
					<div class="padding-content timeline-content grid-normal uk-flex uk-flex-right" uk-grid>
						<div class="uk-width-auto">
							<v-chip color="indigo lighten-4" text-color="white" small>
								<div style="font-size: 12px;">Pengelola Taman AB</div>
							</v-chip>
						</div>
					</div>
				</div>

				<!-- item post -->
				<div style="background-color: white; margin-top: 12px;">
					<!-- header, foto, waktu -->
					<div class="uk-child-width-1-2" uk-grid style="margin-left: 0px;">
						<div uk-grid class="uk-flex uk-flex-middle timeline-content" style="margin-left: 0px; padding-left: 12px; padding-right: 12px;">
							<div class="uk-width-auto" style="padding-left: 0px;">
								<div class="uk-border-circle" style="background-color: #FBC02D; width: 32px; height: 32px;"></div>
							</div>
							<div class="uk-width-expand" style="font-size: 12px; padding-left: 4px;">
								<b>Firda Aulia</b>
							</div>
						</div>
						<div class="uk-flex uk-flex-right timeline-content" style="font-size: 12px; padding-right: 12px;">
							Rabu, 16 April 2018
						</div>
					</div>

					<!-- gambar post -->
					<img src="http://oketekno.com/wp-content/uploads/2017/12/speedtest_1024x1024.jpg">

					<!-- caption -->
					<div class="timeline-content" style="padding-left: 12px; padding-right: 12px; font-size: 12px; color: black;">
						Internet terlalu cepat
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
								Lorong LAB IF
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

				<!-- item post -->
				<div style="background-color: white; margin-top: 12px;">
					<!-- header, foto, waktu -->
					<div class="uk-child-width-1-2" uk-grid style="margin-left: 0px;">
						<div uk-grid class="uk-flex uk-flex-middle timeline-content" style="margin-left: 0px; padding-left: 12px; padding-right: 12px;">
							<div class="uk-width-auto" style="padding-left: 0px;">
								<div class="uk-border-circle" style="background-color: #673AB7; width: 32px; height: 32px;"></div>
							</div>
							<div class="uk-width-expand" style="font-size: 12px; padding-left: 4px;">
								<b>Syfa Nisrina</b>
							</div>
						</div>
						<div class="uk-flex uk-flex-right timeline-content" style="font-size: 12px; padding-right: 12px;">
							Kamis, 17 April 2018
						</div>
					</div>

					<!-- gambar post -->
					<img src="https://d22ir9aoo7cbf6.cloudfront.net/wp-content/uploads/sites/6/2018/02/Kafnu-Hong-Kong-coworking-space-Kowloon.jpg">

					<!-- caption -->
					<div class="timeline-content" style="padding-left: 12px; padding-right: 12px; font-size: 12px; color: black;">
						Mohon untuk fasilitas kursi diperbanyak
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
								Selasar KPFT
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
								<div style="font-size: 12px;">Pengelola KPFT</div>
							</v-chip>
						</div>
					</div>
				</div>
				<!-- end item post -->

			</div>

      </div>

		<!-- bottom sheet untuk post -->
		<v-bottom-sheet v-model="sheet" color="white" lazy persistent>
			<div class="timeline-content" style="padding-bottom: 24px;">
				<div class="grid-normal padding-content" uk-grid>
					<div class="col-normal uk-width-1-2">
						<v-btn icon v-on:click="sheet = false">
							<v-icon>close</v-icon>
						</v-btn>
					</div>
					<div class="col-normal uk-width-1-2 uk-flex uk-flex-right">
						<button class="uk-button uk-button-link" v-on:click="sheet = false">post</button>
					</div>
				</div>

				<div class="grid-normal padding-content" uk-grid style="margin-top: 12px;">
					<div class="col-normal uk-width-auto">
						<div class="uk-border-circle" style="background-color: #3949AB; width: 32px; height: 32px;"></div>	
					</div>
					<div class="uk-width-expand" style="padding-left: 4px;">
						<!-- input caption -->
						<textarea class="uk-textarea" placeholder="ada fasilitas rusak?" style="font-size: 12px;" rows="5"></textarea>

						<!-- input nama tempat -->
						<div class="grid-normal" uk-grid style="margin-top: 8px;">
							<div class="uk-width-auto col-normal">
								<div class="uk-border-circle uk-flex uk-flex-middle uk-flex-center" style="border: 1px solid #424242; width: 24px; height: 24px;">
									<v-icon size="14">fas fa-map-marker</v-icon>
								</div>
								</div>
								<div class="uk-width-expand" style="padding-left: 4px; font-size: 12px;">
									<textarea class="uk-textarea" placeholder="nama tempat" style="font-size: 12px;" rows="1"></textarea>
								</div>
						</div>

						<!-- alamat -->
						<div style="margin-top: 8px; font-size: 12px;">
							<b>alamat</b>
							<br>
							Jl. Grafika No.2, Yogyakarta, Sinduadi, Mlati, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55281
						</div>

						<!-- untuk upload atau pilih foto -->
						<div class="uk-flex uk-flex-right" style="margin-top: 8px;">
							<v-btn icon>
								<v-icon>far fa-image</v-icon>
							</v-btn>
							<v-btn icon>
								<v-icon>camera_alt</v-icon>
							</v-btn>
						</div>
					</div>

				</div>

				
			</div>
   	</v-bottom-sheet>
		<!-- end bottom sheet -->
  	</div>
</template>

<script>
module.exports = {
	data(){
		return{
			sheet: false
		}
	}
}
</script>


<style>
.timeline-content{
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

