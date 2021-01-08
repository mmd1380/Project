<template>
  <v-card
    class="pa-8 my-auto mx-auto elevation-5 Appfont"
    max-width="360"
    height="487"
  >
    <v-btn @click="$router.go(-1)">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <span>فراموشی رمز عبور</span>
  </v-card>
</template>

<script>
export default {
  name: "forget"
}
</script>

<style scoped>

</style>