FROM python:3.7-alpine
ENV PYTHONUNBUFFERED=1
RUN mkdir /app
COPY library_manager/requirements.txt /app
WORKDIR /app
RUN pip install -r requirements.txt
ADD library_manager /app
RUN chmod +x /app/docker-entrypoint.sh
ENTRYPOINT /app/docker-entrypoint.sh