# ====== CONFIG ======
IMAGE_NAME = sinasnp/cv-site
TAG = 0.0.6
CONTAINER_NAME = cv-site-cont
CERT_PATH = /etc/ssl/cloudflare/certificate.pem
KEY_PATH = /etc/ssl/cloudflare/private.key

# ====== COMMANDS ======

build:
	docker build -t $(IMAGE_NAME):$(TAG) .

run: stop
	docker run -d \
		-p 80:80 -p 443:443 \
		-v $(CERT_PATH):/etc/ssl/cloudflare/certificate.pem:ro \
		-v $(KEY_PATH):/etc/ssl/cloudflare/private.key:ro \
		--name $(CONTAINER_NAME) \
		$(IMAGE_NAME):$(TAG)

stop:
	-@docker stop $(CONTAINER_NAME) && docker rm $(CONTAINER_NAME)

logs:
	docker logs -f $(CONTAINER_NAME)

enter:
	docker exec -it $(CONTAINER_NAME) sh

rebuild: build run

