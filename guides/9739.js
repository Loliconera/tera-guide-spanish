// Red Refuge
//
// made by multarix

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		// 1 BOSS
		"nd-739-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-739-1000-105-0": [{ type: "text", sub_type: "message", message: "Turn + Breath", message_ES: "Girar + Respirar" }],
		"s-739-1000-308-0": [
			{ type: "text", sub_type: "message", message: "In > Out", message_ES: "Entrar > Salir" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 7500] }
		],
		"s-739-1000-308-1": [{ type: "text", sub_type: "message", message: "Out", message_ES: "Salir" }],
		"s-739-1000-112-0": [{ type: "text", sub_type: "message", message: "Back Spray", message_ES: "Ataque Atrás" }],
		"s-739-1000-107-0": [{ type: "text", sub_type: "message", message: "Jump", message_ES: "Saltar" }],
		"s-739-1000-306-0": [
			{ type: "text", sub_type: "message", message: "Out > In", message_ES: "Salir > Entrar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 7500] }
		],
		"s-739-1000-306-1": [{ type: "text", sub_type: "message", message: "In", message_ES: "Entrar" }],

		// 2 BOSS
		"nd-739-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-739-2000-105-0": [
			{ type: "text", sub_type: "message", message: "360", message_ES: "Girar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 2500] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 510, 0, 2500] }
		],
		"s-739-2000-113-0": [{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun" }],
		"s-739-2000-108-0": [
			{ type: "text", sub_type: "message", message: "Cleanse", message_ES: "Cleanse", class_position: "heal" },
			{ type: "text", sub_type: "message", message: "Spin", message_ES: "Girar", class_position: ["tank", "dps"] }
		],
		"s-739-2000-115-0": [
			{ type: "text", sub_type: "message", message: "Whirlwind", message_ES: "Vórtice" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 360, 0, 6500] }
		],
		"s-739-2000-119-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Ataque Frontal" }],
		"s-739-2000-120-0": [{ type: "text", sub_type: "message", message: "Back", message_ES: "Ataque Atrás" }],
		"s-739-2000-303-0": [
			{ type: "text", sub_type: "message", message: "Whip", message_ES: "Látigo" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", delay: 1650 }
		],

		// 3 BOSS
		"nd-739-3001": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-739-3001-30": [{ type: "text", sub_type: "message", message: "Reveal soon...", message_ES: "Revelar pronto..." }],
		"s-739-3001-201-0": [
			{ type: "text", sub_type: "message", message: "Stun (Pushback)", message_ES: "Stun (Empujar)" },
			{ type: "text", sub_type: "message", delay: 1000, message: "3" },
			{ type: "text", sub_type: "message", delay: 2000, message: "2" },
			{ type: "text", sub_type: "message", delay: 3000, message: "1" },
			{ type: "text", sub_type: "message", delay: 4000, message: "Dodge!", message_ES: "¡Iframe!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 630, 0, 5000] }
		],
		"s-739-3001-107-0": [{ type: "text", sub_type: "message", message: "Many Hits", message_ES: "Muchos Golpes" }],
		"s-739-3001-112-0": [{ type: "text", sub_type: "message", message: "Target", message_ES: "Objetivo" }],
		"s-739-3001-115-0": [
			{ type: "text", sub_type: "message", message: "Incoming Stun", message_ES: "Rugido" },
			{ type: "text", sub_type: "message", delay: 1800, message: "Dodge!", message_ES: "¡Iframe!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 630, 0, 4000] }
		],
		"s-739-3001-118-0": [{ type: "text", sub_type: "message", message: "Scratching", message_ES: "Garras" }],
		"s-739-3001-164-0": [{ type: "text", sub_type: "message", message: "Counter Attack (bleed)", message_ES: "Contraataque (Sangrar)" }],
		"s-739-3001-167-0": [{ type: "text", sub_type: "message", message: "Many Hits", message_ES: "Muchos Golpes" }],
		"s-739-3001-172-0": "s-739-3001-112-0",
		"s-739-3001-301-0": "s-739-3001-112-0",
		"s-739-3001-302-0": "s-739-3001-112-0",
		"s-739-3001-170-0": [
			{ type: "text", sub_type: "message", message: "Turn + Pushback", message_ES: "Girar + Empuje" },
			{ type: "text", sub_type: "message", message: "Pushback", message_ES: "Empujar", delay: 2700 }
		],
		"s-739-3001-175-0": [
			{ type: "text", sub_type: "message", message: "Incoming Stun", message_ES: "Rugido" },
			{ type: "text", sub_type: "message", delay: 1800, message: "Dodge!", message_ES: "¡Iframe!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 630, 0, 4000] }
		],
		"s-739-3001-177-0": [{ type: "text", sub_type: "message", message: "Backstab", message_ES: "Atrás + Adelante" }],
		"s-739-3001-178-0": [{ type: "text", sub_type: "message", message: "Scratching (bleed)", message_ES: "Garras (Sangrar)" }],
		"s-739-3001-203-0": [{ type: "text", sub_type: "message", message: "Phantom x3 (bleed)", message_ES: "Fantasma x3 (Sangrar)" }],
		"s-739-3001-207-0": [{ type: "text", sub_type: "message", message: "Phantom x5 (bleed)", message_ES: "Fantasma x5 (Sangrar)" }],
		"s-739-3001-213-0": [{ type: "text", sub_type: "message", message: "Reveal | Phantom (bleed)", message_ES: "Revelar | Fantasma (Sangrar)" }],
		"s-739-3001-212-0": [{ type: "text", sub_type: "message", message: "Flash", message_ES: "Flash" }]
	};
};