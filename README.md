# Character / Game Music layout for Tournament Stream Helper

These layouts allow you to play specific music tracks in OBS based on the currently set game in Tournament Stream Helper, or the characters set for each player in scoreboard #1. The MP3 file corresponding to the current situation will start playing upon loading the layout, as well as when switching character/game.

This is what is used notably in WolfTV stream to play the Street Fighter 6 character themes during Wolf Warrior and From Pack to Pack events (Example of the layout in action: https://www.youtube.com/live/U3NhSe40kCc?t=1333)

## Pre-requisites

- A functional install of [Tournament Stream Helper v5.751](https://github.com/joaorb64/TournamentStreamHelper/releases) or higher, with `base_files` asset packs installed for any game you want to use this with
- A functional install of a stream software which can load and display webpages, such as [OBS Studio](https://obsproject.com/)

## Instructions (OBS Studio)

### Game Theme layout (`game_theme`)

1. Copy the `game_theme` folder in the `layouts` folder of TSH
1. Copy your game theme to the following path: `layouts/game_theme/files/sound_{game_codename}.mp3`, with `{game_codename}` being replaced with the TSH codename for the game of your choice
    - Note: You can find the game codename by browsing your TSH folder to `user_data/games`
1. Load the `layouts/game_theme/index.html` file as a Browser Source in OBS Studio
1. Check the following boxes in your Browser Source properties: "Control audio via OBS", "Shutdown source when not visible", "Refresh browser when scene becomes active"

Example: A theme for Street Fighter 6 would have the path `layouts/game_theme/files/sound_sf6.mp3`

### Character Theme layout (`chara_theme`)

1. Copy the `chara_theme` folder in the `layouts` folder of TSH
1. Copy your game theme to the following path: `layouts/chara_theme/files/{game_codename}/sound_{character_codename}_0.mp3`, with `{game_codename}` being replaced with the TSH codename for the game of your choice, and `{character_codename}` being replaced with the TSH codename for the character of your choice
    - Note: You can find the game codename by browsing your TSH folder to `user_data/games`, and the character codename in the game’s subfolder
1. Load the `layouts/chara_theme/t1_p1_c1.html` or `layouts/chara_theme/t2_p1_c1.html` file as a Browser Source in OBS Studio
    - Use `layouts/chara_theme/t1_p1_c1.html` for the theme of the first character of the first player of Team 1, and `layouts/chara_theme/t2_p1_c1.html` for the theme of the first character of the first player of Team 2
    - Currently, only the first scoreboard in TSH is supported
1. Check the following boxes in your Browser Source properties: "Control audio via OBS", "Shutdown source when not visible", "Refresh browser when scene becomes active"

Example: A theme for Ryu in Street Fighter 6 would have the path `layouts/chara_theme/files/sf6/sound_Ryu_0.mp3`
