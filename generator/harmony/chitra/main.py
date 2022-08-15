from transformers import pipeline
from chitra.serve import create_api

classifier = pipeline("sentiment-analysis")
cr_api = create_api(classifier, run=False, api_type="text-classification") # download the model -> default to distilbert-base-uncased-finetuned-sst-2-english