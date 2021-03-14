<script>
export default {
  name: 'locale-changer',
  data () {
    return { langs: ['Es', 'En'] }
  }
}
</script>

<template>
  <div class='_navbarContainer'>
  <div class='_container'>
    <div class='_logo'> 
    <img src='../../../public/gtcars.png' width='80' height='40'>
    </div>
    <div>
    <select v-model="$i18n.locale"  class='_selectLang'>
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
    </div>
  </div>
  </div>
</template>

<style lang="scss" scoped src="./styles.scss"></style>