import PageWrapper from "@/components/layout/PageWrapper";
import Container from "@/components/layout/Container";

export default function AdminPage() {
  return (
    <PageWrapper>
      <Container className="py-12">
        <h1 className="text-3xl font-bold tracking-tight font-display">Admin Dashboard</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Secure admin dashboard panel for managing properties, daily rentals, Airbnb check-ins, and hostel vacancies.
        </p>
      </Container>
    </PageWrapper>
  );
}
