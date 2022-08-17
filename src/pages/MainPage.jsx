import FeedbackStats from "../components/FeedbackStats";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";
import AboutIconLink from "../components/AboutIconLink";
import Container from "../components/shared/Container";
import { FeedbackProvider } from "../context/FeedbackContext";

function MainPage() {
  return (
    <FeedbackProvider>
      <Container>
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </Container>
      <AboutIconLink />
    </FeedbackProvider>
  );
}

export default MainPage;
