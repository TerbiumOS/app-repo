# Formatting

Pull Requests for apps are always viewed and heres some basic guidelines for your app to get accepted

- App is in the repo in the folder `assets/com.tb.{appname}`
- Icon should be defined in the `assets/com.tb.{appname}/icon.[ext]`
- WM Arguments and Metadata is in the `apps.json` file in this repo
    - example
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
