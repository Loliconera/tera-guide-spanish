// Red Refuge
//
// hecho por multarix

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
		"s-739-1000-112-0": [{ type: "text", sub_type: "message", message: "Back Spray", message_ES: "Ataque atrás" }],
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
		"s-739-2000-108-0": [{ type: "text", sub_type: "message", message: "Clense", message_ES: "Cleanse", class_position: "heal" }],
		"s-739-2000-115-0": [
			{ type: "text", sub_type: "message", message: "Whirlwind", message_ES: "Vortice" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 360, 0, 6500] }
		],
		"s-739-2000-119-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Ataque Frontal" }],
		"s-739-2000-120-0": [{ type: "text", sub_type: "message", message: "Back", message_ES: "Ataque atrás" }],
		"s-739-2000-303-0": [{ type: "text", sub_type: "message", message: "Whip", message_ES: "Latigo" }],

		// 3 BOSS
		"nd-739-3001": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],		
		"h-739-3001-30": [{ type: "text", sub_type: "message", message: "Reveal soon...", message_ES: "Revelacion pronto..." }],
		"s-739-3001-201-0": [{ type: "text", sub_type: "message", delay: 3600, message: "Dodge!", message_ES: "¡Iframe!" }],
		"s-739-3001-107-0": [{ type: "text", sub_type: "message", message: "Many Hits", message_ES: "Muchos Hits" }],
		"s-739-3001-115-0": [
			{ type: "text", sub_type: "message", delay: 1750, message: "Dodge!", message_ES: "¡Iframe!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 630, 0, 4000] }
		],
		"s-739-3001-118-0": [{ type: "text", sub_type: "message", message: "Scratching", message_ES: "Garras" }],
		// Revealed Argog
		"s-739-3001-167-0": [{ type: "text", sub_type: "message", message: "Many Hits", message_ES: "Muchos Hits" }],
		"s-739-3001-175-0": [
			{ type: "text", sub_type: "message", delay: 1750, message: "Dodge!", message_ES: "¡Iframe!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 630, 0, 4000] }
		],
		"s-739-3001-178-0": [{ type: "text", sub_type: "message", message: "Scratching (bleed)", message_ES: "Garras (sangrar)" }]
	};
};