<template>
	<b-dropdown id="localeSwitcher"  :text="currentLang">
		<b-dropdown-item
			v-for="(lang, i) in langs"
			:key="`lang-${i}`"
			:value="lang.locale"
			@click="switchLang(lang.locale)"
		>
			<img :src="lang.flag" width="30" alt=""> {{lang.name}}
		</b-dropdown-item>
	</b-dropdown>



</template>
<script>
  export default {
    name: "SelectLocale",
	  data(){
      return{
        langs: [
          {
            locale: 'en',
	          name: 'English',
            flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAABPCAMAAADRLKcJAAAAn1BMVEX///+yIjQ8O26yIDKyITT46ev9+frBVmGxGy6vACLw29zIbHawFyyuASLktLrWmZ+vDSaajKQ4N2wxMmk0PHArKmVBQHKMLU3Dw89GRXWdnbVKSXft7fJWVYD29vlhYIhycpTOztmBgZ4mJWOmpru2tsdpaI2QkKrf3+eJiaZ7epq+s8GXTGYdG1+KIEa4qbecW3MSD1qwjp+meo3BlKEhqr5CAAAE30lEQVRoge2a647kNBCFjReGXVhgsSeeJI5za+cKvVzf/9mocpUbdsUgLVF1j6DPj9EnT0spxSdVJ+5W+t/r8enVZ1JSH13L/GMlH/5Xui7bjQVdyXZ7prBl0nUmvxVUmTlFIOG6qm1YF5euh+QTjWVTE+1AIRWzT0CpsD62sTPCdZm+VXO6nAlKjUytWmwi36iF1vyqYlrTDgjv1+tXUsK65in2tD++nJAM1DXFjWqwQ40Ey26qayI9LVAh3K/PpYT+ctY6sFawuioKB9ftLa/5jsm4vGZssqCF6oofvhBTfh5dP5VzMpSb66FPZPp6mJO19LytRAaopzVdlEpOuQPsStVkKLBbTYaaW7QRUteoiT4XGlW6K9YVhiGb7EJmGEa21lAuRMWFxOsyDp7+UOmgTeWN9t4iBSQT8GYZXYWio8+5YOGv7Yx4XS4skR0D5GmTwjhlmktf4SOqfZ8p+MF7rOtBSlhXrbJ5kKpES5ttNAKR5cdGDfxAAAXz+OOXYlKpc7aODHVu246ttbYz9a/T2vZMQ0u9FkyG9Pj09rWUsK6uq6Df490JwQEZuGWh02h+WKx2y+Tnoqf/uv28XyFPoGWKfTsxhXhm6uqTSWSr6cykM10n58SmJWvpGijZyNbQq2hQLyuT3VY18F7DfBSvy1QtG8pUjeIL20aNlu2WqRh4oENd79+I6VLXvI3cTUPd70zLzuTrmasxceaBru1PX4kJ6ypSGrQW22WfCHPhmMksYDJr0GRjQWRONZBwX63qYY3Uq4AoA+qlbCLlwg0oWctsUxPTDpsRcuFshOsynWJDGafUzmmwVbxdpsmGApNFitQ2JUTpuigXwvZALoyXXJjToCmfy4XSc9uZlAshA1ZIlAt1zoVaUy4saI1yoQO6Ss7RkAt3MhmkwZ2GZB+HnUw2LyuRQeIp//jz12K69IlFqUg4AqUKzf6QxzhkRaYZeq3nup7evZXSpS5Ig/RSpKthzX31kgv1MGy5rw45F4rPIQcbExxmwApuhfcFJkGkymIuDJgLTx18zuNn8b+4Jl7XaazPdNcyQc+cJ14rQnk2tBbKX3h4n4az+Pu2m5QaaDORyN5RqZUIsiLtqwVqqK9uQLOB+fiNlLB/hbWtyFCntulyD236Sy7ccy5sloJN1tSFtr9+K6bU7+eAudBhlg8d58LZzzkXeuy1sOb7KufCUe9XeB8CYS4sEsLIjicmyIVMPq8ZN3F+vM77Y2wazoVxbctEtgaikb2sD5dc2OZceJW6XPtA1jKuUYHt1vAYx0E9ZpMpNpl8Xbg9kAt3Gt6QC8c0vCEXJrKYCzvsplhanDNJ15XOC81fcmEy2ZjJoMmssWAyWrOcC+1v34kJ+9cCaZA2cwMik23lyueF4/TBeWFa4/PC92/eSSmdFz78/XkhR3vIhTxCGz7e0dWKQ176HLObYh7ZdF4I+vO80JSRLa+nOifXfF4oWRemQU4u3maq4C2DyOmC1yA/8pp2RSV8v+wBSfrr+wP6XfB5vOuu/6PkIuchKbGEfkxKrGMf072uT5MSO2E4JiV3JHNIt25Td911E8l9ZXFISu4rnkN6sf3+1gU8oxdbl9g31Mek5L7SPyS5X0Ac063b513/ccn95O2QlNgvBI9Jif2i8phe7By6dQHP6F7Xp+kPmBMZ64xLjfMAAAAASUVORK5CYII='
          },
          {
            locale: 'ar',
	          name: 'العربية',
            flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAABlCAMAAAB3G4FZAAAAkFBMVEUAAADOESb////NABzdZG9cXFxfYWb+/fr+/ff48+O+jwD59ee7igDz6s/x58nw5cPUt2vOrFXIoTDcw4D17tnu4rrClgDcxZHp2afr3bDo16Hr3brEmhjdxojFnCvXu2vQsF7bwnbOq0fTtFjPrULbwm7TtE/GnhDizYnk0pXk06nLpivXumTfaHj08tfhzZuyTTt1AAAClUlEQVRoge3YQZObIBiA4ZRui8YARiELmKgYNLKhm///78pm99AeemB0iofvPSTqgXkGmIlk922b7VID/hG44gJXXOCKC1xxgSsucMUFrrjAFRe44gJXXOCKC1xxgSsucMUFrrh237fZ7mWtfoVWG+xlh1aqEEq9rzUYQqu5lO98TdYabT1X1swYsbVGW8+FigJt06VEsSUXxvj5nWtN1F9PlrTYlVFCaVhCJKjORRbmjYYnWXIXbwqEOcsZY4JSkTOOUdHw5K7mbD52VS40EVyxPFwzc26Sux5tWT63O+byc5ZYWbaPpcMudl3asuu1UtJxxJ0USvdd2V6Su7q29L2xw+mYoaI6Ddb0vmy75K5r2499bav907WvbB3u22ty11Qdx+PlD9cl3FfpXUM1jMfX6frluk6vxzE8S+6ytjLBNX65xuAylbXJXfepMsPrdRqermG6vg6mmu4bcJ1nW3tjnq7Z+NrO5w24bv7kbDly6YLLSD6W1p38Lbnr1O0ftp+JZgQRpsnc28e+O6V31Yc3e3SU6o8odUf7dqg34WomKzOa+5PPaSatbbbg2of5msbw+8jP9zOXSpkhzNc+tSsLhodTuOCuspXjBVYPF6xLXwyXuvKwZgwTJam+27umUhFEw9rmiV3kYGR49dKceHuznoQrjN7MYelJcqmL7RkWTCqR+cvt4rPw/iUEYoelJ6PF80VR44TUTsqwiFLOWgrXIJp6vsIOq7kqlFJ6nmettCQa10t31xquGWtDqHIIF1lYvXD4EHjegCuXGVFu1OM4a2Nc52UhtzBfSIXTRlZwSlTekDwX0qnlg67y/wR+F2GDqc+P98Vn7Y92P9bo55+tMuIOgiAIgiAIgiAIgiAIgqD/3m8Vd3Tx66O9HQAAAABJRU5ErkJggg=='
          },
        ]
      }
	  },
	  methods:{
      switchLang(locale){
        // change language in global variable
        this.$i18n.locale = locale

	      // change router parameter
	      this.$router.push({
		      params:{ lang: locale }
	      })
      }
	  },
	  computed:{
      currentLang(){
        return this.$i18n.locale
      }
	  }
  }
</script>

<style lang="scss">
#localeSwitcher{
	min-width: 70px;


	.dropdown-menu{
		border-radius: 20px
	}
}


</style>