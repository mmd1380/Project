<template>
  <v-card
      shaped
      class="pa-8 mt-10 mx-auto elevation-16"
      max-width="400"
  >
    <v-row justify="center">
      <v-col cols="5">
        <v-img
          src="@/assets/person.png"
        ></v-img>
      </v-col>
    </v-row>
    <v-row>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field
            filled
            label="نام کاربری"
            append-icon="mdi-account"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          filled
          :type="showPass ? 'password': 'text'"
          label="رمز عبور"
          :append-icon="showPass ? 'mdi-eye': 'mdi-eye-off'"
          @click:append="showPass = !showPass"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-btn
          color="primary"
          depressed
          width="100%"
          height="48"
          @click="authentication()"
        >
          <span class="font-weight-bold">ورود</span>
        </v-btn>
      </v-col>
      <v-col class="text-center">
        <v-btn
          text
        >
          فراموشی رمز عبور
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    showPass: true
  }),
  methods: {
    authentication() {
      // call api

      //
      this.$store.commit("SET_AUTHENTICATION", true)
      this.$router.push({ name: "Home" })
    }
  }
}
</script>