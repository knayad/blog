import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { images } from "../../constants";
import SuggestedPosts from "./containers/SuggestedPosts";

const tempBreadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Articles", link: "/articles" },
  { name: "Title" },
];

const tempPostsData = [
  {
    _id: "1",
    image: images.SharingKnowledge,
    title: "Cetaphil Moisturizer",
    createdAT: "2023-01-01",
  },
  {
    _id: "1",
    image: images.SharingKnowledge,
    title: "Cetaphil Moisturizer",
    createdAT: "2023-01-01",
  },
  {
    _id: "1",
    image: images.SharingKnowledge,
    title: "Cetaphil Moisturizer",
    createdAT: "2023-01-01",
  },
  {
    _id: "1",
    image: images.LeafRazor,
    title: "Leaf Razor",
    createdAT: "2023-01-01T00:00:00Z",
  },
  {
    _id: "1",
    image: images.SharingKnowledge,
    title: "Cetaphil Moisturizer",
    createdAT: "2023-01-01T00:00:00Z",
  },
  {
    _id: "1",
    image: images.LeafRazor,
    title: "Leaf Razor",
    createdAT: "2023-01-01T00:00:00Z",
  },
];

const tempTagsData = ["People", "Places", "Things"];

const SingleArticle = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumbs data={tempBreadCrumbsData} />
          <img src={images.LeafRazor} alt="Leaf razor" />
          <Link
            to="/article?category=selectedCategory"
            className="text-primary text-sm font-opensans inline-block mt-4 md:text-base"
          >
            THING: BEAUTY
          </Link>
          <h1 className="text-xl font-medium font-opensans mt-4 text-grey md:text-[26px]">
            Leaf Razor
          </h1>
          <h3 className="font-medium font-opensans mt-4 text-grey md:text-[20px]pt-3">
            {" "}
            Still worth it after a few years?
          </h3>
          <div className="mt-4 text-grey">
            <p className="leading-7">
              The Leaf Shave razor is a reliable tool that provides a smooth
              shave and offers customization with up to three blades. However,
              its paint has scuffed off, and hard water affects its look. If you
              have long body hair and don’t load all three blades, it can snag
              and pull rather than shave cleanly. Despite these issues, the Leaf
              Shave razor saves on costs because blades are cheap, making it
              economical in the long run, especially for infrequent shavers. It
              also feels more sanitary since you can use fresh blades every
              time. On the downside, it’s not ideal for daily head shaving, as
              it can cause cuts, which are more severe than those from regular
              razors. Sensitive skin users might find it challenging to adapt
              to. Overall, the Leaf Shave razor is a cost-effective and hygienic
              option for general body shaving, but not the best choice for
              sensitive skin or daily head shaving.
            </p>
          </div>
        </article>
        <SuggestedPosts
          className="mt-8 mb-8 lg:mt-0 lg:max-w-xs"
          header="Trending Articles"
          posts={tempPostsData}
          tags={tempTagsData}
        />
      </section>
    </MainLayout>
  );
};

export default SingleArticle;
