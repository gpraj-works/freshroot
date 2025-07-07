import { createTheme, } from "@mantine/core"
import { type MantineColorsTuple } from "@mantine/core"

const fresh: MantineColorsTuple = [
  '#ecfaec',
  '#deefde',
  '#bedcbe',
  '#9bc99b',
  '#7db87d',
  '#6aae6a',
  '#57a157',
  '#4f944f',
  '#438344',
  '#357237'
]

const theme = createTheme({
  fontFamily: 'Amaranth, sans-serif',
  white: "#FFFDF6",
  black: "#2C3930",
  colors: {
    fresh,
  },
  primaryColor: "fresh",
  primaryShade: 8
})

export default theme