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
