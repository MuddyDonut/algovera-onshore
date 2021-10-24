<template>
<figure class="bg-gradient-to-r from-green-100 to-purple-500 rounded-xl p-8 grid grid-cols-2">
  <div class="pt-6 space-y-4 ">
    <blockquote>
      <p class="text-lg font-semibold">
        People don't have data teams, but provide data to giant corporations. 
        We want your data to be useful for you, as it is for them.
      </p>
    </blockquote>    
    <figcaption class="font-medium">
      <div class="text-cyan-600">
        Constan Kouman
      </div>
      <div class="text-gray-500">
        Co-founder, Onshore Data
      </div>
    </figcaption>
  </div>
    <img class= "mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover" src="../assets/Data Onshore.png" alt="" />
</figure>
</template>

<script>
export default {
  props: ['Figure'],
}
</script>

