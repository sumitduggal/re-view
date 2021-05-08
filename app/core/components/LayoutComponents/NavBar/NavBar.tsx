import React from "react"
import { Box, HStack, Link } from "@chakra-ui/layout"
import { Container } from "@chakra-ui/react"
import { Link as BlitzLink } from "blitz"

export const NavBar = () => {
  return (
    <Box as="nav" width="100%" bgColor="orange.400" paddingY="4">
      <Container maxW="container.xl">
        <HStack>
          <Box
            paddingX="1"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}
          >
            <Link as={BlitzLink} href="/">
              Brand
            </Link>
          </Box>
        </HStack>
      </Container>
    </Box>
  )
}
