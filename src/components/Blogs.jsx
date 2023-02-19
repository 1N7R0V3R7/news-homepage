import React from "react";
import { BlogCards } from "./BlogCards";
import RetroPC from '../assets/images/image-retro-pcs.jpg'
import TopLaptops from '../assets/images/image-top-laptops.jpg'
import GamingGrowth from '../assets/images/image-gaming-growth.jpg'

function Blogs() {
  const blogDetails = [
    {
      index: 1,
      imgSrc: RetroPC,
      title: "Reviving Retro PCs",
      desc: "what happens when old PCs are given modern upgrades?",
    },
    {
      index: 2,
      imgSrc: TopLaptops,
      title: "Top 10 Laptops of 2022",
      desc: "Our best picks for various needs and budgets.",
    },
    {
      index: 3,
      imgSrc: GamingGrowth,
      title: "The Growth of Gaming",
      desc: "How the pandemic has sparked fresh opportunities.",
    },
  ];
  
  return (
    <div className="grid gap-8 my-16 lg:grid-cols-3">
      {
        blogDetails.map(blog => <BlogCards key={blog.index} {...blog} /> )
      }
    </div>
  )
}

export default Blogs;
