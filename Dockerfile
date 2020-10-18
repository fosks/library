FROM python:3.7-alpine
ENV PYTHONUNBUFFERED=1
ADD library_manager /app
WORKDIR /app
RUN pip install -r requirements.txt
RUN chmod +x /app/docker-entrypoint.sh
ENTRYPOINT /app/docker-entrypoint.sh