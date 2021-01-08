<template>
  <v-card
      style="top: 50%"
      class="mx-auto mt-auto elevation-5 Appfont "
    max-width="360"
    height="487"
  >
    <v-row class="pr-8 pb-2" justify="center">
        <v-card-text>
        <h2 class="blue--text text--darken-3 float-right">
          فراموشی رمز عبور
        </h2>
        <v-btn class="float-left" @click="$router.go(-1)">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        </v-card-text>
    </v-row>
    <v-divider></v-divider>


    <v-row class="mt-2 px-8">
      <v-card-text>
             <span>
      کد پرسنلی خود را وارد کنید.
    </span>

        <v-tooltip left max-width="200px">
          <template v-slot:activator="{ on, attrs }">
            <v-icon
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                small
            >
              mdi-help-circle-outline
            </v-icon>
          </template>
          <span>با وارد کردن کد پرسنلی, رمز عبور جدید به شماره ثبت شده در سیستم پیامک می شود.لطفا پس از ورود به سیستم رمز عبور خود را تغییر دهید. </span>
        </v-tooltip>


          <v-text-field
              class="mt-2"
              label="کد پرسنلی"
              hide-details="auto"
              append-icon="mdi-account-outline"
          ></v-text-field>
      </v-card-text>

    </v-row>
    <v-row   class="mt-7 px-8">
        <v-col cols="12" class="pb-1">
          <v-btn
              color="blue darken-2 white--text"
              depressed
              width="100%"
              height="48"
              @click="showComponent =!showComponent"
          >
            <span class="font-weight-bold" >ثبت</span>
          </v-btn>
        </v-col>
      <v-card-text>
        <v-col>
          <SMSPassword v-if="showComponent"></SMSPassword>
        </v-col>
      </v-card-text>


    </v-row>

  </v-card>
</template>

<script>
import SMSPassword from "@/components/SMSPassword";
export default {
  name: "forget",
  components: { SMSPassword},
  data:() => ({
    showComponent : false,
    }),


}

</script>

<style>
.Appfont{
  font-family: IRANYekanRegular;
}
</style>