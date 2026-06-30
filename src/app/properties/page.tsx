import PageWrapper from "@/components/layout/PageWrapper";
import Container from "@/components/layout/Container";

export default function PropertiesPage() {
  return (
    <PageWrapper>
      <Container className="py-12">
        <h1 className="text-3xl font-bold tracking-tight font-display">All Properties</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Browse our comprehensive selection of apartments, Airbnb stays, and premium hostels across Kalamassery, Kochi.
        </p>
      </Container>
    </PageWrapper>
  );
}
