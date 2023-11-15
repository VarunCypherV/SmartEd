# -*- coding: utf-8 -*-

!pip install git+https://github.com/openai/whisper.git
!sudo apt update && sudo apt install ffmpeg

!whisper --model=medium.en -f=txt "recording.wav"
!sed -i 's/\[[^][]*\]//g' recording.txt
!tr -d '[:punct:]' < recording.txt > temp.txt
!sed -i 's/.*/\L&/g' temp.txt
!tr '\n' ' ' < temp.txt > output.txt