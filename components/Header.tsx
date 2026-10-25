import { Container, Text } from '@mantine/core'
import classes from '@/styles/Header.module.css'

export default function Header() {
  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Text size="xl" fw={700}>
          eth0.bond
        </Text>
      </Container>
    </header>
  )
}
