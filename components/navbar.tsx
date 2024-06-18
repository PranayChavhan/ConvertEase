// imports
import { Button } from "./ui/button";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { ModeToggle } from "./mode-toggle";

export default function Navbar({ }): any {
    return (
        <nav className="fixed z-50 flex items-center justify-between w-full h-24 px-4 py-10 backdrop-blur-md bg-background bg-opacity-30 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <Link href="/">
                <h1 className="w-40 cursor-pointer text-2xl font-bold flex flex-row gap-3"> <span>📚</span> ConvertEase </h1>
            </Link>
            <div className="hidden gap-1 md:gap-2 lg:gap-4 md:flex">
                
            </div>
            <div className="items-center hidden gap-2 md:flex">
                <ModeToggle />
                <Link href="https://github.com/PranayChavhan/ConvertEase">
                    <Button
                        variant="default"
                        className="items-center hidden gap-2 bg-blue-600 rounded-full w-fit md:flex"
                        size="lg"
                    >
                        <span>Github Repo</span>
                        <span className="text-xl">
                            <BsGithub />
                        </span>
                    </Button>
                </Link>
            </div>
            
        </nav>
    );
}
