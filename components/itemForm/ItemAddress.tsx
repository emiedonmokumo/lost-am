
export default function ItemAddress() {
    return (
        <div className="w-full max-w-3xl">
            <div className="flex flex-col space-y-3">
                <div>
                    <label className="text-gray-500 font-medium">Where is the last seen location?</label>
                    <input
                        type="text"
                        name="itemName"
                        placeholder="Item Name"
                        // value={formData.itemName}
                        // onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none"
                    />
                </div>
                <div className="flex justify-between">
                    <div>
                        <label className="text-gray-500 font-medium">City</label>
                        <input
                            type="text"
                            name="itemName"
                            placeholder="Item Name"
                            // value={formData.itemName}
                            // onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="text-gray-500 font-medium">Country</label>
                        <input
                            type="text"
                            name="itemName"
                            placeholder="Item Name"
                            value={'Nigeria'}
                            // onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none"
                            disabled
                        />
                    </div>
                </div>
            </div>
            {/* <MapComponent /> */}
        </div>
    );
}
