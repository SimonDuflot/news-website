import React from "react";
import { removeBookmark } from "@/reducers/bookmarking";
import { selectBookmarking } from "@/reducers/bookmarking";
import styles from "@/styles/Bookmark.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import Article from "./Article";
import { useSelector } from "react-redux";

export default function Bookmark() {
  let bookmark = useSelector((state) => state.bookmarking.value.favorites);
  console.log("===============BOOKMARK==============");
  console.log(bookmark);
  console.log("=====================================");

  const handleAddBookmark = (bookmark) => {
    console.log("===============ADDED==============");
    console.log(bookmark);
    console.log("=====================================");
  };

  const handleRemoveBookmark = (bookmark) => {
    dispatch(removeBookmark(props.title));
    console.log("===============REMOVED==============");
    console.log(bookmark);
    console.log("=====================================");
  };
  const bookmarkedArticles = bookmark.map((data, i) => {
    return <Article key={i} {...data} />;
  });
  return (
    <div>
      <h1>{bookmarkedArticles}</h1>
    </div>
  );
}
