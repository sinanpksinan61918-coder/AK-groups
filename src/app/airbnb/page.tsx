import PageWrapper from "@/components/layout/PageWrapper";
import Container from "@/components/layout/Container";

export default function AirbnbPage() {
  return (
    <PageWrapper>
      <Container className="py-12">
        <h1 className="text-3xl font-bold tracking-tight font-display">Airbnb Stays</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Browse luxury Airbnb holiday stays and fully serviced private homes around Kalamassery, Kochi.
        </p>
      </Container>
    </PageWrapper>
  );
}
