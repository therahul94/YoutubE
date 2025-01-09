import React from "react";
import { Link } from "react-router-dom";
import Time from "../loader/Time";

export default function HomeVideos({ video }) {
  console.log(video);
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="relative h-40 md:h-45 w-full md:rounded-xl hover:rounded-none duration-200 overflow-hidden">
          <div>
            <img
              src={video?.thumbnails[0]?.url}
              alt=""
              className="h-full w-full"
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
        </div>

        <div className="flex justify-around">
          <div>
            <div className="h-10 w-10 rounded-full bg-black"></div>
          </div>
          <div className="ml-2 text-sm">
            <div className="text-base font-semibold">
              {" "}
              {video?.title?.slice(0, 40)}
              <>
                {video?.title?.length > video?.title?.slice(0, 40)?.length ? (
                  <>...</>
                ) : (
                  <></>
                )}
              </>
            </div>
            <div>{video?.author?.title}</div>
            <div>
              <span>4343K views . </span>
              <span>{video?.publishedTimeText}</span>
            </div>
          </div>
          <div>
            <button className="rounded-full hover:bg-slate-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
