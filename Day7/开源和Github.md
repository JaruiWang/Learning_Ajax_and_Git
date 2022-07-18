## 什么是开源
开源即开放源代码（Open source code）
代码是公开的
任何人都可以去查看，修改和使用开源代码。

常见的5种开源许可协议
1. BSD
2. Apache Licence 2.0
3. GPL(GNU General Public License)
- 具有传染性的一种开源协议，不允许修改后和衍生的代码作为闭源的商业软件发布和销售；
- 使用GPL的最著名的软件项目是Linux

4. GPL(GNU Lesser General Public License)

5. MIT(Massachusetts Institute of Technology,MIT)
麻省理工学院
- 是目前限制最少的协议，唯一的条件：在修改后的代码或者发行包种，必须包含原作者的许可信息；
- 使用MIT的软件项目有：jquery,Node.js

## 开源项目托管平台
专门用于免费存放开源项目源代码的网站，叫做开源项目托管平台。
目前世界上比较出名的开源项目托管平台主要有以下3个：
- Github(全球最牛的开源项目托管平台，没有之一)
- Gitlab(对代码私有性支持较好，因此企业用户较多)
- Gitee(又叫做码云，是国产的开源项目托管平台。访问速度快，纯中文界面，使用友好)

## Github上的远程仓库，有两种访问方式，分别是HTTPS和SSH。它们的区别是：
1. HTTPS：零配置；但是每次访问仓库时，需要重复输入Github的账号和密码才能访问成功；
2. SSH：需要进行额外的配置；但是配置成功后，每次访问仓库时，不需要重复输入Github的账号和密码。

## 使用Github
### 本地没有现成的Git仓库
1. 创建一个README.md文档，并写入初始内容为# project2
echo "# project2" >> README.md
2. 初始化本地Git仓库，并将文件的修改提交到本地的Git仓库种
git init
git add README.md
git commit -m "first commit"

3. 将本地仓库和远程仓库进行关联，并把远程仓库命名为origin
git branch -M main
git remote add origin https://github.com/JaruiWang/-.git
4. 将本地仓库中的内容推送到远程的origin仓库中。
git push -u origin main

### 本地有现成的Git仓库
1. 将本地仓库和远程仓库进行关联，并把远程仓库命名为origin
git remote add origin https://github.com/JaruiWang/-.git
git branch -M main
2. 将本地仓库中的内容推送到远程的origin仓库中。
git push -u origin main

### 修改文件后如何提交到Github的远程仓库
1. 先提交到本地仓库
 git commit -a -m "修改了readme"
2. 再提交到Github的远程仓库
    只需要输入 git push

## SSH key
SSH key的作用：实现本地仓库和Github之间免登录的加密数据传输
SSH key的好处：免登录身份认证，数据加密传输。
SSH key由两部分组成，分别是：
1. id_rsa(私钥文件，存放于客户端的电脑中即可)
2. id_rsa.pub(公钥文件，需要配置到Github中)

生成SSH key的步骤：
1. 选择任意一个目录打开Git Basj
2. 输入ssh-keygen -t rsa -b 4096 -C "wangzhaohua1993@126.com"
3. 连续敲击 3次 回车键， 在C:\Users\12723\.ssh目录下生成了id_rsa和id_rsa.pub。（注意不能删除）

## 将远程仓库克隆到本地
git clone 远程仓库的地址

## master主分支
master主分支：用来保存和记录整个项目已完成的功能代码。
因此不允许程序员直接在master分支上修改代码，因此这样做的风险太高，容易导致整个项目崩溃。

### 功能分支
功能分支是专门用来开发新功能的分支，它是临时从master主分支上分叉出来的，当新功能开发和测试完毕后，
最终需要合并到master主分支上。

### 查看分支
git branch
### 创建新分支
git branch 分支名字
### 切换到新分支
git checkout 分支名字

### 创建并且切换新分支
git checkout -b 分支名字
-b 表示创建一个新分支
checkout 表示切换到刚才创建的分支上
注意：创建新分支的时候要先切换到master主分支上面，基于master主分支进行复制。

### 合并分支
需要先切换到master主分支上，再使用git merge命令
git checkout master
在master分支上运行git merge命令，将login分支的代码合并到master分支上
git merge login

### 删除分支
git branch -d 分支名称

例如，删除login分支
git branch -d login

## 遇到冲突时的分支合并
需要先切换到master主分支上，再使用git merge命令
git checkout master
在master分支上运行git merge命令，将login分支的代码合并到master分支上
git merge login

会弹出提示 合并中有冲突了
需要我们手动打开文件修改冲突
修改完成后，输入
git add .
git commit -m "解决了分支合并冲突的问题"

## 将本地分支推送到远程仓库
如果是第一次将本地分支推送到远程仓库，需要运行如下的命令：
git push -u 远程仓库的别名 本地分支名称：远程分支名称
例如
git push -u origin payment:pay
如果希望远程分支的名称和本地分支名称保持一致，可以对命令进行简化：
git push -u origin payment
注意：远程仓库的别名一般就是origin，
远程分支名称是自己取的。

后续只需要使用git push进行推送就可以了。

### 查看远程仓库中所有的分支列表
git remote show 远程仓库名称