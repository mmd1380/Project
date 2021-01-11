<template>
  <div style="width: 100% !important;">
    <v-row class="mt-1" justify="center">
      <span>{{ time }}</span>
    </v-row>
    <v-row justify="center" dir="auto" class="pt-5">
      <v-btn
        color="blue darken-2 white--text"
        text
        :disabled="disable"
        outlined
        @click="reset"
      >
        <span class="font-weight-bold">ارسال مجدد</span>
      </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "SMSPassword",
  data: () => ({
    time: "00:00",
    disable: true
  }),
  mounted() {
    this.init(this.$attrs.value.time);
  },
  methods: {
    init(time) {
      const val = setInterval(() => {
        time -= 1;
        if(time >= 0) {
          const min = (time / 60) | 0;
          let sec = time % 60;
          if(sec < 10) sec = `0${sec}`;
          this.time = `0${min}:${sec}`;
        } else {
          clearInterval(val);
          this.time = null;
          this.disable = false;
        }
      }, 1000);
    },
    reset() {
      this.init(this.$attrs.value.time);
    }
  }
}
</script>