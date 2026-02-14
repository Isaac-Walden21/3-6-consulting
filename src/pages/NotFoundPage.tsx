import { PageTransition } from "../components/animation";
import Button from "../components/ui/Button";
import usePageTitle from "../hooks/usePageTitle";

export default function NotFoundPage() {
  usePageTitle("Page Not Found");
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-8xl md:text-9xl text-gold">404</h1>
          <h2 className="font-heading text-2xl text-off-white mt-4">
            PAGE NOT FOUND
          </h2>
          <p className="text-light-gray mt-4">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className="mt-8">
            <Button href="/" variant="primary" size="lg">
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
