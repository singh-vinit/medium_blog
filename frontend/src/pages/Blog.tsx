import Header from "../components/Header";
import Card from "../components/Card";

const Blog = () => {
  return (
    <div className="bg-white h-screen">
      <Header icon="v" />
      <Card
        author="vinit"
        date="24 july 2024"
        title="my first blog"
        content="Web development has grown a lot in the past years and e-commerce is an area that is crucial to know and understand as a developer since more and more people resort to purchasing online compared to traditional methods in shopping malls and stores."
      />
    </div>
  );
};

export default Blog;
