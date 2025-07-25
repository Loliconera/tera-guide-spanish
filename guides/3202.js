// Draakon Arena (Difícil)
//
// Hecho por Kuroine / HSDN / Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		"nd-3202-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		// Ress cebo / Verificación de rango
		"s-3202-1000-1107-0": [{ type: "text", sub_type: "message", message: "Spectral Throw (Bait)", message_ES: "Lanzamiento Espectral" },
			{ type: "text", sub_type: "message", delay: 1400, message: "Dodge!", message_ES: "Iframe" }
		],
		"s-3202-1000-2107-0": [{ type: "text", sub_type: "message", message: "Spectral Throw (Bait)", message_ES: "Lanzamiento Espectral" },
			{ type: "text", sub_type: "message", delay: 1400, message: "Dodge!", message_ES: "Iframe" }
		],
		// Ataques básicos
		"s-3202-1000-1103-0": [{ type: "text", sub_type: "message", message: "2 Hits | Bleed", message_ES: "2 Hits | Sangrar" }],
		"s-3202-1000-2103-0": [{ type: "text", sub_type: "message", message: "2 Hits | Bleed", message_ES: "2 Hits | Sangrar" }],
		"s-3202-1000-1113-0": [{ type: "text", sub_type: "message", message: "4 Hits Combo", message_ES: "4 Hits Combo" }],
		"s-3202-1000-2113-0": [{ type: "text", sub_type: "message", message: "4 Hits Combo", message_ES: "4 Hits Combo" }],
		"s-3202-1000-1105-0": [{ type: "text", sub_type: "message", message: "Uppercut | Stun", message_ES: "Corte | Stun" }],
		"s-3202-1000-2105-0": [{ type: "text", sub_type: "message", message: "Uppercut | Stun", message_ES: "Corte | Stun" }],
		"s-3202-1000-1106-0": [{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun" }],
		"s-3202-1000-2106-0": [{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun" }],
		// 120 > 114
		"s-3202-1000-1120-0": [
			{ type: "text", sub_type: "message", delay: 400, message: "Stun", message_ES: "Muchos Cortes | Stun (AOE)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 8, 425, 100, 3000] }
		],
		"s-3202-1000-2120-0": [
			{ type: "text", sub_type: "message", delay: 400, message: "Stun", message_ES: "Muchos Cortes | Stun (AOE)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 8, 425, 100, 3000] }
		],
		"s-3202-1000-1114-0": [
			{ type: "text", sub_type: "message", delay: 140, message: "Dodge!", message_ES: "Iframe" }
		],
		"s-3202-1000-2114-0": [
			{ type: "text", sub_type: "message", delay: 220, message: "Dodge!", message_ES: "Iframe" }
		],
		"s-3202-1000-1111-0": [{ type: "text", sub_type: "message", message: "Leap (Stun)", message_ES: "Salto (Stun)" },
			{ type: "text", sub_type: "message", delay: 1800, message: "Dodge!", message_ES: "Iframe" }
		],
		"s-3202-1000-2111-0": [{ type: "text", sub_type: "message", message: "Leap (Stun)", message_ES: "Salto (Stun)" },
			{ type: "text", sub_type: "message", delay: 1750, message: "Dodge!", message_ES: "Iframe" }
		],
		"s-3202-1000-1115-0": [
      { type: "text", sub_type: "message", message: "AOE Bombs (Gather)", message_ES: "AOE Bombas (Reunir)" },
      { type: "text", sub_type: "message", delay: 3000, message: "Gather!", message_ES: "¡Recolectar!" }    
		],
		"s-3202-1000-2115-0": [
      { type: "text", sub_type: "message", message: "AOE Bombs (Gather)", message_ES: "AOE Bombas (Reunir)" },
      { type: "text", sub_type: "message", delay: 3000, message: "Gather!", message_ES: "¡Recolectar!" }    
		],
		"s-3202-1000-1112-0": [
			{ type: "text", sub_type: "message", message: "Front | Back Kick", message_ES: "Girar | Patada Atrás" },
			{ type: "spawn", func: "vector", args: [553, 70, 110, 160, 350, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 290, 110, -160, 350, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 210, 360, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 200, 350, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 190, 343, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 150, 360, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 160, 350, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 170, 343, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 180, 340, 0, 3000] }
		],
		"s-3202-1000-2112-0": [
			{ type: "text", sub_type: "message", message: "Front | Back Kick", message_ES: "Girar | Patada Atrás" },
			{ type: "spawn", func: "vector", args: [553, 70, 110, 160, 350, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 290, 110, -160, 350, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 210, 360, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 200, 350, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 190, 343, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 150, 360, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 160, 350, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 170, 343, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 180, 340, 0, 3000] }
		],
		"s-3202-1000-1110-0": [
			{ type: "text", sub_type: "message", message: "Donuts + Wave", message_ES: "Donas + Ola (Entrar)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 6, 650, 0, 4000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 4000] }
		],
		"s-3202-1000-2110-0": [
			{ type: "text", sub_type: "message", message: "Donuts + Wave", message_ES: "Donas + Ola (Entrar)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 6, 650, 0, 4000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 4000] }
		],
		"s-3202-1000-1109-0": [
			{ type: "text", sub_type: "message", message: "Dodge (Knockdown)", message_ES: "Iframe (Derribar)" },
			{ type: "text", sub_type: "message", delay: 1300, message: "Dodge (Spin)", message_ES: "Iframe (Girar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 100, 8, 420, 0, 1000] },
			{ type: "spawn", func: "circle", delay: 1000, args: [true, 553, 180, 0, 8, 415, 0, 3000] }
		],
		"s-3202-1000-2109-0": [
			{ type: "text", sub_type: "message", message: "Dodge (Knockdown)", message_ES: "Iframe (Derribar)" },
			{ type: "text", sub_type: "message", delay: 1300, message: "Dodge (Spin)", message_ES: "Iframe (Girar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 100, 8, 420, 0, 1000] },
			{ type: "spawn", func: "circle", delay: 1000, args: [true, 553, 180, 0, 8, 415, 0, 3000] }
		],
		"s-3202-1000-1304-0": [{ type: "text", sub_type: "message", message: "Shield!", message_ES: "¡ESCUDO!" }],
		"s-3202-1000-2304-0": [{ type: "text", sub_type: "message", message: "Shield!", message_ES: "¡ESCUDO!" }],
		"ab-3202-1000-32021006": [
			{ type: "text", sub_type: "message", message: "Plague of Exhaustion", message_ES: "Plague", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Regression", message_ES: "Regression", class_position: "mystic" }
		],
		// Pie derecho (ondas hacia afuera)
		"s-3202-1000-1121-0": [
			{ type: "text", sub_type: "message", message: "Pizza | Waves (Out > In)", message_ES: "Pizza + Ola (Salir > Entrar)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 550, 0, 3000] },
			{ type: "spawn", func: "marker", args: [false, 80, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "marker", args: [false, 280, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 60, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 120, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 240, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 300, 450, 0, 3500] },
			{ type: "text", sub_type: "message", delay: 1700, message: "Dodge!", message_ES: "Iframe" }
		],
		"s-3202-1000-2121-0": [
			{ type: "text", sub_type: "message", message: "Pizza | Waves (Out > In)", message_ES: "Pizza + Ola (Salir > Entrar)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 550, 0, 3000] },
			{ type: "spawn", func: "marker", args: [false, 80, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "marker", args: [false, 280, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 60, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 120, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 240, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 300, 450, 0, 3500] },
			{ type: "text", sub_type: "message", delay: 1720, message: "Dodge!", message_ES: "Iframe" }
		],
		"s-3202-1000-1122-0": [{ type: "spawn", func: "marker", args: [false, 0, 200, 500, 2000, true, null] }],
		"s-3202-1000-1123-0": [
			{ type: "spawn", func: "vector", args: [912, 0, 0, 295, 550, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 85, 550, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [85, 295, 912, 0, 0, 6, 550, 0, 2000] }
		],
		"s-3202-1000-2122-0": [{ type: "spawn", func: "marker", args: [false, 0, 200, 500, 2000, true, null] }],
		"s-3202-1000-2123-0": [
			{ type: "spawn", func: "vector", args: [912, 0, 0, 295, 550, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 85, 550, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [85, 295, 912, 0, 0, 6, 550, 0, 2000] }
		],
    "s-3202-1000-1127-0": [
      { type: "text", sub_type: "message", message: "Waves (Out > In)", message_ES: "Ola (Salir > Entrar)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 14, 160, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 8, 390, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 6, 620, 0, 3000] }
		],
    "s-3202-1000-2127-0": [
      { type: "text", sub_type: "message", message: "Waves (Out > In)", message_ES: "Ola (Salir > Entrar)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 14, 160, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 8, 390, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 6, 620, 0, 3000] }
		],
		// Pie izquierdo (ondas hacia adentro)
		"s-3202-1000-1124-0": [
			{ type: "text", sub_type: "message", message: "Pizza | Waves (In > Out)", message_ES: "Pizza + Ola Waves (Entrar > Salir)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 550, 0, 3000] },
			{ type: "spawn", func: "marker", args: [false, 80, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "marker", args: [false, 280, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 60, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 120, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 240, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 300, 450, 0, 3500] },
			{ type: "text", sub_type: "message", delay: 1550, message: "Dodge!", message_ES: "Iframe" }
		],
		"s-3202-1000-2124-0": [
			{ type: "text", sub_type: "message", message: "Pizza | Waves (In > Out)", message_ES: "Pizza + Ola Waves (Entrar > Salir)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 550, 0, 3000] },
			{ type: "spawn", func: "marker", args: [false, 80, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "marker", args: [false, 280, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 60, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 120, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 240, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 300, 450, 0, 3500] },
			{ type: "text", sub_type: "message", delay: 1550, message: "Dodge!", message_ES: "Iframe" }
		],
		"s-3202-1000-1125-0": [{ type: "spawn", func: "marker", args: [false, 0, 200, 500, 3000, true, null] }],
		"s-3202-1000-1126-0": [
			{ type: "spawn", func: "vector", args: [912, 0, 0, 295, 550, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 85, 550, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [85, 295, 912, 0, 0, 6, 550, 0, 2000] }
		],
		"s-3202-1000-2125-0": [{ type: "spawn", func: "marker", args: [false, 0, 200, 500, 3000, true, null] }],
		"s-3202-1000-2126-0": [
			{ type: "spawn", func: "vector", args: [912, 0, 0, 295, 550, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 85, 550, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [85, 295, 912, 0, 0, 6, 550, 0, 2000] }
		],
    "s-3202-1000-1128-0": [
      { type: "text", sub_type: "message", message: "Waves (In > Out)", message_ES: "Olas (Entrar > Salir)" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 14, 160, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 8, 390, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 5535, 0, 0, 6, 620, 0, 3000] }
		],
    "s-3202-1000-2128-0": [
      { type: "text", sub_type: "message", message: "Waves (In > Out)", message_ES: "Olas (Entrar > Salir)" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 14, 160, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 8, 390, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 6, 620, 0, 3000] }
		]
	};
};