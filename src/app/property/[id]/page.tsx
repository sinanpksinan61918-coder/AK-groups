import PageWrapper from "@/components/layout/PageWrapper";
import Container from "@/components/layout/Container";

interface PropertyDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function PropertyDetailsPage({ params }: PropertyDetailsPageProps) {
  const { id } = await params;

  return (
    <PageWrapper>
      <Container className="py-12">
        <h1 className="text-3xl font-bold tracking-tight font-display">Property Details</h1>
        <p className="mt-4 text-muted-foreground">
          Viewing detailed specifications for property ID: <span className="font-semibold text-foreground">{id}</span>.
        </p>
      </Container>
    </PageWrapper>
  );
}
