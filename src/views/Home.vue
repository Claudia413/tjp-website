<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    toggleShowMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>
