import PageWrapper from "@/components/layout/PageWrapper";
import Container from "@/components/layout/Container";

export default function DailyRentalsPage() {
  return (
    <PageWrapper>
      <Container className="py-12">
        <h1 className="text-3xl font-bold tracking-tight font-display">Daily Rental Apartments</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Discover premium fully furnished apartments available for short term and daily stays in Kalamassery, Kochi.
        </p>
      </Container>
    </PageWrapper>
  );
}
