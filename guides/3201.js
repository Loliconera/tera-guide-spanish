// Gossamer Vault (Dificil)
//
// made by michengs / ITunk

module.exports = (dispatch, handlers, guide, lang) => {
	let boss = null;

	return {
		// 1 BOSS
		"nd-3201-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		//"s-3201-1000-103-0": [{ type: "text", class_position:"tank", sub_type: "message", message_ES: "Iframe", message: "Iframe!" }],
		"s-3201-1000-104-0": [{ type: "text", class_position: "tank", sub_type: "message", message_ES: "Stun Frontal", message: "Stun Frontal" }],
		"s-3201-1000-107-0": [
      { type: "text", sub_type: "message", message: "Back", message_ES: "Empujar Atrás (Lento)" },
      { type: "text", sub_type: "message", delay: 2250, message: "Pull", message_ES: "Pull" },
			{ type: "spawn", func: "vector", args: [553, 90, 139, 173, 800, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 139, -173, 800, 0, 3000] }
		],
    "s-3201-1000-111-0": [
      { type: "text", sub_type: "message", message: "Back Wave", message_ES: "Spray Atrás (Lento)" },
			{ type: "spawn", func: "vector", args: [553, 0, 100, 112, 800, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 100, -112, 800, 0, 3000] }
		],
		// "s-3201-1000-112-0": [{ type: "text", sub_type: "message", message_ES: "<-IZQUIERDA + DERECHA->", message: "Left + Right" }],
		"s-3201-1000-113-0": [
			{ type: "text", sub_type: "message", message_ES: "Salto (Lento)", message: "Jump (Slow)" },
			{ type: "text", sub_type: "message", delay: 1500, message_ES: "Pull", message: "Pull!" }
		],
		"s-3201-1000-118-0": [
			{ type: "text", sub_type: "message", message_ES: "Salto (Lento)", message: "Jump (Slow)" },
			{ type: "text", sub_type: "message", delay: 1500, message_ES: "Pull", message: "Pull!" }
		],
    "s-3201-1000-119-0": [
      { type: "text", sub_type: "message", delay: 1000, message_ES: "Spray FRONTAL + ATRÁS", message: "Back + Front" },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 70, 800, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 110, 800, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 250, 800, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 290, 800, 0, 2500] }
		],
		//"s-3201-1000-121-0": [{ type: "text", class_position: "tank", sub_type: "message", message_ES: "Derecha", message: "Right" }],
		//"s-3201-1000-122-0": [{ type: "text", class_position: "tank", sub_type: "message", message_ES: "Izquierda", message: "Left" }],
		"s-3201-1000-124-0": [{ type: "text", class_position: "tank", sub_type: "message", message_ES: "Stun Frontal", message: "Stun attack" }],
		"s-3201-1000-127-0": [
			{ type: "text", class_position: "dps", sub_type: "message", message_ES: "Empujar Atrás (Rápido)", message: "Back (fast)" },
			{ type: "text", class_position: "heal", sub_type: "message", message_ES: "Empujar Atrás (Rápido)", message: "Back (fast)" },
			{ type: "spawn", func: "vector", args: [553, 90, 139, 173, 800, 0, 3000] },	 
			{ type: "spawn", func: "vector", args: [553, 270, 139, -173, 800, 0, 3000] } 
		],
		//"s-3201-1000-128-0": [{ type: "text", class_position: "tank", sub_type: "message", message_ES: "Triple Attack", message: "Triple Attack" }],
		"s-3201-1000-131-0": [
			{ type: "text", class_position: "dps", sub_type: "message", message_ES: "Spray Atrás (Rapido)", message: "Back Wave" },
			{ type: "text", class_position: "heal", sub_type: "message", message_ES: "Spray Atrás (Rapido)", message: "Back Wave" },
			{ type: "spawn", func: "vector", args: [553, 0, 100, 112, 800, 0, 3000] }, 
			{ type: "spawn", func: "vector", args: [553, 0, 100, -112, 800, 0, 3000] } 
		],
		// "s-3201-1000-132-0": [{ type: "text", sub_type: "message", message_ES: "<-IZQUIERDA + DERECHA->", message: "Left + Right" }],
		"s-3201-1000-133-0": [{ type: "text", sub_type: "message", delay: 0, message_ES: "Salto (Rapido)", message: "Jump (Fast)" },
			{ type: "text", sub_type: "message", delay: 900, message_ES: "Iframe", message: "Iframe!" }
		],
		"s-3201-1000-138-0": [{ type: "text", sub_type: "message", delay: 0, message_ES: "Salto (Rapido)", message: "Jump P (Fast)" },],
    "s-3201-1000-139-0": [
      { type: "text", sub_type: "message", message_ES: "FRONTAL + ATRÁS (Rapido)", message: "Back + Front (Fast)" },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 70, 800, 0, 2500] },	 
			{ type: "spawn", func: "vector", args: [553, 2, 0, 110, 800, 0, 2500] }, 
			{ type: "spawn", func: "vector", args: [553, 2, 0, 250, 800, 0, 2500] }, 
			{ type: "spawn", func: "vector", args: [553, 2, 0, 290, 800, 0, 2500] }	 
		],
		"s-3201-1000-143-0": [
			{ type: "text", class_position: "tank", sub_type: "message", message_ES: "Izquierda > Derecha", message: "Left > Right" },
			{ type: "text", class_position: "dps", sub_type: "message", message_ES: "Derecha > Izquierda", message: "Right > Left" },
			{ type: "text", class_position: "heal", sub_type: "message", message_ES: "Derecha > Izquierda", message: "Right > Left" },
			{ type: "spawn", func: "marker", args: [false, 150, 300, 100, 2715, true, null] }, // 1
			{ type: "spawn", func: "marker", args: [false, 225, 300, 2800, 4175, true, null] }, // 6
			{ type: "spawn", func: "marker", args: [false, 30, 300, 100, 1000, true, null] }, // 1
			{ type: "spawn", func: "marker", args: [false, 330, 300, 1100, 5000, true, null] } // 7
		],
		"s-3201-1000-145-0": [
			{ type: "text", class_position: "tank", sub_type: "message", message_ES: "Izquierda > Derecha", message: "Left > Right" },
			{ type: "text", class_position: "dps", sub_type: "message", message_ES: "Derecha > Izquierda", message: "Right > Left" },
			{ type: "text", class_position: "heal", sub_type: "message", message_ES: "Derecha > Izquierda", message: "Right > Left" },
			{ type: "spawn", func: "marker", args: [false, 30, 300, 100, 1000, true, null] }, // 1
			{ type: "spawn", func: "marker", args: [false, 330, 300, 1100, 5000, true, null] }, // 7
			{ type: "spawn", func: "marker", args: [false, 150, 300, 100, 2000, true, null] }, // 1
			{ type: "spawn", func: "marker", args: [false, 225, 300, 2500, 5000, true, null] } // 6
		],
    "s-3201-1000-148-0": [
      { type: "text", sub_type: "message", message_ES: "Mano Derecha (Volando)", message: "Right Hand (Flying)" },
			{ type: "spawn", func: "circle", args: [false, 553, 20, 150, 10, 320, 0, 4000] }  
		],		
    "s-3201-1000-149-0": [
      { type: "text", sub_type: "message", message_ES: "Mano Izquierda (Volando)", message: "Left Hand (Flying)" },
			{ type: "spawn", func: "circle", args: [false, 553, 340, 150, 10, 320, 0, 4000] }  
		],
		"s-3201-1000-151-0": [{ type: "text", sub_type: "message", message_ES: "Ataque Stun", message: "Stun Attack!" }],
		"s-3201-1000-305-0": [{ type: "text", sub_type: "message", message_ES: "Pizza", message: "Pizza" }],
		"s-3201-1000-311-0": [
			{ type: "text", sub_type: "message", message_ES: "Repeler Full (Lento)", message: "Repel Full (Slow)" },
			{ type: "text", sub_type: "message", delay: 4000, message_ES: "Iframe", message: "Iframe!" }
		],
		"s-3201-1000-312-0": [
			{ type: "text", sub_type: "message", message_ES: "Repeler Full (Rápido)", message: "Repel Full (Fast)" },
			{ type: "text", sub_type: "message", delay: 2000, message_ES: "Iframe", message: "Iframe!" }
		],
		"s-3201-1000-313-0": [
			{ type: "text", sub_type: "message", message_ES: "SALIR y ENTRAR (Lento)", message: "Circles (Slow)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 75, 10, 300, 0, 6000] }
		],
		"s-3201-1000-314-0": [
			{ type: "text", sub_type: "message", message_ES: "SALIR y ENTRAR (Rápido)", message: "Circles (Fast)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 75, 10, 300, 0, 6000] }
		],

		// 2 BOSS
		"ns-3201-2000": [{ type: "func", func: () => boss = null }],
		"nd-3201-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"am-3201-320126-32010224": [
			{ type: "func", func: () => boss = 1 },
			{ type: "text", delay: 52000, sub_type: "notification", message_ES: "[c=#ff6600]REAL[/c] Debuff en 5 Segundos", message: "True Debuff in 5 seconds" },
			{ type: "event", delay: 80000, args: [
				{ type: "func", check_func: () => boss === 1, func: () => boss = null },
				{ type: "text", check_func: () => boss === 1, sub_type: "message", message_ES: "Cargar Debuff", message: "Debuff reload" }
			] }
		],
		"am-3201-2000-32010220": [
			{ type: "func", func: () => { boss = 0; } },
			{ type: "text", delay: 52000, sub_type: "notification", message_ES: "[c=#ba2a02]FAKE[/c] Debuff en 5 Segundos", message: "False Debuff in 5 seconds" },
			{ type: "event", delay: 80000, args: [
				{ type: "func", check_func: () => boss === 0, func: () => boss = null },
				{ type: "text", check_func: () => boss === 0, sub_type: "message", message_ES: "Cargar Debuff", message: "Debuff reload" }
			] }
    ],
    "am-3201-320121-32010222": [{ type: "text", sub_type: "notification", message: "Spike in 5 seconds", message_ES: "Pico en 5 segundos" }],
		"h-3201-2000-81": [{ type: "text", sub_type: "message", message_ES: "80%", message: "80%" }],
		"h-3201-2000-76": [{ type: "text", sub_type: "message", message_ES: "75%", message: "75%" }],
		"s-3201-2000-108-0": [{ type: "text", sub_type: "message", message_ES: "Ataque FRONTAL | Atrás", message: "Back Attack!" },],	
		"s-3201-2000-150-0": [{ type: "text", sub_type: "message", message_ES: "Fantasma", message: "Phantom" }],
		"s-3201-2000-228-0": [
			{ type: "text", sub_type: "message", message_ES: "En Equipo!!", message: "Team Up!!!" },
			{ type: "text", sub_type: "alert", delay: 4000, message_ES: "Iframe", message: "Iframe" }
		],
		"s-3201-2000-230-0": [{ type: "text", sub_type: "message", message_ES: "AOE!!", message: "AOE!!" },],

		"s-3201-2000-231-0": [
			{ type: "text", sub_type: "message", message_ES: "SALIR", message: "Out Safe" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] }
		],
		"s-3201-2000-232-0": [{ type: "text", sub_type: "message", message_ES: "ENTRAR", message: "In Safe" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 3, 1000, 0, 3000] }
		],
		"s-3201-2000-236-0": [{ type: "text", sub_type: "message", message: "Counter Attack (Bait)", message_ES: "Contraataque (Byte)" }],
		"s-3201-2000-238-0": [
			{ type: "text", sub_type: "message", message: "Out > In", message_ES: "Salir > Entrar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] }
		],
		"s-3201-2000-239-0": [
			{ type: "text", sub_type: "message", message: "In > Out", message_ES: "Entrar > Salir" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 3, 1000, 0, 3000] }
		]
	};
};