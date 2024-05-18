import React from "react";
import { Link } from "react-router-dom";

const SuggestedPosts = ({ className, header, posts = [], tags }) => {
  return (
    <div
      className={`w-full shadow-[5px_5px_rgba(0,255,_0,_0.4),_10px_10px_rgba(0,0,255,_0.3),_15px_15px_rgba(255,_0,_0,_0.2),_20px_20px_rgba(0,255,_0,_0.1),_25px_25px_rgba(0,0,255,_0.05)] rounded-lg p-4 ${className}`}
    >
      <h2 className="font-opensans font-medium text-grey">{header}</h2>
      <div className="grid gap-y-5 mt-5">
        {posts &&
          posts.map((item) => (
            <div
              key={item._id}
              className="flex space-x-3 flex-nowrap items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="aspect-square object-cover rounded-lg w-1/5"
              />
              <div className="text-sm font-opensans text-grey font-medium">
                <h3 className="">{item.title}</h3>
                <span className="text-xs opacity-60">
                  {new Date(item.createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          ))}
      </div>
      <h2 className="font-opensans font-medium mt-8 italic text-grey">
        {" "}
        Tags:
      </h2>
      <div className=" flex flex-wrap gap-x-2 gap-y-2 mt-4">
        {tags.map((item) => (
          <Link
            to="/"
            className="inline-block rounded-md px-3 bg-neon-green bg-opacity-10 py-1.5 text-neon-green font-semibold italic hover:bg-white  hover:text-neon-green transition-all duration-300"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SuggestedPosts;
