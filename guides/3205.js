// Cursed Fusion Laboratory
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	return {
		"nd-3205-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		"h-3205-1000-80": [{ type: "text", sub_type: "message", message: "80%", message_ES: "80%" }],
		"h-3205-1000-50": [{ type: "text", sub_type: "message", message: "50%", message_ES: "50%" }],
		"h-3205-1000-40": [{ type: "text", sub_type: "message", message: "40%", message_ES: "40%" }],
		"h-3205-1000-35": [{ type: "text", sub_type: "message", message: "35%", message_ES: "35%" }],

		"s-3205-1000-101-0": [{ type: "text", sub_type: "message", message: "Front Swing", message_ES: "Ataque Frontal" }],
		"s-3205-1000-102-0": [
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 300, 2000, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 300, 2000, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 150, 0, 300, 2000, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 150, 180, 300, 2000, 2000] },
			{ type: "text", sub_type: "message", message: "Disc Throw", message_ES: "Lanzar disco" }
		],
		"s-3205-1000-104-0": [
			{ type: "text", sub_type: "message", message: "Stun (AOE)", message_ES: "Stun (АОЕ)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 12, 250, 100, 3000] }
		],
		"s-3205-1000-108-0": [
			{ type: "text", sub_type: "message", message: "Push (Tank)", message_ES: "Empujar (Tank)" },
			{ type: "spawn", func: "vector", args: [553, 90, 60, 0, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 60, 0, 500, 0, 3000] }
		],
		"s-3205-1000-109-0": [
			{ type: "text", sub_type: "message", message: "Front Laser", message_ES: "Láser Frontal" },
			{ type: "spawn", func: "vector", args: [553, 90, 60, 0, 500, 1000, 4000] },
			{ type: "spawn", func: "vector", args: [553, 270, 60, 0, 500, 1000, 4000] }
		],
		"s-3205-1000-106-0": [{ type: "text", sub_type: "message", message: "Blades Front", message_ES: "Cuchillas Frontal" }],
		"s-3205-1000-112-0": [
			{ type: "text", sub_type: "message", message: "Blades Back", message_ES: "Cuchillas hacia atras" },
			{ type: "spawn", func: "vector", args: [553, 70, 10, 160, 350, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 290, 10, -160, 350, 0, 3000] }
		],
		"s-3205-1000-113-0": [
			{ type: "text", sub_type: "message", message: "Shot", message_ES: "Disparar" },
			{ type: "spawn", func: "vector", args: [553, 90, 60, 0, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 60, 0, 500, 0, 3000] }
		],
		"s-3205-1000-114-0": [
			{ type: "text", sub_type: "message", message: "Back Laser", message_ES: "Láser hacia atras" },
			{ type: "spawn", func: "vector", args: [553, 90, 60, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 60, 180, 500, 0, 2000] }
		],
		"s-3205-1000-120-0": [{ type: "text", sub_type: "message", message: "Storm", message_ES: "Tormenta" }],
		"s-3205-1000-107-0": [
			{ type: "text", sub_type: "message", message: "Spin (Kaia) | Back Laser", message_ES: "Girar (Kaia) | Láser hacia atras" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 12, 260, 100, 5000] }
		],
		"s-3205-1000-303-0": [{ type: "text", sub_type: "message", message: "Kick (Push)", message_ES: "Patada (Empujar)" }],

		// Donuts combo <80%
		"qb-3205-1000-32051013": [{ type: "text", sub_type: "message", message: "Donuts: Out > In > Dodge", message_ES: "Donas: Salir > Entrar > Iframe" }],
		"qb-3205-1000-32051014": [{ type: "text", sub_type: "message", message: "Donuts: In > Out > Dodge", message_ES: "Donas: Entrar > Salir > Iframe" }],
		"s-3205-1000-115-0": [
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "text", sub_type: "message", delay: 5000, message: "Dodge", message_ES: "Iframe" }
		],
		"s-3205-1000-116-0": [
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "text", sub_type: "message", delay: 5000, message: "Dodge", message_ES: "Iframe" }
		],

		"qb-3205-1000-32051002": [{ type: "text", sub_type: "message", message: "Shield!", message_ES: "¡ESCUDO!" }], // <50%
		"s-3205-1000-123-0": [{ type: "text", sub_type: "message", message: "Break Failure", message_ES: "ESCUDO No Perforado" }],

		"qb-3205-1000-32051004": [{ type: "text", sub_type: "message", message: "Bait (Lasers)", message_ES: "Bait (Láseres)" }], // range check
		"qb-3205-1000-32051005": [{ type: "text", sub_type: "message", message: "Bait (Storm)", message_ES: "Bait (Tormenta)" }], // get stun
		"qb-3205-1000-32051006": [{ type: "text", sub_type: "message", message: "Bait (Blades)", message_ES: "Bait (Cuchillas)" }], // cast ress
		"qb-3205-1000-32051007": [{ type: "text", sub_type: "message", message: "Puddles", message_ES: "Charcos" }], // <40%

		// Core mech <35%
		"qb-3205-1000-32051010": [{ type: "text", sub_type: "message", message: "Lasers + Wave", message_ES: "Láseres + Ola" }],
		"s-3205-1000-304-0": [ // red
			{ type: "text", sub_type: "message", message: "Dodge!", message_ES: "Iframe!", delay: 200 },
			{ type: "text", sub_type: "message", message: "Plague of Exhaustion", message_ES: "Plague", class_position: "priest", delay: 1000 },
			{ type: "text", sub_type: "message", message: "Regression", message_ES: "Regression", class_position: "mystic", delay: 1000 },
			{ type: "text", sub_type: "message", message: "Give Stun!", message_ES: "¡Usar Stun!", delay: 2000 }
		],
		"s-3205-1000-305-0": [ // blue
			{ type: "text", sub_type: "message", message: "Dodge!", message_ES: "Iframe!", delay: 200 },
			{ type: "text", sub_type: "message", message: "Give Stun!", message_ES: "¡Usar Stun!", delay: 2000 }
		],
		"s-3205-1000-121-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "АоЕ" }], // red
		"s-3205-1000-122-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "АоЕ" }], // blue

		"qb-3205-1000-32051011": [{ type: "text", sub_type: "message", message: "Lasers!", message_ES: "Láseres!" }], // <80%

		"s-3205-1001-101-0": [{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 3000, 0, 5000] }], // laser (basic)
		"s-3205-1002-101-0": "s-3205-1001-101-0",
		"s-3205-1003-101-0": "s-3205-1001-101-0",
		"s-3205-1004-101-0": "s-3205-1001-101-0",
		"s-3205-1005-101-0": "s-3205-1001-101-0",
		"s-3205-1006-101-0": "s-3205-1001-101-0",

		"s-3205-1001-102-0": [{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 3000, 0, 5000] }], // laser (bait)
		"s-3205-1002-102-0": "s-3205-1001-102-0",
		"s-3205-1003-102-0": "s-3205-1001-102-0",
		"s-3205-1004-102-0": "s-3205-1001-102-0",
		"s-3205-1005-102-0": "s-3205-1001-102-0",
		"s-3205-1006-102-0": "s-3205-1001-102-0",

		"s-3205-1001-103-0": [{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 3000, 0, 5000] }], // laser (core)
		"s-3205-1002-103-0": "s-3205-1001-103-0",
		"s-3205-1003-103-0": "s-3205-1001-103-0",
		"s-3205-1004-103-0": "s-3205-1001-103-0",
		"s-3205-1005-103-0": "s-3205-1001-103-0",
		"s-3205-1006-103-0": "s-3205-1001-103-0"
	};
};