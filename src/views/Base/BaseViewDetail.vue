<template>
  <div class="base-view-detail">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="body"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
import router from "@/router";
import BaseAPI from "@/api/baseapi";

export default {
  name: "BaseViewDetail",
  created() {
    // reset
    this.currentItem = {};
  },
  data() {
    return {
      currentItem: {},
      detailEntities: {},
      masterEntities: null,
      internalEditMode: "View",
      routerName: null
    };
  },
  // if router params change and UI does not re-render
  beforeRouteUpdate(to, from, next) {
    next();
  },
  mounted() {
    this.load();
  },
  computed: {
    editMode() {
      return this.internalEditMode;
    },
    api() {
      return new BaseAPI();
    }
  },
  methods: {
    buttonClick(action, e) {
      switch (action) {
        case 'Save':
          this.save();
          break;
      }
    }, 
    validate() {},
    refresh() {},
    load() {},
    save() {},
    saveAndClose() {},
    moveNext() {
      var nextId;
      router.push({
        name: this.routerName,
        params: {
          id: nextId
        }
      });
    },
    moveBack() {},
    close() {
      router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
