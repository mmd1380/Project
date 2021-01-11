<template>
  <v-card >
    <v-navigation-drawer
      style="border-left: solid 1px rgba(0, 0, 0, 0.2); border-radius: 0"
    >
      <v-list-item style="height: 60px">


      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link

        >
          <v-list-item-icon>
            <v-icon size="25">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="height: 35px" class="menu">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "AppMenu",
  data: () => ({
    items: [
      { title: 'پروفایل', icon: 'mdi-account-outline', link: "/dashboard" },
      { title: 'خروج', icon: 'mdi-door', link: "/" },
    ],
  }),
}
</script>
<style>
.menu{
  font-size: 16px !important;
  font-family: IRANYekanBold;
}
</style>