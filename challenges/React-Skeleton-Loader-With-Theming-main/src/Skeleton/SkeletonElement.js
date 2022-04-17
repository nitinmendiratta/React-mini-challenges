import React from "react";
import "./Skeleton.css";

// type signify the type of skeleton component we want like avatar, thumbnail, text, circle etc
export default function SkeletonElement({ type }) {
  return <div className={`skeleton-element ${type}`}></div>;
}
