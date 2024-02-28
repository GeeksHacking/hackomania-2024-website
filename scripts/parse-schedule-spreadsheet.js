import csv from "csv-parser"; 
import fs from "fs";

const results = [];

fs.createReadStream(
	"./src/assets/schedule/HackOMania2024 Event Schedule - Pre-event.csv",
)
	.pipe(csv())
	.on("data", (data) => results.push(data))
	.on("end", () => {
		const jsonArray = results.map((row) => {
			return {
				Time: row.Time,
				Title: row.Title,
			};
		});

		const result = jsonArray
		
		fs.open("./src/assets/schedule/pre_event.json", "w", (err, fd) => {
			if (err) {
				console.error(err);
				return;
			}

			fs.writeFile(fd, JSON.stringify(result, null, 4), (err) => {
				if (err) {
					console.error(err);
				}

				fs.close(fd, (err) => {
					if (err) {
						console.error(err);
					}
				});
			});
		});
	});
