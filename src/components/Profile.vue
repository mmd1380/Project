<template>

    <v-container
        class="mt-7"
        id="user-profile"
        fluid
        tag="section"
    >
      <v-row justify="center">
        <v-col
            cols="12"
            md="10"
        >
          <v-card>


            <v-form>
              <v-container class="py-0">
                <v-row>
                  <v-col
                      cols="12"
                      md="4"
                  >
                    <v-text-field
                        label="سازمان"
                        disabled
                        value="فروشگاه کوروش"
                    />
                  </v-col>

                  <v-col
                      cols="12"
                      md="4"
                  >
                    <v-text-field
                        disabled
                        class="purple-input"
                        label="کد پرسنلی"
                        value="10784"
                    />
                  </v-col>
                  <v-col
                        cols="12"
                        md="4"
                    >
                      <v-text-field
                          disabled
                          class="purple-input"
                          label="شعبه"
                          value="زنبیل آباد"
                      />
                    </v-col>

                  <v-col
                      cols="12"
                      md="4"
                  >
                    <v-text-field
                        label="نام کاربری"
                        class="purple-input"
                    />
                  </v-col>

                  <v-col
                      cols="12"
                      md="4"
                  >
                    <v-text-field
                        label="نام"
                        class="purple-input"
                    />
                  </v-col>

                  <v-col
                      cols="12"
                      md="4"
                  >
                    <v-text-field
                        label="نام خانوادگی"
                        class="purple-input"
                    />
                  </v-col>

                  <v-col  cols="12"
                          md="4">
                    <v-text-field
                        label="آدرس"
                        class="purple-input"
                    />
                  </v-col>

                  <v-col
                      cols="12"
                      md="4"
                  >
                    <v-text-field
                        label="شماره تماس"
                        class="purple-input"
                    />
                  </v-col>


                  <v-col
                      cols="12"
                      md="4"
                  >
                    <v-text-field
                        class="purple-input"
                        label="کد پستی"
                        type="number"
                    />
                  </v-col>

                  <v-col cols="12">
                    <v-textarea
                        class="purple-input"
                        label="درباره من"
                        value="توضیحات"
                    />
                  </v-col>

                  <v-col
                      cols="12"
                      class="text-right"
                  >

                    <v-btn
                        class="ma-2"
                        outlined
                        color="indigo"
                    >
                      ویرایش اطلاعات
                    </v-btn>


                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card>
        </v-col>

      </v-row>
    </v-container>

</template>

<script>
export default {
name: "Profile",
}
</script>
