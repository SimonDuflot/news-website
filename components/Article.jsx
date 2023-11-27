import React from "react";
import Image from "next/image";
import styles from "@/styles/Article.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import bookmarking from "@/reducers/bookmarking";
import { addBookmark, removeBookmark } from "@/reducers/bookmarking";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export default function Article(props) {
  const dispatch = useDispatch();
  const { author, title, description, originUrl, origin, image, time } = props;

  const handleAddBookmark = () => {
    dispatch(addBookmark(props));
    console.log("===============ADDED==============");
    console.log(addBookmark(props));
    console.log("=====================================");
  };
  const handleRemoveBookmark = (bookmark) => {
    dispatch(removeBookmark(props.title));
    console.log("===============REMOVED==============");
    console.log(bookmark);
    console.log("=====================================");
  };

  ////////////////////////////SEARCH//////////////////////////////
  const searchTerm = useSelector((state) => state.search);
  ////////////////////////////////////////////////////////////////////
  const dateFormated = new Date(time)
    .toUTCString()
    .split(" ")
    .toSpliced(4, 2)
    .join(" ");
  // const finalDate = dateFormated.split(" ").toSpliced(4, 2);

  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleClickBookmark = () => {
    setIsBookmarked(!isBookmarked);
    if (!isBookmarked) {
      handleAddBookmark();
    } else {
      handleRemoveBookmark();
    }
  };

  const backgroundColorDiv = isBookmarked
    ? { backgroundColor: "#9d1a31" }
    : { backgroundColor: "white" };

  return (
    <div className={styles.card_container}>
      <div className={styles.favicon} style={backgroundColorDiv}>
        <FontAwesomeIcon
          icon={faBookmark}
          className={styles.bookmark}
          onClick={() => {
            handleClickBookmark();
          }}
        />
      </div>
      <div className={styles.img_container}>
        <img src={image} alt="picture" />
      </div>
      <div className={styles.bottom_container}>
        <div className={styles.article_top}>
          <p>By: {author} </p>
          <p className={styles.published_at}>{dateFormated}</p>
        </div>
        <div className={styles.article_main}>
          <h3 className={styles.title}>{title}</h3>
          <p>{description}</p>
        </div>
        <div className={styles.article_bottom}>
          <p>{origin}</p>
          <button>
            <a href={originUrl}>Go to page </a>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
