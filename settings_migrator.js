"use strict";

const DefaultSettings = {
	"enabled": true,
	"stream": false,
	"lNotice": false,
	"gNotice": false,
	"spawnObject": true,
	"speech": {
		"enabled": false,
		"rate": 2,
		"volume": 100,
		"gender": "female"
	},
	"cc": [
		"</font><font color=\"#ffff00\">"
	],
	"language": "es",
	"dungeons": {},
	"debug": {
		"chat": true,
		"all": false,
		"s": false,
		"e": false,
		"am": false,
		"ae": false,
		"ab": false,
		"ar": false,
		"ad": false,
		"h": false,
		"ns": false,
		"nd": false,
		"rb": false,
		"re": false,
		"dm": false,
		"qb": false
	}
};

module.exports = function MigrateSettings(from_ver, to_ver, settings) {
	if (from_ver === undefined) return { ...DefaultSettings, ...settings };
	else if (from_ver === null) return DefaultSettings;
	else {
		from_ver = Number(from_ver);
		to_ver = Number(to_ver);

		if (from_ver + 0.01 < to_ver) {
			settings = MigrateSettings(from_ver, from_ver + 0.01, settings);
			return MigrateSettings(from_ver + 0.01, to_ver, settings);
		}

		const oldsettings = settings;
		settings = Object.assign(DefaultSettings, {});

		to_ver = Math.round(to_ver * 100) / 100;

		switch (to_ver) {
			case 1.12:
				for (const option in oldsettings) {
					if (option === "dungeons" && Array.isArray(oldsettings[option])) {
						settings[option] = {};
						for (const element of oldsettings[option]) {
							const id = element.id;
							delete element.id;
							settings[option][id] = element;
						}
						continue;
					} else
						settings[option] = oldsettings[option];
				}
				return settings;

			case 1.13:
				remove(["dbg.json", "lib.js", "dispatch.js", "voice/index.js", "voice"]);
				break;

			case 1.14:
				oldsettings["debug"] = settings["debug"];
				break;

			case 1.15:
				for (const option in oldsettings) {
					if (option === "speaks")
						settings["speech"]["enabled"] = oldsettings["speaks"];
					else if (option === "rate")
						settings["speech"]["rate"] = parseInt(oldsettings["rate"]);
					else
						settings[option] = oldsettings[option];
				}
				return settings;

			case 1.16: // p102
				remove([
					"guides/3027.js",
					"guides/3034.js",
					"guides/3036.js",
					"guides/3201.js",
					"guides/3202.js",
					"guides/3203.js",
					"guides/9053.js",
					"guides/9056.js",
					"guides/9735.js",
					"guides/9739.js",
					"guides/9781.js",
					"guides/9920.js",
					"guides/9982.js"
				]);
				break;

			case 1.17: // p108
				remove([
					"guides/3020.js",
					"guides/3026.js",
					"guides/3034.js",
					"guides/3101.js",
					"guides/3103.js",
					"guides/3104.js",
					"guides/3106.js",
					"guides/3126.js",
					"guides/3204.js",
					"guides/9070.js",
					"guides/9770.js",
					"guides/9970.js"
				]);
				break;

			case 1.18: // p114
			case 1.19:
				remove([
					"guides/3023.js",
					"guides/3030.js",
					"guides/3041.js",
					"guides/3044.js",
					"guides/3102.js",
					"guides/3104.js",
					"guides/3107.js",
					"guides/3205.js",
					"guides/9044.js",
					"guides/9780.js",
					"guides/9982.js"
				]);
				break;
				
			case 1.22: // p100 Menma's Tera
				remove([
					"guides/3042.js",
					"guides/3047.js",
					"guides/3043.js",
					"guides/3040.js",
					"guides/3046.js",
					"guides/3105.js",
					"guides/3108.js",
					"guides/3109.js",
					"guides/3209.js",
				]);
				break;				
		}

		for (const option in oldsettings) {
			if (settings[option] !== undefined)
				settings[option] = oldsettings[option];
		}

		return settings;
	}

	function remove(files) {
		const fs = require("fs"), path = require("path");
		try {
			for (const file of files) {
				const filePath = path.join(__dirname, file);
				if (fs.existsSync(filePath)) {
					if (fs.lstatSync(filePath).isDirectory())
						fs.rmdirSync(filePath);
					else
						fs.unlinkSync(filePath);
				}
			}
		} catch (e) {}
	}
};