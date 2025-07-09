// Dreadspire VALKYTEQ
//
// made by TristanPW

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	// FIRST FLOOR

	let knockbackCounter = 0;
	let knockbackTimer = null;

	function knockback_firstfloor() {
		dispatch._mod.clearTimeout(knockbackTimer);
		knockbackCounter++;

		if (knockbackCounter === 2) {
			handlers.text({ type: "text", sub_type: "message", message: "KNOCKBACK", message_ES: "Retroceso", speech: true });
			knockbackCounter = 0;
		}

		knockbackTimer = dispatch._mod.setTimeout(() => knockbackCounter = 0, 5000);
	}


	// THIRD FLOOR

	const PizzaA = {
		offsets: [0.24, 1.29, 2.33, -2.88, -1.84, -0.8],
		distance: 200
	};

	const PizzaB = {
		offsets: [-0.26, 0.79, 1.83, 2.9, -2.34, -1.3],
		distance: 200
	};

	const PizzaC = {
		offsets: [-0.26, 1.29, 2.9, -1.84],
		distance: 200
	};

	const CounterPizzaC = {
		offsets: [0.24, 2.33, -2.88, -0.8, 0.79, 1.83, -2.34, -1.3],
		distance: 200
	};

	const Inner = {
		offsets: [0.24, 1.29, 2.33, -2.88, -1.84, -0.8, -0.26, 0.79, 1.83, 2.9, -2.34, -1.3],
		distance: 275
	};

	const Outer = {
		offsets: [0.24, 1.29, 2.33, -2.88, -1.84, -0.8, -0.26, 0.79, 1.83, 2.9, -2.34, -1.3],
		distance: 150
	};

	PizzaA.counter = PizzaB;
	PizzaB.counter = PizzaA;
	PizzaC.counter = CounterPizzaC;
	Inner.counter = Outer;
	Outer.counter = Inner;

	const Mechanics = {
		1122: {
			order: [PizzaA, Inner, Outer, PizzaB, PizzaC],
			delays: [0, 1000, 2000, 3000, 4000]
		},
		1123: {
			order: [PizzaB, PizzaA, Outer, Inner, PizzaC],
			delays: [200, 1200, 2200, 3200, 4200]
		},
		1124: {
			order: [Inner, PizzaB, PizzaA, Outer, PizzaC],
			delays: [0, 1000, 2000, 3000, 4000]
		},
		1127: {
			order: [PizzaA, PizzaB, Inner, Outer, PizzaC],
			delays: [200, 1200, 2200, 3200, 4200]
		}
	};

	const debuffs_thirdfloor = [false, false, false, false, false]; // False = Blue (Avoid Hit), True = Red (Take Hit)

	function cage_mechanic_thirdfloor(id, _, event, entity) {
		const mechanic = Mechanics[id];

		if (mechanic && entity.stage == 0) {
			let flower_id = 559;

			// eslint-disable-next-line guard-for-in
			for (const i in mechanic.order) {
				const pattern = !debuffs_thirdfloor[i] ? mechanic.order[i] : mechanic.order[i].counter;

				for (const offset of pattern.offsets) {
					handlers.event([{ "type": "spawn",
						"id": flower_id,
						"delay": mechanic.delays[i],
						"sub_delay": mechanic.delays[i] + 1900,
						"distance": pattern.distance,
						"offset": offset
					}]);
				}
				flower_id = flower_id == 559 ? 556 : 559;
			}
		}
	}

	function cage_set_debuff(id, bool) {
		debuffs_thirdfloor[id] = bool;
	}


	// FIFTH FLOOR

	let fifth_debuff = null;


	// SIXTH FLOOR

	function sixth_regress() {
		handlers.text({ sub_type: "notification", message: "Plague/Regress", message_ES: "[c=#E904CA]!!!!![/c][c=#E904CA]!!!![/c][c=#39FF33]!!!![/c]!!!!!!![c=#F90531]!!!!!!!!!!![/c] Plague/Regress[c=#39FF33]!![/c][c=#E904CA]!!!!![/c]!!!![c=#0517F9]!!!![/c]!!!!!!![c=#F90531]!!!!!!!!!!![/c]" });
		// handlers.text({ sub_type: "alert", message: "Plague/Regress", message_ES: "Plague/Regress!!", delay: 0 });
		handlers.text({ sub_type: "warning", message: "Plague/Regress", message_ES: "Plague/Regress!!" });
		handlers.text({ sub_type: "message", message: "Plague/Regress", message_ES: "Plague/Regress!!" });
		// handlers.text({ sub_type: "alert", message: "Plague/Regress", message_ES: "Plague/Regress!!" });
		// handlers.text({ sub_type: "warning", message: "Plague/Regress", message_ES: "Plague/Regress!!" });
		// handlers.text({ sub_type: "message", message: "Plague/Regress", message_ES: "Plague/Regress!!" });
		// handlers.text({ sub_type: "speech", message: "Plague/Regress", message_ES: "Plague/Regress!!" });
	}


	// SEVENTH FLOOR

	let seventh_fifty = false;

	function seventh_message_event(skillid) {
		switch (skillid) {
			// Lakan has noticed you.
			case 1043:
				if (!seventh_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Debuffs > Circles > Bombs",
						message_ES: "Debuffs > Círculos > Bombas"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Debuffs > Bombs > Circles",
						message_ES: "Debuffs > Bombas > Círculos"
					});
				}
				break;
			// Lakan is trying to take you on one at a time.
			case 1044:
				if (!seventh_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Circles > Bombs > Debuffs",
						message_ES: "Círculos > Bombas > Debuffs"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Circles > Debuffs > Bombs",
						message_ES: "Círculos > Debuffs > Bombas"
					});
				}
				break;
			// Lakan intends to kill all of you at once.
			case 1045:
				if (!seventh_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Bombs > Debuffs > Circles",
						message_ES: "Bombas > Debuffs > Círculos"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Bombs > Circles > Debuffs",
						message_ES: "Bombas > Círculos > Debuffs"
					});
				}
				break;
		}
	}

	function seventh_spawn_tables() {
		handlers.event([
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 2.8, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 3.46, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 4.12, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 4.75, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 5.38, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 5.97, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 6.58, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 7.2, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 7.8, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 8.44, "ownerName": "SAFE SPOT", "message": "SAFE" }
		]);
	}

	// Lasers mech
	const lasers_markers_seventhfloor = [];
	const inverted_lasers_markers_seventhfloor = [];
	const sign_offsets_seventhfloor = [-0.32, -0.94, -1.57, -2.2, -2.83, 2.83, 2.2, 1.57, 0.94, 0.32];

	for (const offset of sign_offsets_seventhfloor) {
		const event = {
			"type": "spawn",
			"sub_type": "build_object",
			"id": 1,
			"sub_delay": 4000,
			"distance": 450,
			"ownerName": "SAFE SPOT",
			"message": "SAFE",
			"offset": offset
		};

		lasers_markers_seventhfloor.push(event);
		inverted_lasers_markers_seventhfloor.push(event);
	}

	for (let distance = 175; distance <= 425; distance += 25) {
		lasers_markers_seventhfloor.push({
			"type": "spawn",
			"id": 603,
			"sub_delay": 4000,
			"distance": distance,
			"offset": 0
		});
		lasers_markers_seventhfloor.push({
			"type": "spawn",
			"id": 603,
			"sub_delay": 4000,
			"distance": distance,
			"offset": 1.25
		});
		lasers_markers_seventhfloor.push({
			"type": "spawn",
			"id": 603,
			"sub_delay": 4000,
			"distance": distance,
			"offset": 2.5
		});
		lasers_markers_seventhfloor.push({
			"type": "spawn",
			"id": 603,
			"sub_delay": 4000,
			"distance": distance,
			"offset": -2.5
		});
		lasers_markers_seventhfloor.push({
			"type": "spawn",
			"id": 603,
			"sub_delay": 4000,
			"distance": distance,
			"offset": -1.25
		});

		inverted_lasers_markers_seventhfloor.push({
			"type": "spawn",
			"id": 603,
			"sub_delay": 4000,
			"distance": distance,
			"offset": 0.62
		});
		inverted_lasers_markers_seventhfloor.push({
			"type": "spawn",
			"id": 603,
			"sub_delay": 4000,
			"distance": distance,
			"offset": 1.87
		});
		inverted_lasers_markers_seventhfloor.push({
			"type": "spawn",
			"id": 603,
			"sub_delay": 4000,
			"distance": distance,
			"offset": 3.12
		});
		inverted_lasers_markers_seventhfloor.push({
			"type": "spawn",
			"id": 603,
			"sub_delay": 4000,
			"distance": distance,
			"offset": -1.88
		});
		inverted_lasers_markers_seventhfloor.push({
			"type": "spawn",
			"id": 603,
			"sub_delay": 4000,
			"distance": distance,
			"offset": -0.63
		});
	}


	return {
		// FIRST FLOOR

		"nd-9034-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		// Clone Mechanic
		// "h-2800-1000-99": [{"type": "text","sub_type": "notification","message": "BlackJacka  is looking after you","message_ES": "БлекДжека присматривает за вами" }],
		"ab-2800-1000-90340105": [{ type: "text", sub_type: "message", message: "STUN IT", message_ES: "¡STUN AL JEFE!" }],
		// Backstep + Knockback
		// "s-2800-1000-212-0": [{type: "text", sub_type: "message", message: "BACKSTEP + KNOCKBACK", message_ES: "Назад + Отбрасывание"}],
		// "s-2800-1000-304-0": [{type: "text", sub_type: "message", message: "STUN", message_ES: "Stun!"},
		// { type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 250, 0, 1500] }],
		"s-2800-1000-1102-0": [{ type: "text", sub_type: "message", message: "Running", message_ES: "Correr" },
			{ type: "func", func: knockback_firstfloor.bind(null) }],
		"s-2800-1000-1105-0": [{ type: "text", sub_type: "message", message: "KNOCKBACK", message_ES: "Atacar hacia adelante" }],
		"s-2800-1000-1108-0": [{ type: "text", sub_type: "message", message: "KNOCKBACK", message_ES: "Descartamiento" }],
		"s-2800-1000-1203-0": [{ type: "text", sub_type: "message", message: "Sleep", message_ES: "¡Sueño!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 250, 0, 3500] }],
		"s-2800-1000-1304-0": [{ type: "text", sub_type: "message", message: "BACKSTEP + KNOCKBACK", message_ES: "Atrás + descarte" }],
		"s-2800-1000-2102-0": "s-2800-1000-1102-0",
		"s-2800-1000-2105-0": "s-2800-1000-1105-0",
		"s-2800-1000-2108-0": "s-2800-1000-1108-0",
		"s-2800-1000-2203-0": "s-2800-1000-1203-0",
		"s-2800-1000-2304-0": "s-2800-1000-1304-0",


		// SECOND FLOOR

		// "s-2800-2000-101-0": [{type: "text", sub_type: "message", message: "SMASH COMING", message_ES: "Pronto разгром"}],
		"s-2800-2000-1102-0": [{ type: "text", sub_type: "message", message: "SPIN", message_ES: "GIRAR" }],
		"s-2800-2000-1107-0": [{ type: "text", sub_type: "message", message: "BACK", message_ES: "ATAQUE ATRAS" }],
		"s-2800-2000-1108-0": [{ type: "text", sub_type: "message", message: "FRONT", message_ES: "ATAQUE FRONTAL" }],
		"s-2800-2000-1109-0": [{ type: "text", sub_type: "message", message: "BACK SPIN", message_ES: "GIRAR назад" }],
		"s-2800-2000-1110-0": [{ type: "text", sub_type: "message", message: "OUT", message_ES: "SALIR!" }],
		"s-2800-2000-1119-0": [{ type: "text", sub_type: "message", message: "PULL", message_ES: "PULL + GIRAR" }],
		"s-2800-2000-1122-0": [{ type: "text", sub_type: "message", message: "IN", message_ES: "ENTRAR!" }],
		"s-2800-2000-1306-0": [{ type: "text", sub_type: "message", message: "Run away", message_ES: "Huir" }],
		"s-2800-2000-2102-0": "s-2800-2000-1102-0",
		"s-2800-2000-2107-0": "s-2800-2000-1107-0",
		"s-2800-2000-2108-0": "s-2800-2000-1108-0",
		"s-2800-2000-2109-0": "s-2800-2000-1109-0",
		"s-2800-2000-2110-0": "s-2800-2000-1110-0",
		"s-2800-2000-2119-0": "s-2800-2000-1119-0",
		"s-2800-2000-2122-0": "s-2800-2000-1122-0",
		"s-2800-2000-2306-0": "s-2800-2000-1306-0",


		// THIRD FLOOR

		// Cage Mechanic
		"s-2800-3000-1122-0": [{ "type": "func", "func": cage_mechanic_thirdfloor.bind(1122) }],
		"s-2800-3000-1123-0": [{ "type": "func", "func": cage_mechanic_thirdfloor.bind(1123) }],
		"s-2800-3000-1124-0": [{ "type": "func", "func": cage_mechanic_thirdfloor.bind(1124) }],
		"s-2800-3000-1127-0": [{ "type": "func", "func": cage_mechanic_thirdfloor.bind(1127) }],
		"ae-0-0-90340306": [{ "type": "func", "func": cage_set_debuff.bind(0, true) }],
		"ae-0-0-90340307": [{ "type": "func", "func": cage_set_debuff.bind(0, false) }],
		"ae-0-0-90340308": [{ "type": "func", "func": cage_set_debuff.bind(1, true) }],
		"ae-0-0-90340309": [{ "type": "func", "func": cage_set_debuff.bind(1, false) }],
		"ae-0-0-90340310": [{ "type": "func", "func": cage_set_debuff.bind(2, true) }],
		"ae-0-0-90340311": [{ "type": "func", "func": cage_set_debuff.bind(2, false) }],
		"ae-0-0-90340312": [{ "type": "func", "func": cage_set_debuff.bind(3, true) }],
		"ae-0-0-90340313": [{ "type": "func", "func": cage_set_debuff.bind(3, false) }],
		"ae-0-0-90340314": [{ "type": "func", "func": cage_set_debuff.bind(4, true) }],
		"ae-0-0-90340315": [{ "type": "func", "func": cage_set_debuff.bind(4, false) }],
		"s-2800-3000-1106-0": [{ type: "text", sub_type: "message", message: "Kick back!", message_ES: "Patada atrás!" }],
		"s-2800-3000-1108-0": [{ type: "text", sub_type: "message", message: "Kick forward!", message_ES: "Patada frontal!" }],
		"s-2800-3000-1112-0": [{ type: "text", sub_type: "message", message: "To the Boss", message_ES: "ENTRAR" }], //
		"s-2800-3000-1130-0": [
			{ type: "text", sub_type: "message", "message": "LEFT SWIPE", message_ES: "GOLPE IZQUIERDO" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 200, "offset": 2.3, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 200, "offset": 1, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 200, "offset": 2.3 },
			{ "type": "spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 200, "offset": 1 }
		],
		"s-2800-3000-1131-0": [
			{ type: "text", sub_type: "message", "message": "RIGHT SWIPE", message_ES: "GOLPE DERECHO" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 200, "offset": -2.3, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 200, "offset": -1, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 200, "offset": -2.3 },
			{ "type": "spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 200, "offset": -1 }
		],
		"s-2800-3000-1134-0": [{ type: "text", sub_type: "message", message: "DEBUFF", message_ES: "DEBUFF" }], //
		"s-2800-3000-1502-0": [{ type: "text", sub_type: "message", message: "FORCED CAGE", message_ES: "Pronto una celda" }], //
		"ns-2800-3004": [{ type: "text", sub_type: "message", message: "Kill mobs", message_ES: "Matar a los mobs" }],
		"s-2800-3000-2106-0": "s-2800-3000-1106-0",
		"s-2800-3000-2108-0": "s-2800-3000-1108-0",
		"s-2800-3000-2112-0": "s-2800-3000-1112-0",
		"s-2800-3000-2130-0": "s-2800-3000-1130-0",
		"s-2800-3000-2131-0": "s-2800-3000-1131-0",
		"s-2800-3000-2134-0": "s-2800-3000-1134-0",
		"s-2800-3000-2502-0": "s-2800-3000-1502-0",


		// FOURTH FLOOR

		"s-2800-4000-1102-0": [{ type: "text", sub_type: "message", message: "From boss - to boss", message_ES: "SALIR - ENTRAR" }],
		"s-2800-4000-1103-0": [{ type: "text", sub_type: "message", message: "To the boss", message_ES: "ENTRAR" }],
		"s-2800-4000-1107-0": [{ type: "text", sub_type: "message", message: "Under the tank, then under the dd", message_ES: "Debajo del tanque, luego bajo el DD" }],
		"s-2800-4000-1108-0": [
			{ type: "text", sub_type: "message", message: "Lines", message_ES: "Lineas" },
			{ type: "spawn", func: "vector", args: [553, 90, 20, 175, 300, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 90, -20, -175, 300, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 90, 20, 5, 300, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 90, -20, -5, 300, 0, 4000] }
		],
		"s-2800-4000-1109-1": [{ type: "text", sub_type: "message", message: "Beam", message_ES: "Haz" }],
		"s-2800-4000-1109-2": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe" }],
		"s-2800-4000-1205-0": [{ type: "text", sub_type: "message", message: "Beam in a circle", message_ES: "Haz en un círculo" }],
		"s-2800-4000-1206-0": [{ type: "text", sub_type: "message", message: "Beam forward, left, right", message_ES: "Haz hacia adelante, izquierda, derecha" }],
		"ns-2800-4001": [{ type: "text", sub_type: "message", message: "Kill mobs", message_ES: "Matar a los mobs" }],
		"s-2800-4000-2102-0": "s-2800-4000-1102-0",
		"s-2800-4000-2103-0": "s-2800-4000-1103-0",
		"s-2800-4000-2107-0": "s-2800-4000-1107-0",
		"s-2800-4000-2108-0": "s-2800-4000-1108-0",
		"s-2800-4000-2109-1": "s-2800-4000-1109-1",
		"s-2800-4000-2109-2": "s-2800-4000-1109-2",
		"s-2800-4000-2205-0": "s-2800-4000-1205-0",
		"s-2800-4000-2206-0": "s-2800-4000-1206-0",


		// FIFTH FLOOR

		"h-2800-5000-85": [{ "type": "text", "sub_type": "notification", "message": "85%... Big Jump + mob ", "message_ES": "85%... Gran Salto + mobs pronto" }],
		"h-2800-5000-55": [{ "type": "text", "sub_type": "notification", "message": "55%... Big Jump + mob ", "message_ES": "55%... Gran Salto + mobs pronto" }],
		"h-2800-5000-25": [{ "type": "text", "sub_type": "notification", "message": "25%... Big Jump + mob ", "message_ES": "25%... Gran Salto + mobs pronto" }],
		"h-2800-5000-10": [{ "type": "text", "sub_type": "notification", "message": "10%... Big Jump + mob ", "message_ES": "10%... Gran Salto + mobs pronto" }],
		"s-2800-5000-1103-0": [
			{ type: "text", sub_type: "message", message: "Tail", message_ES: "Coletazo" },
			{ type: "spawn", func: "semicircle", args: [140, 260, 553, 0, 0, 10, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 135, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 260, 500, 0, 2000] }
		],
		"s-2800-5000-1104-0": [
			{ type: "text", sub_type: "message", message: "Ice Storm DOTs", message_ES: "Puntos de tormenta de hielo" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 0, 5000] }
		],
		"s-2800-5000-1105-0":	[
			{ type: "text", sub_type: "message", message: "Fire Bombs", message_ES: "Bombas de fuego" },
			{ type: "spawn", func: "circle", args: [false, 553, 135, 500, 10, 125, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 315, 500, 10, 125, 0, 3250] },
			{ type: "spawn", func: "circle", args: [false, 553, 45, 500, 10, 125, 0, 3500] },
			{ type: "spawn", func: "circle", args: [false, 553, 235, 500, 10, 125, 0, 3750] },
			{ type: "spawn", func: "circle", args: [false, 553, 90, 500, 10, 125, 0, 4000] },
			{ type: "spawn", func: "circle", args: [false, 553, 270, 500, 10, 125, 0, 4250] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 500, 10, 125, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 500, 10, 125, 0, 4750] },
			{ type: "spawn", func: "circle", args: [false, 493, 0, 0, 0, 250, 0, 4750] }
		],
		"s-2800-5000-1107-0": [
			{ type: "text", sub_type: "message", message: "Change", message_ES: "Cambio" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 50, 0, 250, 0, 3000] }
		],
		"s-2800-5000-1118-0": [{ type: "text", sub_type: "message", message: "Big Jump + mobs", message_ES: "Gran Salto + mobs" }],
		"s-2800-5000-1118-2": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe" }],
		"s-2800-5000-1120-0": [
			{ type: "text", sub_type: "message", message: "Stun + reclining", message_ES: "Stun + Reclinable" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 150, 0, 680, 0, 7000] }
		],
		"s-2800-5000-1124-0": [{ type: "text", sub_type: "message", message: "Jump", message_ES: "Saltar" }],
		"s-2800-5000-1127-0": [{ type: "text", sub_type: "message", message: "DEBUFF", message_ES: "DEBUFF" }],
		"ns-2800-5002": [
			{ type: "text", sub_type: "message", message: "Kill your mob(fire)", message_ES: "Mata a tu mob (Fuego)", check_func: () => fifth_debuff === "blue" },
			{ type: "spawn", func: "marker", args: [false, 0, 0, 0, 30000, true, null], tag: "mob1", check_func: () => fifth_debuff === "blue" }
		],
		"ns-2800-5003": [
			{ type: "text", sub_type: "message", message: "Kill your mob(ice)", message_ES: "Mata a tu mob(Hielo)", check_func: () => fifth_debuff === "red" },
			{ type: "spawn", func: "marker", args: [false, 0, 0, 0, 30000, true, null], tag: "mob2", check_func: () => fifth_debuff === "red" }
		],
		"nd-2800-5002": [{ type: "despawn_all", tag: "mob1" }],
		"nd-2800-5003": [{ type: "despawn_all", tag: "mob2" }],
		"s-2800-5000-2103-0": "s-2800-5000-1103-0",
		"s-2800-5000-2104-0": "s-2800-5000-1104-0",
		"s-2800-5000-2105-0": "s-2800-5000-1105-0",
		"s-2800-5000-2107-0": "s-2800-5000-1107-0",
		"s-2800-5000-2118-0": "s-2800-5000-1118-0",
		"s-2800-5000-2118-2": "s-2800-5000-1118-2",
		"s-2800-5000-2120-0": "s-2800-5000-1120-0",
		"s-2800-5000-2124-0": "s-2800-5000-1124-0",
		"s-2800-5000-2127-0": "s-2800-5000-1127-0",
		// Debuff tracker
		"am-2800-5000-90340501": [
			{ type: "text", sub_type: "message", message: "Ice is taken", message_ES: "Toma el hielo" },
			{ type: "func", "func": () => fifth_debuff = "red" }
		],
		"am-2800-5000-90340502": [
			{ type: "text", sub_type: "message", message: "Fire is taken", message_ES: "Toma el fuego" },
			{ type: "func", "func": () => fifth_debuff = "blue" }
		],
		"am-2800-5000-90340503": [{ type: "func", "func": () => fifth_debuff = null }],
		// Mob Wave Attack
		"s-2800-5002-1106-0": [{ type: "spawn", func: "vector", args: [553, 120, 30, 10, 450, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 120, -30, -10, 450, 0, 4000] }],
		"s-2800-5003-1101-0": "s-2800-5002-1106-0",
		"s-2800-5002-2106-0": "s-2800-5002-1106-0",
		"s-2800-5003-2101-0": "s-2800-5002-1106-0",


		// SIXTH FLOOR

		"qb-2800-6000-434601": [{ type: "func", func: sixth_regress.bind(null) }],
		"s-2800-6000-1101-0": [
			{ type: "text", sub_type: "message", message: "Blow from the ground", message_ES: "Bajo el suelo" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", delay: 1000 }
		],
		"s-2800-6000-1103-0": [
			{ type: "text", sub_type: "message", message: "Impact", message_ES: "Golpear" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 225, 0, 425, 0, 3000] }
		],
		"s-2800-6000-1104-0": [
			{ type: "text", sub_type: "message", message: "Impact", message_ES: "Golpear + Vrive" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 225, 0, 375, 0, 3000] }
		],
		"s-2800-6000-1106-0": [
			{ type: "text", sub_type: "message", message: "Series + Impact", message_ES: "Serie + Golpear" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 225, 0, 375, 3000, 2000] }
		],
		"s-2800-6000-1107-0": [{ type: "text", sub_type: "message", message: "Boms", message_ES: "Bombas" }],
		"s-2800-6000-1109-0": [
			{ type: "text", sub_type: "message", message: "1 strike", message_ES: "1 Golpear" },
			{ type: "spawn", func: "semicircle", args: [-160, 105, 553, 0, 0, null, 550, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -160, 550, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 105, 550, 0, 3000] },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 3000, "distance": 350, "offset": 2.6, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "item", "id": 98260, "sub_delay": 3000, "distance": 350, "offset": 2.6 }
		],
		"s-2800-6000-1110-0": [
			{ type: "text", sub_type: "message", message: "2 strikes", message_ES: "2 Golpear" },
			{ type: "spawn", func: "semicircle", args: [-160, 105, 553, 0, 0, null, 550, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -160, 550, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 105, 550, 0, 3000] },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 3000, "distance": 350, "offset": 2.6, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "item", "id": 98260, "sub_delay": 3000, "distance": 350, "offset": 2.6 }
		],
		"s-2800-6000-1111-0": [{ type: "text", sub_type: "message", message: "Left kick", message_ES: "Patada Izquierda" }],
		"s-2800-6000-1112-0": [{ type: "text", sub_type: "message", message: "Right kick", message_ES: "Patada Derecha" }],
		"s-2800-6000-1113-0": [{ type: "text", sub_type: "message", message: "Laser", message_ES: "Laser" }],
		"s-2800-6000-1113-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe" }],
		"s-2800-6000-1133-0": [
			{ type: "text", sub_type: "message", message: "Strike", message_ES: "Golpear" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 225, 0, 475, 0, 3000] }
		],
		"s-2800-6000-1134-0": [
			{ type: "text", sub_type: "message", message: "Impact", message_ES: "Golpear + Vrive" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 225, 0, 475, 0, 3000] }
		],
		"s-2800-6000-2101-0": "s-2800-6000-1101-0",
		"s-2800-6000-2103-0": "s-2800-6000-1103-0",
		"s-2800-6000-2104-0": "s-2800-6000-1104-0",
		"s-2800-6000-2106-0": "s-2800-6000-1106-0",
		"s-2800-6000-2107-0": "s-2800-6000-1107-0",
		"s-2800-6000-2109-0": "s-2800-6000-1109-0",
		"s-2800-6000-2110-0": "s-2800-6000-1110-0",
		"s-2800-6000-2111-0": "s-2800-6000-1111-0",
		"s-2800-6000-2112-0": "s-2800-6000-1112-0",
		"s-2800-6000-2113-0": "s-2800-6000-1113-0",
		"s-2800-6000-2113-1": "s-2800-6000-1113-1",
		"s-2800-6000-2133-0": "s-2800-6000-1133-0",
		"s-2800-6000-2134-0": "s-2800-6000-1134-0",


		// SEVENTH FLOOR

		// Lasers + Mechanic
		// "s-2800-7000-901-0": [{"type": "text","sub_type": "notification","message": "DEBUFF (CLOSEST)"}].concat(lasers_markers_seventhfloor),
		// "s-2800-7000-902-0": [{"type": "text","sub_type": "notification","message": "DEBUFF (FURTHEST)"}].concat(inverted_lasers_markers_seventhfloor),
		// "s-2800-7000-903-0": [{"type": "text","sub_type": "notification","message": "GATHER + CLEANSE"}].concat(lasers_markers_seventhfloor),
		// "s-2800-7000-904-0": [{"type": "text","sub_type": "notification","message": "GATHER + NO CLEANSE"}].concat(inverted_lasers_markers_seventhfloor),
		// "s-2800-7000-905-0": [{"type": "text","sub_type": "notification","message": "SPREAD"}].concat(lasers_markers_seventhfloor),
		// "s-2800-7000-906-0": [{"type": "text","sub_type": "notification","message": "GATHER"}].concat(inverted_lasers_markers_seventhfloor),
		"nd-2800-7000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-2800-7000-99": [{ type: "func", func: () => seventh_fifty = false }],
		"h-2800-7000-50": [{ type: "func", func: () => seventh_fifty = true }],
		"dm-0-0-90340703": [{ type: "func", func: seventh_message_event, args: [1043] }], // Lakan has noticed you.
		"dm-0-0-90340704": [{ type: "func", func: seventh_message_event, args: [1044] }], // Lakan is trying to take you on one at a time.
		"dm-0-0-90340705": [{ type: "func", func: seventh_message_event, args: [1045] }], // Lakan intends to kill all of you at once.
		"s-2800-7000-1105-0": [
			{ type: "text", sub_type: "message", message: "Discarding", message_ES: "Desechando" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -95, 850, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 95, 850, 0, 3000] }
		],
		"s-2800-7000-1136-0": [{ type: "text", sub_type: "message", message: "Claw", message_ES: "Garras" }],
		"s-2800-7000-1110-0": [{ type: "text", sub_type: "message", message: "Claw", message_ES: "Garras" }],
		"s-2800-7000-1129-0": [{ type: "text", sub_type: "message", message: "IN", message_ES: "ENTRAR!" }],
		"s-2800-7000-1130-0": [
			{ type: "text", sub_type: "message", message: "Shield Strike", message_ES: "Golpear Escudo" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 130, 0, 270, 0, 2500] }
		],
		"s-2800-7000-1132-0": [
			{ type: "text", sub_type: "message", message: "AOE Shield", message_ES: "AOE Escudo!" },
			{ type: "spawn", func: "semicircle", args: [-65, 65, 553, 0, 0, null, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 40, -65, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 40, 65, 600, 0, 3000] }
		],
		"s-2800-7000-1133-0": [
			{ type: "text", sub_type: "message", message: "AOE Shield", message_ES: "AOE Escudo!" },
			{ type: "spawn", func: "semicircle", args: [-65, 65, 553, 0, 0, null, 600, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 40, -65, 600, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 40, 65, 600, 0, 6000] }
		],
		"s-2800-7000-1135-0": [{ type: "text", sub_type: "message", message: "IN", message_ES: "ENTRAR!" }],
		"s-2800-7000-1240-0": [
			{ type: "text", sub_type: "message", message: "Donuts", message_ES: "Donas!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 200, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 380, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 520, 0, 6000] }
		],
		"s-2800-7000-1401-0": [{ type: "text", sub_type: "message", message: "Plague/Regress", message_ES: "Plague/Regress!!" }],
		"s-2800-7000-1402-0": [{ type: "text", sub_type: "message", message: "Sleep", message_ES: "Dormir!!" }],
		"s-2800-7000-1701-0": [{ type: "text", sub_type: "message", message: "Back + front", message_ES: "Atras + Adelante" }],
		//
		"s-2800-7000-1113-0": [{ type: "text", sub_type: "message", message: "Bait", message_ES: "Bait" }],
		"s-2800-7000-1151-0": [{ type: "text", sub_type: "message", message: "Attention stun", message_ES: "Stun" }],
		"s-2800-7000-1152-0": [
			{ type: "text", sub_type: "message", message: "Stun + Back", message_ES: "Stun + Ataque atras" },
			{ type: "spawn", func: "semicircle", args: [110, 250, 553, 0, 0, null, 1000, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 70, -1000, 70, 1000, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 290, -1000, -70, 1000, 0, 6000] }
		],
		"s-2800-7000-1138-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }],
		"s-2800-7000-1140-0": [
			{ type: "text", sub_type: "message", message: "Donuts", message_ES: "Donas!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 200, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 380, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 520, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 700, 0, 6000] }
		],
		"s-2800-7000-1154-0": [
			{ "type": "text", "sub_type": "message", "message": "OUT + IN", message_ES: "SALIR => ENTRAR" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }
		],
		"s-2800-7000-1155-0": [
			{ "type": "text", "sub_type": "message", "message": "IN + OUT", message_ES: "ENTRAR => SALIR" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }
		],
		"s-2800-7000-1142-0": [
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 2.8, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 3.46, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 4.12, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 4.75, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 5.38, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 5.97, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 6.58, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 7.2, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 7.8, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 8.44, "ownerName": "SAFE SPOT", "message": "SAFE" }
		],
		"s-2800-7000-1143-0": "s-2800-7000-1142-0",
		"s-2800-7000-1910-0": [{ type: "func", func: seventh_spawn_tables.bind(null) }],
		"s-2800-7000-1901-0": [
			{ type: "text", sub_type: "message", message: "(Debuffs) Closest", message_ES: "DEBUFF (Más cercano)" },
			{ type: "func", func: seventh_spawn_tables.bind(null) }
		],
		"s-2800-7000-1902-0": [
			{ type: "text", sub_type: "message", message: "(Debuffs) Farthest", message_ES: "DEBUFF (Más lejano)" },
			{ type: "func", func: seventh_spawn_tables.bind(null) }
		],
		"s-2800-7000-1903-0": [
			{ type: "text", sub_type: "message", message: "(Bombs) Gather + Cleanse", message_ES: "Bombas (Reunir!) + Cleanse" },
			{ type: "func", func: seventh_spawn_tables.bind(null) }
		],
		"s-2800-7000-1904-0": [
			{ type: "text", sub_type: "message", message: "(Bombs) Gather + No cleanse", message_ES: "Bombas (Reunir!) + No Cleanse" },
			{ type: "func", func: seventh_spawn_tables.bind(null) }
		],
		"s-2800-7000-1905-0": [
			{ type: "text", sub_type: "message", message: "(Circles) Spread", message_ES: "Circulos (Separar!)" },
			{ type: "func", func: seventh_spawn_tables.bind(null) }
		],
		"s-2800-7000-1906-0": [
			{ type: "text", sub_type: "message", message: "(Circles) Gather", message_ES: "Circulos (Reunir!)" },
			{ type: "func", func: seventh_spawn_tables.bind(null) }
		],
		"s-2800-7000-1144-0": [
			{ "type": "text", "sub_type": "message", "message": "OUT", message_ES: "SALIR" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }
		],
		"s-2800-7000-1145-0": [
			{ "type": "text", "sub_type": "message", "message": "IN", message_ES: "ENTRAR" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }
		],
		"s-2800-7000-2105-0": "s-2800-7000-1105-0",
		"s-2800-7000-2136-0": "s-2800-7000-1136-0",
		"s-2800-7000-2110-0": "s-2800-7000-1110-0",
		"s-2800-7000-2129-0": "s-2800-7000-1129-0",
		"s-2800-7000-2130-0": "s-2800-7000-1130-0",
		"s-2800-7000-2132-0": "s-2800-7000-1132-0",
		"s-2800-7000-2133-0": "s-2800-7000-1133-0",
		"s-2800-7000-2135-0": "s-2800-7000-1135-0",
		"s-2800-7000-2401-0": "s-2800-7000-1401-0",
		"s-2800-7000-2402-0": "s-2800-7000-1402-0",
		"s-2800-7000-2701-0": "s-2800-7000-1701-0",
		"s-2800-7000-2113-0": "s-2800-7000-1113-0",
		"s-2800-7000-2151-0": "s-2800-7000-1151-0",
		"s-2800-7000-2152-0": "s-2800-7000-1152-0",
		"s-2800-7000-2138-0": "s-2800-7000-1138-0",
		"s-2800-7000-2140-0": "s-2800-7000-1140-0",
		"s-2800-7000-2154-0": "s-2800-7000-1154-0",
		"s-2800-7000-2155-0": "s-2800-7000-1155-0",
		"s-2800-7000-2240-0": "s-2800-7000-1240-0",
		"s-2800-7000-2142-0": "s-2800-7000-1142-0",
		"s-2800-7000-2143-0": "s-2800-7000-1143-0",
		"s-2800-7000-2901-0": "s-2800-7000-1901-0",
		"s-2800-7000-2902-0": "s-2800-7000-1902-0",
		"s-2800-7000-2903-0": "s-2800-7000-1903-0",
		"s-2800-7000-2904-0": "s-2800-7000-1904-0",
		"s-2800-7000-2905-0": "s-2800-7000-1905-0",
		"s-2800-7000-2144-0": "s-2800-7000-1144-0",
		"s-2800-7000-2145-0": "s-2800-7000-1145-0",


		// EIGHTH FLOOR

		"s-2800-8000-1102-0": [
			{ type: "text", sub_type: "message", message: "Pull in 5 sec", message_ES: "Pull 5 segundos" },
			{ type: "text", sub_type: "message", message: "Pull", message_ES: "Pull", delay: 4500 }
		],
		"s-2800-8000-2102-0": [
			{ type: "text", sub_type: "message", message: "Pull in 5 sec", message_ES: "Pull 5 segundos" },
			{ type: "text", sub_type: "message", message: "Pull", message_ES: "Pull", delay: 3500 }
		],
		"s-2800-8000-1101-0": [
			{ type: "text", sub_type: "message", message: "Soon AOE", message_ES: "Pronto AOE" },
			{ type: "text", sub_type: "message", message: "AOE", message_ES: "AOE", delay: 4500 }
		],
		"s-759-1003-2101-0": [
			{ type: "text", sub_type: "message", message: "Soon AOE", message_ES: "Pronto AOE" },
			{ type: "text", sub_type: "message", message: "AOE", message_ES: "AOE", delay: 3500 }
		],
		"s-2800-8000-2110-0": [
			{ type: "text", sub_type: "message", message: "Clover", message_ES: "Trebol" },
			{ type: "spawn", func: "circle", args: [false, 553, 45, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 135, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 225, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 315, 180, 12, 230, 0, 3000] }
		],
		"s-2800-8000-1110-0": [
			{ type: "text", sub_type: "message", message: "Clover", message_ES: "Trebol" },
			{ type: "spawn", func: "circle", args: [false, 553, 45, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 135, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 225, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 315, 180, 12, 230, 0, 3000] }
		]
	};
};