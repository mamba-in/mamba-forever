#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm run build

# 进入生成的文件夹
cd dist

#创建.nojekyll 防止Github Pages build错误
touch .nojekyll

git init
git add -A
git commit -m 'deploy gh-pages'

git push -f git@github.com:mamba-in/mamba-forever.git master:gh-pages

cd -

git add -A
git commit -m 'feat: update project template'
git push
echo '✨ deploy finished'
