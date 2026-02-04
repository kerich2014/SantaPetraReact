import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"



const Home = () => {
    return(
        <>
        <div className="flex flex-col justify-center items-center m-5 gap-5">
            <Carousel className="w-full max-w-[70%]">
                <CarouselContent>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-0 h-40">
                                <Card className="p-0">
                                    <CardContent className="flex items-center justify-center p-0 overflow-hidden">
                                        <img className="md:object-cover" src={`/${index+1}.jpg`}/>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                     ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero illum quidem at delectus minus omnis molestiae adipisci nisi quia rerum vitae eius reiciendis beatae, cupiditate tenetur laboriosam quas, possimus qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aperiam vitae nihil adipisci eligendi itaque a voluptatem odio! Nihil, sunt! Explicabo ad dolor ea dolorum aspernatur minima doloribus iste dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta amet commodi harum iure. Ab unde sapiente deleniti, aspernatur magnam aliquam cupiditate accusamus, recusandae neque possimus quis consequuntur optio rem error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minima optio cum fugiat, porro, magnam voluptatibus rem veritatis soluta aliquam deleniti repudiandae sunt. Nesciunt explicabo numquam expedita officia optio maiores? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum repellat cumque repellendus blanditiis, veritatis nulla eius soluta aspernatur, quos cum laudantium voluptates sit recusandae. Dolor saepe tempora consectetur et molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quas facere quo, soluta tenetur commodi doloremque dolores est tempora! Iure expedita fuga iste illum quasi, voluptatem magnam neque eius officia? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque expedita obcaecati vero repellat voluptate dolorem soluta, laborum debitis exercitationem aliquam fugit tempore mollitia sequi nihil vitae quis. Delectus, cumque ullam.</p>
        </div>
        </>
    )
}
export default Home