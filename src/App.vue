<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};

</script>
<style>
@font-face {
  font-family: IRANYekanRegular;
  src: url(assets/fonts/IRANYekanRegular.ttf);
}
@font-face {
  font-family: IRANYekanLight;
  src: url(assets/fonts/IRANYekanLight.ttf);
}
@font-face {
  font-family: IRANYekanBold;
  src: url(assets/fonts/IRANYekanBold.ttf);
}
#app {
  font-family: IRANYekanRegular;
}

</style>