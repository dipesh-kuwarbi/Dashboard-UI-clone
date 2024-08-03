import React, { Fragment } from "react";
import { Grid, GridItem, Box, Text, IconButton, Flex } from "@chakra-ui/react";
import { FaCheck, FaJediOrder, FaPlus, FaShoppingBasket } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { TbTransactionDollar } from "react-icons/tb";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

const Dashboard = () => {
  const orderDetails = [
    {
      label: "Total Orders",
      number: 75,
      icon: <FaShoppingBasket size={20} />,
      absoluteIcon: <FaPlus size={6} color="white" />,
      bgColor: "#2D316B",
      color: "#4662F1",
      isPositive: true,
    },
    {
      label: "Total Delivered",
      number: 70,
      icon: <FaBagShopping size={20} />,
      absoluteIcon: <FaCheck size={6} color="white" />,
      bgColor: "#155244",
      color: "#00C686",
    },
    {
      label: "Total Cancelled",
      number: 5,
      icon: <FaBagShopping size={20} />,
      absoluteIcon: <MdCancel size={6} color="white" />,
      isPositive: true,
      bgColor: "#5F3338",
      color: "#F45D5B",
    },
    {
      label: "Total Revenue",
      number: "$12k",
      icon: <TbTransactionDollar size={20} />,
      bgColor: "#5D2B4A",
      color: "#EC6BB3",
    },
  ];

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 2fr", lg: "repeat(3, 1fr)" }}
      gap={3}
      p={3}
      color="white"
    >
      <GridItem colSpan={{ base: 1, lg: 2 }} bg="brand.900" p={4}>
        <Text fontSize="xl" fontWeight="bold" width="100%">
          Dashboard
        </Text>
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={3}
          mt={2}
        >
          {orderDetails.map((detail) => (
            <Box
              bg="brand.800"
              p={4}
              borderRadius="md"
              position="relative"
              key={detail.label}
            >
              <IconButton
                bg={detail.bgColor}
                color={detail.color}
                size={"sm"}
                cursor="inherit"
                icon={detail.icon}
                sx={{ _hover: { bgColor: "none" } }}
              />
              {detail.absoluteIcon && (
                <Box position="absolute" top={9} left={10} bg={detail.bgColor}>
                  {detail.absoluteIcon}
                </Box>
              )}
              <Text fontsize="xs" mb={4}>
                {detail.label}
              </Text>
              <Flex
                dir="row"
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text fontSize="2xl" fontWeight={800}>
                  {detail.number}
                </Text>
                <Flex dir="row" gap={2} alignItems={"start"}>
                  {detail.isPositive ? (
                    <BiSolidUpArrow color={"#00C686"} />
                  ) : (
                    <BiSolidDownArrow color={"#F45D5B"} />
                  )}

                  <Text
                    fontSize={"12px"}
                    color={detail.isPositive ? "#00C686" : "#F45D5B"}
                  >
                    3%
                  </Text>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Grid>
      </GridItem>

      <GridItem
        colSpan={{ base: 1, lg: 1 }}
        bg="brand.900"
        p={4}
        alignContent={"end"}
      >
        <Box bg="brand.800" p={4} borderRadius="md">
          <Text>Net Profit</Text>
          <Text fontSize="2xl">$6759.25</Text>
        </Box>
      </GridItem>

      <GridItem colSpan={{ base: 1, lg: 2 }} bg="brand.900" p={4}>
        <Text fontSize="xl">Activity</Text>
        <Box bg="brand.800" p={4} borderRadius="md" mt={2}>
          {/* Activity Graph goes here */}
        </Box>
      </GridItem>

      <GridItem colSpan={{ base: 1, lg: 1 }} bg="brand.900" p={4}>
        <Text fontSize="xl">Recent Orders</Text>
        <Box bg="brand.800" p={4} borderRadius="md" mt={2}>
          {/* Recent Orders list goes here */}
        </Box>
      </GridItem>

      <GridItem colSpan={{ base: 1, lg: 2 }} bg="brand.900" p={4}>
        <Text fontSize="xl">Customer Feedback</Text>
        <Box bg="brand.800" p={4} borderRadius="md" mt={2}>
          {/* Customer Feedback goes here */}
        </Box>
      </GridItem>

      <GridItem colSpan={{ base: 1, lg: 1 }} bg="brand.900" p={4}>
        <Text fontSize="xl">Recent Orders</Text>
        <Box bg="brand.800" p={4} borderRadius="md" mt={2}>
          {/* Recent Orders list goes here */}
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
