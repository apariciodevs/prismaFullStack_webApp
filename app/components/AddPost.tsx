"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  //create post
  const { mutate } = useMutation(
    async (title: string) => await axios.post("/api/posts/addPost", { title })
  )

  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsDisabled(true)
    mutate(title)
  }

  return (
    <div className="flex flex-col items-center max-w-screen-xl ">
      <form onSubmit={submitPost} className="w-5/6 max-w-2xl p-6 mx-auto my-8 bg-white rounded-lg">
        <div className="flex flex-col px-4 my-4">
          <textarea
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            value={title}
            placeholder="Whats on your mind?"
            className="p-4 my-4 text-lg text-white bg-gray-800 rounded-lg"
          ></textarea>
        </div>
        <div className="flex items-center justify-between gap-2 ">
          <p
            className={`font-bold text-sm ${
              title.length > 200 ? "text-red-700" : "text-gray-700"
            }`}
          >{`${title.length}/200`}</p>
          <button
            className="px-6 py-2 text-sm font-semibold text-white transition-opacity duration-300 bg-teal-600 rounded-xl hover:opacity-80 disabled:opacity-60"
            disabled={isDisabled}
            type="submit"
          >
            Create post
          </button>
        </div>
      </form>
    </div>
  );
}
