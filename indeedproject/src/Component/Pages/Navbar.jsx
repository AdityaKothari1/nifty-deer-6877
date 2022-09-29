import { Box,Flex,Spacer,Text,Divider } from '@chakra-ui/react'
import React from 'react'
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import {CgProfile} from 'react-icons/cg'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <Box m={5} p={1}>
        <Box m={5} >
          <Flex gap={5}>
            <Box w={100}>
           <img src="data:image/png;base64,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"  />
           </Box>
           <Box w={50} m={-1}>
           <img src="https://d3fw5vlhllyvee.cloudfront.net/dist/header/ukraine_support.7ad2b5d444bc427dbc5d.png" alt=""  />
           </Box>
           <Box py={4}>
            <Text>
              Find Jobs
            </Text>
           </Box>
           <Box  py={4}>
            <Text>
              <Link to='/companyreview'>Company reviews</Link>
            </Text>
           </Box>
           <Box  py={4}>
            <Text>
              <Link to='/salary'> Salary Guide</Link>
            </Text>
           </Box>
           <Spacer/>
           <Box  py={4} >
             <BsFillChatLeftTextFill/>
           </Box>
           <Box  py={4}>
            <FaBell/>
           </Box>
           <Box  py={4}>
            <CgProfile/>
           </Box>
           <Divider orientation='vertical' h={15}/>
           <Box  py={4}>
           <Text>
            Employers / PostJobs
           </Text>
           </Box>
         </Flex>
         <Divider/>
         </Box>
        </Box>
    </div>
  )
}
