import { fs } from "fs";
import path from "path";

export default async function handler(req, res) {
    try {
        const filePath = path.join(process.cwd(), "data", "gamecollection.json");
        const fileData = await fs.readFile(filePath, "utf-8");
        const jsonData = JSON.parse(fileData);

        res.status(200).json(jsonData);
    } catch (error) {
        res.status(500).json({ error: "Fehler beim Lesen der Datei" });
    }
}