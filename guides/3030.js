// Commander's Residence - BETA
//
// Hecha por Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	let print_test = true;
	return {
		// 1 Maknakh
		
		"nd-3030-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3030-1000-117-0": [{ type: "text", sub_type: "message", message_ES: "Mano Izquierda | Ataque" }],
		"s-3030-1000-114-0": [{ type: "text", sub_type: "message", message_ES: "Empujar (Repeler)" }],
		"s-3030-1000-303-0": [{ type: "text", sub_type: "message", message_ES: "Meteoritos AOE" }],
		"s-3030-1000-120-0": [{ type: "text", sub_type: "message", message_ES: "Empuje Frontal" }],
		"s-3030-1000-104-0": [{ type: "text", sub_type: "message", message_ES: "Fuego Frontal" }],
		"s-3030-1000-113-0": [{ type: "text", sub_type: "message", message_ES: "Círculo AOE Frontal" }],
		"s-3030-1000-108-0": [{ type: "text", sub_type: "message", message_ES: "Espinas Frontal" }],
		"s-3030-1000-305-0": [{ type: "text", sub_type: "message", message_ES: "Círculo AOE Frontal" }],
		"s-3030-1000-301-0": [{ type: "text", sub_type: "message", message_ES: "Ataque Frontal | Stun" }],
		"s-3030-1000-307-0": [{ type: "text", sub_type: "message", message_ES: "Coletazo (Stun)" }],
		"s-3030-1000-112-0": [{ type: "text", sub_type: "message", message_ES: "Salto" }],
		"s-3030-1000-105-0": [{ type: "text", sub_type: "message", message_ES: "Fuego Frontal" }],
		"am-3030-1000-99000580": [{ type: "text", sub_type: "message", message_ES: "Ataque de Espinas " }],
		//"s-3030-1000-203-0": [{ type: "text", sub_type: "message", message_ES: "AOE" }],
		//"s-3030-1000-108-0": [{ type: "text", sub_type: "message", message_ES: "AOE" }],


		// 2 LB-1
		"nd-3030-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],	
		"s-3030-2000-309-0":  [
            { type: "text", sub_type: "message", message_ES: "Círculos AOE | Stun", check_func: () => print_test },
            { type: "func", func: () => print_test = false },
            { type: "func", func: () => print_test = true, delay: 4000 }
		],
		"s-3030-2000-302-0":  [
            { type: "text", sub_type: "message", message_ES: "Círculo Stun | Combo Frontal", check_func: () => print_test },
            { type: "func", func: () => print_test = false },
            { type: "func", func: () => print_test = true, delay: 6000 }
		],
		"s-3030-2000-105-0":  [
            { type: "text", sub_type: "message", message_ES: "Laser Frontal (Stun)", check_func: () => print_test },
            { type: "func", func: () => print_test = false },
            { type: "func", func: () => print_test = true, delay: 15000 }
		],
		"s-3030-2000-103-0": [{ type: "text", sub_type: "message", message_ES: "Ataque Frontal" }],
		"s-3030-2000-101-0": [{ type: "text", sub_type: "message", message_ES: "Garras Frontal" }],
		"s-3030-2000-104-0": [{ type: "text", sub_type: "message", message_ES: "Ataque Frontal | Stun" }],
		"s-3030-2000-112-0": [{ type: "text", sub_type: "message", message_ES: "Ataque hacia atrás (Fuego)" }],
		"s-3030-2000-305-0": [{ type: "text", sub_type: "message", message_ES: "Círculos AOE" }],
		"s-3030-2000-109-0": [{ type: "text", sub_type: "message", message_ES: "Laser hacia atrás | Stun" }],	
		"s-3030-2000-301-0": [{ type: "text", sub_type: "message", message_ES: "Giro (Debuff)" }]
	};
};