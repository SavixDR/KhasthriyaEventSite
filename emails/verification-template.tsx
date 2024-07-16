// Import React and necessary components from @react-email/components
import * as React from 'react';
import { Body, Button, Container, Head, Hr, Html, Img, Preview, Section, Text } from '@react-email/components';

// import { getBaseUrl } from '@/utils';

// Obtain the base URL using the imported function
const baseUrl = 'http://localhost:3000';

// Define the properties expected by the VerificationTemplate component
interface VerificationTemplateProps {
    username: string;
    emailVerificationToken: string;
}

// Define the VerificationTemplate component that takes the defined properties
export const VerificationTemplate = ({ username, emailVerificationToken }: VerificationTemplateProps) => (
    <Html>
        <Head />
        <Preview>Preview text that appears in the email client before opening the email.</Preview>
        <Body style={main}>
            <Container style={container}>
                <Img
                    src='my-logo.png'
                    alt='My SaaS'
                    style={logo}
                />
                <Text style={title}>Hi {username}!</Text>
                <Text style={title}>Welcome to Starter Kit for building a SaaS</Text>
                <Text style={paragraph}>Please verify your email, with the link below:</Text>
                <Section style={btnContainer}>
                    {/* Button that takes the user to the verification link */}
                    <Button
                        style={button}
                        href={`${baseUrl}/auth/verify-email?token=${emailVerificationToken}`}
                    >
                        Click here to verify
                    </Button>
                </Section>
                <Hr style={hr} />
                <Text style={footer}>Something in the footer.</Text>
            </Container>
        </Body>
    </Html>
);

// Styles applied to different parts of the email for customization
const main = {
    backgroundColor: '#020817',
    color: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
};

const logo = {
	margin: '0 auto',
}

const title = {
	textAlign: 'center' as const,
	fontWeight: 'bold' as const,
	fontSize: '24px',
	lineHeight: '34px',
}

const paragraph = {
	fontSize: '16px',
	lineHeight: '26px',
}

const btnContainer = {
	textAlign: 'center' as const,
}

const button = {
	backgroundColor: '#3576DF',
	borderRadius: '1rem',
	color: '#fff',
	fontSize: '16px',
	textDecoration: 'none',
	textAlign: 'center' as const,
	display: 'block',
	padding: '12px',
}

const hr = {
	borderColor: '#cccccc',
	margin: '20px 0',
}

const footer = {
	color: '#8898aa',
	fontSize: '12px',
}
