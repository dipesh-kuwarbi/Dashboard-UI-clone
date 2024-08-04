import React from "react";
import {
  Box,
  Text,
  Avatar,
  Stack,
  HStack,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const feedbacks = [
  {
    name: "Jenny Wilson",
    avatar: "https://bit.ly/dan-abramov",
    rating: 4,
    feedback:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
  },
  {
    name: "Dianne Russell",
    avatar: "https://bit.ly/code-beast",
    rating: 5,
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
  },
  {
    name: "Devon Lane",
    avatar: "https://bit.ly/prosper-baba",
    rating: 4,
    feedback:
      "Normally wings are wings, but theirs are lean meaty and tender, and...",
  },
];

const CustomerFeedback = () => {
  const MotionBox = motion(Box);
  return (
    <Box p={1} bg="brand.800" borderRadius="md" maxW="md">
      <Text fontSize="xl" fontWeight="bold" mb={1}>
        Customer's Feedback
      </Text>
      <Box maxH={280} overflowY="scroll">
        {feedbacks.map((feedback, index) => (
          <MotionBox
            key={index}
            mb={1}
            p={2}
            bg="transparent"
            borderRadius="md"
            whileHover={{ scale: 1.01 }}
            _hover={{ bg: "brand.600" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <HStack alignItems="flex-start" mb={2}>
              <Avatar src={feedback.avatar} name={feedback.name} />
              <VStack align="flex-start" spacing={0}>
                <Text fontWeight="bold" fontSize={"medium"}>
                  {feedback.name}
                </Text>
                <HStack spacing={1}>
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        h="16px"
                        w="16px"
                        color={i < feedback.rating ? "yellow.500" : "gray.500"}
                      />
                    ))}
                </HStack>
              </VStack>
            </HStack>
            <Text fontSize={"x-small"} color="gray.400" mb="8px">
              {feedback.feedback}
            </Text>
            <Divider />
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
};

export default CustomerFeedback;
