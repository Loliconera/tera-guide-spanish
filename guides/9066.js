// Demon's Wheel
//
// made by michengs / Calvary

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let	print = false;
	let msg_num = null;

	const mech_messages = {
		0: { message: "Don't hit RED",	message_ES: "No golpees ROJO" },
		1: { message: "Don't hit WHITE",message_ES: "No golpees BLANCO" },
		2: { message: "Don't hit BLUE",	message_ES: "No golpees AZUL" },
		3: { message: "Hit RED",		message_ES: "GOLPEAR ROJO" },
		4: { message: "Hit WHITE",		message_ES: "GOLPEAR BLANCO" },
		5: { message: "Hit BLUE",		message_ES: "GOLPEAR AZUL" },
	};

	function skilld_event(skillid) {
		if ([1311, 1313, 1315, 1317].includes(skillid)) {
			handlers.text({ sub_type: "message", message: "OUT", message_ES: "SALIR" });
		}

    if ([1312, 1313, 1316, 1318].includes(skillid)) {
      handlers.text({ sub_type: "message", message: "IN", message_ES: "ENTRAR" });
    }

		if ([21311, 21314].includes(skillid)) {
			handlers.event([
				{ type: "text", sub_type: "message", message: "IN | OUT (Kaia)", message_ES: "ENTRAR | SALIR (Kaia)" },
				{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 4000] }
			]);
		}

		if ([21312, 21313].includes(skillid)) {
			handlers.event([
				{ type: "text", sub_type: "message", message: "OUT | IN (Kaia)", message_ES: "SALIR | ENTRAR (Kaia)" },
				{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 4000] }
			]);
		}

		if ([21303].includes(skillid)) {
			if (print) {
				handlers.text({ sub_type: "message", message: "Hit ALL", message_ES: "Presione TODO", speech: false });
			} else {
				handlers.text({ sub_type: "message", message: mech_messages[msg_num].message, message_ES: mech_messages[msg_num].message_ES });
			}
		}
  }

	function secondboss_message(num) {
		msg_num = num;
		handlers.text({ sub_type: "notification", message: mech_messages[num].message, message_ES: mech_messages[num].message_ES });
	}

	return {
		// First boss
		"h-466-46602-99": [{ type: "func", func: () => print = false }],
		"h-466-46602-30": [{ type: "func", func: () => print = true }],
		//
		"qb-466-46621-466050": [{ type: "func", func: secondboss_message, args: [0] }],
		"qb-466-46621-466051": [{ type: "func", func: secondboss_message, args: [1] }],
		"qb-466-46621-466052": [{ type: "func", func: secondboss_message, args: [2] }],
		"qb-466-46622-466054": [{ type: "func", func: secondboss_message, args: [3] }],
		"qb-466-46622-466055": [{ type: "func", func: secondboss_message, args: [4] }],
		"qb-466-46622-466056": [{ type: "func", func: secondboss_message, args: [5] }],
		//
		"s-466-46601-1105-0": [{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun" }],
		"s-466-46601-1106-0": [{ type: "text", sub_type: "message", message: "Exhaust", message_ES: "Escape" }],
		"s-466-46601-1109-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Front", message_ES: "Ataque Frontal" }],
		"s-466-46601-1110-0": [{ type: "text", sub_type: "message", message: "Tail", message_ES: "Cola" }],
		"s-466-46601-2105-0": "s-466-46601-1105-0",
		"s-466-46601-2106-0": "s-466-46601-1106-0",
		"s-466-46601-2109-0": "s-466-46601-1109-0",
		"s-466-46601-2110-0": "s-466-46601-1110-0",
		"s-466-46601-1311-0": [{ type: "func", func: skilld_event.bind(null, 1311) }],
		"s-466-46601-1313-0": [{ type: "func", func: skilld_event.bind(null, 1313) }],
		"s-466-46601-1315-0": [{ type: "func", func: skilld_event.bind(null, 1315) }],
		"s-466-46601-1317-0": [{ type: "func", func: skilld_event.bind(null, 1317) }],
		"s-466-46601-1312-0": [{ type: "func", func: skilld_event.bind(null, 1312) }],
		"s-466-46601-1314-0": [{ type: "func", func: skilld_event.bind(null, 1314) }],
		"s-466-46601-1316-0": [{ type: "func", func: skilld_event.bind(null, 1316) }],
		"s-466-46601-1318-0": [{ type: "func", func: skilld_event.bind(null, 1318) }],
		// Second boss
		"s-466-46602-1116-0": [
			{ type: "text", sub_type: "message", message: "Dodge. Pull", message_ES: "Iframe. Pull" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 220, 0, 6000] }
		],
		"s-466-46602-1223-0": [{ type: "text", sub_type: "message", message: "Double RED", message_ES: "Doble ROJO" }],
    "s-466-46602-1113-0": [{ type: "text", sub_type: "message", message: "LASER!!!", message_ES: "¡¡¡LÁSER!!!" }],
		"s-466-46602-1311-0": [{ type: "func", func: skilld_event.bind(null, 21311) }],
		"s-466-46602-1314-0": [{ type: "func", func: skilld_event.bind(null, 21314) }],
		"s-466-46602-1312-0": [{ type: "func", func: skilld_event.bind(null, 21312) }],
		"s-466-46602-1313-0": [{ type: "func", func: skilld_event.bind(null, 21313) }],
    "s-466-46602-1303-0": [{ type: "func", func: skilld_event.bind(null, 21303) }],
    "s-466-46602-1105-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 200, 0, 6000]}],
		"s-466-46602-2105-0": "s-466-46602-1105-0",
		"s-466-46602-2116-0": "s-466-46602-1116-0",
		"s-466-46602-2113-0": "s-466-46602-1113-0"
	};
};