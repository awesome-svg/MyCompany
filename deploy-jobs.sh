#!/bin/bash
echo "🚀 Building Team Site (Isolated)..."

# 1. 生成全站静态文件
hexo clean
hexo generate

# 2. 【核心隔离】删除主博客特有的目录
rm -rf public/archives
rm -rf public/categories
rm -rf public/tags
rm -rf public/2023 public/2024 public/2025 # 删除年份归档
rm -rf public/about public/contact          # 删除主站的个人关于/联系页，避免冲突

# 3. 【页面提升】将 team 文件夹下的内容移动到根目录
# 这样访问 https://team.personyzh.cn/ 就是 team/index.html
# 访问 https://team.personyzh.cn/jobs/ 就是 team/jobs/index.html

if [ -d "public/team" ]; then
    # 将 team 目录下的所有文件移动到 public 根目录
    mv public/team/* public/
    # 删除空的 team 文件夹
    rmdir public/team
    echo "✅ Team pages moved to root."
else
    echo "⚠️ Warning: public/team directory not found!"
fi

# 4. 【可选】清理其他不需要的主站资源
# 比如主站特有的大图背景等，如果团队站不用，可以删掉节省空间
# rm -rf public/images/banner-main.jpg

echo "✅ Team Site Build Complete."
