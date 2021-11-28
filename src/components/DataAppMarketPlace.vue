<template>
  <div class="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
    <div
      :key="item.id"
      v-for="item in items"
      class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden"
    >
      <img class="w-32 h-32" src="../assets/Data Onshore.png" alt="" />
      <div class="px-6 py-4">
        <h3 class="text-lg font-semibold text-gray-800">{{ item.symbol }}</h3>
        <p class="text-gray-600">${{ item.price}}</p>
        <div class="mt-4">
          <a href="#" class="text-indigo-100 hover:text-indigo-200 font-semibold text-sm"> Buy (Soon!) </a>
          <!-- <a href="https://buy.stripe.com/test_5kA7vRfLD8SR520144" class="text-indigo-500 hover:text-indigo-400 font-semibold text-sm"> Sample </a> -->
          <a href="https://streamlitdemo.herokuapp.com/" class="text-indigo-500 hover:text-indigo-400 font-semibold text-sm"> Sample </a>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Items",
  props: {
    items: Array,
  },
};
</script>