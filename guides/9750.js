// Rift's Edge (10-Person)
//
// made by ITunk

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		// 1 BOSS
		"nd-750-1001": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-750-1001-1102-0": [
			{ type: "text", sub_type: "message", message: "Spin", message_ES: "Girar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 375, 0, 3300] }
		],
		"s-750-1001-1115-0": [
			{ type: "text", sub_type: "message", message: "Floor", message_ES: "Ataque de Piso" },
			{ type: "spawn", func: "vector", args: [553, 50, 75, 0, 700, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, -50, 75, 0, 700, 0, 1400] }
		],
		"s-750-1001-1116-1": [
			{ type: "text", sub_type: "message", message: "Knockdown", message_ES: "Derribar" },
			{ type: "spawn", func: "vector", args: [553, 90, 125, 0, 1200, 0, 1600] },
			{ type: "spawn", func: "vector", args: [553, 270, 125, 0, 1200, 0, 1600] }
		],
		"s-750-1001-2102-0": [
			{ type: "text", sub_type: "message", message: "Spin", message_ES: "Girar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 375, 0, 2900] }
		],
		"s-750-1001-2115-0": [
			{ type: "text", sub_type: "message", message: "Floor", message_ES: "Ataque de Piso" },
			{ type: "spawn", func: "vector", args: [553, 25, 75, 0, 700, 0, 1200] },
			{ type: "spawn", func: "vector", args: [553, -25, 75, 0, 700, 0, 1200] }
		],
		"s-750-1001-2116-1": [
			{ type: "text", sub_type: "message", message: "Knockdown", message_ES: "Derribar" },
			{ type: "spawn", func: "vector", args: [553, 90, 125, 0, 1200, 0, 1600] },
			{ type: "spawn", func: "vector", args: [553, 270, 125, 0, 1200, 0, 1600] }
		],

		// 2 BOSS
		"nd-750-1002": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-750-1002-1113-0": [{ type: "text", sub_type: "message", message: "Discarding", message_ES: "Tres caídas" }],
		"s-750-1002-2113-0": [{ type: "text", sub_type: "message", message: "Discarding", message_ES: "Tres caídas" }],
		"s-750-1002-1114-0": [{ type: "text", sub_type: "message", message: "Discarding", message_ES: "Tres caídas" }],
		"s-750-1002-2114-0": [{ type: "text", sub_type: "message", message: "Discarding", message_ES: "Tres caídas" }],
		"s-750-1002-1115-0": [{ type: "text", sub_type: "message", message: "Flying Attack", message_ES: "Ataque volador" }],
		"s-750-1002-2115-0": [{ type: "text", sub_type: "message", message: "Flying Attack", message_ES: "Ataque volador" }],
		"s-750-1002-1116-0": [{ type: "text", sub_type: "message", message: "A swarm of bees", message_ES: "Enjambre de abejas" }],
		"s-750-1002-2116-0": [{ type: "text", sub_type: "message", message: "A swarm of bees", message_ES: "Enjambre de abejas" }],
		"s-750-1002-1117-0": [{ type: "text", sub_type: "message", message: "Rise (Kaia)", message_ES: "Elevar (Kaia)" }],
		"s-750-1002-2117-0": [{ type: "text", sub_type: "message", message: "Rise (Kaia)", message_ES: "Elevar (Kaia)" }],
		"s-750-1002-1205-0": [
			{ type: "text", sub_type: "message", message: "Plague of Exhaustion", message_ES: "Plague", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Regression", message_ES: "Regression", class_position: "mystic" }
		],
		"s-750-1002-1210-0": [{ type: "text", sub_type: "message", message: "Knockdown", message_ES: "Derribar" }],
		"s-750-1002-2210-0": [{ type: "text", sub_type: "message", message: "Knockdown", message_ES: "Derribar" }],

		// 3 BOSS
		"nd-750-1003": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-750-1003-1107-2": [{ type: "text", sub_type: "message", message: "Knockdown", message_ES: "Derribar" }],
		"s-750-1003-2107-2": [{ type: "text", sub_type: "message", message: "Knockdown", message_ES: "Derribar" }],
		"s-750-1003-1115-0": [{ type: "text", sub_type: "message", message: "Knockdown", message_ES: "Derribar" }],
		"s-750-1003-2115-0": [{ type: "text", sub_type: "message", message: "Knockdown", message_ES: "Derribar" }],
		"s-750-1003-1313-0": [
			{ type: "text", sub_type: "message", message: "Column", message_ES: "Columna" },
			{ type: "text", sub_type: "message", delay: 8000, message: "Dodge", message_ES: "Iframe" }
		],
		"s-750-1003-1315-0": [
			{ type: "text", sub_type: "message", message: "Break Shield", message_ES: "Romper Escudo", class_position: ["tank", "dps"] },
			{ type: "text", sub_type: "message", message: "Plague of Exhaustion", message_ES: "Plague", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Regression", message_ES: "Regression", class_position: "mystic" }
		]
	};
};