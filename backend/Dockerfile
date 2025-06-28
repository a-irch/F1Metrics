FROM python:3.12.3-slim

RUN pip install poetry

COPY . .

RUN poetry install --no-root --no-interaction

EXPOSE 8013

ENTRYPOINT ["poetry", "run", "uvicorn", "api.main:app", "--host", "0.0.0.0", "--port", "8013"]