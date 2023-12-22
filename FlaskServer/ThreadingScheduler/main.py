import os
import helper
import schedule
import time
import shutil
from datetime import datetime
import threading


def start_thread(func1,func2):
    thread1 = threading.Thread(target=func1)
    thread2 = threading.Thread(target=func2)
    thread1.start()
    thread2.start()


    
#change the audio files directory accordingly
audio_folder_path='C:\\Users\\Sarvesh M\\OneDrive\\Desktop\\CRON\\Audio'
#function to display all the audio files
def audio_task():
    try:
        for audio_user_folder in os.listdir(audio_folder_path):
                audio_user_folder_path = os.path.join(audio_folder_path, audio_user_folder)
                if os.path.isdir(audio_user_folder_path):
                    latest_submission = max(
                        os.listdir(audio_user_folder_path),
                        key=lambda x: os.path.getctime(os.path.join(audio_user_folder_path, x))
                    )
                    for submission in os.listdir(audio_user_folder_path):
                        print(submission)
    except Exception as e:
        print(f"An error occurred: {e}")


def audio_retain_latest_submission():
    try:
        for audio_user_folder in os.listdir(audio_folder_path):
            audio_user_folder_path = os.path.join(audio_folder_path, audio_user_folder)
            if os.path.isdir(audio_user_folder_path):
                latest_submission = max(
                    os.listdir(audio_user_folder_path),
                    key=lambda x: os.path.getctime(os.path.join(audio_user_folder_path, x))
                )
                for submission in os.listdir(audio_user_folder_path):
                    submission_path = os.path.join(audio_user_folder_path, submission)
                    if submission != latest_submission:
                        if os.path.isfile(submission_path):
                            os.remove(submission_path)
                        elif os.path.isdir(submission_path):
                            shutil.rmtree(submission_path)
        print("Latest submissions retained successfully.")
    except Exception as e:
        print(f"An error occurred: {e}")

#change the image directory accordingly  
image_folder_path = 'C:\\Users\\Sarvesh M\\OneDrive\\Desktop\\CRON\\Image'
#function to display all the image files
def image_task():
    try:
        for image_user_folder in os.listdir(image_folder_path):
            image_user_folder_path = os.path.join(image_folder_path, image_user_folder)
            if os.path.isdir(image_user_folder_path):
                latest_submission = max(
                    os.listdir(image_user_folder_path),
                    key=lambda x: os.path.getctime(os.path.join(image_user_folder_path, x))
                )
                for submission in os.listdir(image_user_folder_path):
                    print(submission)
    except Exception as e:
        print(f"An error occurred: {e}")


def image_retain_latest_submission():
    try:
        for image_user_folder in os.listdir(image_folder_path):
            image_user_folder_path = os.path.join(image_folder_path, image_user_folder)
            if os.path.isdir(image_user_folder_path):
                latest_submission = max(
                    os.listdir(image_user_folder_path),
                    key=lambda x: os.path.getctime(os.path.join(image_user_folder_path, x))
                )
                for submission in os.listdir(image_user_folder_path):
                    submission_path = os.path.join(image_user_folder_path, submission)
                    if submission != latest_submission:
                        if os.path.isfile(submission_path):
                            os.remove(submission_path)
                        elif os.path.isdir(submission_path):
                            shutil.rmtree(submission_path)
        print("Latest submissions retained successfully.")
    except Exception as e:
        print(f"An error occurred: {e}")

#schedule.every(1).hours.do(start_thread, audio_task,image_task)
schedule.every(1).seconds.do(start_thread, audio_retain_latest_submission,image_retain_latest_submission)
while True:
    schedule.run_pending()
    time.sleep(1)
    
    
    




