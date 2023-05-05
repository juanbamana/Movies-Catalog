import React, { useState, useEffect, memo } from "react";
import ReactPlayer from'react-player'
import {Modal} from 'antd'
import "./ModalVideo.scss";
import {PropTypes} from 'prop-types';

 export const ModalVideo = memo(({ videoKey, videoPlatform, isOpen, close}) => {
    const [urlVideo, setUrlVideo] = useState(null);
  
    useEffect(() => {
      const videoPlatformUrls = {
        "YouTube": `https://youtu.be/${videoKey}`,
        // add more video platforms here
      };
      setUrlVideo(videoPlatformUrls[videoPlatform]);
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
  })

  ModalVideo.propTypes = {
    videoKey: PropTypes.string.isRequired,
    videoPlatform: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
  };

