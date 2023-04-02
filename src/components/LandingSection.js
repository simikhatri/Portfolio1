import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Simran!";
const bio1 = "A Wed developer";
const bio2 = "specialised in React";

 //Implement the UI for the LandingSection component according to the instructions.
 //Use a combination of Avatar, Heading and VStack components.

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
 <VStack
   justifyContent="center"
   alignItems="center"
   isDarkBackground
   backgroundColor="#2A4365"
 >
   <Avatar size="2xl" name="Simi" src="https://i.pravatar.cc/150?img=1" />
   <Heading size="2xl" as="h1">
     {greeting}
   </Heading>
   <VStack spacing={4} align="center">
     <Heading size="lg" as="h2">
      {bio1}
     </Heading>
     <Heading size="lg" as="h2">
       {bio2}
     </Heading>
   </VStack>
 </VStack>
  </FullScreenSection>
);

export default LandingSection;
