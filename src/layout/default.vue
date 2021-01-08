<template>
  <div class="d-flex">
    <AppMenu></AppMenu>
    <div class="view">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import AppMenu from "@/components/layout/AppMenu";
export default {
name: "default",
  components: {AppMenu}
}
</script>

<style>
.view {
  width: 100%;
  height: 100vh;
}
</style>