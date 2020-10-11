FROM python:3.7
ENV PYTHONUNBUFFERED=1
ADD library_manager /app
WORKDIR /app
RUN pip install -r requirements.txt
ENTRYPOINT /app/docker-entrypoint.sh
