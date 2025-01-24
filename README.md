# mylecow
Mono repo for mylecow app

# Requirements

* docker-desktop or just docker for linux

# Setup local dev environment

## (Re)-create IDE

Run:
```
docker run --pull always -d --name=mylecowide -e SUDO_PASSWORD=abc -e TZ=America/Bogota -p 8443:8443 -p 5173:5173 -p 3000:3000 -v /var/run/docker.sock:/var/run/docker.sock -v mylecowide:/config --restart unless-stopped ksrarc/mylecow-ide
```

### First time manual setup

* Set git config
  ```
  git config --global user.name "<your name>"
  git config --global user.email "<your email>"
  ```
* Set up github cli
  ```
  gh auth login
  ```

## To delete IDE
Run:
```
docker rm -f mylecowide
```