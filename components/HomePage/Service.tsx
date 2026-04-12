import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="mt-20 py-20 px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Services
            </span>
          </h2>
          <p className="text-gray-400 mt-4">
            Everything you need to transform your body, build strength, and stay
            consistent on your fitness journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:scale-105 transition duration-300 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
                  <Icon className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
