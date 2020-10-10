FROM python:3.7
ADD library_manager /app
WORKDIR /app
RUN pip install -r requirements.txt
CMD python manage.py runserver 8000