import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components";
import { cn } from "@/libs";
import { Outlet, useLocation } from "react-router-dom";

export const LoginLayout = () => {
  const location = useLocation();

  return (
    <div className="font-sans">
      <main
        className={cn("flex min-h-screen", {
          "flex-row-reverse": location.pathname.includes("register"),
        })}
      >
        {/* <img src='' alt="" className="w-2/3 bg-gray-500" /> */}
        <section className="w-2/3 bg-gray-500 flex justify-center items-center">
          <Dialog>
            <DialogTrigger className="bg-white p-5 rounded">Abrir modal</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Exemplo de modais</DialogTitle>
                <DialogDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, fugiat. Id, vel! Blanditiis molestias consectetur consequuntur facere veritatis nesciunt dolore sunt ea eaque porro animi veniam officia nisi commodi obcaecati cupiditate, unde ratione asperiores vero. Delectus numquam dolores quam labore debitis quasi culpa fuga nihil a? Corrupti modi doloremque, corporis nihil incidunt eum. Explicabo molestias, consequuntur enim labore nam provident eius dolore nihil harum, sequi, laborum officia repudiandae deleniti. Illum natus earum veritatis ea doloremque. Quas, maiores fuga recusandae facilis ea odit delectus voluptatibus aspernatur aperiam dolorum veritatis assumenda mollitia eum officiis! Vero beatae aut distinctio!
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </section>
        <Outlet />
      </main>
    </div>
  );
};
