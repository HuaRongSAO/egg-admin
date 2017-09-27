##################################################################
#
# 这是Dockerfile的配置文件 请先将他移动至 project目录下 并改名为Dockerfile
#
##################################################################

#选择node版本 使用 registry.docker-cn.com 加速
FROM registry.docker-cn.com/library/node:8.5

#创建容器内部 工作文件
RUN mkdir /src
#set app directory as default working directory
WORKDIR /src

COPY package.json /src/package.json
#设置阿里镜像
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org

#设置 工作空间
RUN cnpm install

#复制所有文件
COPY . /src

EXPOSE 7001

CMD npm run dev