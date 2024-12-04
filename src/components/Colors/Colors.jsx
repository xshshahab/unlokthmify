import React from "react"

const Colors = () => {
    return (
        <div className="w-full mt-14 min-h-screen">
            <div className="flex items-center justify-center">
                <p className="text-sky-500 text-xl">Colors</p>
            <input type="color" name="color" id="color" />
                <p>Copy & paste Tailwind CSS colors.</p>
            </div>
        </div>
    );
}

export default Colors;
