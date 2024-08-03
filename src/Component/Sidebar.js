import React from "react";
import {
  Box,
  VStack,
  Button,
  Flex,
  Text,
  Avatar,
  Divider,
} from "@chakra-ui/react";
import {
  FiHome,
  FiFileText,
  FiUsers,
  FiEdit,
  FiBarChart2,
  FiMessageSquare,
  FiGrid,
  FiZap,
  FiEye,
  FiRefreshCw,
  FiSettings,
  FiCreditCard,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";
import { ChevronRightIcon, ChevronUpIcon } from "@chakra-ui/icons";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Box
        w={isOpen ? "250px" : "60px"}
        bg="white"
        h="100vh"
        boxShadow="md"
        position="fixed"
        top="0"
        left="0"
        zIndex="1000"
        transition="width 0.3s"
      >
        <Flex
          align="center"
          mt="6px"
          mb="6px"
          justifyContent={isOpen ? "space-between" : "center"}
        >
          {isOpen && (
            <>
              <Avatar
                backgroundColor="white"
                color="black"
                fontSize="bold"
                border="1px solid #F7F7F7"
                size="sm"
                name="Academy Hub"
                src=""
              />
              <Text fontSize="xl" fontWeight="bold" ml="2">
                Academy Hub
              </Text>
            </>
          )}
          <Flex justifyContent="end">
            <Button
              aria-label="Toggle sidebar"
              onClick={toggleSidebar}
              variant="ghost"
              marginLeft="10px"
              borderRight="2px solid #F7F7F7"
              borderLeft="2px solid #F7F7F7"
              borderRadius="0px"
            >
              {isOpen ? <FiChevronsLeft /> : <FiChevronsRight />}{" "}
            </Button>
          </Flex>
        </Flex>
        <Divider orientation="horizontal" size="lg" />
        <VStack align="start" spacing="3">
          <Button
            leftIcon={<FiHome />}
            variant="ghost"
            w="100%"
            justifyContent={isOpen ? "flex-start" : "center"}
            color="teal"
            backgroundColor="#e6ffe6"
          >
            {isOpen && "Dashboard"}
          </Button>
          <Button
            leftIcon={<FiFileText color="var(--chakra-colors-gray-300)" />}
            variant="ghost"
            w="100%"
            justifyContent="space-between"
            color="black"
          >
            <Flex w="100%" justifyContent="space-between">
              {isOpen && "Content"}
              {isOpen && (
                <ChevronRightIcon color="var(--chakra-colors-gray-300)" />
              )}
            </Flex>
          </Button>
          <Button
            leftIcon={<FiUsers color="var(--chakra-colors-gray-300)" />}
            variant="ghost"
            w="100%"
            justifyContent={isOpen ? "flex-start" : "center"}
            color="black"
          >
            <Flex w="100%" justifyContent="space-between">
              {isOpen && "People"}
              {isOpen && (
                <ChevronRightIcon color="var(--chakra-colors-gray-300)" />
              )}
            </Flex>
          </Button>
          <Button
            leftIcon={<FiEdit color="var(--chakra-colors-gray-300)" />}
            variant="ghost"
            w="100%"
            justifyContent={isOpen ? "flex-start" : "center"}
            color="black"
          >
            <Flex w="100%" justifyContent="space-between">
              {isOpen && "Design"}
              {isOpen && (
                <ChevronRightIcon color="var(--chakra-colors-gray-300)" />
              )}
            </Flex>
          </Button>
          <Button
            leftIcon={<FiBarChart2 color="var(--chakra-colors-gray-300)" />}
            variant="ghost"
            w="100%"
            justifyContent={isOpen ? "flex-start" : "center"}
            color="black"
          >
            <Flex w="100%" justifyContent="space-between">
              {isOpen && "Analytics"}
              {isOpen && (
                <ChevronRightIcon color="var(--chakra-colors-gray-300)" />
              )}
            </Flex>
          </Button>
          <Button
            leftIcon={<FiMessageSquare color="var(--chakra-colors-gray-300)" />}
            variant="ghost"
            w="100%"
            justifyContent={isOpen ? "flex-start" : "center"}
            color="black"
          >
            <Flex w="100%" justifyContent="space-between">
              {isOpen && "Communications"}
              {isOpen && (
                <ChevronRightIcon color="var(--chakra-colors-gray-300)" />
              )}
            </Flex>
          </Button>
          <Button
            leftIcon={<FiGrid color="var(--chakra-colors-gray-300)" />}
            variant="ghost"
            w="100%"
            justifyContent={isOpen ? "flex-start" : "center"}
            color="black"
          >
            <Flex w="100%" justifyContent="space-between">
              {isOpen && "Apps"}
              {isOpen && (
                <ChevronRightIcon color="var(--chakra-colors-gray-300)" />
              )}
            </Flex>
          </Button>
          <Button
            leftIcon={<FiZap color="var(--chakra-colors-gray-300)" />}
            variant="ghost"
            w="100%"
            justifyContent={isOpen ? "flex-start" : "center"}
            color="black"
          >
            <Flex w="100%" justifyContent="space-between">
              {isOpen && "Automation"}
              {isOpen && (
                <ChevronRightIcon color="var(--chakra-colors-gray-300)" />
              )}
            </Flex>
          </Button>
        </VStack>
        <Box mt="8">
          <Text
            textAlign="center"
            fontSize="sm"
            color="gray.500"
            mb="2"
            display={isOpen ? "block" : "none"}
            textTransform="uppercase"
          >
            Your Academy
          </Text>
          <VStack align="start" spacing="3">
            <Button
              leftIcon={<FiEye color="var(--chakra-colors-gray-300)" />}
              variant="ghost"
              w="100%"
              justifyContent={isOpen ? "flex-start" : "center"}
              color="black"
            >
              {isOpen && "Preview School"}
            </Button>
            <Button
              leftIcon={<FiRefreshCw color="var(--chakra-colors-gray-300)" />}
              variant="ghost"
              w="100%"
              justifyContent={isOpen ? "flex-start" : "center"}
              color="black"
            >
              {isOpen && "Switch School"}
            </Button>
            <Button
              leftIcon={<FiSettings color="var(--chakra-colors-gray-300)" />}
              variant="ghost"
              w="100%"
              justifyContent={isOpen ? "flex-start" : "center"}
              color="black"
            >
              {isOpen && "School Settings"}
            </Button>
            <Button
              leftIcon={<FiCreditCard color="var(--chakra-colors-gray-300)" />}
              variant="ghost"
              w="100%"
              justifyContent={isOpen ? "flex-start" : "center"}
              color="black"
            >
              {isOpen && "Billing Portal"}
            </Button>
          </VStack>
        </Box>
        <Divider orientation="horizontal" size="medium" />
        <Flex
          mt="20px"
          align="center"
          justifyContent={isOpen ? "flex-start" : "center"}
        >
          <Avatar size="sm" name="Gregory Sullivan" src="" />

          <Text ml="2" display={isOpen ? "block" : "none"}>
            Gregory Sullivan
          </Text>
          <Flex w="100%" justifyContent="flex-end" mr="8px">
            {<ChevronUpIcon color="var(--chakra-colors-gray-300)" />}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Sidebar;
