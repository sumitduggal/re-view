import { ReactNode } from "react"
import { Head } from "blitz"
import { VStack } from "@chakra-ui/layout"
import { NavBar } from "../components/LayoutComponents/NavBar"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "re-view"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack>
        <NavBar />
        {children}
      </VStack>
    </>
  )
}

export default Layout
