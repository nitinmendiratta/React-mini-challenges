import React, { useContext } from "react";
import { UsersContext } from "../Context";
import SkeletonElement from "../Skeleton/SkeletonElement";
import Shimmer from "../Skeleton/Shimmer";

export default function SkeletonArticle() {
  const { theme, toggleTheme } = useContext(UsersContext);

  return (
    <div className={`skeleton-wrapper ${theme}`}>
      <div className="article-skeleton">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
      <Shimmer />
    </div>
  );
}
