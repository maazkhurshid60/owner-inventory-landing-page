import Image from "next/image";

interface Brand {
  id: number;
  name: string;
  logo: string;
}

const brands: Brand[] = [
  { id: 1, name: "ASK Food Industries", logo: "/brands/ask.png" },
  { id: 2, name: "Industrial Valco", logo: "/brands/iv.png" },
  { id: 3, name: "Texas Pipe & Supply", logo: "/brands/texas.png" },
  { id: 4, name: "Al-Asif", logo: "/brands/alasif.png" },
];

function trustedBrand(){
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold text-[#231F20] mb-10">
          Preferred to businesses who demand <br />
          precision and performance
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 place-items-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-gradient-to-b from-white to-[#E8F7F6]/40 p-6 rounded-xl shadow-sm w-40 sm:w-44 md:w-48 flex items-center justify-center"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default trustedBrand;
