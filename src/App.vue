<template>
  <v-app>
    <keep-alive>
      <component :is="$store.state.layout">
        <router-view></router-view>
      </component>
    </keep-alive>
  </v-app>
</template>

<script>
import Default from "@/layout/default";
import Auth from "@/layout/auth"

export default {
  name: 'App',
  components: {Default, Auth},
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