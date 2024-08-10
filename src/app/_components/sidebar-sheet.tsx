import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon, MenuIcon } from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { DialogDescription } from "@radix-ui/react-dialog"

const SidebarSheet = () => {
  return (
  <SheetContent className="overflow-y-auto">
      <SheetHeader>
         <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

              <div className="flex items-center gap-3 border-b border-solid py-5">
                <h2 className="font-bold text-lg">Olá, faça seu loguin!</h2>
                <Dialog>
                  <DialogTrigger>
                  <Button size="icon">
                    <LogInIcon />
                  </Button>
                  </DialogTrigger>
                  <DialogContent className="w-[90%]">
                    <DialogHeader>
                      <DialogTitle>
                        Faça login na plataforma
                      </DialogTitle>
                      <DialogDescription>
                        Conecta-se usando sua conta do Google.
                      </DialogDescription>
                    </DialogHeader>

                    <Button variant="outline" className="gap-1 font-bold">
                      <Image 
                      alt="Fazer login com o Google"
                      src="/google.svg" 
                      width={18} 
                      height={18}
                      />
                      Google
                    </Button>
                  </DialogContent>
                </Dialog>
                
                {/* <Avatar>
                  <AvatarImage src="">

                  </AvatarImage>
                </Avatar>
          
                <div>
                  <p className="font-sold">Antonio Carlos</p>
                  <p className="text-xs">antonio_carlostads@hotmail.com</p>
                </div> */}
              </div>

              <div className="flex flex-col gap-2 border-b border-solid py-5">
                <SheetClose asChild>
                <Button className="justify-start gap-2" variant="ghost">
                  <Link href="/">
                   <HomeIcon size={18}/>
                  </Link>
                   Início
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
  )
}

export default SidebarSheet