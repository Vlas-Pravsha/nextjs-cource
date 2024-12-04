import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Tailwind,
} from "@react-email/components";

interface EmailTemplateProps {
  email: string;
  subject: string;
  explanation: string;
  name: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  email,
  subject,
  explanation,
  name,
}) => (
  <Html>
    <Head />
    <Preview>New message from your website</Preview>
    <Tailwind>
      <Body className="bg-gray-100 font-sans">
        <Container className="mx-auto max-w-xl p-4">
          <Heading className="mb-4 text-2xl font-bold text-gray-800">
            New Contact Form Submission
          </Heading>
          <Container className="rounded-lg bg-white p-6 shadow-md">
            <Text className="mb-4 text-gray-700">
              You have received a new message from your website&apos;s contact
              form:
            </Text>
            <Container className="mb-4">
              <Text className="font-semibold text-gray-800">Name:</Text>
              <Text className="text-gray-600">{name}</Text>
            </Container>
            <Container className="mb-4">
              <Text className="font-semibold text-gray-800">From:</Text>
              <Text className="text-gray-600">{email}</Text>
            </Container>
            <Container className="mb-4">
              <Text className="font-semibold text-gray-800">Subject:</Text>
              <Text className="text-gray-600">{subject}</Text>
            </Container>
            <Container className="mb-4">
              <Text className="font-semibold text-gray-800">explanation:</Text>
              <Text className="whitespace-pre-wrap text-gray-600">
                {explanation}
              </Text>
            </Container>
          </Container>
          <Text className="mt-4 text-center text-sm text-gray-500">
            This email was sent from your website&apos;s contact form.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default EmailTemplate;
