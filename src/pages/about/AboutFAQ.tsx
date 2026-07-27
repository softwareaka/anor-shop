import { Accordion, Container, Stack, Text, Title } from '@mantine/core'

export const AboutFAQ = () => {
  return (
    <Container size="1300" py={80}>
      <Stack gap={40}>
        <Title order={2} ta="center" size={48}>
          Top Car Rental Questions
        </Title>

        <Accordion variant="separated" radius="md" chevronPosition="right">
          <Accordion.Item value="item-1">
            <Accordion.Control fw={700}>How does it works?</Accordion.Control>

            <Accordion.Panel>
              <Text c="dimmed">
                Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor
                cursus turpis nibh placerat massa. Fermentum urna ut at et in.
                Turpis aliquet cras hendrerit enim condimentum. Condimentum
                interdum risus bibendum urna. Augue aliquet varius faucibus ut
                integer tristique ut. Pellentesque id nibh sed nulla non nulla.
              </Text>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="item-2">
            <Accordion.Control fw={700}>
              Can I rent a car without a credit card?
            </Accordion.Control>

            <Accordion.Panel>
              <Text c="dimmed">
                Yes. Policies vary by rental company, but many providers allow
                debit cards under certain conditions.
              </Text>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="item-3">
            <Accordion.Control fw={700}>
              What are the requirements for renting a car?
            </Accordion.Control>

            <Accordion.Panel>
              <Text c="dimmed">
                A valid driver's license, identification, and payment method are
                usually required.
              </Text>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="item-4">
            <Accordion.Control fw={700}>
              Does Car Rental allow me to tow with or attach a hitch to the
              rental vehicle?
            </Accordion.Control>

            <Accordion.Panel>
              <Text c="dimmed">
                Most rental companies do not allow towing unless specifically
                stated in the rental agreement.
              </Text>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="item-5">
            <Accordion.Control fw={700}>
              Does Car Rental offer coverage products for purchase with my
              rental?
            </Accordion.Control>

            <Accordion.Panel>
              <Text c="dimmed">
                Yes. Most companies offer collision damage waivers, liability
                protection, and other optional coverage plans.
              </Text>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Stack>
    </Container>
  )
}
