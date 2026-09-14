import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function LegalPageLayout({
  path,
  eyebrow,
  title,
  lastUpdated,
  children,
}: {
  path: string;
  eyebrow: string;
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header activePath={path} />
      <main>
        <section className="hero-bg text-white">
          <div className="container-site fade-up py-10 text-center sm:py-14">
            <p className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-red/40 bg-red/15 px-3 py-1.5 text-xs font-semibold text-red-100 sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <i className="fa-solid fa-scale-balanced flex-shrink-0"></i> {eyebrow}
            </p>
            <h1 className="mb-3 text-3xl leading-tight font-extrabold sm:mb-4 sm:text-4xl lg:text-5xl">{title}</h1>
            <p className="text-sm text-white/70">Last updated: {lastUpdated}</p>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="container-site">
            <div className="fade-up mx-auto max-w-3xl leading-7 text-navy/80 [&_a]:font-semibold [&_a]:text-red [&_a]:transition [&_a:hover]:text-red-dark [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-navy [&_h2:first-of-type]:mt-0 [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-navy [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_li]:leading-7 [&_strong]:text-navy">
              {children}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
