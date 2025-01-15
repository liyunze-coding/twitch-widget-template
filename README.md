# Twitch Widget Vanilla Template

![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge)
![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=for-the-badge)
![CSS Badge](https://img.shields.io/badge/CSS-639?logo=css&logoColor=fff&style=for-the-badge)

## Instructions

1. Install the Widget

- Option 1:
  - Click on the green Code button
  - Download Zip
  - Extract zip file
- Option 2:
  - `git clone https://github.com/liyunze-coding/twitch-widget-template.git`

2. Create a Twitch Application

  - https://dev.twitch.tv/console
  - Create a new application
    - Name (required)
    - OAuth Redirect URL(s): `http://localhost`
    - Category: `Chat Bot`
    - Client Type: `Public`
  - Manage the new application
  - Obtain Client ID

3. Modify details in `src/credentials.js`:

```js
const credentials = {
	clientId: "CLIENT_ID_HERE",
	scopes: "chat:read chat:edit channel:read:redemptions user:read:email",
	channel: ["YOUR STREAMING CHANNEL"], // your main channel
	sender: "YOUR BOT USERNAME / STREAMING CHANNEL", // bot username
};

export default credentials;
```

4. New Browser source
  - Open OBS
  - Add a new Browser Source
  - Checked `Local File`
  - Select the `index.html` file of this project
  - You should see a pop up (modal) that ask you to authorize

5. Authorization
  - Select the browser source and Interact
  - If client ID is missing, refer to step 2-3
  - You should see activation link
  - Copy it and paste it on your browser's URL search bar (Chrome, Firefox, Opera etc.)
  - Activate and authorize
  - Interact with browser widget, click on blue button `Click here after authorizing`

## Opportunities to Contribute

- [ ] Third Party Emotes Integrations
  - [ ] 7TV
  - [ ] FrankerFaceZ
  - [ ] BetterTTV
- [ ] PubSub from alternate accounts (Different setup method required?)

