import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridCol,
  Image,
  Paper,
  TextInput,
  Title
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { zod4Resolver } from 'mantine-form-zod-resolver'
import { z } from 'zod/v4'
import DeliveryAddressImage from '../assets/delivery-address.svg'

const validationSchema = z.object({
  email: z.email({ message: 'Please enter valid email' }),
  password: z.string().min(8, { message: 'Please enter valid password' }),
})

type AddressProps = {
  firstName: string
  lastName: string
  contactEmail: string
  street: string
  city: string
  state: string
  zipcode: string
  mobileNumber: string
}

const DeliveryAddress = () => {
  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      contactEmail: '',
      street: '',
      city: '',
      state: '',
      zipcode: '',
      mobileNumber: '',
    },
    validate: zod4Resolver(validationSchema),
  })

  const handleSubmit = (values: AddressProps) => {
    console.log('Submitted', values)
  }

  return (
    <Container size="xl" my={20} py={30} mih={450}>
      <Grid align="center">
        <GridCol span={7}>
          <Box p={30}>
            <Image src={DeliveryAddressImage} />
          </Box>
        </GridCol>
        <GridCol span={5} px={30}>
          <Paper shadow="md" radius="md" p={30}>
            <Flex gap={5} mb={30}>
              <Title order={2} c="gray.8">
                Add Delivery
              </Title>
              <Title order={2} c="fresh">
                Address
              </Title>
            </Flex>
            <Box component="form" onSubmit={form.onSubmit(handleSubmit)}>
              <Grid>
                <GridCol span={6}>
                  <TextInput
                    placeholder="First Name"
                    key={form.key('firstName')}
                    {...form.getInputProps('firstName')}
                  />
                </GridCol>
                <GridCol span={6}>
                  <TextInput
                    placeholder="Last Name"
                    key={form.key('lastName')}
                    {...form.getInputProps('lastName')}
                  />
                </GridCol>
                <GridCol span={12}>
                  <TextInput
                    placeholder="Contact Email"
                    key={form.key('contactEmail')}
                    {...form.getInputProps('contactEmail')}
                  />
                </GridCol>
                <GridCol span={12}>
                  <TextInput
                    placeholder="Street"
                    key={form.key('street')}
                    {...form.getInputProps('street')}
                  />
                </GridCol>
                <GridCol span={6}>
                  <TextInput
                    placeholder="City"
                    key={form.key('city')}
                    {...form.getInputProps('city')}
                  />
                </GridCol>
                <GridCol span={6}>
                  <TextInput
                    placeholder="State"
                    key={form.key('state')}
                    {...form.getInputProps('state')}
                  />
                </GridCol>
                <GridCol span={6}>
                  <TextInput
                    placeholder="Zipcode"
                    key={form.key('zipcode')}
                    {...form.getInputProps('zipcode')}
                  />
                </GridCol>
                <GridCol span={6}>
                  <TextInput
                    placeholder="Mobile Number"
                    key={form.key('mobileNumber')}
                    {...form.getInputProps('mobileNumber')}
                  />
                </GridCol>
                <GridCol span={12}>
                  <Button type='submit' fullWidth>Save Address</Button>
                </GridCol>
              </Grid>
            </Box>
          </Paper>
        </GridCol>
      </Grid>
    </Container>
  )
}

export default DeliveryAddress
