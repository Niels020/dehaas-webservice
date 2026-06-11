import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface QuestionReceivedProps {
  clientName?: string;
  locale?: "nl" | "en";
}

const copy = {
  nl: {
    preview: "Bedankt voor je bericht — ik kom er zo snel mogelijk op terug.",
    greeting: (name: string) => `Hoi ${name},`,
    body: "Bedankt voor je bericht. Ik heb je vraag ontvangen en kom er zo snel mogelijk op terug.",
    signoff: "Tot snel!",
  },
  en: {
    preview: "Thanks for your message — I'll get back to you soon.",
    greeting: (name: string) => `Hi ${name},`,
    body: "Thanks for your message. I've received your question and will get back to you as soon as possible.",
    signoff: "Talk soon!",
  },
};

export default function QuestionReceived({
  clientName = "there",
  locale = "en",
}: QuestionReceivedProps) {
  const t = copy[locale];

  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
      </Head>
      <Preview>{t.preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Img
              src="https://dehaaswebservice.nl/dehaas-logos/dehaas-logo-light.png"
              width={160}
              height={50}
              alt="dehaas webservice"
            />
          </Section>

          <Text style={text}>{t.greeting(clientName)}</Text>
          <Text style={text}>{t.body}</Text>

          <Hr style={divider} />

          {/* Sign-off */}
          <Text style={text}>{t.signoff}</Text>
          <table cellPadding={0} cellSpacing={0} role="presentation" style={signatureTable}>
            <tbody>
              <tr>
                <td style={signatureIconCell}>
                  <Img
                    src="https://dehaaswebservice.nl/dehaas-logos/dehaas-icon.png"
                    width={32}
                    height={32}
                    alt="dehaas"
                    style={signatureIcon}
                  />
                </td>
                <td style={signatureTextCell}>
                  <div style={signatureName}>Niels de Haas</div>
                  <div style={signatureWordmarkRow}>
                    <Link href="https://dehaaswebservice.nl" style={signatureWordmark}>
                      DEHAAS WEBSERVICE
                    </Link>
                  </div>
                  <div style={signatureEmail}>
                    <Link href="mailto:info@dehaaswebservice.nl" style={signatureEmailLink}>
                      info@dehaaswebservice.nl
                    </Link>
                  </div>
                  <div style={signatureKvk}>KvK 42080935</div>
                </td>
              </tr>
            </tbody>
          </table>
        </Container>

        <Section style={footer}>
          <Text style={footerText}>
            <Link href="https://dehaaswebservice.nl" style={footerLink}>
              dehaaswebservice.nl
            </Link>
          </Text>
        </Section>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f5f5f4",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

const header = {
  textAlign: "left" as const,
  padding: "0 0 20px",
  borderBottom: "2px solid #00846f",
  marginBottom: "20px",
};

const container = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  margin: "0 auto",
  maxWidth: "560px",
  padding: "28px",
};

const text = {
  color: "#1a1a18",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0 0 16px",
};

const divider = {
  borderColor: "#e5e5e5",
  margin: "24px 0",
};

const signatureTable = {
  marginTop: "8px",
  borderCollapse: "collapse" as const,
};

const signatureIconCell = {
  verticalAlign: "top" as const,
  paddingRight: "16px",
  borderRight: "2px solid #00846f",
};

const signatureIcon = {
  display: "block" as const,
  borderRadius: "4px",
};

const signatureTextCell = {
  verticalAlign: "top" as const,
  paddingLeft: "16px",
};

const signatureName = {
  fontSize: "15px",
  fontWeight: 600,
  color: "#1a1a18",
  letterSpacing: "-0.2px",
  lineHeight: "1.2",
};

const signatureWordmarkRow = {
  marginTop: "4px",
};

const signatureWordmark = {
  fontSize: "12px",
  fontWeight: 600,
  color: "#00846f",
  letterSpacing: "1.5px",
  textTransform: "uppercase" as const,
  textDecoration: "none",
};

const signatureEmail = {
  marginTop: "10px",
  fontSize: "13px",
  lineHeight: "1.6",
  color: "#1a1a18",
};

const signatureEmailLink = {
  color: "#1a1a18",
  textDecoration: "none",
};

const signatureKvk = {
  marginTop: "2px",
  fontSize: "12px",
  color: "#8a8a86",
  letterSpacing: "0.3px",
};

const footer = {
  margin: "0 auto",
  maxWidth: "560px",
  padding: "16px 28px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#a3a3a3",
  fontSize: "12px",
  margin: "0",
};

const footerLink = {
  color: "#a3a3a3",
  textDecoration: "none",
};
