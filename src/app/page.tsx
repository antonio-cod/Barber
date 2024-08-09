import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Input } from "./_components/ui/input";
import { Button } from "./_components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-items";
import BookingItem from "./_components/booking-item";
import { quickSearchOptions } from "./_constants/search";


const Home =  async () => {
 
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy:{
      name:"desc"
    }
  })
  
  return (
  <div>
    {/**HEADER */}
    <Header />
    <div className="p-5">
      <h2 className="text-xl font-bold">Olá, Antonio</h2>
      <p>Terça-Feira, 06 de agosto.</p>

    {/**BUSCAR */}  
    <div className="flex items-center gap-2 mt-6">
      <Input placeholder= "Faça sua busca..." />
      <Button>
        <SearchIcon />
      </Button>
    </div>

   {/**BUSCA RÁPIDA */}  
    <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
     {quickSearchOptions.map((option) => (
      <Button className="gap-2" variant="secondary" key={option.title}>
        <Image 
          src={option.imageUrl}
          width={16} 
          height={16} 
          alt={option.title}
          />
        {option.title}
      </Button>
     ))}
      
    </div>

    {/**IMAGEM*/}
    <div className="relative h-[150px] w-full mt-6">
    <Image 
    alt="Agende nos melhores com FSW Barber"
    src="/banner-01.png" 
    fill
    className="object-cover rounded-xl" />
    </div>

    {/**AGENDAMENTO */}
    <BookingItem/>

    <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
    Recomendados
    </h2>
   <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
    {barbershops.map((barbershop) => (
     <BarbershopItem key={barbershop.id} barbershop = {barbershop}/>
    ))}
     </div>

     <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
    Populares
    </h2>
   <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
    {popularBarbershops.map((barbershop) => (
     <BarbershopItem key={barbershop.id} barbershop = {barbershop}/>
    ))}
     </div>

    </div>

  </div>
  )
}

export default Home;