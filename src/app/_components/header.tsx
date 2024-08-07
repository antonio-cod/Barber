import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 flex flex-row items-center justify-between">
        <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
             <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
               <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

              <div className="py-5 border-b flex items-center border-solid">
                <Avatar>
                  <AvatarImage src="">

                  </AvatarImage>
                </Avatar>

                <div>
                  <p className="font-sold">Antonio Carlos</p>
                  <p className="text-xs">antonio_carlostads@hotmail.com</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-b border-solid py-5">
                <SheetClose asChild>
                <Button className="justify-start gap-2" variant="ghost">
                  <Link href="/">
                   <HomeIcon size={18}/>
                   Início
                  </Link>
                </Button>
                </SheetClose>
                <Button className="justify-start gap-2" variant="ghost">
                  <CalendarIcon size={18}/>
                  Agendamentos
                </Button>
              </div>

              <div className="flex flex-col gap-1 p-5 border-b border-solid py-5">
                {quickSearchOptions.map((option) => (
                  <Button 
                  key={option.title}
                  className="justify-start gap-2"
                  variant="ghost"
                  >
                 <Image 
                    alt={option.title}
                    src={option.imageUrl}
                    height={18}
                    width={18}
                    />
                  {option.title}
                </Button>
             ))}
            </div>
            <div className="flex flex-col gap-2 py-5">
              <Button variant="ghost" className="justify-start gap-2">
                <LogOutIcon size={18} />
                Sair da conta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header