// Corrupted Skynest
//
// hecho por michengs / HSDN / ZC

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	const { player } = dispatch.require.library;
	const { MARKER_ITEM } = module.parent.exports.spawn;

	let debuff = null;
	let timer1 = null;
	let timer2 = null;
	let timer3 = null;
	let timer4 = null;
	let timer5 = null;
	let boss_ent = null;
	let boss_offset = 0;
	let qbacting = null;
	let blue = false;
	let red = false;
	let debuff_tracker_started = false;

	const mech_messages = {
		0: { message: "IN", message_ES: "ENTRAR" },
		1: { message: "OUT", message_ES: "SALIR" }
	};

	const qbacting_messages = {
		0: { message: "different", message_ES: "diferente" },
		1: { message: "same", message_ES: "igual" }
	};

	const debuff_messages = {
		0: { message: "Ready to get Fire debuff", message_ES: "Listo para cambiar al debuff de Fuego" },
		1: { message: "Ready to get Ice debuff", message_ES: "Listo para cambiar al debuff de Hielo" }
	};

	// NULL % 2 = 0
	//    1 % 2 = 1
	//    0 % 2 = 0
	//    2 % 2 = 0

	function spawn_marker(out) {
		if (!boss_ent) return;

		let distance = 220;
		let caption = "IN";

		if (out) {
			distance = 620;
			caption = "OUT";
		}

		handlers.event([
			{ type: "spawn", func: "marker", args: [false, 45 + boss_offset, distance, 0, 4000, true, [caption, "SAFE"]] },
			{ type: "spawn", func: "marker", args: [false, 135 + boss_offset, distance, 0, 4000, true, [caption, "SAFE"]] },
			{ type: "spawn", func: "marker", args: [false, 225 + boss_offset, distance, 0, 4000, true, [caption, "SAFE"]] },
			{ type: "spawn", func: "marker", args: [false, 315 + boss_offset, distance, 0, 4000, true, [caption, "SAFE"]] }
		], boss_ent);
	}

	function debuff_added(id) {
		debuff_removed();
		debuff = id; // debuff event id

		timer1 = dispatch.setTimeout(() => {
			if (debuff != null) {
				handlers.text({
					sub_type: "message",
					message: "Debuff 20 seconds",
					message_ES: "Debuff 20 segundos"
				});
			}
		}, 70000);

		timer2 = dispatch.setTimeout(() => {
			if (debuff != null) {
				dispatch.setTimeout(() => {
					handlers.text({
						sub_type: "alert",
						message: (`${debuff_messages[debuff % 2].message}`),
						message_ES: (`${debuff_messages[debuff % 2].message_ES}`)
					});
				}, 2000);

				handlers.text({
					sub_type: "message",
					message: "Debuff 50 seconds",
					message_ES: "Debuff 50 segundos"
				});
			}
		}, 40000);

		timer3 = dispatch.setTimeout(() => {
			if (debuff != null) {
				handlers.text({
					sub_type: "message",
					message: "Warning! Debuff 15 seconds",
					message_ES: "¡Advertencia! Debuff 15 segundos"
				});
			}
		}, 75000);

		timer4 = dispatch.setTimeout(() => {
			if (debuff != null) {
				handlers.text({
					sub_type: "message",
					message: "Warning! Debuff 10 seconds",
					message_ES: "¡Advertencia! Debuff 10 segundos"
				});
			}
		}, 80000);

		timer5 = dispatch.setTimeout(() => {
			if (debuff != null) {
				handlers.text({
					sub_type: "message",
					message: "Warning! Debuff 5 seconds",
					message_ES: "¡Advertencia! Debuff 5 segundos"
				});
			}
		}, 85000);

		if (blue) {
			handlers.text({
				sub_type: "message",
				message: (`${mech_messages[(qbacting + debuff + 1) % 2].message}`),
				message_ES: (`${mech_messages[(qbacting + debuff + 1) % 2].message_ES}`)
			});

			spawn_marker((qbacting + debuff + 1) % 2);
		} else if (red) {
			handlers.text({
				sub_type: "message",
				message: (`${mech_messages[(qbacting + debuff) % 2].message}`),
				message_ES: (`${mech_messages[(qbacting + debuff) % 2].message_ES}`)
			});

			spawn_marker((qbacting + debuff) % 2);
		}
	}

	function debuff_removed() {
		debuff = null;
		dispatch.clearTimeout(timer1);
		dispatch.clearTimeout(timer2);
		dispatch.clearTimeout(timer3);
		dispatch.clearTimeout(timer4);
		dispatch.clearTimeout(timer5);
	}

	function skilld_event(skillid, ent) {
		const abnormality_change = (added, event) => {
			// Fire/Ice debuff
			if (player.isMe(event.target.toString()) && [30260001, 30260002, 31260001, 31260002].includes(event.id)) {
				if (added) {
					debuff_added(event.id);
				} else {
					debuff_removed();
				}
			}

			// Argon Priest Essence buff
			if (player.isMe(event.target.toString()) && [30261701, 31261701].includes(event.id)) {
				if (added && boss_ent) {
					handlers.spawn({ // spawn teleport mark
						sub_type: "item",
						id: MARKER_ITEM,
						sub_delay: 50000,
						pos: {
							x: 53192,
							y: 100761,
							z: 14233
						}
					}, boss_ent);
				}
			}
		};

		// In-Out quest balloons (qbacting => ярость 0, ужас 1)
		if ([3026004, 3126004, 3026005, 3126005].includes(skillid)) {
			qbacting = skillid % 2;
		}

		// Fire/Ice debuff (debuff % 2 => синий 0, красный 1)
		if ([30260001, 31260001, 30260002, 31260002].includes(skillid) && !debuff_tracker_started) {
			debuff_added(skillid);
		}

		// In-Out identification
		if ([212, 213, 214, 215].includes(skillid)) {
			boss_ent = ent;
			handlers.event([
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 8, 440, 200, 8000] },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 4, 840, 200, 8000] }
			]);
		}

		if ([212, 214].includes(skillid)) { // Fire claw (141, 142)
			boss_offset = 10;
			handlers.event([
				{ type: "spawn", func: "vector", args: [553, 0, 0, 190, 840, 200, 8000] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 10, 840, 200, 8000] }
			]);
		}

		if ([213, 215].includes(skillid)) { // Ice claw (143, 144)
			boss_offset = -10;
			handlers.event([
				{ type: "spawn", func: "vector", args: [553, 0, 0, 170, 840, 200, 8000] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 350, 840, 200, 8000] }
			]);
		}

		if ([213, 214].includes(skillid)) { // Ice inside
			dispatch.setTimeout(() => {
				if (debuff != null) {
					handlers.text({
						sub_type: "message",
						message: (`Ice inside (${qbacting_messages[qbacting].message}) | ${mech_messages[(qbacting + debuff + 1) % 2].message}`),
						message_ES: (`Hielo Interno (${qbacting_messages[qbacting].message_ES}) | ${mech_messages[(qbacting + debuff + 1) % 2].message_ES}`)
					});

					spawn_marker((qbacting + debuff + 1) % 2);
				} else {
					handlers.text({
						sub_type: "message",
						message: (`Ice inside (${qbacting_messages[qbacting].message})`),
						message_ES: (`Hielo Interno (${qbacting_messages[qbacting].message_ES})`)
					});
				}
			}, 500);

			blue = true;
			red = false;

			dispatch.setTimeout(() => blue = false, 6500); //6700
		}

		if ([212, 215].includes(skillid)) { // Fire inside
			dispatch.setTimeout(() => {
				if (debuff != null) {
					handlers.text({
						sub_type: "message",
						message: (`Fire inside (${qbacting_messages[qbacting].message}) | ${mech_messages[(qbacting + debuff) % 2].message}`),
						message_ES: (`Fuego Interno (${qbacting_messages[qbacting].message_ES}) | ${mech_messages[(qbacting + debuff) % 2].message_ES}`)
					});

					spawn_marker((qbacting + debuff) % 2);
				} else {
					handlers.text({
						sub_type: "message",
						message: (`Fire inside (${qbacting_messages[qbacting].message})`),
						message_ES: (`Fuego Interno (${qbacting_messages[qbacting].message_ES})`)
					});
				}
			}, 500);

			blue = false;
			red = true;

			dispatch.setTimeout(() => red = false, 6500);
		}

		if (!debuff_tracker_started) {
			dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, abnormality_change.bind(null, true));
			dispatch.hook("S_ABNORMALITY_END", 1, abnormality_change.bind(null, false));

			debuff_tracker_started = true;
		}
	}

	const skills = {
		"112-0": [{ type: "text", sub_type: "message", message: "Ice DOT", message_ES: "Ataque de Hielo" }],
		"110-0": [{ type: "text", sub_type: "message", message: "Fire DOT", message_ES: "Ataque de Fuego" }],
		"108-0": [
			{ type: "text", sub_type: "message", message: "Turn Right (Repel)", message_ES: "Giro a la Derecha (Repeler)" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 440, 0, 2000] }
		],
		"158-0": [
			{ type: "text", sub_type: "message", message: "Turn Right (Repel)", message_ES: "Giro a la Derecha (Repeler)" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 440, 0, 2000] }
		],
		"109-0": [
			{ type: "text", sub_type: "message", message: "Turn Left (Repel)", message_ES: "Giro a la Izquierda (Repeler)" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 440, 0, 2000] }
		],
		"159-0": [
			{ type: "text", sub_type: "message", message: "Turn Left (Repel)", message_ES: "Giro a la Izquierda (Repeler)" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 440, 0, 2000] }
		],
		"120-0": [{ type: "text", sub_type: "message", message: "Together", message_ES: "Rugido furioso" }],
		"145-0": [{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun" }],
		"157-0": [{ type: "text", sub_type: "message", message: "Change", message_ES: "Cambio" }],
		"103-0": [
			{ type: "text", sub_type: "message", message: "Tail (Flying)", message_ES: "Coletazo (Iframe)" },
			{ type: "text", sub_type: "message", message: "Arise!", message_ES: "¡Arise!", delay: 1500, class_position: "priest" },
			{ type: "spawn", func: "semicircle", args: [140, 260, 912, 0, 0, 10, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 135, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 260, 500, 0, 2000] }
		],
		"153-0": [
			{ type: "text", sub_type: "message", message: "Tail (Flying)", message_ES: "Coletazo (Iframe)" },
			{ type: "text", sub_type: "message", message: "Arise!", message_ES: "¡Arise!", delay: 1500, class_position: "priest" },
			{ type: "spawn", func: "semicircle", args: [140, 260, 912, 0, 0, 10, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 135, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 260, 500, 0, 2000] }
		],

		// AOE лед (большой)
		"104-0": [
			{ type: "text", sub_type: "message", message: "Ice Storm DOTs", message_ES: "Tormenta de Hielo (Amplio)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 0, 5000] }
		],
		// AOE огонь (большой)
		"105-0": [
			{ type: "text", sub_type: "message", message: "Fire Bombs", message_ES: "Meteoros de Fuego" },
			{ type: "spawn", func: "circle", args: [false, 553, 135, 500, 10, 270, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 315, 500, 10, 270, 0, 3250] },
			{ type: "spawn", func: "circle", args: [false, 553, 45, 500, 10, 270, 0, 3500] },
			{ type: "spawn", func: "circle", args: [false, 553, 235, 500, 10, 270, 0, 3750] },
			{ type: "spawn", func: "circle", args: [false, 553, 90, 500, 10, 270, 0, 4000] },
			{ type: "spawn", func: "circle", args: [false, 553, 270, 500, 10, 270, 0, 4250] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 500, 10, 270, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 500, 10, 270, 0, 4750] }
		],
		// AOE лед (малый)
		"154-0": [
			{ type: "text", sub_type: "message", message: "Ice Storm", message_ES: "Tormenta de Hielo" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 0, 6000] }
		],
		// AOE огонь (малый)
		"155-0": [{ type: "text", sub_type: "message", message: "Fire (Knockdown)", message_ES: "Fuego (Derribo)" },
			{ type: "text", sub_type: "message", delay: 1200, message: "Dodge", message_ES: "Iframe" }
		],

		"206-0": [{ type: "text", sub_type: "message", message: "Jump Back", message_ES: "Salto Atrás" }],
		"206-2": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 350, 0, 3000] }],
		"137-0": [{ type: "text", sub_type: "message", message: "Knockdown", message_ES: "¡¡[Rugido]!!" }],
		"138-0": [{ type: "text", sub_type: "message", message: "AOE", message_ES: "AOE" }],
		"139-0": [{ type: "text", sub_type: "message", message: "Fire to all", message_ES: "Cambiar al Fuego" }],
		"140-0": [{ type: "text", sub_type: "message", message: "Ice to all", message_ES: "Cambiar al Hielo" }],

		"die": [{ type: "func", func: debuff_removed }],
		"nd-3026-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3026-1000-1118-0": [{ type: "text", sub_type: "message", message: "Jump", message_ES: "Saltar" }],
		"s-3026-1000-2118-0": [{ type: "text", sub_type: "message", message: "Jump", message_ES: "Saltar" }],
		"s-3026-1000-1118-1": [{ type: "text", sub_type: "message", message: "Dodge!", message_ES: "Iframe!", delay: 615 }],
		"s-3026-1000-2118-1": [{ type: "text", sub_type: "message", message: "Dodge!", message_ES: "Iframe!", delay: 625 }],		
		"s-3026-1000-1212-0": [{ type: "func", func: skilld_event, args: [212] }],
		"s-3026-1000-1215-0": [{ type: "func", func: skilld_event, args: [215] }],
		"s-3026-1000-1213-0": [{ type: "func", func: skilld_event, args: [213] }],
		"s-3026-1000-1214-0": [{ type: "func", func: skilld_event, args: [214] }],
		"qb-3026-1000-3026005": [{ type: "func", func: skilld_event, args: [3026005] }], // ужас, одинаковые цвета
		"qb-3026-1000-3026004": [{ type: "func", func: skilld_event, args: [3026004] }], // ярость, разные цвета
		"qb-3026-1000-3126005": [{ type: "func", func: skilld_event, args: [3126005] }], // ужас, одинаковые цвета
		"qb-3026-1000-3126004": [{ type: "func", func: skilld_event, args: [3126004] }], // ярость, разные цвета
		"am-3026-1000-30260001": [{ type: "func", func: skilld_event, args: [30260001] }], // красный
		"am-3026-1000-30260002": [{ type: "func", func: skilld_event, args: [30260002] }], // синий
		"am-3026-1000-31260001": [{ type: "func", func: skilld_event, args: [31260001] }], // красный
		"am-3026-1000-31260002": [{ type: "func", func: skilld_event, args: [31260002] }] // синий
	};

	const object = {};

	for (const [key, value] of Object.entries(skills)) {
		if (key.length === 5) {
			object[`s-3026-1000-1${key}`] = value;
			object[`s-3026-1000-2${key}`] = value;
		} else {
			object[key] = value;
		}
	}

	return object;
};