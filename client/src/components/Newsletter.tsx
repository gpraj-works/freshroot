import { Stack, Title, Text, Group, TextInput, Button } from '@mantine/core'

const Newsletter = () => {
  return (
    <Stack align="center" py={10} gap={10}>
      <Title order={1}>Get connected always!</Title>
      <Text>Subscribe to get the latest updates, offers, and news delivered to your inbox.</Text>
      <Group gap="sm" my={26}>
        <TextInput placeholder="Enter your email" radius="md" size="md" w={300} />
        <Button radius="md" size="md">
          Subscribe
        </Button>
      </Group>
    </Stack>
  )
}

export default Newsletter
