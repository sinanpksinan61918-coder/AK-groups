import PageWrapper from "@/components/layout/PageWrapper";
import Container from "@/components/layout/Container";

export default function AboutPage() {
  return (
    <PageWrapper>
      <Container className="py-12">
        <h1 className="text-3xl font-bold tracking-tight font-display">About AK Groups</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          AK Groups is a premium rental provider offering curated accommodation solutions in Kalamassery, Kochi, Kerala.
        </p>
      </Container>
    </PageWrapper>
  );
}
