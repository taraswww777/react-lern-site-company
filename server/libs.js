import fs from "fs";

export function loadJsonFile(path) {
	let content = fs.readFileSync(path, "utf8");

	try {
		return JSON.parse(content)
	} catch (e) {
		console.error('ERROR IN FILE:',path,"\n", e);
		return [];
	}
}
