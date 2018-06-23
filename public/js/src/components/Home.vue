<template>
	<div uk-height-viewport class="uk-flex uk-flex-center" style="background-color: #EEEEEE;">
		<div class="uk-width-1-1 section">
			<div class="home-content padding-content">

				<!-- section header -->
				<div class="grid-normal" uk-grid>
					<div class="uk-width-auto col-normal uk-flex uk-flex-middle" style="padding-left: 4px; padding-right: 12px; border-right: 2px solid #EEEEEE;">
						<div class="uk-border-circle" style="height: 56px; width: 56px; background-color: #3949AB;"></div>
					</div>
					
					<div class="uk-width-expand col-normal" style="padding-left: 12px; padding-right: 12px;">
						<div class="uk-width-1-1 uk-text-center" style="font-size: 13px; padding-bottom: 8px; margin-bottom: 8px; border-bottom: 2px solid #EEEEEE;">
							<b>Wisnu Kurniawan</b>
						</div>
						<div class="grid-normal" uk-grid>
							<div class="col-normal uk-width-1-2">
								<div class="uk-flex uk-flex-center" style="margin-bottom: 4px;">
									<v-icon size="24">far fa-clipboard</v-icon>
								</div>
								<div style="font-size: 12px;" class="uk-text-center">Jumlah Laporan</div>
								<div style="font-size: 20px;" class="uk-text-center"><b>8</b></div>
							</div>

							<div class="col-normal uk-width-1-2">
								<div class="uk-flex uk-flex-center" style="margin-bottom: 4px;">
									<v-icon size="24">done_all</v-icon>
								</div>
								<div style="font-size: 12px;" class="uk-text-center">Laporan Ditanggapi</div>
								<div style="font-size: 20px;" class="uk-text-center"><b>4</b></div>
							</div>
						</div>
					</div>
				</div>
				<!-- end section -->
			</div>

			<div style="margin-top: 12px;">
				<!-- section lokasi -->
				<div class="uk-width-1-1 home-content" style="margin-left: 0px; padding-left: 12px; padding-right: 12px;">
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
				<div class="uk-width-1-1 class home-content" style="margin-top: 2px; margin-left: 0px; padding-left: 12px; padding-right: 12px;">
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
				<!-- end section -->

				<!-- section buat laporan -->
				<div class="uk-width-1-1" style="background-color: white; margin-top: 2px; margin-left: 0px; padding-left: 12px; padding-right: 12px;">
					<div class="uk-flex uk-flex-center uk-flex-middle">
						<v-btn icon v-on:click="openTimeline">
							<v-icon size="14">fas fa-pencil-alt</v-icon>
						</v-btn>
						<button class="uk-button uk-button-link" style="text-transform: lowercase; padding-left: 4px;" v-on:click="openTimeline">
							buat laporan
						</button>
					</div>
				</div>
				<!-- end section -->
			</div>

			<!-- isi survey -->
			<div class="uk-width-1-1 home-content padding-content" style="margin-top: 12px;">
				<div class="uk-flex uk-flex-middle" style="font-size: 12px;">
					<v-icon>fas fa-tasks</v-icon>
					<div style="padding-left: 4px;">
						<b>survey kepuasan fasilitas</b>
					</div>
				</div>
				<div style="font-size: 12px;">
					<b>Sarpras DTETI</b> mengadakan survey kepuasan pengguna.
				</div>

				<div class="home-content uk-flex uk-flex-center">
					<button class="uk-button uk-button-default uk-button-small" style="border-radius: 50px; border: 0.5px solid #7986CB; color: #7986CB; text-transform: lowercase;">isi survey</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
module.exports = {
	methods:{
		openTimeline: function(){
			console.log('clicked');
			this.$emit('change-tab', 'Timeline');
		}
	}
}
</script>


<style>
.section{
   max-width: 486px;
}
.home-content{
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

