import Image from "next/image";
import { Button } from "./Button";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white pb-20 pt-2 lg:pb-28">
      <span className="pointer-events-none absolute right-[38%] top-2 hidden h-[10px] w-16 -rotate-[35deg] rounded-full bg-navy lg:block" />
      <span className="pointer-events-none absolute right-[9%] top-16 hidden h-[10px] w-24 -rotate-[8deg] rounded-full bg-navy lg:block" />

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <p className="font-heading text-2xl font-bold tracking-wide text-red">ABOUT</p>
          <div className="mt-1 flex items-center gap-2">
            <span className="flex items-end gap-[3px]">
              <span className="h-8 w-[3px] rounded-sm bg-red" />
              <span className="h-8 w-[3px] rounded-sm bg-red" />
            </span>
            <span className="font-heading text-3xl font-extrabold tracking-tight text-navy">
              FSR
            </span>
            <span className="flex flex-col justify-center -space-y-1">
              <span className="font-heading text-xs font-semibold tracking-wide text-navy">
                RECOVERY
              </span>
              <span className="font-heading text-xs font-semibold tracking-wide text-red">
                GROUPS
              </span>
            </span>
          </div>

          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-navy/70">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              gravida ultrices sagittis. Donec rhoncus sapien lacus, sit amet
              dignissim ipsum tristique ut. Integer egestas dignissim quam et
              iaculis. In aliquet, tellus efficitur consequat scelerisque,
              libero ex faucibus tortor, lacinia maximus elit sem ac libero.
              Donec sodales finibus pellentesque. Nunc tellus diam, cursus et
              rhoncus non, hendrerit eget leo. Nulla in porttitor nunc.
            </p>
            <p>
              Curabitur a ipsum non arcu viverra sodales quis id dolor.
              Integer tempor sagittis lorem quis vulputate. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Quisque a elementum
              nisi. Sed facilisis efficitur fermentum. Integer bibendum
              facilisis quam nec placerat. Aenean blandit dolor nunc, non
              malesuada ex cursus sed. Etiam ullamcorper ante nec lectus
              molestie ultricies. Duis et tincidunt velit, eget scelerisque
              mauris. Proin sed placerat est. Proin sit amet leo ipsum.
              Mauris sagittis augue nec orci posuere, vel tincidunt quam
              auctor.
            </p>
            <p>
              Ut venenatis dui at ligula iaculis rhoncus eget a eros. Nulla
              sodales sed purus sed facilisis. Phasellus dignissim iaculis
              finibus. Proin feugiat neque vel posuere mattis. Nam id
              bibendum sem. Curabitur lobortis pulvinar tellus a porta. Duis
              quis leo quam. Sed purus quam, vulputate ac gravida id,
              vulputate faucibus lorem. Sed et ante tortor tincidunt finibus.
            </p>
          </div>

          <div className="mt-8">
            <Button href="#services" variant="solid">
              Read more
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-5 -bottom-5 h-[92%] w-[35%] bg-navy" />
          <div className="relative overflow-hidden rounded-tr-[180px] shadow-xl">
            <Image
              src="/images/about-tow.jpg"
              alt="Tow truck loading a red car for recovery"
              width={1615}
              height={1080}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
