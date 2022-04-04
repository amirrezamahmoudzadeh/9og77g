import { useRouter } from "next/router";
import React, { useEffect } from "react";
import * as rdd from "react-device-detect";

function Index() {
  const url = useRouter();

  useEffect(() => {
    if (rdd.isIOS) {
      url.push("https://sibapp.com/applications/Daran");
    } else {
      url.push(
        "https://play.google.com/store/apps/details?id=com.daraninvest.daran.b2c&hl=fa&referrer=utm_source%3Dorganic%26utm_medium%3Dlanding"
      );
    }
  }, []);

  return <></>;
}

export default Index;
