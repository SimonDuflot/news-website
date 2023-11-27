import React from "react";
import styles from "@/styles/Nav.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "@/reducers/search";

export default function Nav() {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    dispatch(setSearchTerm(searchTerm));
  };

  return (
    <div className={styles.navigation}>
      <Link href="/">Home</Link>
      <input
        type="text"
        placeholder="Search...(doesnt work)"
        onChange={handleSearch}
      />

      <Link href="/bookmark">Bookmark</Link>
    </div>
  );
}
