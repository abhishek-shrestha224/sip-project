import { Title } from "@mantine/core";
import React from "react";

const Greeting = () => {
  const getCurrentTime = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  return <Title order={3}>{getCurrentTime()}</Title>;
};

export default Greeting;
