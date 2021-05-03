// Commander's Residence
//
// Hecha por Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {

	let print_stun = true;

	return {
		// Maknakh
		"nd-3030-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3030-1000-117-0": [{ type: "text", sub_type: "message", message: "Left Hand Attack", message_ES: "Mano Izquierda" }],
		"s-3030-1000-114-0": [{ type: "text", sub_type: "message", message: "Push (Repel)", message_ES: "Empujar" }],
		"s-3030-1000-303-0": [{ type: "text", sub_type: "message", message: "Meteors AOE", message_ES: "Meteoros (AOE)" }],
		"s-3030-1000-120-0": [{ type: "text", sub_type: "message", message: "Push Front", message_ES: "Empuje Frontal" }],
		"s-3030-1000-104-0": [{ type: "text", sub_type: "message", message: "Fire Front", message_ES: "Fuego Frontal" }],
		"s-3030-1000-113-0": [{ type: "text", sub_type: "message", message: "Circle AOE Front", message_ES: "Círculo Frontal AOE" }],
		"s-3030-1000-108-0": [{ type: "text", sub_type: "message", message: "Frontal Thorns", message_ES: "Espinas Frontales" }],
		"s-3030-1000-305-0": [{ type: "text", sub_type: "message", message: "Circle AOE Front", message_ES: "Círculo Frontal AOE" }],
		"s-3030-1000-301-0": [{ type: "text", sub_type: "message", message: "Hit Frontal | Stun", message_ES: "Ataque Frontal | Stun" }],
		"s-3030-1000-307-0": [{ type: "text", sub_type: "message", message: "Tail Stun", message_ES: "Coletazo (Stun)" }],
		"s-3030-1000-112-0": [{ type: "text", sub_type: "message", message: "Jump", message_ES: "Saltar" }],
		"s-3030-1000-105-0": [{ type: "text", sub_type: "message", message: "Front Fire", message_ES: "Fuego Frontal" }],
		"am-3030-1000-99000580": [{ type: "text", sub_type: "message", message: "Hit Thorns", message_ES: "Espinas" }],
		// "s-3030-1000-203-0": [{ type: "text", sub_type: "message", message: "AOE", message_ES: "АОЕ" }],
		// "s-3030-1000-108-0": [{ type: "text", sub_type: "message", message: "AOE", message_ES: "АОЕ" }],

		// LB-1
		"nd-3030-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3030-2000-309-0": [
			{ type: "text", sub_type: "message", message: "AOE circles | Stun", message_ES: "АОЕ Círculos | Stun", check_func: () => print_stun },
			{ type: "func", func: () => print_stun = false },
			{ type: "func", func: () => print_stun = true, delay: 4000 }
		],
		"s-3030-2000-302-0": [
			{ type: "text", sub_type: "message", message: "Circle Stun Front Combo", message_ES: "Círculos Stun | Combo Frontal", check_func: () => print_stun },
			{ type: "func", func: () => print_stun = false },
			{ type: "func", func: () => print_stun = true, delay: 6000 }
		],
		"s-3030-2000-105-0": [
			{ type: "text", sub_type: "message", message: "Laser Frontal (Stun)", message_ES: "Láser (Stun)", check_func: () => print_stun },
			{ type: "func", func: () => print_stun = false },
			{ type: "func", func: () => print_stun = true, delay: 15000 }
		],
		"s-3030-2000-103-0": [{ type: "text", sub_type: "message", message: "Hit Frontal", message_ES: "Ataque Frontal" }],
		"s-3030-2000-101-0": [{ type: "text", sub_type: "message", message: "Claws Front", message_ES: "Garras" }],
		"s-3030-2000-104-0": [{ type: "text", sub_type: "message", message: "Front Attack | Stun", message_ES: "Atacar Frontal | Stun" }],
		"s-3030-2000-112-0": [{ type: "text", sub_type: "message", message: "Attack Behind (Fire)", message_ES: "Ataque por detrás (Fuego)" }],
		"s-3030-2000-305-0": [{ type: "text", sub_type: "message", message: "Circles AOE", message_ES: "Círculos АОЕ" }],
		"s-3030-2000-109-0": [{ type: "text", sub_type: "message", message: "Laser Back | Stun", message_ES: "Láser hacia atras | Stun" }],
		"s-3030-2000-301-0": [{ type: "text", sub_type: "message", message: "Turn Debuff", message_ES: "Girar (Debuff)" }]
	};
};