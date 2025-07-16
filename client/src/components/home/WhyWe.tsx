import { Box, Flex, Grid, GridCol, Image, Stack, Title, Text } from '@mantine/core'
import {
  WhyWeBanner,
  FastDeliveryIcon,
  SafeParcelIcon,
  CustomerCareIcon,
  DoorDeliveryIcon,
} from '../../assets'

const WhyWe = () => {
  return (
    <Box my={45} bg="#d0fae5" bdrs={5} pb={0}>
      <Grid align="center" px={20}>
        <GridCol span={{ base: 12, lg: 4 }} pb={0} pt={25}>
          <Box w={{ base: 260, lg: 360 }} mx="auto">
            <Image src={WhyWeBanner} width="100%" />
          </Box>
        </GridCol>
        <GridCol span={{ base: 12, lg: 8 }} p={20}>
          <Title order={1} mb={30} ta={{ base: 'center', lg: 'left' }} fz={35}>
            Freshroot follow's
          </Title>
          <Grid gutter={40}>
            <GridCol span={{ base: 12, lg: 6 }}>
              <Flex gap={20}>
                <Box w={{ base: 225, lg: 120 }}>
                  <Image src={FastDeliveryIcon} width="100%" />
                </Box>
                <Stack gap={5}>
                  <Title order={4}>Fast Delivery</Title>
                  <Text>
                    Quick and reliable delivery that gets your order to you right on time.
                  </Text>
                </Stack>
              </Flex>
            </GridCol>
            <GridCol span={{ base: 12, lg: 6 }}>
              <Flex gap={20}>
                <Box w={{ base: 180, lg: 100 }}>
                  <Image src={SafeParcelIcon} width="100%" />
                </Box>
                <Stack gap={5}>
                  <Title order={4}>Safe Parcel</Title>
                  <Text>Every package is carefully packed and securely handled.</Text>
                </Stack>
              </Flex>
            </GridCol>
            <GridCol span={{ base: 12, lg: 6 }}>
              <Flex gap={20}>
                <Box w={{ base: 180, lg: 100 }}>
                  <Image src={DoorDeliveryIcon} width="100%" />
                </Box>
                <Stack gap={5}>
                  <Title order={4}>Doorstep Delivery</Title>
                  <Text>We bring your order straight to your doorstep, hassle-free.</Text>
                </Stack>
              </Flex>
            </GridCol>
            <GridCol span={{ base: 12, lg: 6 }}>
              <Flex gap={20}>
                <Box w={{ base: 180, lg: 100 }}>
                  <Image src={CustomerCareIcon} width="100%" />
                </Box>
                <Stack gap={5}>
                  <Title order={4}>Customer Support</Title>
                  <Text>Friendly support team always ready to help when you need it.</Text>
                </Stack>
              </Flex>
            </GridCol>
          </Grid>
        </GridCol>
      </Grid>
    </Box>
  )
}

export default WhyWe
