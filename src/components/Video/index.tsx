import React from "react";
import ReactPlayer from 'react-player'
import styles from './style.module.css'

interface Props {
    url: string
}

export default function Video({url} : Props): JSX.Element {
  return (
    <div className={styles.videoContainer}>
      <ReactPlayer width="100%" height="auto" controls url={url} />
    </div>
  );
}
