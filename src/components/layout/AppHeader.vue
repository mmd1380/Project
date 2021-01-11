<template>
  <v-card>
    <v-toolbar dense flat tile>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="px-2">
        <v-btn rounded tile icon class="mx-2">
          <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-btn icon class="mx-2">
          <v-icon>mdi-cog</v-icon>
        </v-btn>
        <v-btn icon class="mx-2">
          <v-icon>mdi-bell</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "AppHeader",
  data: () => ({
    title: "صفحه اصلی"
  })
}
</script>

<style scoped>

</style>