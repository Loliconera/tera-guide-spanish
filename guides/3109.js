// Ice Throne
//
// made by icebrog

module.exports = (dispatch, handlers, guide, lang) => {

	return {
		// 1 BOSS
		"nd-3109-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		// 2 BOSS
		"nd-3109-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		//
		"s-3109-2000-403-0": [
			{ type: "text", sub_type: "message", message: "Back Slam", message_ES: "Golpe atrás", delay: 2500 },
			{ type: "spawn", func: "circle", args: [false, 553, 160, 400, 12, 300, 0, 1500], delay: 3500 },
			{ type: "spawn", func: "circle", args: [false, 553, 200, 400, 12, 300, 0, 1500], delay: 3500 }
		],
		"s-3109-2000-405-0": [
			{ type: "text", sub_type: "message", message: "Front Sweep | Back Slam", message_ES: "Ataque frontal | Trasero" },
			{ type: "spawn", func: "circle", args: [false, 553, 160, 400, 12, 300, 0, 1500], delay: 2000 },
			{ type: "spawn", func: "circle", args: [false, 553, 200, 400, 12, 300, 0, 1500], delay: 2000 }
		],
		"s-3109-2000-406-0": [{ type: "text", sub_type: "message", message: "Back Stun", message_ES: "Stun atrás", delay: 1000 }],
		"s-3109-2000-409-0": [
			{ type: "text", sub_type: "message", message: "Back Slam", message_ES: "Golpe atrás", delay: 3500 },
			{ type: "spawn", func: "circle", args: [false, 553, 160, 425, 12, 250, 0, 1500], delay: 3500 },
			{ type: "spawn", func: "circle", args: [false, 553, 200, 425, 12, 250, 0, 1500], delay: 3500 }
		],
		"s-3109-2000-410-0": [
			{ type: "text", sub_type: "message", message: "Back Stun", message_ES: "Stun atrás" },
			{ type: "spawn", func: "circle", args: [false, 553, 160, 425, 12, 250, 0, 1500] },
			{ type: "spawn", func: "circle", args: [false, 553, 200, 425, 12, 250, 0, 1500] }
		],
		"s-3109-2000-411-0": [{ type: "text", sub_type: "message", message: "Knockup!", message_ES: "Knockup!" }],
		// In - Out
		"s-3109-2000-412-0": [
			{ type: "text", sub_type: "message", message: "Spin | Pushback", message_ES: "Girar | Empujar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 400, 0, 3000] }
		],
		"s-3109-2000-414-0": [
			{ type: "text", sub_type: "message", message: "Spin | Out-In", message_ES: "Girar | Salir-Entrar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 400, 0, 5000] }
		],
		"s-3109-2000-415-0": "s-3109-2000-414-0",
		"s-3109-2000-416-0": [
			{ type: "text", sub_type: "message", message: "Spin | Out-In | Pizza", message_ES: "Girar | Salir-Entrar | Pizza" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 400, 0, 6500] },
			{ type: "spawn", func: "vector", args: [553, 0, 20, 10, 425, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 32.5, 200, 0, 1500, false], delay: 5000 }, // safe 2
			{ type: "spawn", func: "vector", args: [553, 0, 20, 55, 425, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 77.5, 200, 0, 5000, false] }, // safe 1
			{ type: "spawn", func: "vector", args: [553, 0, 20, 100, 425, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 122.5, 200, 0, 1500, false], delay: 5000 }, // safe 2
			{ type: "spawn", func: "vector", args: [553, 0, 20, 145, 425, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 167.5, 200, 0, 5000, false] }, // safe 1
			{ type: "spawn", func: "vector", args: [553, 0, 20, 190, 425, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 212.5, 200, 0, 1500, false], delay: 5000 }, // safe 2
			{ type: "spawn", func: "vector", args: [553, 0, 20, 235, 425, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 257.5, 200, 0, 5000, false] }, // safe 1
			{ type: "spawn", func: "vector", args: [553, 0, 20, 280, 425, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 302.5, 200, 0, 1500, false], delay: 5000 }, // safe 2
			{ type: "spawn", func: "vector", args: [553, 0, 20, 325, 425, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 347.5, 200, 0, 5000, false] } // safe 1
		],
		"s-3109-2000-417-0": [
			{ type: "text", sub_type: "message", message: "Spin | In-Out | Pizza", message_ES: "Girar | Entrar-Salir | Pizza" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 400, 0, 7500] },
			{ type: "spawn", func: "vector", args: [553, 0, 20, 10, 425, 0, 7500] },
			{ type: "spawn", func: "marker", args: [false, 32.5, 200, 0, 6000, false] }, // safe 1
			{ type: "spawn", func: "vector", args: [553, 0, 20, 55, 425, 0, 7500] },
			{ type: "spawn", func: "marker", args: [false, 77.5, 200, 0, 1500, false], delay: 6000 }, // safe 2
			{ type: "spawn", func: "vector", args: [553, 0, 20, 100, 425, 0, 7500] },
			{ type: "spawn", func: "marker", args: [false, 122.5, 200, 0, 6000, false] }, // safe 1
			{ type: "spawn", func: "vector", args: [553, 0, 20, 145, 425, 0, 7500] },
			{ type: "spawn", func: "marker", args: [false, 167.5, 200, 0, 1500, false], delay: 6000 }, // safe 2
			{ type: "spawn", func: "vector", args: [553, 0, 20, 190, 425, 0, 7500] },
			{ type: "spawn", func: "marker", args: [false, 212.5, 200, 0, 6000, false] }, // safe 1
			{ type: "spawn", func: "vector", args: [553, 0, 20, 235, 425, 0, 7500] },
			{ type: "spawn", func: "marker", args: [false, 257.5, 200, 0, 1500, false], delay: 6000 }, // safe 2
			{ type: "spawn", func: "vector", args: [553, 0, 20, 280, 425, 0, 7500] },
			{ type: "spawn", func: "marker", args: [false, 302.5, 200, 0, 6000, false] }, // safe 1
			{ type: "spawn", func: "vector", args: [553, 0, 20, 325, 425, 0, 7500] },
			{ type: "spawn", func: "marker", args: [false, 347.5, 200, 0, 1500, false], delay: 6000 } // safe 2
		],
		// Dig
		"s-3109-2000-602-0": [
			{ type: "text", sub_type: "message", message: "Get Out", message_ES: "¡Sal de ahí!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 600, 0, 4000] }
		],
		"s-3109-2000-604-0": [
			{ type: "text", sub_type: "message", message: "Cage", message_ES: "Jaula" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 400, 0, 10000] }
		],
		"s-3109-2000-605-0": [
			{ type: "text", sub_type: "message", message: "Pizza | Out-in", message_ES: "Pizza | Salir - Entrar", delay: 2000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 400, 0, 10000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 22.5, 425, 0, 10000] },
			{ type: "spawn", func: "marker", args: [false, 45, 200, 0, 8000, false] }, // safe 1
			{ type: "spawn", func: "vector", args: [553, 0, 0, 67.5, 425, 0, 10000] },
			{ type: "spawn", func: "marker", args: [false, 90, 200, 0, 750, false], delay: 8000 }, // safe 2
			{ type: "spawn", func: "vector", args: [553, 0, 0, 112.5, 425, 0, 10000] },
			{ type: "spawn", func: "marker", args: [false, 135, 200, 0, 8000, false] }, // safe 1
			{ type: "spawn", func: "vector", args: [553, 0, 0, 157.5, 425, 0, 10000] },
			{ type: "spawn", func: "marker", args: [false, 180, 200, 0, 750, false], delay: 8000 }, // safe 2
			{ type: "spawn", func: "vector", args: [553, 0, 0, 202.5, 425, 0, 10000] },
			{ type: "spawn", func: "marker", args: [false, 225, 200, 0, 8000, false] }, // safe 1
			{ type: "spawn", func: "vector", args: [553, 0, 0, 247.5, 425, 0, 10000] },
			{ type: "spawn", func: "marker", args: [false, 270, 200, 0, 750, false], delay: 8000 }, // safe 2
			{ type: "spawn", func: "vector", args: [553, 0, 0, 292.5, 425, 0, 10000] },
			{ type: "spawn", func: "marker", args: [false, 315, 200, 0, 8000, false] }, // safe 1
			{ type: "spawn", func: "vector", args: [553, 0, 0, 337.5, 425, 0, 10000] },
			{ type: "spawn", func: "marker", args: [false, 360, 200, 0, 750, false], delay: 8000 } // safe 2
		],
		// Waves
		"s-3109-2000-616-0": [{ type: "text", sub_type: "message", message: "Inward Wave (Gather)", message_ES: "Ola (Reunir)" }],
		"s-3109-2000-617-0": [{ type: "text", sub_type: "message", message: "Front | Back Waves", message_ES: "Ataque Frontal | Olas" }]
	};
};