"use client";

import { useEffect, initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";
import React, { useState } from "react";

export default function NexusBackground() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            options={{
                background: { color: { value: "#010101" } }, // Rialo Black
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "grab" },
                    },
                    modes: {
                        grab: { distance: 200, links: { opacity: 0.5 } },
                    },
                },
                particles: {
                    color: { value: "#A9DDD3" }, // Rialo Mint
                    links: {
                        color: "#A9DDD3", //
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 0.6,
                        direction: "none",
                        outModes: { default: "bounce" },
                    },
                    number: { value: 70, density: { enable: true } },
                    opacity: { value: 0.4 },
                    shape: { type: "circle" },
                    size: { value: { min: 1, max: 2 } },
                },
                detectRetina: true,
            }}
        />
    );
}