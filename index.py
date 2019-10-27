import requests
# If you are using a Jupyter notebook, uncomment the following line.
# %matplotlib inline
#import matplotlib.pyplot as plt
import json
from PIL import Image
from io import BytesIO
import os
import pprint

# Add your Computer Vision subscription key and endpoint to your environment variables.
if 'COMPUTER_VISION_SUBSCRIPTION_KEY' in os.environ:
    subscription_key = os.environ['COMPUTER_VISION_SUBSCRIPTION_KEY']
else:
    print("\nSet the COMPUTER_VISION_SUBSCRIPTION_KEY environment variable.\n**Restart your shell or IDE for changes to take effect.**")
    sys.exit()

if 'COMPUTER_VISION_ENDPOINT' in os.environ:
    endpoint = os.environ['COMPUTER_VISION_ENDPOINT']

analyze_url = endpoint + "vision/v2.1/analyze"

# Set image_url to the URL of an image that you want to analyze. jpgs work
# image_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/" + \
#     "Broadway_and_Times_Square_by_night.jpg/450px-Broadway_and_Times_Square_by_night.jpg"

image_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0jeS7tnaHQQF7RW9j3ZAypmMsDS_VPKOh3UIvpkBeJsvbboA6'

headers = {'Ocp-Apim-Subscription-Key': subscription_key}
params = {'visualFeatures': 'Categories,Description,Tags'}
data = {'url': image_url}
response = requests.post(analyze_url, headers=headers,
                         params=params, json=data)
response.raise_for_status()

# The 'analysis' object contains various fields that describe the image. The most
# relevant caption for the image is obtained from the 'description' property.
analysis = response.json()
pp = pprint.PrettyPrinter()
pp.pprint(json.dumps(response.json()))

image_caption = analysis["description"]["captions"][0]["text"].capitalize()

# Display the image and overlay it with the caption.
image = Image.open(BytesIO(requests.get(image_url).content))
# plt.imshow(image)
# plt.axis("off")
# _ = plt.title(image_caption, size="x-large", y=-0.1)
# plt.show()