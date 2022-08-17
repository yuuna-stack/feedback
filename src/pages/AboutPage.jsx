import { Link } from "react-router-dom";
import Card from "../components/shared/Card";
import Container from "../components/shared/Container";

function AboutPage() {
  return (
    <Container>
      <Card>
        <div className="about">
          <h1>About this page</h1>
          <p>This is a React app to leave feedback for a product or service</p>
          <p>Version: 1.0.0</p>
        </div>
        <p>
          <Link
            to={{
              pathname: "/",
            }}
          >
            Back to Home
          </Link>
        </p>
      </Card>
    </Container>
  );
}

export default AboutPage;
