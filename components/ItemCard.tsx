import React from 'react'

const ItemCard = ({ item }: any) => {
    return (
        <div
            className="bg-white rounded-2xl shadow p-4 flex flex-col"
        >
            <img
                src={item.photo}
                alt={item.name}
                className="rounded-lg h-40 w-full object-cover mb-4"
            />
            <span
                className={`px-3 py-1 text-sm rounded-full mb-2 self-start ${item.type === "Lost"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                    }`}
            >
                {item.type}
            </span>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{item.description}</p>
            <p className="text-gray-500 text-xs">
                📍 {item.location} — {item.date}
            </p>
        </div>
    )
}

export default ItemCard
