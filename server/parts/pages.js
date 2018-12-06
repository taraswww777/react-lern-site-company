import * as path from "path";
import fs from "fs";

const _ = require('lodash');

const PATH_FILE_CATEGORY = path.join(__dirname, '../data/pages.json');


function loadFilePages() {
	let content = fs.readFileSync(PATH_FILE_CATEGORY, "utf8");

	try {
		return JSON.parse(content)
	} catch (e) {
		return [];
	}
}

export function getPageBySlug(slug) {
	return _.filter(loadFilePages(), _.identity({slug:slug})).shift()
}
