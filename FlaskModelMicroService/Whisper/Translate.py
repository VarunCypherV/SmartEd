import os
import sys
import whisper
import argparse
import string

parser = argparse.ArgumentParser(description="Convert Speech To Text")

parser.add_argument("--language", "-l", help="Set language",
                    const="en", nargs="?", type=str)
parser.add_argument("--model", "-m", help="Select Model",
                    const="medium", nargs="?", type=str)
parser.add_argument("--path", "-p", help="Path to File")

args = parser.parse_args()

model = whisper.load_model(args.model)

result = model.transcribe(os.path.abspath(args.path), language=args.language, fp16=False )

raw_text = result["text"]

processed_text = raw_text.translate(str.maketrans('', '', string.punctuation)).lower()

print(processed_text)