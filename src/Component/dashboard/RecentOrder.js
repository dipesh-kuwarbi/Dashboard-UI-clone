import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Flex,
  HStack,
  VStack,
  Avatar,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const tableDetails = [
  {
    name: "Jenny Wilson",
    avatar: "https://bit.ly/dan-abramov",
    orderNo: 41232134,
    amount: "$124.00",
    status: "Delivered",
  },
  {
    name: "Dianne Russell",
    avatar: "https://bit.ly/code-beast",
    orderNo: 41232134,
    amount: "$344.00",
    status: "Delivered",
  },
  {
    name: "Devon Lane",
    avatar: "https://bit.ly/prosper-baba",
    orderNo: 41232134,
    amount: "$124.00",
    status: "Cancelled",
  },
  {
    name: "Jenny Wilson",
    avatar: "https://bit.ly/dan-abramov",
    orderNo: 78932134,
    amount: "$24.00",
    status: "Pending",
  },
  {
    name: "Dianne Russell",
    avatar: "https://bit.ly/code-beast",
    orderNo: 25932134,
    amount: "$284.00",
    status: "Delivered",
  },
  {
    name: "Devon Lane",
    avatar: "https://bit.ly/prosper-baba",
    orderNo: 56732134,
    amount: "$284.00",
    status: "Delivered",
  },
];

const RecentOrders = () => {
  const MotionFlex = motion(Flex);
  const MotionHstack = motion(HStack);
  return (
    <Box mb="4" boxShadow="md" borderRadius="md" bg="brand.800">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th colSpan={4} borderColor="brand.800">
              <Flex justify="space-between" align="center">
                <Text fontSize="large" fontWeight="bold" color="white">
                  Recent Orders
                </Text>
              </Flex>
            </Th>
          </Tr>
        </Thead>
      </Table>
      <Box maxH="265px" overflowY="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color="white">Customer</Th>
              <Th color="white">Order No.</Th>
              <Th color="white">Amount</Th>
              <Th color="white">Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableDetails.map((detail, index) => (
              <Tr key={index}>
                <Td>
                  <MotionHstack
                    alignItems="center"
                    whileHover={{ scale: 1.05, opacity: 1.5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Avatar
                      src={detail.avatar}
                      name={detail.name}
                      size={"sm"}
                    />
                    <Text fontWeight="bold" fontSize={"small"} color="gray.200">
                      {detail.name}
                    </Text>
                  </MotionHstack>
                </Td>
                <Td justifyContent="start">
                  <Text
                    align="start"
                    fontWeight="bold"
                    fontSize={"small"}
                    color="gray.200"
                  >
                    {detail.orderNo}
                  </Text>
                </Td>
                <Td>
                  <Text fontWeight="bold" fontSize={"small"} color="gray.200">
                    {detail.amount}
                  </Text>
                </Td>
                <Td>
                  <MotionFlex
                    alignItems="center"
                    justifyContent="center"
                    p={1}
                    borderRadius="25px"
                    bg={
                      detail.status === "Delivered"
                        ? "green.800"
                        : detail.status === "Cancelled"
                        ? "red.800"
                        : "yellow.800"
                    }
                    whileHover={{ scale: 1.05, opacity: 1.5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Text
                      fontWeight="bold"
                      fontSize={"small"}
                      color={
                        detail.status === "Delivered"
                          ? "green.400"
                          : detail.status === "Cancelled"
                          ? "red.400"
                          : "yellow.400"
                      }
                      _hover={{
                        color:
                          detail.status === "Delivered"
                            ? "green.200"
                            : detail.status === "Cancelled"
                            ? "red.200"
                            : "yellow.200",
                      }}
                    >
                      {detail.status}
                    </Text>
                  </MotionFlex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default RecentOrders;
