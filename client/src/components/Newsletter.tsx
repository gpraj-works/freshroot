import { Stack, Title, Text, Group, TextInput, Button } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

const Newsletter = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <Stack
      {...(isMobile ? { align: 'flex-start' } : { align: 'center' })}
      ta={{ base: 'left', lg: 'center' }}
      py={10}
      gap={10}
    >
      <Title order={1}>Get connected always!</Title>
      <Text>Subscribe to get the latest updates, offers, and news delivered to your inbox.</Text>
      <Group gap="sm" my={{ base: 10, lg: 26 }}>
        <TextInput placeholder="Enter your email" radius="md" size="md" w={300} />
        <Button radius="md" size="md">
          Subscribe
        </Button>
      </Group>
    </Stack>
  )
}

export default Newsletter
