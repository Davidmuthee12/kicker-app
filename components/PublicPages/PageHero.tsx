import { Badge } from "@/components/ui/badge";

type PageHeroProps = {
  badge: string;
  title: string;
  highlight: string;
  description: string;
};

export default function PageHero({
  badge,
  title,
  highlight,
  description,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-white px-6 pb-20 pt-28 text-black">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_55%)]" />
      <div className="absolute right-0 top-16 h-56 w-56 rounded-full bg-purple-500/12 blur-3xl" />
      <div className="absolute left-0 top-24 h-48 w-48 rounded-full bg-blue-500/12 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
        <Badge className="rounded-full border border-blue-500 bg-blue-500 px-4 py-2 text-white">
          {badge}
        </Badge>
        <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          {title}{" "}
          <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
            {highlight}
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
