/**
 * Class representing a storage system using IndexedDB.
 */
class DBStorage {
	/**
	 * Create a DBStorage instance.
	 * @param {string} [dbName="MyDatabase"] - The name of the database.
	 * @param {string} [storeName="MyStore"] - The name of the object store.
	 */
	constructor(dbName = "MyDatabase", storeName = "MyStore") {
		this.dbName = dbName;
		this.storeName = storeName;
		this.db = null;
	}

	/**
	 * Initialize the IndexedDB database and object store.
	 */
	async init() {
		const request = indexedDB.open(this.dbName, 1);

		request.onupgradeneeded = (event) => {
			const db = event.target.result;
			if (!db.objectStoreNames.contains(this.storeName)) {
				db.createObjectStore(this.storeName, {
					keyPath: "id",
					autoIncrement: true,
				});
			}
		};

		request.onsuccess = (event) => {
			this.db = event.target.result;
			console.log("IndexedDB initialized successfully.");
		};

		request.onerror = (event) => {
			console.error(
				"Error initializing IndexedDB:",
				event.target.errorCode
			);
		};
	}

	/**
	 * Save data to the object store.
	 * @param {string|number} key - The key for the data.
	 * @param {*} value - The value to be stored.
	 * @returns {Promise<string|number>} - A promise that resolves with the key of the saved data.
	 */
	async save(key, value) {
		if (!this.db) {
			await this.init();
		}

		try {
			const transaction = this.db.transaction(
				[this.storeName],
				"readwrite"
			);
			const store = transaction.objectStore(this.storeName);
			const request = store.put({ id: key, value: value });

			return new Promise((resolve, reject) => {
				request.onsuccess = () => {
					resolve(request.result);
				};

				request.onerror = (event) => {
					reject(event.target.errorCode);
				};
			});
		} catch (error) {
			console.error("Error saving data:", error);
			throw error;
		}
	}

	/**
	 * Retrieve data from the object store by key.
	 * @param {string|number} key - The key of the data to retrieve.
	 * @returns {Promise<*>} - A promise that resolves with the retrieved data.
	 */
	async get(key) {
		if (!this.db) {
			await this.init();
		}

		try {
			const transaction = this.db.transaction(
				[this.storeName],
				"readonly"
			);
			const store = transaction.objectStore(this.storeName);
			const request = store.get(key);

			return new Promise((resolve, reject) => {
				request.onsuccess = () => {
					resolve(request.result.value);
				};

				request.onerror = (event) => {
					reject(event.target.errorCode);
				};
			});
		} catch (error) {
			console.error("Error retrieving data:", error);
			return null;
		}
	}
}

export default DBStorage;

/**
 * Example usage:
 *
 * import DBStorage from "./DBStorage.js";
 *
 * // Create an instance of DBStorage
 * const dbStorage = new DBStorage("MyDatabase", "MyStore");
 *
 * // Example key and value to save
 * const key = "user1";
 * const value = {
 *   name: "John Doe",
 *   email: "john.doe@example.com",
 * };
 *
 * // Save data to the database
 * dbStorage.save(key, value)
 *   .then((id) => {
 *     console.log(`Data saved with ID: ${id}`);
 *
 *     // Retrieve the saved data by key
 *     return dbStorage.get(key);
 *   })
 *   .then((data) => {
 *     console.log("Retrieved data:", data);
 *   })
 *   .catch((error) => {
 *     console.error("Error:", error);
 *   });
 */
