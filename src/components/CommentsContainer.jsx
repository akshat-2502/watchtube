import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";

const commentsData = [
  {
    name: "Akshat Khulbe",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptas error cupiditate, aliquid laborum excepturi.",
    replies: [
      {
        name: "Akshat Khulbe",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptas error cupiditate, aliquid laborum excepturi.",
        replies: [],
      },
      {
        name: "Akshat Khulbe",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptas error cupiditate, aliquid laborum excepturi.",
        replies: [
          {
            name: "Akshat Khulbe",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptas error cupiditate, aliquid laborum excepturi.",
            replies: [
              {
                name: "Akshat Khulbe",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptas error cupiditate, aliquid laborum excepturi.",
                replies: [],
              },
            ],
          },
          {
            name: "Akshat Khulbe",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptas error cupiditate, aliquid laborum excepturi.",
            replies: [
              {
                name: "Akshat Khulbe",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptas error cupiditate, aliquid laborum excepturi.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshat Khulbe",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptas error cupiditate, aliquid laborum excepturi.",
    replies: [
      {
        name: "Akshat Khulbe",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptas error cupiditate, aliquid laborum excepturi.",
        replies: [
          {
            name: "Akshat Khulbe",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptas error cupiditate, aliquid laborum excepturi.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Akshat Khulbe",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptas error cupiditate, aliquid laborum excepturi.",
    replies: [
      {
        name: "Akshat Khulbe",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptas error cupiditate, aliquid laborum excepturi.",
        replies: [],
      },
      {
        name: "Akshat Khulbe",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptas error cupiditate, aliquid laborum excepturi.",
        replies: [
          {
            name: "Akshat Khulbe",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptas error cupiditate, aliquid laborum excepturi.",
            replies: [],
          },
        ],
      },
      {
        name: "Akshat Khulbe",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptas error cupiditate, aliquid laborum excepturi.",
        replies: [],
      },
    ],
  },
  {
    name: "Akshat Khulbe",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptas error cupiditate, aliquid laborum excepturi.",
    replies: [],
  },
  {
    name: "Akshat Khulbe",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptas error cupiditate, aliquid laborum excepturi.",
    replies: [],
  },
  {
    name: "Akshat Khulbe",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptas error cupiditate, aliquid laborum excepturi.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-200 items-center p-2 my-2">
      <FaRegCircleUser className="w-8 h-8" />
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 ml-5 border-l-1 border-l-black">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="mt-5 w-[1000px]">
      <h1 className="text-xl font-bold">Comments :- </h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
