import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Box, Flex, HStack, Text, useTheme } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const data = [
  { name: "9", uv: 3000 },
  { name: "10", uv: 5000 },
  { name: "11", uv: 2000 },
  { name: "12", uv: 2780 },
  { name: "13", uv: 1890 },
  { name: "14", uv: 2390 },
  { name: "15", uv: 3490 },
  { name: "16", uv: 4000 },
  { name: "17", uv: 3000 },
  { name: "18", uv: 5000 },
  { name: "19", uv: 2000 },
  { name: "20", uv: 2780 },
  { name: "21", uv: 1890 },
  { name: "22", uv: 2390 },
  { name: "23", uv: 3490 },
  { name: "24", uv: 4000 },
  { name: "25", uv: 3000 },
  { name: "26", uv: 5000 },
  { name: "27", uv: 2000 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Box bg="gray.700" p={2} borderRadius="md" color="white">
        <Text>{`Time: ${label}`}</Text>
        <Text>{`Value: ${payload[0].value}`}</Text>
      </Box>
    );
  }
  return null;
};

const ActivityChart = () => {
  const theme = useTheme();
  const MotionBox = motion(Box);

  return (
    <MotionBox
      bg="brand.800"
      p={1}
      borderRadius="md"
      boxShadow="lg"
      borderColor={theme.colors.gray[700]}
      whileHover={{ scale: 1.012 }}
      transition={{ type: "spring", stiffness: 300 }}
      borderWidth="1px"
    >
      <HStack justifyContent="space-between" w="100%">
        <Text fontSize="xl" mb={4} color="white">
          Activity
        </Text>
        <Flex dir="row" bgColor="gray.900" p={2} borderRadius={"md"}>
          <Text fontSize="xs" color="white">
            Weekly
          </Text>
          <ChevronDownIcon alignItems={"end"} ml={2} color="white" />
        </Flex>
      </HStack>

      <ResponsiveContainer width="100%" height={160}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#2a2b38"
          />
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(42, 43, 56, 0.2)" }}
          />
          <Bar dataKey="uv" fill="#7593FE" radius={10} barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </MotionBox>
  );
};

export default ActivityChart;
