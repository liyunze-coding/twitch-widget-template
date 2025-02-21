# Twitch Widget Vanilla Template (Alpha)

Twitch Widget template in vanilla HTML, CSS and JS. 

Uses [Device Code Grant Flow](https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#device-code-grant-flow) authorization method and [ComfyJS](https://github.com/instafluff/comfyjs) library.

![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge)
![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=for-the-badge)
![CSS Badge](https://img.shields.io/badge/CSS-639?logo=css&logoColor=fff&style=for-the-badge)

## What do I use this for?

Want to start developing your own widget easily? Use this template.

- No backend
- Interactive in chat
- Easy to use [ComfyJS](https://github.com/instafluff/comfyjs) library
- Doesn't use third party Twitch token generators

## Instructions

VIDEO: https://youtu.be/nX4ib4bxubc

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

3. Modify details in `credentials.js`:

```js
const credentials = {
	clientId: "CLIENT_ID_HERE",
	scopes: "chat:read chat:edit channel:read:redemptions user:read:email",
	channel: ["your streaming channel","other streaming channels if needed"], // your main channel
	sender: "your bot username / streaming channel username", // bot username
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
  - Click on `Activate`
  - Click on `Authorize`
    - Authorize using your alt account (acting as a bot) is preferred, otherwise streaming account works fine
    - Whichever account you authorize with is the account that will send chat messages
  - Interact with browser widget, click on blue button `Click here after authorizing`

## How does it work?

Uses [Device Code Grant Flow](https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#device-code-grant-flow) authorization method, [ComfyJS](https://github.com/instafluff/comfyjs) library is used to integrate with Twitch Chat via IRC.

Access token, refresh token and scopes are stored in localstorage. Tokens are refreshed every time the widget is activated.

## Opportunities to Contribute

- [ ] Fix bug where authorization step failed
- [ ] Third Party Emotes Integrations
  - [ ] 7TV
  - [ ] FrankerFaceZ
  - [ ] BetterTTV

# Contributors

- Template developed by [RythonDev](https://twitch.tv/RythonDev)
- ComfyJS by [Instafluff](https://github.com/instafluff/comfyjs)
- Tmi.js by [AlcaDesign](https://github.com/AlcaDesign)