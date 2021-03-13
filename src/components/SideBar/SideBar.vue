<template>
  <div class='_sidebarContainer'>
  <div class='_container'>   
      <ul class='_list'>
      <button class="_element"> <router-link tag="li" to="/dealerships">{{ $t('dealerships') }}</router-link> </button>
      <button class="_element"> <router-link tag="li" to="/clients">{{ $t('clients') }}</router-link> </button>
      <button class="_element"> <router-link tag="li" to="/delete">{{ $t('delete') }}</router-link> </button>
      </ul>
  </div>
  </div>
</template>


<style lang="scss" scoped src="./styles.scss"></style>