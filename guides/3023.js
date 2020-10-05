// Akalath Quarantine
//
// hecho por michengs

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = ES;

	let debuff = 0;
	let timer1;
	let timer2;

	function firstboss_debuff_event(skillid) {
		switch (skillid) {
			case 3119: // red inside
				if (debuff === 1) {
					handlers.text({
						sub_type: "message",
						message: "OUT (blue)",
						message_ES: "SALIR"
					});
				}
				if (debuff === 2) {
					handlers.text({
						sub_type: "message",
						message: "IN (red)",
						message_ES: "ENTRAR"
					});
				}
				break;

			case 3220: // blue inside
				if (debuff === 1) {
					handlers.text({
						sub_type: "message",
						message: "IN (blue)",
						message_ES: "ENTRAR"
					});
				}
				if (debuff === 2) {
					handlers.text({
						sub_type: "message",
						message: "OUT (red)",
						message_ES: "SALIR"
					});
				}
				break;

			case 30231000: // red debuff
				debuff = 1;

				dispatch.clearTimeout(timer1);
				dispatch.clearTimeout(timer2);

				timer1 = dispatch.setTimeout(() => debuff = 0, 70000);
				break;

			case 30231001: // blue debuff
				debuff = 2;

				dispatch.clearTimeout(timer2);
				dispatch.clearTimeout(timer1);

				timer2 = dispatch.setTimeout(() => debuff = 0, 70000);
				break;

			case 99020020: // debuff removed
				debuff = 0;

				dispatch.clearTimeout(timer1);
				dispatch.clearTimeout(timer2);
				break;
		}
	}

	function firstboss_start_event() {
		debuff = 0;
	}

	return {
		// 1 BOSS
		"nd-3023-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ns-3023-1000": [{ type: "func", func: firstboss_start_event }],
		"s-3023-1000-104-0": [{ type: "text", sub_type: "message", message: "Random Jump", message_ES: "Saltar + Stun" }],
		"s-3023-1000-105-0": [{ type: "text", sub_type: "message", message: "Back", message_ES: "Ataque hacia atras" }],
		"s-3023-1000-110-0": [
			{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 175, 10, 260, 0, 6000] }
		],
		"s-3023-1000-111-0": [
			{ type: "text", sub_type: "message", message: "Left Slash", message_ES: "Izquierda Slash" },
			{ type: "spawn", func: "vector", args: [553, 270, 200, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 200, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 20, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 20, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 6, 302, 270, 200, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 176, 502, 270, 200, 0, 2000] }
		],
		"s-3023-1000-112-0": [
			{ type: "text", sub_type: "message", message: "Right Slash", message_ES: "Derecha Slash" },
			{ type: "spawn", func: "vector", args: [553, 90, 200, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 200, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 20, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 20, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 354, 302, 90, 200, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 184, 502, 90, 200, 0, 2000] }
		],
		"s-3023-1000-113-0": [
			{ type: "text", sub_type: "message", message: "Left Slash", message_ES: "Izquierda Slash" },
			{ type: "spawn", func: "vector", args: [553, 270, 200, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 200, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 20, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 20, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 6, 302, 270, 200, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 176, 502, 270, 200, 0, 2000] }
		],
		"s-3023-1000-114-0": [
			{ type: "text", sub_type: "message", message: "Right Slash", message_ES: "Derecha Slash" },
			{ type: "spawn", func: "vector", args: [553, 90, 200, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 200, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 20, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 20, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 354, 302, 90, 200, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 184, 502, 90, 200, 0, 2000] }
		],
		"s-3023-1000-115-0": [
			{ type: "text", sub_type: "message", message: "Back Attack", message_ES: "Ataque hacia atras (CUIDADO)" },
			{ type: "spawn", func: "semicircle", args: [90, 270, 553, 0, 0, 20, 160, 100, 2000] },
			{ type: "spawn", func: "semicircle", args: [90, 270, 553, 0, 0, 12, 220, 100, 2000] },
			{ type: "spawn", func: "semicircle", args: [90, 270, 553, 0, 0, 10, 300, 100, 2000] }
		],
		"s-3023-1000-116-0": [
			{ type: "text", sub_type: "message", message: "Kaia's Shield", message_ES: "Kaia's Shield", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Thrall of Protection", message_ES: "Thrall of Protection", class_position: "mystic" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 0, 6000] }
		],
		"am-3023-1000-30231000": [{ type: "func", func: firstboss_debuff_event, args: [30231000] }],
		"am-3023-1000-30231001": [{ type: "func", func: firstboss_debuff_event, args: [30231001] }],
		"ae-0-0-99020020": [{ type: "func", func: firstboss_debuff_event, args: [99020020] }], // Debuff removed
		"ae-0-0-30231000": [{ type: "func", func: firstboss_debuff_event, args: [30231000] }], // Red debuff
		"ae-0-0-30231001": [{ type: "func", func: firstboss_debuff_event, args: [30231001] }], // Blue debuff
		"s-3023-1000-3107-0": [
			{ type: "text", sub_type: "message", message: "Smash", message_ES: "Ataque Delantero" },
			{ type: "spawn", func: "vector", args: [553, 90, 80, 10, 1000, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 350, 1000, 0, 4000] }
		],
		"s-3023-1000-3115-0": [
			{ type: "text", sub_type: "message", message: "Spin", message_ES: "Girar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 3500] }
		],
		"s-3023-1000-3116-0": [
			{ type: "text", sub_type: "message", message: "Circles + Spin", message_ES: "Circulos + Girar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 5000] }
		],
		"s-3023-1000-3119-0": [
			{ type: "func", func: firstboss_debuff_event, args: [3119] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 270, 0, 4000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 575, 0, 4000] }
		],
		"s-3023-1000-3220-0": [
			{ type: "func", func: firstboss_debuff_event, args: [3220] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 270, 0, 4000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 575, 0, 4000] }
		],

		// 2 BOSS
		"nd-3023-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3023-2000-164-0": [{ type: "text", sub_type: "message", message: "Counter Attack (bleed)", message_ES: "Contraataque (Sangrar)" }],
		"s-3023-2000-166-0": [{ type: "text", sub_type: "message", message: "Turn-back", message_ES: "Ataque hacia atras" }],
		"s-3023-2000-175-0": [
			{ type: "text", sub_type: "message", message: "Incoming Stun", message_ES: "Rugido (Stun)" },
			{ type: "text", sub_type: "message", delay: 1500, message: "Dodge", message_ES: "Iframe" }
		],
		"s-3023-2000-178-0": [{ type: "text", sub_type: "message", message: "Scratching (bleed)", message_ES: "Girar (Sangrar)" }],
		"s-3023-2000-181-0": [
			{ type: "text", sub_type: "message", message: "Rock Throw", message_ES: "Lanzamiento de rocas" },
			{ type: "spawn", func: "vector", args: [553, 90, 80, 10, 1000, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 350, 1000, 0, 4000] }
		],
		"s-3023-2000-182-0": [{ type: "text", sub_type: "message", message: "Knockdown", message_ES: "Knockdown" }],
		"s-3023-2000-185-0": [
			{ type: "text", sub_type: "message", message: "Explosion", message_ES: "Explosion", class_position: "dps" },
			{ type: "text", sub_type: "message", message: "Explosion", message_ES: "Explosion", class_position: "tank" },
			{ type: "text", sub_type: "message", message: "Big jump (Kaia's Shield)", message_ES: "Gran salto (Kaia's Shield)", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Big jump (Thrall of Protection)", message_ES: "Gran salto (Thrall of Protection)", class_position: "mystic" },
			{ type: "text", sub_type: "alert", delay: 110000, message: "Big jump soon...", message_ES: "Gran salto pronto...", class_position: "heal" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 500, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 750, 0, 6000] }
		],
		"s-3023-2000-202-0": [
			{ type: "text", sub_type: "message", message: "Backstab", message_ES: "Ataque hacia atras + Adelante" },
			{ type: "spawn", func: "vector", args: [553, 90, 80, 180, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 180, 500, 0, 3000] }
		],
		"s-3023-2000-207-0": [{ type: "text", sub_type: "message", message: "Phantom x5 (bleed)", message_ES: "Fantasma x5 (Sangrar)" }],
		"s-3023-2000-212-0": [{ type: "text", sub_type: "message", message: "Flash (bleed)", message_ES: "Flash (Sangrar)" }]
	};
};