const ItemDetails = ({
    formData,
    handleChange
}: any) => {
    return (
        <div
            className="w-full max-w-3xl bg-white p-6 rounded-xl"
        >
            <h2 className="text-lg font-semibold mb-6">Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Item Name */}
                <input
                    type="text"
                    name="itemName"
                    placeholder="Item Name"
                    value={formData.itemName}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none"
                />

                {/* Category */}
                <select name="category" value={formData.category} onChange={handleChange} className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none">
                    <option value="">Category</option>
                    
                </select>

                {/* Phone number */}
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none"
                />

                {/* Date lost */}
                <input
                    type="date"
                    name="dateLost"
                    placeholder="Date Item got lost"
                    value={formData.dateLost}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none"
                />

                {/* Item Description */}
                <textarea
                    name="description"
                    placeholder="Item Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none h-32"
                />

                {/* How lost */}
                <textarea
                    name="howLost"
                    placeholder="How did you lose the item?"
                    value={formData.howLost}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none h-32"
                />
            </div>
        </div>
    )
}

export default ItemDetails
