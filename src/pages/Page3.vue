<script>
import blockStore from "./../stores/block-store.js";

export default {
  name: "About",
  computed: {
    blocked: () => blockStore.block
  },
  methods: {
    register() {
      blockStore.block = true;
    }
  }
}
</script>

<template>
  <div>
    <h2>Page 3</h2>

    <div>click on the button below to block the navigation with a navigation guard.</div>

    <div>
      <button v-on:click="register()">Block leave</button>
      <div>navigation guard: {{ blocked }}</div>
    </div>
    
    <div>
      <p>Then click on previous arrow on browser to navigate away to the previous page</p>
      <p>Once the page asks if you want to leave click on <strong>cancel</strong></p>
    </div>
    <div style="color: red">
      <p>Observe that sometimes you can't navigate back or forward until on click back on the page</p>
      <p>OR it simple redirects you back to the first page outside the app.</p>
      <p>Either way it does not work properly</p>
    </div>
  </div>
</template>