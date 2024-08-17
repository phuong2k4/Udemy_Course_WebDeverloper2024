import React from "react";
import ShowInformation from "./display/ShowContact";

export function Data() {
  const contact = [
    {
      name: "Beyonce",
      img_src:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      contact_number: "+123 456 789",
      email: "b@beyonce.com",
    },
    {
      name: "Jack Bauer",
      img_src:
        "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
      contact_number: "+987 654 321",
      email: "jack@nowhere.com",
    },
    {
      name: "Chuck Norris",
      img_src:
        "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
      contact_number: "+567 890 123",
      email: "gmail@chucknorris.com",
    },
  ];

  return <ShowInformation prod={contact} />;
}

export default Data;