<template>
  <v-card
      class="pa-8 my-auto mx-auto elevation-5 Appfont"
      max-width="360"
      height="487"
  >
    <v-row justify="center">
        <v-card-text>
          <h2 class="blue--text text--darken-3">
            ورود به سیستم
          </h2>
          <p class="mt-5 black--text">
            لطفا برای ورود به سیستم نام کاربری و رمز عبور خود را وارد نمایید.
          </p>
        </v-card-text>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
            class="mt-4"
            label="نام کاربری"
            :rules="rules"
            hide-details="auto"
            append-icon="mdi-account-outline"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mt-4">
        <v-text-field
            label="رمز عبور"
            :type="showPass ? 'password': 'text'"
            hide-details="auto"
            :append-icon="showPass ? 'mdi-eye-outline': 'mdi-eye-off-outline'"
            @click:append="showPass = !showPass"
        ></v-text-field>
      </v-col>
    </v-row>
      <v-row   class="mt-7">
        <v-col cols="12" class="pb-1">
          <v-btn
              color="blue darken-2 white--text"
              depressed
              width="100%"
              height="48"
              @click="authentication()"
          >
            <span class="font-weight-bold">ورود به سیستم</span>
          </v-btn>
        </v-col>
        <v-col class="text-center pt-0 mt-0">
          <v-btn
              text
              width="100%"
              class="blue--text text--darken-3 mt-0 font-weight-bold"
              :to="{ name: 'Forget' }"
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
    showPass: true,
    rules: [
      value => !!value || 'پر کردن این فیلد الزامیست.',
      value => (value && value.length >= 5) || 'حداقل 5 کاراکتر',
    ],
  }),
  methods: {
    authentication() {
      this.$store.commit("SET_AUTHENTICATION", true)
      this.$store.commit("SET_LAYOUT", "Default")
      this.$router.push({ name: "Home" })
    }
  }
}
</script>
<style>
.Appfont{
  font-family: IRANYekanRegular;
}
.text{
  font-size: 16px;
  color: black;
  text-align: right;
}
</style>