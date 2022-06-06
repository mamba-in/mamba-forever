#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# pnpm run build

# # 进入生成的文件夹
# cd dist

# #创建.nojekyll 防止Github Pages build错误
# touch .nojekyll

# git init
# git add -A
# git commit -m 'deploy gh-pages'

# git push -f git@github.com:mamba-in/mamba-forever.git master:gh-pages

# cd -

function create_tag {
  echo '创建标签📍:'
  DATE=$(date +%Y/%m/%d) $(date +%H):$(date +%M);
  read -p "请输入标签名称:" TAG_NAME;
  read -p "请输入该标签的描述信息:" TAG_MESSAGE;
  git tag -a $TAG_NAME -m "📅Date:$DATE" -m "🔖Tag:$TAG_NAME" -m "🖋️Message:$TAG_MESSAGE";
  git push origin $TAG_NAME;
  printf "🗓️Date:$DATE \n 🔖Tag:$TAG_NAME \n 🖋️Message:$TAG_MESSAGE \n";
  echo '标签创建完成✅';
}

git add -A
git commit -m 'feat: update project template'
git push
create_tag;
echo '✨ deploy finished'
