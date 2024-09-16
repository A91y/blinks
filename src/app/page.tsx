import Title from "@/components/Title";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen">
        <Title />
        <Cards />
      </div>
      <Footer />
    </div>
  );
}
