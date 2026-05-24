"use client";

import { useEffect } from "react";

export default function HubSpotChat() {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "hs-script-loader";
    script.src = "//js-na2.hs-scripts.com/246165066.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.getElementById("hs-script-loader")?.remove();
    };
  }, []);

  return null;
}
