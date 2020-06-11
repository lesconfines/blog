FROM gitpod/workspace-full

USER gitpod

RUN sudo apt-get update \
 && sudo apt-get install -y \
    tool \
 && sudo rm -rf /var/lib/apt/lists/*

RUN sudo apt-get update
RUN sudo apt-get install -y zsh
RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh