import React, { Component } from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/FiveColumnWithBackground.js";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";


export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <Features id="about"
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            We have Amazing <HighlightedText>Service.</HighlightedText>
          </>
        }
      />

      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions ?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "What will be taught?",
            answer:
              "Our goal is to teach you how to sell your datasets and algorithms. Selling datasets and algorithms on the blockchain can be confusing for many people. So we wanted to provide clear and precise tutorials on how to do so."
          },
          {
            question: "How do I make money?",
            answer:
              "Once you have learned how to sell on the blockchain, you will have the ability to sell your datasets and algorithms."
          },
          {
            question: "Why blockchain?",
            answer:
              "The blockchain provides access for anyone and is decentralized. So, the data you provide would belong to you and not a corporation."
          },
        ]}
      />
      <GetStarted/>
      <Footer />
    </AnimationRevealPage>
  );
}

