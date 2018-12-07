import * as path from "path";
import {loadJsonFile} from "../libs";

const PATH_FILE_SERVICES = path.join(__dirname, '../data/services.json');

function loadFileServices() {
	return loadJsonFile(PATH_FILE_SERVICES);
}

export function getAllServices() {
	return loadFileServices();
}
