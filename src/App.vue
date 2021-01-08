<template>
  <v-app>
    <default>
      <router-view></router-view>
    </default>
  </v-app>
</template>

<script>
import Default from "@/layout/default";
export default {
  name: 'App',
  components: {Default},
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