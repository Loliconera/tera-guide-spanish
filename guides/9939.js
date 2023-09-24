// Red Refuge (Hard)
//
// made by multarix

module.exports = (dispatch, handlers, guide, lang) => {
	let first_boss_debuff = false;

	return {
		// 1 BOSS
		"nd-939-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-939-1000-105-0": [{ type: "text", sub_type: "message", message: "Turn + Breath", message_ES: "Girar + Respirar" }],
		"die": [{ type: "func", func: () => { first_boss_debuff = false; } }],
		"ar-0-0-93910005": [{ type: "func", func: () => first_boss_debuff = false }],
		"ae-0-0-93910005": [{ type: "func", func: () => first_boss_debuff = true }],
		"s-939-93910-305-0": [
			{ type: "text", sub_type: "message", message: "Enter the big circle", message_ES: "Entra en el gran círculo", check_func: () => first_boss_debuff },
			{ type: "text", sub_type: "message", message: "Exit the big circle", message_ES: "Sal del gran círculo", check_func: () => !first_boss_debuff }
		],
		"s-939-93911-305-0": "s-939-93910-305-0",
		"s-939-93912-305-0": "s-939-93910-305-0",
		"s-939-93913-305-0": "s-939-93910-305-0",
		"s-939-93914-305-0": "s-939-93910-305-0",
		"s-939-1000-308-0": [
			{ type: "text", sub_type: "message", message: "In > Out", message_ES: "Entrar > Salir" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 7500] },
			{ type: "text", sub_type: "message", message: "Out", message_ES: "Salir", delay: 3900 }
		],
		"s-939-1000-112-0": [{ type: "text", sub_type: "message", message: "Back Spray", message_ES: "Ataque Atrás" }],
		"s-939-1000-120-0": "s-939-1000-112-0",
		"s-939-1000-113-0": [{ type: "text", sub_type: "message", message: "Back Spray + Fire Wave", message_ES: "Ataque Atrás + Ola de fuego" }],
		"s-939-1000-115-0": [{ type: "text", sub_type: "message", message: "Front Spray + Fire Wave", message_ES: "Ataque Adelante + Ola de fuego" }],
		"s-939-1000-107-0": [{ type: "text", sub_type: "message", message: "Jump", message_ES: "Saltar" }],
		"s-939-1000-117-0": [{ type: "text", sub_type: "message", message: "Jump + Spin", message_ES: "Saltar + Girar" }],
		"s-939-1000-119-0": [{ type: "text", sub_type: "message", message: "Many Hits", message_ES: "Muchos Golpes" }],
		"s-939-1000-306-0": [
			{ type: "text", sub_type: "message", message: "Out > In", message_ES: "Salir > Entrar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 7500] },
			{ type: "text", sub_type: "message", message: "In", message_ES: "Entrar", delay: 3700 }
		],

		// 2 BOSS
		"nd-939-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-939-2000-105-0": [
			{ type: "text", sub_type: "message", message: "360", message_ES: "Girar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 2500] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 510, 0, 2500] }
		],
		"s-939-2000-113-0": [{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun" }],
		"s-939-2000-108-0": [
			{ type: "text", sub_type: "message", message: "Cleanse", message_ES: "Cleanse", class_position: "heal" },
			{ type: "text", sub_type: "message", message: "Spin", message_ES: "Girar", class_position: ["tank", "dps"] }
		],
		"s-939-2000-115-0": [
			{ type: "text", sub_type: "message", message: "Whirlwind", message_ES: "Vórtice" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 360, 0, 6500] }
		],
		"s-939-2000-119-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Ataque Frontal" }],
		"s-939-2000-120-0": [{ type: "text", sub_type: "message", message: "Back", message_ES: "Ataque Atrás" }],
		"s-939-2000-303-0": [
			{ type: "text", sub_type: "message", message: "Whip", message_ES: "Látigo" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", delay: 1650 }
		],
		"s-939-2000-304-0": [
			{ type: "text", sub_type: "message", message: "Pull", message_ES: "Pull" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", delay: 1650 }
		],

		// 3 BOSS
		"nd-939-3001": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-939-3001-30": [{ type: "text", sub_type: "message", message: "Reveal soon...", message_ES: "Revelar pronto..." }],
		"s-939-3001-201-0": [
			{ type: "text", sub_type: "message", message: "Stun (Pushback)", message_ES: "Stun (Empujar)" },
			{ type: "text", sub_type: "message", delay: 1000, message: "3" },
			{ type: "text", sub_type: "message", delay: 2000, message: "2" },
			{ type: "text", sub_type: "message", delay: 3000, message: "1" },
			{ type: "text", sub_type: "message", delay: 4000, message: "Dodge!", message_ES: "Iframe!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 630, 0, 5000] }
		],
		"s-939-3001-107-0": [{ type: "text", sub_type: "message", message: "Many Hits", message_ES: "Muchos Golpes" }],
		"s-939-3001-112-0": [{ type: "text", sub_type: "message", message: "Target", message_ES: "Objetivo" }],
		"s-939-3001-115-0": [
			{ type: "text", sub_type: "message", message: "Incoming Stun", message_ES: "Stun" },
			{ type: "text", sub_type: "message", delay: 1600, message: "Dodge!", message_ES: "Iframe!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 630, 0, 4000] }
		],
		"s-939-3001-118-0": [{ type: "text", sub_type: "message", message: "Scratching", message_ES: "Garras" }],
		"s-939-3001-164-0": [{ type: "text", sub_type: "message", message: "Counter Attack (bleed)", message_ES: "Contraataque (Sangrar)" }],
		"s-939-3001-167-0": [{ type: "text", sub_type: "message", message: "Many Hits", message_ES: "Muchos Golpes" }],
		"s-939-3001-172-0": "s-939-3001-112-0",
		"s-939-3001-301-0": "s-939-3001-112-0",
		"s-939-3001-302-0": "s-939-3001-112-0",
		"s-939-3001-170-0": [
			{ type: "text", sub_type: "message", message: "Turn + Pushback", message_ES: "Girar + Empuje" },
			{ type: "text", sub_type: "message", message: "Pushback", message_ES: "Empujar", delay: 2700 }
		],
		"s-939-3001-175-0": [
			{ type: "text", sub_type: "message", message: "Incoming Stun", message_ES: "Stun" },
			{ type: "text", sub_type: "message", delay: 1600, message: "Dodge!", message_ES: "Iframe!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 630, 0, 4000] }
		],
		"s-939-3001-177-0": [{ type: "text", sub_type: "message", message: "Backstab", message_ES: "Atrás + Adelante" }],
		"s-939-3001-178-0": [{ type: "text", sub_type: "message", message: "Scratching (bleed)", message_ES: "Garras (Sangrar)" }],
		"s-939-3001-203-0": [{ type: "text", sub_type: "message", message: "Phantom x3 (bleed)", message_ES: "Fantasma x3 (Sangrar)" }],
		"s-939-3001-207-0": [{ type: "text", sub_type: "message", message: "Phantom x5 (bleed)", message_ES: "Fantasma x5 (Sangrar)" }],
		"s-939-3001-213-0": [{ type: "text", sub_type: "message", message: "Reveal | Phantom (bleed)", message_ES: "Revelar | Fantasma (Sangrar)" }],
		"s-939-3001-212-0": [{ type: "text", sub_type: "message", message: "Flash", message_ES: "Flash" }]
	};
};