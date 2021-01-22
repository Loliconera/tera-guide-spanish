// Gossamer Vault
//
// hecho por michengs

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		// 1 BOSS
		"s-3101-1000-124-0": [{ "type": "text", "class_position": "tank", "sub_type": "msgcg", "message": "Stun Attack", "message_ES": "Stun" }],
		"s-3101-1000-127-0": [{ "type": "text", "class_position": "dps", "sub_type": "message", "message": "Back", "message_ES": "Ataque hacia atras" },
			{ "type": "text", "class_position": "heal", "sub_type": "message", "message": "Back", "message_ES": "Ataque hacia atras" }],
		"s-3101-1000-131-0": [{ "type": "text", "class_position": "dps", "sub_type": "message", "message": "Ranged DPS attention", "message_ES": "Atención DPS a distancia" },
			{ "type": "text", "class_position": "heal", "sub_type": "message", "message": "Ranged DPS Attention", "message_ES": "Atención DPS a distancia" }
		],
		"s-3101-1000-133-0": [{ "type": "text", "sub_type": "message", "message": "Jump (Fast)", "message_ES": "Saltar (rápido)" }],
		"s-3101-1000-138-0": [{ "type": "text", "sub_type": "message", "message": "Jump P (Fast)", "message_ES": "Saltar P (rápido)" }],
		"s-3101-1000-139-0": [{ "type": "text", "sub_type": "message", "message": "Back + Front (Fast)", "message_ES": "Ataque hacia Atrás + Frontal (Rápido)" }],
		"s-3101-1000-148-0": [{ "type": "text", "sub_type": "message", "message": "Right Hand (Flying)", "message_ES": "Mano derecha (volar)" }],
		"s-3101-1000-149-0": [{ "type": "text", "sub_type": "message", "message": "Left Hand (Flying)", "message_ES": "Mano izquierda (volar)" }],
		"s-3101-1000-305-0": [{ "type": "text", "sub_type": "message", "message": "Pizza", "message_ES": "Pizza" }],
		"s-3101-1000-313-0": [
			{ "type": "text", "sub_type": "message", "message": "Circles (Slow)", "message_ES": "Círculos (lento)" },
			{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 75, 10, 300, 0, 6000] }
		],

		// 2 BOSS
		"s-3101-2000-108-0": [{ "type": "text", "sub_type": "message", "message": "Back Attack!", "message_ES": "¡Ataque hacia atras!" }],
		"s-3101-2000-150-0": [{ "type": "text", "sub_type": "message", "message": "Phantom", "message_ES": "Fantasma" }],
		"s-3101-2000-228-0": [{ "type": "text", "sub_type": "message", "message": "Team Up", "message_ES": "¡Reunirse!" }],
		"s-3101-2000-230-0": [{ "type": "text", "sub_type": "message", "message": "AOE", "message_ES": "AOE" }],
		"s-3101-2000-231-0": [
			{ "type": "text", "sub_type": "message", "message": "Out Safe", "message_ES": "Salir Seguro" },
			{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 10, 300, 0, 3000] }
		],
		"s-3101-2000-232-0": [
			{ "type": "text", "sub_type": "message", "message": "In Safe", "message_ES": "Entrar Seguro" },
			{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 10, 300, 0, 3000] },
			{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 3, 875, 0, 3000] }
		],
		"s-3101-2000-234-0": [{ "type": "text", "sub_type": "message", "message": "Debuffs", "message_ES": "Debuffs" }],
		"s-3101-2000-235-0": [{ "type": "text", "sub_type": "message", "message": "Debuffs", "message_ES": "Debuffs" }]
	};
};