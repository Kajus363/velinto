"use client";  // 👈 This makes it a Client Component

import React, { useEffect } from "react";

export default function FramerComponent() {
    useEffect(() => {
        console.log("FramerComponent is mounting...");
    }, []);

    return (
        <div style={{ width: "100%", height: "100vh", backgroundColor: "black" }}>
            <iframe
                src="/framer.html"
                style={{
                    width: "100%",
                    height: "100%",
                    border: "none"
                }}
            />
        </div>
    );
}
