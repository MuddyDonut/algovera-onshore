<template>
  <div>
    <header><Recipes /></header>
    <!-- <Banner /> -->

    <div class="mt-24 mx-auto text-center">
      <h1
        class="
          mb-8
          md:mx-56
          mx-16
          lg:text-6xl
          md:text-5xl
          text-6xl text-center
          font-medium
          leading-none
          tracking-normal
          text-gray-900
          md:tracking-normal
        "
      >
        Onshore! is a data platform for
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
          >Data Creators, Companies, and the Data Curious</span
        >
      </h1>
      <div class="mt-6 sm:mt-6">
        <a
          href="https://share.hsforms.com/1YXZ6_OwXRgOuKexSsGdDVQ55vc7"
          class="
            bg-gradient-to-r
            from-green-400
            to-purple-500
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
          >Join Wailtlist</a
        >
      </div>
    </div>

    <img
      class="mt-6 mx-36 sm:mt-24 sm:h-3/6 sm:w-10/12 hidden lg:block rounded-lg"
      src="./assets/group.jpg"
      alt="floating cyborg"
    />
    <img
      class="mt-24 sm:mt-8 sm:h-96 sm:w-full lg:hidden rounded-lg"
      src="./assets/group.jpg"
      alt="floating cyborg"
    />

    <div
      class="
        grid
        lg:grid-cols-2
        w-full
        md:px-40
        py-12
        items-center
        justify-center
        mt-4
      "
    >
      <img
        class="mt-6 sm:mt-8 sm:h-96 sm:w-full lg:hidden"
        src="./assets/investment.svg"
        alt="floating cyborg"
      />
      <div class="px-6 max-w-md mx-auto">
        <h1
          class="
            mb-8
            text-4xl
            font-sans font-medium
            leading-none
            tracking-normal
            text-gray-900
            md:text-4xl md:tracking-tight
          "
        >
          Create Content
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
        <p
          class="
            mb-8
            text-4xl
            font-sans font-thin
            leading-none
            tracking-normal
            text-gray-900
            md:text-4xl md:tracking-tight
          "
        >
          Data creators! Build content for everyone to enjoy.
          <br />
        </p>
      </div>
      <img
        class="mt-6 sm:mt-8 sm:h-full sm:w-10/12 hidden lg:block"
        src="./assets/investment.svg"
        alt="floating cyborg"
      />
    </div>
    <div
      class="
        grid
        md:px-40
        lg:grid-cols-2
        w-full
        py-12
        items-center
        justify-center
      "
    >
      <img
        class="mt-6 md:ml-8 sm:mt-8 sm:h-full sm:w-8/12 hidden lg:block"
        src="./assets/android-animate.svg"
        alt="floating cyborg"
      />
      <img
        class="mt-6 sm:mt-8 sm:h-96 sm:w-full lg:hidden"
        src="./assets/android-animate.svg"
        alt="floating cyborg"
      />
      <div class="px-6 max-w-md mx-auto">
        <h1
          class="
            mb-8
            text-4xl
            font-sans font-medium
            leading-none
            tracking-normal
            text-gray-900
            md:text-4xl md:tracking-tight
          "
        >
          Browse for free
          <br />
          <span
            class="
              block
              w-full
              py-2
              font-sans font-medium
              text-transparent
              bg-clip-text
              leading-12
              bg-gradient-to-r
              from-green-400
              to-purple-500
              lg:inline
            "
            >Or purchase special access</span
          >
        </h1>
        <p class="mb-8
            text-4xl
            font-sans
            leading-none
            font-thin
            tracking-normal
            text-gray-900
            md:text-4xl md:tracking-tight">
          Markeplace listings come with sample views.
          <br />Don't go in blind.
        </p>
      </div>
    </div>
    <div
      class="
        w-full
        h-5/6
        items-center
        justify-center
        max-w-md
        sm:max-w-xl
        lg:max-w-6xl
        mx-auto
        mt-4
        lg:px-12
        py-8
        rounded-3xl
        bg-gradient-to-r
        from-green-100
        to-purple-200
      "
    >
      <div class="px-8 py-28 max-w-md mx-auto sm:max-w-xl">
        <h1
          class="
          mb-8
          lg:text-7xl
          md:text-5xl
          text-6xl text-center
          font-medium
          leading-none
          tracking-normal
          text-grey-900
          md:tracking-normal
          "
        >
          For Creators
        </h1>
        <p class="text-center font-sans mt-2 mb-2 text-grey-900 sm:mt-4 sm:text-xl">
          Data Onshore provides a platoform for creators to build and sell
          data content and services.
          Big Tech monoplozies data content and <br />data creators are left behind.
          Our mission is to educate and empower data creators to build and sell
          data content and services.
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
          Data Content</span
        >
      </h1>
      <Market :items="items" />
    </div>

    <!-- <div class="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
      <Info />
    </div> -->
    <a name="footer"></a>
    <div class="px-9"><Footer /></div>
  </div>
</template>

<script>
import Recipes from "./components/Recipes.vue";
// import Banner from "./components/Banner.vue";
// import Info from "./components/Info.vue";
import Market from "./components/DataAppMarketPlace.vue";
import Footer from "./components/Footer.vue";
// import axios from "axios";

export default {
  name: "App",
  components: {
    Recipes,
    // Figure,
    Market,
    // Info,
    Footer,
    // Banner,
  },
  data() {
    return {
      items: [
        {
          rank: 1,
          pastDayRank: 1,
          symbol: "Ocean Analysis",
          score: 6.460213849854606,
          gini: 0.8844487043156986,
          lastCrawl: "2021-10-10T00:01:00.034Z",
          price: 99.99,
          address: "0xad67f7a72ba2ca971390b2a1dd907303bd577a4f",
          did: "did:op:a2B8b3aC4207CFCCbDe4Ac7fa40214fd00A2BA71",
          liquidity: 380958.33617004944,
          banned: 0,
          currency: "ocean-protocol",
        },
        {
          rank: 2,
          pastDayRank: 2,
          symbol: "Your Content Here",
          score: 6.417833643988541,
          gini: 0.9287300854972028,
          lastCrawl: "2021-10-10T00:01:00.034Z",
          price: 9.99,
          address: "0xaab9eaba1aa2653c1dda9846334700b9f5e14e44",
          did: "did:op:7Bce67697eD2858d0683c631DdE7Af823b7eea38",
          liquidity: 613603.211809362,
          banned: 0,
          currency: "ocean-protocol",
        },
        {
          rank: 3,
          pastDayRank: 3,
          symbol: "Your Content Here",
          score: 2.891896149243334,
          gini: 0.697214323487343,
          lastCrawl: "2021-10-10T00:01:00.034Z",
          price: 14.99,
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
