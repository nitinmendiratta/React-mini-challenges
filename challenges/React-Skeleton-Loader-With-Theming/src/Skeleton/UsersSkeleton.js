import React, { useContext } from "react";
import { UsersContext } from "../Context";
import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";

export default function UsersSkeleton() {
  const { theme, toggleTheme } = useContext(UsersContext);
  return (
    <div className={`skeleton-wrapper ${theme}`}>
      <div className="user-skeleton">
        <div>
          <SkeletonElement type="avatar" />
        </div>
        <div>
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
}
