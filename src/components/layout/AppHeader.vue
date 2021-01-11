<template>
  <v-card>
    <v-toolbar  dense flat tile class="py-1" style="height: 60px">
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="px-2">

        <v-btn icon class="mx-2">
          <v-icon>mdi-cog</v-icon>
        </v-btn>
        <v-btn icon class="mx-2">
          <v-icon>mdi-bell</v-icon>
        </v-btn>
        <v-menu
            v-model="menu"
            offset-y
            rounded
            bottom
            origin="top center"
            transition="ease-in"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                v-bind="attrs"
                v-on="on"
                rounded
                tile icon class="mx-2">
              <v-icon>mdi-account</v-icon>
            </v-btn>

          </template>

          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <!--                    <img src="">  profile photo -->
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>فاطمه موثق</v-list-item-title>
                  <v-list-item-subtitle>صندوقدار</v-list-item-subtitle>
                </v-list-item-content>

              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list>

              <v-list-item>
                کد پرسنلی : 10784
              </v-list-item>
            </v-list>

          </v-card>
        </v-menu>

      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "AppHeader",
  data: () => ({
    title: "صفحه اصلی",

  })
}
</script>