import * as path from "path";
import _ from "lodash";
import {loadJsonFile} from "../libs";

const PATH_FILE_CATEGORY = path.join(__dirname, '../data/pages.json');

function loadFilePages() {
	return loadJsonFile(PATH_FILE_CATEGORY);
}

export function getPageBySlug(slug) {
	return _.filter(loadFilePages(), _.identity({slug: slug})).shift()
}
