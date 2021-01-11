<template>
  <v-card>
    <v-toolbar dense flat tile>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="pa-2">
        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          icon
          class="mx-1"
        >
          <v-icon>{{ icon.icon }}</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "AppHeader",
  data: () => ({
    title: "صفحه اصلی",
    icons: [
      {
        name: "profile",
        icon: "mdi-account"
      },
      {
        name: "setting",
        icon: "mdi-cog"
      },
      {
        name: "notifications",
        icon: "mdi-bell"
      },
    ]
  })
}
</script>