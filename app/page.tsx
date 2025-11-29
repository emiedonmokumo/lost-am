import Header from "@/components/Header";
import ItemCard from "@/components/ItemCard";

export default function Home() {
  const items = [
    {
      type: "Lost",
      name: "Samsung Galaxy S21",
      description: "Black phone with green case",
      location: "Yenagoa Park, Bayelsa",
      date: "Sep 10, 2025",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8cJ0WQvw_c-BFE2GBI14lHqlebpg9WtmYAw&s",
    },
    {
      type: "Found",
      name: "Brown Leather Wallet",
      description: "Wallet with ID card inside",
      location: "Opposite GTBank, Lagos",
      date: "Sep 11, 2025",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVlAOw2sjmHIGouyQKuz-PXNKqM3Gorjp8w&s",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 min-h-[70vh]">
        <h1 className="text-5xl font-bold mb-6 w-[60%] bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Helping People Reunite with Their Lost Items
        </h1>
        <input
          type="text"
          placeholder="Search by keyword, city, or item type"
          className="w-full max-w-lg px-6 py-3 border border-purple-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </main>

      {/* Reported Items Section */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Recently Reported Items
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item, idx) => (
            <ItemCard key={idx} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
