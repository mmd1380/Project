<template>
  <v-card
    max-width="360"
    class="mx-auto mt-16 elevation-3"
    height="487"
  >
    <v-stepper v-model="el">
      <v-stepper-items>
        <v-stepper-content step="0">
          <v-row class="back_btn">
            <v-btn
              rounded
              icon
              @click="el = 1"
            >
              <v-icon>mdi-arrow-left-circle-outline</v-icon>
            </v-btn>
          </v-row>
          <v-row class="mb-2" justify="center">
            <v-card-text>
              <h2 class="blue--text text--darken-3 float-right">
                ارسال کد
              </h2>
            </v-card-text>
          </v-row>
          <v-divider></v-divider>
          <v-row class="">
            <v-card-text>
              <p class="mt-5 black--text">
                کد اعتبار سنجی به شماره {{ phoneNO }} ارسال شد.
              </p>
            </v-card-text>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                class="mt-4"
                label="کد ارسالی"
                hide-details="auto"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="my-4 mt-7">
            <v-btn
                color="blue darken-2 white--text"
                depressed
                width="100%"
                height="48"
                @click="postMobile"
            >
              <span class="font-weight-bold">تایید</span>
            </v-btn>
          </v-row>
          <v-row class="my-5">
            <timeCounter
              v-if="counter.start"
              v-model="counter"
            ></timeCounter>
          </v-row>
        </v-stepper-content>
        <v-stepper-content step="1">
          <v-row class="back_btn">
            <v-btn
              rounded
              icon
              @click="el = 2"
            >
              <v-icon>mdi-arrow-left-circle-outline</v-icon>
            </v-btn>
          </v-row>
          <v-row class="pr-2 mb-2" justify="center">
            <v-card-text>
              <h2 class="blue--text text--darken-3 float-right">
                فراموشی رمز عبور
              </h2>
            </v-card-text>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-card-text>
              <p class="mt-5 black--text">
                لطفا برای فراموشی رمز عبور شماره موبایل خود را وارد نمایید.
              </p>
            </v-card-text>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                class="mt-4"
                label="شماره موبایل"
                :rules="rules"
                hide-details="auto"
                append-icon="mdi-phone-outline"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="my-4 mt-7">
            <v-btn
              color="blue darken-2 white--text"
              depressed
              width="100%"
              height="48"
              @click="postMobile"
            >
              <span class="font-weight-bold">ارسال کد</span>
            </v-btn>
          </v-row>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-row class="mb-2" justify="center">
            <v-card-text>
              <h2 class="blue--text text--darken-3 float-right">
                ورود به سیستم
              </h2>
            </v-card-text>
          </v-row>

          <v-divider></v-divider>

          <v-row>
            <v-card-text>
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
          <v-row class="mt-7">
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
                @click="el = 1"
              >
                فراموشی رمز عبور
              </v-btn>
            </v-col>
          </v-row>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-card>
</template>

<script>
import timeCounter from "@/components/timeCounter";

export default {
  components: { timeCounter },
  data: () => ({
    showPass: true,
    phoneNO: "09391234565",
    counter: {
      time: 59,
      start: false
    },
    el: 2,
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
    },
    postMobile() {
      // call api for forget password
      this.el = 0;
      this.counter.start = true;
    }
  }
}
</script>
<style>
.text{
  font-size: 16px;
  color: black;
  text-align: right;
}
.v-stepper {
  box-shadow: none !important;
  border-radius: 0 !important;
}
.back_btn {
  position: absolute;
  left: 20px;
  top: 35px;
}
</style>