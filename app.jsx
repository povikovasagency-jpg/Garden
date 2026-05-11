/* global React, ReactDOM */

const { useState, useEffect, useRef } = React;
const COPY = window.GARDEN_COPY;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "buttonShape": "pill"
} /*EDITMODE-END*/;

const GALLERY_PHOTOS = [
  "DSC05208.jpeg",
  "DSC05252.jpeg",
  "DSC05267.jpeg",
  "DSC09472.jpeg",
  "DSC09703.jpeg",
];

const DISH_PHOTOS = [
  "DSC09798.jpeg",
  "DSC09802.jpeg",
  "DSC09805.jpeg",
  "20260126_122336.jpeg",
  "20260126_132857.jpeg",
  "20260126_133814.jpeg",
];

const DESSERT_PHOTOS = [
  "DSC09784.jpeg",
  "20260126_132700.jpeg",
  "DSC09472.jpeg",
  "DSC05267.jpeg",
];

function Placeholder({ label, variant = "", src }) {
  const style = src
    ? { backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "center center" }
    : { backgroundSize: "cover", backgroundPosition: "center center" };
  return (
    <div className={"placeholder " + (variant ? "placeholder--" + variant : "")} style={style}>
      {!src && <span className="placeholder__label">{label}</span>}
    </div>
  );
}
