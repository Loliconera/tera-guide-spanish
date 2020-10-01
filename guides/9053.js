// Kezzel's Gorge
//
// Hecho por Multarix

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		"nd-453-999": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-453-999-103-0": [{ type: "text", sub_type: "message", message: "Smash (Left)", message_ES: "Golpe (Izquierdo)" }],
		"s-453-999-104-0": [{ type: "text", sub_type: "message", message: "Smash (Right)", message_ES: "Golpe (Derecho)" }],
		"s-453-999-105-0": [
			{ type: "text", sub_type: "message", message: "Rock Smash", message_ES: "Golpe Roca (Tank)", class_position: "tank" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 210, 14, 190, 0, 3000] }
		],
		"s-453-999-106-0": [
			{ type: "text", sub_type: "message", message: "Blast", message_ES: "Disparar" },
			{ type: "text", sub_type: "message", message: "Dodge!", message_ES: "¡Iframe!", delay: 2000 }
		],
		"s-453-999-107-0": [{ type: "text", sub_type: "message", message: "Whip", message_ES: "Látigo" }],
		"s-453-999-116-0": [{ type: "text", sub_type: "message", message: "Shield", message_ES: "Escudo" }],
		"s-453-999-119-0": [
			{ type: "text", sub_type: "message", message: "Kaia's Shield", message_ES: "Kaia's Shield", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Thrall of Protection", message_ES: "Thrall of Protection", class_position: "mystic" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 10, 500, 0, 6000] }
		],
		"s-453-999-120-0": [
			{ type: "text", sub_type: "message", message: "AoE Waves", message_ES: "AoE Olas" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 14, 200, 0, 7000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 390, 0, 7000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 8, 590, 0, 7000] }
		]
	};
};