"use client";

// Сначала импортируем стандартный React
import React, { useEffect, useState } from "react";

// Затем инструменты для живой графики
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function NexusBackground() {
    const [init, setInit] = useState(false);

    // Этот блок "оживляет" движок при загрузке страницы
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
                background: { color: { value: "#010101" } }, // Deep Rialo Black
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: { 
                            enable: true, 
                            mode: "grab" // Линии "тянутся" к курсору, создавая интерактив
                        },
                    },
                    modes: {
                        grab: { 
                            distance: 220, 
                            links: { opacity: 0.6 } 
                        },
                    },
                },
                particles: {
                    color: { value: "#A9DDD3" }, // Rialo Mint
                    links: {
                        color: "#A9DDD3", //
                        distance: 150,
                        enable: true,
                        opacity: 0.25,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 0.7, // Скорость "дыхания" сети
                        direction: "none",
                        outModes: { default: "bounce" },
                    },
                    number: { 
                        value: 90, 
                        density: { enable: true } 
                    },
                    opacity: { value: 0.4 },
                    shape: { type: "circle" },
                    size: { value: { min: 1, max: 2.5 } },
                },
                detectRetina: true,
            }}
        />
    );
}