# sudo vim /etc/nginx/sites-available/groceries.bgeo.io
# sudo ln -s /etc/nginx/sites-available/groceries.bgeo.io /etc/nginx/sites-enabled/groceries.bgeo.io
# sudo systemctl restart nginx
server {
        listen 80;
        listen [::]:80;

        server_name groceries.bgeo.io;
        return 301 https://$server_name$request_uri;
}

server {

        listen 443 ssl http2;
        listen [::]:443 ssl http2;
        include snippets/ssl-bgeo.io.conf;
        include snippets/ssl-params.conf;

	server_name groceries.bgeo.io;

        root /var/www/groceries;

        index index.html index.htm index.nginx-debian.html;

        location / {
            try_files $uri$args $uri$args/ $uri $uri/ /index.html =404;
        }

        # letsencrypt well known
        location ~ /.well-known {
            allow all;
        }
}

erver {
        listen 80;
        listen [::]:80;

        server_name budget.bgeo.io;
        return 301 https://$server_name$request_uri;
}

server {

        listen 443 ssl http2;
        listen [::]:443 ssl http2;
        include snippets/ssl-bgeo.io.conf;
        include snippets/ssl-params.conf;

	server_name groceries.bgeo.io;

        root /var/www/groceries;

        index index.html index.htm index.nginx-debian.html;

        location / {
            try_files $uri$args $uri$args/ $uri $uri/ /index.html =404;
        }

        # letsencrypt well known
        location ~ /.well-known {
            allow all;
        }
}

