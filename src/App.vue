<template>
  <el-container>
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/winners">Winners</router-link></el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    /**
     * Handle menu item selection.
     * @param {string} key - The key of the selected menu item.
     * @param {Array<string>} keyPath - The path of the selected menu item.
     */
    handleSelect(key, keyPath) {
      this.activeIndex = key;
    },
  },
};
</script>

<style lang="scss">
.el-menu-demo {
  background-color: #333;
  color: #fff;
}

.el-menu-demo .el-menu-item {
  color: #fff;
}

.el-menu-demo .el-menu-item:hover {
  background-color: #555;
}

.el-menu-demo .el-menu-item.is-active {
  background-color: #777;
}
</style>
