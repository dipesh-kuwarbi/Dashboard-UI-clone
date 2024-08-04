import React from "react";
import {
  Grid,
  GridItem,
  Box,
  Text,
  IconButton,
  Flex,
  CircularProgress,
  CircularProgressLabel,
  Container,
} from "@chakra-ui/react";
import { FaCheck, FaPlus, FaShoppingBasket } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { TbTargetArrow, TbTransactionDollar } from "react-icons/tb";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import ActivityGraph from "./ActivityGraph";
import { motion } from "framer-motion";
import CustomerFeedback from "./CustomerFeedback";
import MenuComponent from "./MenuComponent";
import RecentOrders from "./RecentOrder";

const Dashboard = () => {
  const MotionBox = motion(Box);
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
      p={1}
      color="white"
    >
      <GridItem colSpan={{ base: 1, lg: 2 }} bg="brand.900" p={2}>
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
          mt={1}
        >
          {orderDetails.map((detail) => (
            <MotionBox
              bg="brand.800"
              p={2}
              borderRadius="md"
              position="relative"
              key={detail.label}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <IconButton
                bg={detail.bgColor}
                color={detail.color}
                size="sm"
                cursor="inherit"
                icon={detail.icon}
                sx={{ _hover: { bgColor: "none", scale: 1.2 } }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              {detail.absoluteIcon && (
                <Box position="absolute" top={8} left={8} bg={detail.bgColor}>
                  {detail.absoluteIcon}
                </Box>
              )}
              <Text fontSize="xs" mb={4}>
                {detail.label}
              </Text>
              <Flex
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text fontSize="2xl" fontWeight={800}>
                  {detail.number}
                </Text>
                <Flex direction="row" gap={2} alignItems="start">
                  {detail.isPositive ? (
                    <BiSolidUpArrow color="#00C686" />
                  ) : (
                    <BiSolidDownArrow color="#F45D5B" />
                  )}
                  <Text
                    fontSize="12px"
                    color={detail.isPositive ? "#00C686" : "#F45D5B"}
                  >
                    3%
                  </Text>
                </Flex>
              </Flex>
            </MotionBox>
          ))}
        </Grid>
      </GridItem>

      <GridItem colSpan={{ base: 1, lg: 1 }} bg="brand.900" p={2} mt={1}>
        <Text fontSize="xl" fontWeight="bold" visibility={"hidden"}>
          Dashboard
        </Text>
        <MotionBox
          display={"flex"}
          direction="column"
          bg="brand.800"
          p={2}
          borderRadius="md"
          justifyContent={"space-between"}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Flex direction="column">
            <Text fontSize="12px">Net Profit</Text>
            <Text fontSize="2xl" fontWeight={900} mt={3}>
              $ 6759.25
            </Text>
            <Flex direction="row" gap={2} mt={4} alignItems="start">
              <BiSolidUpArrow color="#00C686" />
              <Text fontSize="12px" color={"#00C686"}>
                3%
              </Text>
            </Flex>
          </Flex>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            mr={8}
          >
            <CircularProgress
              value={70}
              trackColor="gray.700"
              color="brand.500"
              size="75px"
              thickness="15px"
            >
              <CircularProgressLabel textColor="white" fontSize="xx-small">
                70% completed
              </CircularProgressLabel>
            </CircularProgress>
            <Text fontSize="12px" color="gray.100" mt={2}>
              *This value has been rounded off.
            </Text>
          </Flex>
        </MotionBox>
      </GridItem>

      <GridItem colSpan={{ base: 1, lg: 2 }} bg="brand.900" p={2}>
        <Box bg="brand.800" p={1} borderRadius="md">
          <ActivityGraph />
        </Box>
      </GridItem>

      <GridItem colSpan={{ base: 1, lg: 1 }} bg="brand.900" p={2}>
        <Box bg="brand.800" p={1} borderRadius="md" h="100%">
          <MenuComponent />
        </Box>
      </GridItem>

      <GridItem colSpan={{ base: 1, lg: 2 }} bg="brand.900" p={2}>
        <Box bg="brand.800" p={1} borderRadius="md">
          <RecentOrders />
        </Box>
      </GridItem>

      <GridItem colSpan={{ base: 1, lg: 1 }} bg="brand.900" p={2}>
        <Box bg="brand.800" p={1} borderRadius="md">
          <CustomerFeedback />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
