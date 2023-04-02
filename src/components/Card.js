import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
 //Implement the UI for the Card component according to the instructions.
 //You should be able to implement the component with the elements imported above.
 //Feel free to import other UI components from Chakra UI if you wish to.
 //You can also import additional icons from Font Awesome.
  
  return (
  <VStack
   backgroundColor="white"
   padding="24px"
   width="100%"
   maxWidth="320px"
   borderRadius="8px"
   boxShadow="0px 4px 8px rgba(0, 0, 0, 0.08)"
   spacing="16px"
 >
   <Image src={imageSrc} />
   <VStack spacing="8px" alignItems="flex-start">
     <Heading as="h2" size="md">
       {title}
     </Heading>
     <Text color="gray.600" fontSize="sm">
       {description}
     </Text>
   </VStack>
   <HStack justifyContent="flex-end" width="100%">
     <Text color="blue.500" fontSize="sm">
       Read more
     </Text>
     <FontAwesomeIcon icon={faArrowRight} size="1x" color="#3182CE" />
   </HStack>
 </VStack>);
};

export default Card;
