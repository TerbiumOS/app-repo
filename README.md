# Formatting

Pull Requests for apps are always viewed and heres some basic guidelines for your app to get accepted

- App is in the repo in the folder `assets/com.tb.{appname}`
- Icon should be defined in the `assets/com.tb.{appname}/icon.[ext]`
- WM Arguments and Metadata is in the `apps.json` file in this repo
    - example
    ```json
    {
        "name": "YouTube",
        "icon": "/assets/com.tb.youtube/icon.png",
        "description": "YouTube for Terbium",
        "authors": ["Google"],
        "wmArgs": {
            "title": {
                "text": "YouTube",
                "weight": 600
            },
            "icon": "/assets/com.tb.youtube/icon.png",
            "size": {
                "width": 600,
                "height": 400
            },
            "single": false,
            "resizable": true,
            "app_id": "com.tb.youtube"
        }
    }
    ```
