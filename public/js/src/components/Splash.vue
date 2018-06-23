<template>
   <div uk-height-viewport style="background-color: #7986CB;" class="uk-flex uk-flex-middle">
      <div class="uk-width-1-1">
         <div class="uk-width-1-1 uk-flex uk-flex-center">
            <div class="uk-border-circle" style="border: 8px solid white; height: 108px; width: 108px;"></div>
         </div>
         <div class="uk-width-1-1 uk-text-center" style="color: white; font-family: Josefin Sans; font-size: 24px;">
            Take n Report
         </div>
      </div>
   </div>
</template>

<script>
module.exports = {
   mounted: function(){
      var counter = 3000;

      setInterval(() => {
         if(counter == 0){
            clearInterval(this);

            return this.$emit('change-page', 'Login');
         }

         counter = counter - 1000;
         console.log(counter);
      }, 1000);
   }
}
</script>
