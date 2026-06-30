import PageWrapper from "@/components/layout/PageWrapper";
import Container from "@/components/layout/Container";

export default function ContactPage() {
  return (
    <PageWrapper>
      <Container className="py-12">
        <h1 className="text-3xl font-bold tracking-tight font-display">Contact Us</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Get in touch with AK Groups for premium rentals and bookings in Kalamassery, Kochi, Kerala.
        </p>
      </Container>
    </PageWrapper>
  );
}
