import Title from "@/components/Title";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import { Divider } from "@nextui-org/divider";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center min-h-[93vh]">
        <Title />
        <Cards />
      </div>
      <Divider className="mt-6 md:mt-2"/>
      <Footer />
    </div>
  );
}
