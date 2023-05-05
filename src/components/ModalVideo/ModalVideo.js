import React, { useState, useEffect } from "react";
import ReactPlayer from'react-player'
import {Modal} from 'antd'
import "./ModalVideo.scss";

export const ModalVideo = ({ videoKey, videoPlatform, isOpen, close}) => {
    const [urlVideo, setUrlVideo] = useState(null);
  
    useEffect(() => {
      switch (videoPlatform) {
        case "YouTube":
          setUrlVideo(`https://youtu.be/${videoKey}`);
          break;
        default:
          break;
      }
    }, [videoKey, videoPlatform]);
  
    return (
      <Modal
        className="modal-video"
        open={isOpen}
        centered
        onCancel={close}
        footer={false}
      >
        <ReactPlayer url={urlVideo} controls />
      </Modal>
    );
  }

