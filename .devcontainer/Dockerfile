ARG VARIANT
FROM node:${VARIANT}

ARG DEBIAN_FRONTEND=noninteractive

USER root

RUN apt update && apt install -y curl wget git zip unzip less zsh apt-transport-https ca-certificates gnupg \
    libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

# ----------------------------
# Oh my zsh
# ----------------------------
RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.2/zsh-in-docker.sh)" -- \
    -t robbyrussell \
    -p git -p node -p npm

ENV SHELL=/bin/zsh
# ----------------------------

# ----------------------------
# SSH
# ----------------------------
WORKDIR /root
RUN mkdir .ssh
RUN touch .ssh/config
RUN printf '\
Host github.com \n\
  IdentityFile ~/.ssh/id_ed25519 \n\
' > .ssh/config

RUN touch .ssh/id_ed25519
# ----------------------------
