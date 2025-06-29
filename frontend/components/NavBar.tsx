import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Flag, Github, LucideSeparatorHorizontal, Mail, SeparatorVerticalIcon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Separator } from "./ui/separator";

export default function NavBar() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full">
      <div className="container-wrapper 3xl:fixed:px-0 px-6">
        <div className="3xl:fixed:container flex h-(--header-height) items-center gap-2 **:data-[slot=separator]:!h-4">
          <Button variant="ghost" size="icon">
            <Link href="/">
            <Image
              src="/logo.png"
              alt="F1Metrics Logo"
              width={48}
              height={48}
            />
            </Link>
          </Button>

          <Button variant="ghost">
            <Link href="/season">
              Season
            </Link>
          </Button>

          <Button variant="ghost" disabled>
            <Link href="/meeting">
              Meetings
            </Link>
          </Button>

          <Button variant="ghost" disabled>
            <Link href="/driver">
              Drivers
            </Link>
          </Button>

          <Button variant="ghost" disabled>
            <Link href="/standing">
              Standings
            </Link>
          </Button>

          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">

            <Button variant="ghost" size="icon">
              <Link href="https://github.com/a-irch/F1Metrics" target="_blank">
                <Github />
              </Link>
            </Button>

            <Separator orientation="vertical"/>

            <Button variant="ghost" size="icon">
              <Link href="mailto:f1.metrics@proton.me">
                <Mail />
              </Link>
            </Button>

            <Separator orientation="vertical"/>

            <ThemeToggle />
          </div>
        </div>
        <Separator/>
      </div>
    </header>
  );
}
