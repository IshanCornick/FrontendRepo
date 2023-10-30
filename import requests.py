import requests
result = requests.get("http://0.0.0.0:8014/posts")
print(result.content)