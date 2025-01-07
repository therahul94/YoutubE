import React from "react";
import SidebarContents from "./SidebarContents";

function Sidebar() {
  const sidebarPart1 = [
    {
      id: 1,
      logo: "home",
      content: "Home",
    },
    {
      id: 2,
      logo: "shorts",
      content: "Shorts",
    },
    {
      id: 3,
      logo: "subscription",
      content: "Subscriptions",
    },
  ];

  const sidebarPart2 = [
    {
      id: 1,
      logo: "history",
      content: "History",
    },
    {
      id: 2,
      logo: "playlist",
      content: "Playlist",
    },
    {
      id: 3,
      logo: "yourVideos",
      content: "Your videos",
    },
    {
        id: 4,
        logo: "yourCourses",
        content: "Your courses",
      },
      {
        id: 5,
        logo: "watchLater",
        content: "Watch later",
      },
      {
        id: 6,
        logo: "likedVideos",
        content: "Liked videos",
      },
      {
        id: 7,
        logo: "downloads",
        content: "Downloads",
      },
  ];

  const sidebarPart3 = [
    {
      id: 1,
      logo: "trending",
      content: "Trending",
    },
    {
      id: 2,
      logo: "shopping",
      content: "Shopping",
    },
    {
      id: 3,
      logo: "music",
      content: "Music",
    },
    {
        id: 4,
        logo: "films",
        content: "Films",
      },
      {
        id: 5,
        logo: "live",
        content: "Live",
      },
      {
        id: 6,
        logo: "gaming",
        content: "Gaming",
      },
      {
        id: 7,
        logo: "news",
        content: "News",
      },
      {
        id: 8,
        logo: "sport",
        content: "Sport",
      },
      {
        id: 9,
        logo: "courses",
        content: "Courses",
      },
      {
        id: 10,
        logo: "fashionBeauty",
        content: "Fashion & beauty",
      },
      {
        id: 11,
        logo: "podcasts",
        content: "Podcasts",
      },
  ];

  const sidebarPart4 = [
    {
      id: 1,
      logo: "youtubePremium",
      content: "YouTube Premium",
    },
    {
      id: 2,
      logo: "youtubeStudio",
      content: "YouTube Studio",
    },
    {
      id: 3,
      logo: "youtubeMusic",
      content: "YouTube Music",
    },
    {
        id: 4,
        logo: "youtubeKids",
        content: "YouTube Kids",
    }, 
  ];

  const sidebarPart5 = [
    {
      id: 1,
      logo: "settings",
      content: "Settings",
    },
    {
      id: 2,
      logo: "reportHistory",
      content: "Report history",
    },
    {
      id: 3,
      logo: "help",
      content: "Help",
    },
    {
        id: 4,
        logo: "sendFeedback",
        content: "Send feedback",
    }, 
  ];
  return (
    <div className="py-3 px-2 w-[15%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden mt-12 space-y-3">
      <div className="space-y-1">
        {sidebarPart1.map(({ id, logo, content }) => {
          return <SidebarContents key={id} logo={logo} content={content} />;
        })}
      </div>
      <hr />
      <div>
        <div className="flex items-center space-y-1 px-3 py-1 mb-1 rounded-md cursor-pointer hover:bg-gray-300 duration-300">
          <span className="font-semibold">You</span>{" "}
          <div className="w-4 ml-2">
            <img src="/right.svg" alt="no-img" />
          </div>
        </div>
        <div className="space-y-1">
          {sidebarPart2.map(({ id, logo, content }) => {
            return <SidebarContents key={id} logo={logo} content={content} />;
          })}
        </div>
      </div>
      <hr />
      <div>
        <div className="flex items-center space-y-1 px-3 py-1 rounded-md ">
          <span className="font-semibold">Explore</span>{" "}
        </div>
        <div className="space-y-1">
        {sidebarPart3.map(({ id, logo, content }) => {
          return <SidebarContents key={id} logo={logo} content={content} />;
        })}
      </div>
      </div>
      <hr />
      <div>
        <div className="flex items-center space-y-1 px-3 py-1 rounded-md ">
          <span className="font-semibold">More from YouTube</span>{" "}
        </div>
        <div className="space-y-1">
        {sidebarPart4.map(({ id, logo, content }) => {
          return <SidebarContents key={id} logo={logo} content={content} />;
        })}
      </div>
      </div>
      <hr />
      <div>
        <div className="space-y-1">
        {sidebarPart5.map(({ id, logo, content }) => {
          return <SidebarContents key={id} logo={logo} content={content} />;
        })}
      </div>
      </div>
      <hr />
      <div>
        <div className="space-y-1 text-xs text-gray-500">
        About Press Copyright <br /> Contact us Creator Advertise <br /> Developers <br /><br />
Terms Privacy Policy & Safety <br />How YouTube works <br /> Test new features <br /><br />
<span className="text-gray-700"> © 2024 Gooogle LLC</span>
      </div>
      </div>
    </div>
  );
}

export default Sidebar;
