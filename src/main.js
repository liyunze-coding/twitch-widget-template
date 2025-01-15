ComfyJS.onCommand = (user, command, message, flags, extra) => {
	if (command === "test") {
		ComfyJS.Reply(extra.id, "Command test was sent in chat!");
	}
};

ComfyJS.onChat = (user, message, flags, self, extra) => {};
