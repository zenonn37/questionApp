
<template>
  <div>
    
  </div>
</template>


<script>
export default {
  created() {
    EventBus.$emit("logout");
  }
};
</script>