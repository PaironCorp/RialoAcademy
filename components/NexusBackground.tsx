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
                background: { color: { value: "#010101" } }, // Фирменный черный Rialo
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "grab" }, // Линии тянутся к мышке
                    },
                    modes: {
                        grab: { distance: 200, links: { opacity: 0.5 } },
                    },
                },
                particles: {
                    color: { value: "#A9DDD3" }, // Фирменный мятный Rialo
                    links: {
                        color: "#A9DDD3",
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 0.8, // Плавное, "живое" движение
                        direction: "none",
                        outModes: { default: "bounce" },
                    },
                    number: { value: 80, density: { enable: true } },
                    opacity: { value: 0.3 },
                    shape: { type: "circle" },
                    size: { value: { min: 1, max: 3 } },
                },
                detectRetina: true,
            }}
        />
    );
}