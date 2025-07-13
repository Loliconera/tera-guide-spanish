// RK-9 Kennel
//
// made by michengs / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		// 1 BOSS
		"nd-735-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
    "s-735-1000-104-0": [{ type: "text", sub_type: "message", message: "Front Clip", message_ES: "Ataque frontal (Stun)" }],
    "s-735-1000-108-0": [{ type: "text", sub_type: "message", message: "Get Out", message_ES: "Salir" }], // крутилка
		"s-735-1000-111-0": [{ type: "text", sub_type: "message", message: "Back + Front", message_ES: "Ataque Atrás + Adelante" }],
		"s-735-1000-112-0": [{ type: "text", sub_type: "message", message: "Back", message_ES: "Ataque Atrás" }],
		"s-735-1000-304-0": [{ type: "text", sub_type: "message", message: "Out", message_ES: "Salir" }],
		"s-735-1000-305-0": [{ type: "text", sub_type: "message", message: "In", message_ES: "Entrar" }],
		"s-735-1000-306-0": [{ type: "text", sub_type: "message", message: "Bombs", message_ES: "Bombas" }],
		"s-735-1000-307-0": [{ type: "text", sub_type: "message", message: "Pull", message_ES: "Jalar" }],
    "s-735-1000-309-0": [
      { type: "text", sub_type: "message", message: "Four Missile", message_ES: "Lanzar 4 misiles" },
			{ type: "text", sub_type: "message", delay: 6000, message: "5", message_ES: "5" },
			{ type: "text", sub_type: "message", delay: 7000, message: "4", message_ES: "4" },
			{ type: "text", sub_type: "message", delay: 8000, message: "3", message_ES: "3" },
			{ type: "text", sub_type: "message", delay: 9000, message: "2", message_ES: "2" },
			{ type: "text", sub_type: "message", delay: 10000, message: "1", message_ES: "1" },
			{ type: "text", sub_type: "message", delay: 11000, message: "Jump", message_ES: "Saltar!" }      
    ],

		// 2 BOSS
		"nd-735-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-735-2000-102-0": [
			{ type: "text", sub_type: "message", message: "Pizza Cutter", message_ES: "Ataque Frontal" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 300, 12, 228, 0, 3000] }
		],
		"s-735-2000-105-0": [
			{ type: "text", sub_type: "message", message: "360", message_ES: "Giro (Repeler)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 278, 0, 4000] }
		],
		"s-735-2000-108-0": [
			{ type: "text", sub_type: "message", message: "Back Swipe", message_ES: "Ataque Atrás (Repeler)" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 240, 380, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 120, 380, 0, 2000] }
		],
		"s-735-2000-301-0": [{ type: "text", sub_type: "message", message: "Throwing Orb", message_ES: "Lanzar Bombas" }],
		"s-735-2000-304-0": [
			{ type: "text", sub_type: "message", message: "Get Out", message_ES: "Salir" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 400, 0, 4000] }
		],
		"s-735-2007-201-0": [
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 90, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 180, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 270, 500, 0, 4000] }
		],
		"s-735-2007-306-0": [
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 90, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 180, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 270, 500, 0, 4000] }
		],
		"s-735-2007-307-0": [
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 90, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 180, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 270, 500, 0, 4000] }
		],

		// 3 BOSS
		"nd-735-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
    "s-735-3000-116-0": [
      { type: "text", sub_type: "message", message: "Right Safe", message_ES: "Derecha Segura" },
      { type: "spawn", func: "marker", args: [false, 160, 300, 0, 3000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 340, 300, 0, 3000, true, null] },
			{ type: "spawn", func: "point", args: [553, 120, 250, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 130, 240, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 140, 230, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 150, 220, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 160, 210, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 170, 210, 180, 290, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 300, 250, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 310, 240, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 320, 230, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 330, 220, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 340, 210, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 350, 210, 0, 290, 0, 3000] }
		],
    "s-735-3000-117-0": [
      { type: "text", sub_type: "message", message: "Left Safe", message_ES: "Izquierda Segura" },
			{ type: "spawn", func: "marker", args: [false, 20, 300, 0, 3000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 200, 300, 0, 3000, true, null] },
			{ type: "spawn", func: "vector", args: [553, 10, 210, 0, 290, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 20, 210, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 30, 220, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 40, 230, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 50, 240, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 60, 250, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 240, 250, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 230, 240, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 220, 230, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 210, 220, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 200, 210, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 190, 210, 180, 290, 0, 3000] }
		],
		"s-735-3000-118-0": "s-735-3000-117-0",
		"s-735-3000-119-0": "s-735-3000-116-0",
		"s-735-3000-125-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Ataque frontal" }],
		"s-735-3000-126-0": [{ type: "text", sub_type: "message", message: "Front | Back", message_ES: "Ataque frontal | Ataque Atras" }],
		"s-735-3000-127-0": [{ type: "text", sub_type: "message", message: "Back", message_ES: "Ataque Atras" }],
		"s-735-3000-128-0": [
			{ type: "text", sub_type: "message", message: "Combo | Back Wave", message_ES: "Combo | Olas Atras" },
			{ type: "spawn", func: "vector", args: [553, 180, 40, 120, 1200, 2000, 3000] },
			{ type: "spawn", func: "vector", args: [553, 180, 40, 240, 1200, 2000, 3000] }
		],
		"s-735-3000-129-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Dodge", message_ES: "Iframe" }],
		"s-735-3000-305-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 300, 0, 7000] }],
    "s-735-3000-321-0": [{ type: "text", sub_type: "message", message: "Shield!", message_ES: "Escudo!" }],
		"s-735-3001-308-0": [
			{ type: "text", sub_type: "message", message: "Bait!", message_ES: "Bait!" },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 90, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 180, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 270, 300, 0, 2000] }
		],
		// Radar
		"qb-735-3000-735312": [{ type: "text", sub_type: "message", message: "!!! Radar !!!", message_ES: "!!! Radar !!!" }],
		"s-735-3000-324-0": [
			{ type: "text", sub_type: "message", message: "Out", message_ES: "Salir" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 10, 250, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 12, 200, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 14, 150, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 18, 100, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 50, 50, 0, 3000] }
		],
		"s-735-3000-325-0": [
			{ type: "text", sub_type: "message", message: "In", message_ES: "Entrar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] }
		]
	};
};