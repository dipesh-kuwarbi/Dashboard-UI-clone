// import React from "react";
// import {
//   Box,
//   Flex,
//   Text,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   Badge,
//   Icon,
// } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";
// import { FaFilter } from "react-icons/fa";
// import Sidebar from "./Sidebar";

// const Header = ({ isOpen, setIsOpen }) => {
//   const filterCount = 3;

//   return (
//     <Box padding="12px" borderBottom="1px" borderColor="gray.200">
//       <Flex align="center" justify="space-between">
//         <Flex align="center">
//           <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
//           <Text fontSize="lg" fontWeight="bold" color="#191970">
//             Dashboard
//           </Text>
//         </Flex>
//         <Flex align="center">
//           <Menu>
//             <MenuButton
//               as={Button}
//               variant="outline"
//               borderColor="gray.300"
//               colorScheme="white"
//               rightIcon={<ChevronDownIcon />}
//             >
//               Last Month
//             </MenuButton>
//             <MenuList>
//               <MenuItem>Option 1</MenuItem>
//               <MenuItem>Option 2</MenuItem>
//             </MenuList>
//           </Menu>
//           <Menu>
//             <MenuButton
//               as={Button}
//               ml="12px"
//               variant="outline"
//               borderColor="gray.300"
//               colorScheme="white"
//               rightIcon={
//                 <>
//                   <Badge colorScheme="green" ml="2">
//                     {filterCount}
//                   </Badge>
//                 </>
//               }
//               leftIcon={<Icon as={FaFilter} color="green" />}
//             >
//               Filters
//             </MenuButton>
//             <MenuList>
//               <MenuItem>Option A</MenuItem>
//               <MenuItem>Option B</MenuItem>
//             </MenuList>
//           </Menu>
//           <Button ml="2" colorScheme="blue" color="white">
//             Edit Widgets
//           </Button>
//         </Flex>
//       </Flex>
//     </Box>
//   );
// };

// export default Header;

import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Input,
  Avatar,
  useColorModeValue,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FiSearch, FiBell } from "react-icons/fi";
import { RiAppsFill } from "react-icons/ri";

const Header = () => {
  const bg = useColorModeValue("#2a2b38");

  return (
    <Box bg={bg} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Flex alignItems={"center"}>
          <IconButton
            bg={bg}
            size={"sm"}
            icon={<RiAppsFill color={"7593FE"} size="large" />}
            aria-label={"Open Menu"}
          />
          <InputGroup ml={4} bg="#282B2F" w="200px">
            <InputLeftElement pointerEvents="none">
              <FiSearch />
            </InputLeftElement>
            <Input placeholder="Search..."></Input>
          </InputGroup>
        </Flex>
        <Flex alignItems={"center"}>
          <IconButton
            size={"md"}
            icon={<FiBell />}
            aria-label={"Notifications"}
          />
          <Avatar size={"sm"} ml={4} src={"https://bit.ly/broken-link"} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
