FROM python:bullseye

WORKDIR /demo

COPY demo.py .

RUN apt update -y && apt install -y tcpdump

RUN pip install pymongo

CMD ["tail", "-f", "/dev/null"]
