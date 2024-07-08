# Terbium App Repo

The official Terbium App repo

## Formatting PWAs

Pull Requests for apps are always viewed and heres some basic guidelines for your app to get accepted

- App is in the repo in the folder `assets/com.tb.{appname}`
- Icon should be defined in the `assets/com.tb.{appname}/icon.[ext]`
- WM Arguments and Metadata is in the `apps.json` file in this repo
    - Example
    ```json
    {
        "name": "YouTube",
        "icon": "https://raw.githubusercontent.com/TerbiumOS/app-repo/main/assets/com.tb.youtube/icon.png",
        "description": "Share your videos with friends, family, and the world.",
        "authors": ["Google"],
        "pkg-name": "youtube",
        "images": [
            "https://raw.githubusercontent.com/TerbiumOS/app-repo/main/assets/com.tb.youtube/images/1.png"
        ],
        "wmArgs": {
            "title": {
                "text": "YouTube",
                "weight": 600
            },
            "icon": "https://raw.githubusercontent.com/TerbiumOS/app-repo/main/assets/com.tb.youtube/icon.png",
            "src": "https://youtube.com",
            "size": {
                "width": 600,
                "height": 400
            },
            "single": true,
            "resizable": true,
            "app_id": "com.tb.youtube"
        }
    }
    ```

## Formatting TAPP's

- The easiest way to creat TAPP's is to download the TB Dev SDK 2024 from the XSTARZ XTRAS repo and use the feilds to generate your TAPP and Manifest.
- The app should be put into the assets folder with the naming scheme: {appname}.TAPP or com.tb.{appname}.TAPP
- Also you can put into the app repo manifest where you want to download the TAPP from if you want to host it somewhere else for some reason, Image assets can still be stored in a folder in the assets folder as long as it follows the naming scheme of com.tb.{appname}
  - Example
  ```json
    {
        "name": "About Proxy",
        "icon": "https://tbapps.pages.dev/assets/com.tb.aboutproxy/icon.svg",
        "description": "Chrome for your browser",
        "images": [
            "https://raw.githubusercontent.com/TerbiumOS/app-repo/main/assets/com.tb.youtube/images/1.png"
        ],
        "authors": ["r58playz"],
        "pkg-name": "aboutproxy",
        "pkg-download": "https://tbapps.pages.dev/assets/aboutproxy.TAPP"
    },
  ```

