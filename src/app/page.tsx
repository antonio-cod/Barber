import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Input } from "./_components/ui/input";
import { Button } from "./_components/ui/button";
import Image from "next/image";

const Home = () => {
  return (
  <div>
    {/**Header */}
    <Header />
    <div className="p-5">
      <h2 className="text-xl font-bold">Olá, Antonio</h2>
      <p>Terça-Feira, 06 de agosto.</p>

    <div className="flex items-center gap-2 mt-6">
      <Input placeholder= "Faça sua busca..." />
      <Button>
        <SearchIcon />
      </Button>
    </div>
    <div className="relative h-[150px] w-full mt-6">
    <Image 
    alt="Agende nos melhores com FSW Barber"
    src="/banner-01.png" 
    fill
    className="object-cover rounded-xl" />
    </div>
    </div>
  </div>
  )
}

export default Home;