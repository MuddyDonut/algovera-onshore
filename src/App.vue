<template>
  <div>
    <header><Recipes /></header>

    <div
      class="
        bg-gradient-to-b
        from-white
        via-purple-50
        to-indigo-100
        grid
        lg:grid-cols-2
        w-full
        py-12
        items-center
        justify-center
      "
    >
      <div class="px-8 max-w-md mx-auto sm:max-w-xl">
        <img
          class="mt-6 sm:mt-8 sm:h-96 sm:w-full lg:hidden"
          src="./assets/cyborg-animate.8df5bae8.svg"
          alt="floating cyborg"
        />
        <h1
          class="
            mb-8
            text-4xl
            font-extrabold
            leading-none
            tracking-normal
            text-gray-900
            md:text-6xl md:tracking-tight
          "
        >
          Get Insights
          <span
            class="
              block
              w-full
              py-2
              text-transparent
              bg-clip-text
              leading-12
              bg-gradient-to-r
              from-green-400
              to-purple-500
              lg:inline
            "
            >Without Code</span
          >
        </h1>
        <p class="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
          Marketplace where you can buy
          <br />and sell Data Applications
          <br />
          <span class="font-bold">Created by users, for users.</span>
        </p>

        <div class="mt-6 sm:mt-6">
          <a
            href="https://share.hsforms.com/1YXZ6_OwXRgOuKexSsGdDVQ55vc7"
            class="
              bg-purple-500
              inline-block
              px-5
              py-3
              shadow-lg
              text-white
              rounded-lg
              uppercase
              tracking-wider
              font-semibold
              text-sm
              sm:text-base
            "
            >Sign Up</a
          >
        </div>
      </div>
      <img
        class="mt-6 sm:mt-8 sm:h-full sm:w-8/12 hidden lg:block"
        src="./assets/cyborg-animate.8df5bae8.svg"
        alt="floating cyborg"
      />
    </div>
    <div
      class="
        grid
        md:px-20
        lg:grid-cols-2
        w-full
        py-12
        items-center
        justify-center
      "
    >
      <img
        class="mt-6 sm:mt-8 sm:h-full sm:w-8/12 hidden lg:block"
        src="./assets/android-animate.svg"
        alt="floating cyborg"
      />
      <img
        class="mt-6 sm:mt-8 sm:h-96 sm:w-full lg:hidden"
        src="./assets/android-animate.svg"
        alt="floating cyborg"
      />
      <div class="px-8 max-w-md mx-auto sm:max-w-xl">
        <h1
          class="
            mb-8
            text-4xl
            font-extrabold
            leading-none
            tracking-normal
            text-gray-900
            md:text-6xl md:tracking-tight
          "
        >
          Try it out
          <br />
          <span
            class="
              block
              w-full
              py-2
              text-transparent
              bg-clip-text
              leading-12
              bg-gradient-to-r
              from-green-400
              to-purple-500
              lg:inline
            "
            >For Free</span
          >
        </h1>
        <p class="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
          Our markeplace tries to meet a bunch of needs.
          <br />But we don't want you to go in blind.
          <br />
          <span class="font-bold">Try out an app, no hassle required!</span>
        </p>
      </div>
    </div>
    <a name="market"></a>
    <div class="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
      <h1 class="text-2xl font-bold sm:mt-8 sm:text-4xl">
        Custom<span
          class="
            text-transparent
            bg-clip-text
            leading-12
            bg-gradient-to-r
            from-green-400
            to-purple-500
          "
        >
          Data Applications</span
        >
      </h1>

      <Market :items="items" />
    </div>
    <div class="grid lg:grid-cols-2 w-full py-12 items-center justify-center">
      <img
        class="mt-6 sm:mt-8 sm:h-96 sm:w-full lg:hidden"
        src="./assets/investment.svg"
        alt="floating cyborg"
      />
      <div class="px-8 max-w-md mx-auto sm:max-w-xl">
        <h1
          class="
            mb-8
            text-4xl
            font-extrabold
            leading-none
            tracking-normal
            text-gray-900
            md:text-6xl md:tracking-tight
          "
        >
          Create Apps
          <br />
          <span
            class="
              block
              w-full
              py-2
              text-transparent
              bg-clip-text
              leading-12
              bg-gradient-to-r
              from-green-400
              to-purple-500
              lg:inline
            "
            >Earn Income</span
          >
        </h1>
        <p class="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
          Everyone is used to giving projects to their bosses.
          <br />Build for everyone instead and earn your fair share.
          <br />
          <span class="font-bold">Create an app, and sell it!</span>
        </p>
      </div>
      <img
        class="mt-6 sm:mt-8 sm:h-full sm:w-8/12 hidden lg:block"
        src="./assets/investment.svg"
        alt="floating cyborg"
      />
    </div>
    <div class="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
      <Info />
    </div>
    <a name="footer"></a>
    <Footer />
  </div>
</template>

<script>
import Recipes from "./components/Recipes.vue";
// import Figure from "./components/Figure.vue";
import Info from "./components/Info.vue";
import Market from "./components/DataAppMarketPlace.vue";
import Footer from "./components/Footer.vue";
// import axios from "axios";

export default {
  name: "App",
  components: {
    Recipes,
    // Figure,
    Market,
    Info,
    Footer,
  },
  data() {
    return {
      items: [
        {
          rank: 1,
          pastDayRank: 1,
          symbol: "Project Lynx",
          score: 6.460213849854606,
          gini: 0.8844487043156986,
          lastCrawl: "2021-10-10T00:01:00.034Z",
          price: 99,
          address: "0xad67f7a72ba2ca971390b2a1dd907303bd577a4f",
          did: "did:op:a2B8b3aC4207CFCCbDe4Ac7fa40214fd00A2BA71",
          liquidity: 380958.33617004944,
          banned: 0,
          currency: "ocean-protocol",
        },
        {
          rank: 2,
          pastDayRank: 2,
          symbol: "QUICRA-0",
          score: 6.417833643988541,
          gini: 0.9287300854972028,
          lastCrawl: "2021-10-10T00:01:00.034Z",
          price: 683.4818299289681,
          address: "0xaab9eaba1aa2653c1dda9846334700b9f5e14e44",
          did: "did:op:7Bce67697eD2858d0683c631DdE7Af823b7eea38",
          liquidity: 613603.211809362,
          banned: 0,
          currency: "ocean-protocol",
        },
        {
          rank: 3,
          pastDayRank: 3,
          symbol: "EXCANE-93",
          score: 2.891896149243334,
          gini: 0.697214323487343,
          lastCrawl: "2021-10-10T00:01:00.034Z",
          price: 1468.3491334586947,
          address: "0x5e9939f6d959ffe9b328243dfadbeed9c46ac197",
          did: "did:op:2a76F680279CE629a9F5E601BDa7246e06F226f0",
          liquidity: 65080.783491195936,
          banned: 0,
          currency: "ocean-protocol",
        },
      ],
    };
  },

};
</script>

<style>
/* all of our styles can go here */
</style>
