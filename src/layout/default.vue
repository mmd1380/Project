<template>
  <div class="d-flex overflow-hidden">
    <AppMenu></AppMenu>
    <div class="view">
      <AppHeader></AppHeader>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import AppMenu from "@/components/layout/AppMenu";
import AppHeader from "@/components/layout/AppHeader";
export default {
name: "default",
  components: {AppHeader, AppMenu}
}
</script>

<style>
.view {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: #f5f5f5 !important;
  color: #4a4949;
}
.content {
  padding: 12px;
}
</style>