"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faVideo, faSmile } from "@fortawesome/free-solid-svg-icons";

//Image
import Profiile from "@/public/assets/images/Profile.jpg";
import actionPost from "./action";

interface IProps {
  openPost: boolean;
  handleClose: () => void;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 500,
  bgcolor: "background.paper",
  borderRadius: 12,
  boxShadow: 24,
  p: 4,
};
function Post({ openPost, handleClose }: IProps) {
  const { setForm, validate, form, createPost } = actionPost();
  return (
    <div>
      <Modal
        open={openPost}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center gap-4 mb-4">
            <Image
              src={Profiile}
              width={99}
              height={99}
              alt="profile"
              className="rounded-full w-14 h-14  object-cover cursor-pointer duration-300  hover:border-purple-700 border-[2px]"
            />
            <Typography variant="h6" component="h2">
              <u className="decoration-dotted decoration-2">
                <i>
                  <span className="text-2xl font-bold text-[#8549a7] hover:text-blue-800 transition duration-300 ease-in-out">
                    เอเอ อชิรกรณ์
                  </span>
                </i>
              </u>
            </Typography>
          </div>
          <textarea
            value={form?.name}
            onChange={(e) => {
              e.preventDefault;
              setForm({ name: e.target.value });
            }}
            placeholder="What's on your mind?"
            className="w-full px-1 resize-none text-[#c785ec]  h-32 focus:outline-none focus:border-transparent"
          />
          <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-3 text-blue-500">
              <FontAwesomeIcon
                icon={faImage}
                size="lg"
                className="rounded-full text-[#c785ec] w-[30px] h-[30px] object-cover cursor-pointer duration-300  hover:scale-110 "
              />
              <FontAwesomeIcon
                icon={faVideo}
                size="lg"
                className="rounded-full w-[30px] text-[#c785ec] h-[30px] object-cover cursor-pointer duration-300  hover:scale-110 "
              />
              <FontAwesomeIcon
                icon={faSmile}
                size="lg"
                className="rounded-full w-[30px] text-[#c785ec] h-[30px] object-cover cursor-pointer duration-300  hover:scale-110 "
              />
            </div>
            <button
              onClick={() => {
                // handle post action
                console.log("Post content:", form);
                if (validate()) {
                  createPost();
                  handleClose();
                }
              }}
              className="text-white px-4 py-2 bg-[#c785ec] cursor-pointer font-semibold items-center duration-300 hover:scale-110 rounded-3xl  flex justify-center text-center"
            >
              Post
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Post;
